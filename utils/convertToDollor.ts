let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "code",
});

export const convertToDollor = (price: number) => {
  return USDollar.format(price).replace("USD", "").trim();
};
