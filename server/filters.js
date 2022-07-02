// Filter by date and till today
export const filterExpirationByDate = (people, date) => {
  return people
    .map((item) => {
      let monthsToAdd =
        item.type === "mensual" ? 1 : item.type === "semestral" ? 6 : 12;
      return {
        id: item.id,
        name: item.name,
        buy_date: item.buy_date,
        type: item.type,
        expiry_date: new Date(
          new Date(item.buy_date).setMonth(
            new Date(item.buy_date).getMonth() + monthsToAdd
          )
        ),
      };
    })
    .filter((item) => {
      return item.expiry_date <= new Date() && item.expiry_date >= date;
    });
};
