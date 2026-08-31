# Typescript solution

**Author:** nguystella
**Votes:** 0
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/5850242/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/5850242/)

---


# Code
```typescript []
function filterRestaurants(
  restaurants: number[][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number,
): number[] {
  return restaurants
    .filter(
      (res) =>
        (veganFriendly ? res[2] : true) &&
        res[3] <= maxPrice &&
        res[4] <= maxDistance,
    )
    .sort((a, b) => {
      if (a[1] === b[1]) return b[0] - a[0];
      return b[1] - a[1];
    })
    .map((res) => res[0]);
}
```