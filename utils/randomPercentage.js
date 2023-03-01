function randomPercentage() {
  // Rastgele yüzde değeri üretin
  const percentage = Math.random() * 4.99 + 0.01;
  // Yönü belirleyin (+ veya -)
  const sign = Math.random() < 0.5 ? -1 : 1;
  // Yüzde artış veya azalış değerini hesaplayın
  const value = sign * percentage;
  // Sonucu geri döndürün
  return value;
}


setInterval(updateCurrencies, 60000); // Her dakika çalıştır
