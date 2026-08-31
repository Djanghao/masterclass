# Simple Solution

**Author:** chanshiyucx
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/5514329/](https://leetcode.com/problems/sort-the-people/solutions/5514329/)

---

# Intuition

The problem is to sort an array of names based on their corresponding heights in descending order. The goal is to return the names sorted according to the heights.

# Approach

Below is the step-by-step breakdown of the approach:

1. Initialize Indices Array:

   - Create an array of indices representing the positions of the elements in the `heights` array.

2. Sort Indices Based on Heights:

   - Sort the indices array based on the corresponding heights in descending order. This is achieved by using a custom comparator function in the `sort` method, which compares the heights at the respective indices.

3. Map Sorted Indices to Names:

   - Create a new array of names by mapping the sorted indices to the original `names` array.

4. Return the Sorted Names:
   - Return the array of names sorted according to the heights.

# Code
```
function sortPeople(names: string[], heights: number[]): string[] {
  let indices = Array.from({ length: heights.length }, (_, i) => i)
  indices = indices.sort((a, b) => heights[b] - heights[a])
  return indices.map((i) => names[i])
}
```