const Currency = require('../models/currency');

async function calculateChanges() {
  // Tüm para birimlerini veritabanından çek
  const currencies = await Currency.find();

  // Her bir para birimi için rastgele bir artış/düşüş yüzdesi belirle
  currencies.forEach(currency => {
    const percentageChange = randomPercentage();
    const newValue = currency.value * (1 + percentageChange / 100);
    currency.value = newValue.toFixed(2);
    currency.percentage = percentageChange.toFixed(2);
    currency.save();
  });

  // Son 24 saatteki artış/düşüş oranlarını hesapla
  const twentyFourHoursAgo = new Date();
  twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);

  const currencies24HoursAgo = await Currency.find({ timestamp: { $lt: twentyFourHoursAgo } });
  const currenciesNow = await Currency.find();

  const changes = {};

  currenciesNow.forEach(currencyNow => {
    const currency24HoursAgo = currencies24HoursAgo.find(currency => currency.name === currencyNow.name);

    if (currency24HoursAgo) {
      const percentageChange = ((currencyNow.value / currency24HoursAgo.value) - 1) * 100;
      changes[currencyNow.name] = percentageChange.toFixed(2);
    } else {
      changes[currencyNow.name] = 0;
    }
  });

  return changes;
}

module.exports = calculateChanges;
