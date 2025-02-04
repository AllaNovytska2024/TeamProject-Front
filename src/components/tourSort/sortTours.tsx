interface Tour {
  price: string;
  rating: number;
}

export type SortCriteria =
  | "rating_desc"
  | "rating_asc"
  | "price_desc"
  | "price_asc";

export const sortTours = (tours: Tour[], criteria: SortCriteria): Tour[] => {
  return [...tours].sort((a, b) => {
    switch (criteria) {
      case "rating_desc":
        return b.rating - a.rating;
      case "rating_asc":
        return a.rating - b.rating;
      case "price_desc":
        return (
          parseInt(b.price.replace(/\s+/g, "")) -
          parseInt(a.price.replace(/\s+/g, ""))
        ); // Цена по убыванию
      case "price_asc":
        return (
          parseInt(a.price.replace(/\s+/g, "")) -
          parseInt(b.price.replace(/\s+/g, ""))
        ); // Цена по возрастанию
      default:
        return 0;
    }
  });
};
