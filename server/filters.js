// Filter by date and till today
export const filterExpirationByDate = (people, tickets_data, date) => {
  return people
    .map((item) => {
      let monthsToAdd = item.ticket_type === 1 ? 1 : item.ticket_type === 2 ? 6 : 12;
      return {
        id: item.id,
        name: item.name,
        buy_date: item.buy_date,
        ticket_type: item.ticket_type,
        expiry_date: new Date(
          new Date(item.buy_date).setMonth(
            new Date(item.buy_date).getMonth() + monthsToAdd
          )
        ),
        remaining_tickets:
          tickets_data.find((ticket) => ticket.id === item.ticket_type).max_tickets -
          Math.floor(
            (new Date() - new Date(item.buy_date)) / (1000 * 3600 * 24)
          ),
      };
    })
    .filter((item) => {
      return item.expiry_date >= date && item.remaining_tickets > 0;
    });
};
