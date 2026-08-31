# Simple typescript solution beats 95%

**Author:** sdarnadeem
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/5251018/](https://leetcode.com/problems/merge-similar-items/solutions/5251018/)

---

# Intuition
The problem is about merging two lists of items where each item has a value and a weight, and the goal is to sum the weights for items with the same value and return a sorted list by value. The given solution leverages an array to accumulate weights by value and then constructs the final sorted list from the array.

# Approach
- Initialize an array (map): This array is used to store the sum of weights indexed by the item's value.
- Iterate through items1 and items2: For each item in both lists, update the array (map) by adding the item's weight to the existing weight at the index corresponding to the item's value.
- Convert the array to the final result: Transform the array into a list of [value, weight] pairs, filter out any undefined entries, and sort the result by the item's value.

# Complexity
- Time complexity:
O(V+Ulog\u2061U)
Where U is the number of Unique values and V is the number of Values

- Space complexity:
O(V+U)
Where V is the number of Values and U is the number of unique values

# Code
```
function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    const map = [];

    items1.forEach(([value, weight]) => map[value] = (map[value] || 0) + weight );
    items2.forEach(([value, weight]) => map[value] = (map[value] || 0) + weight );

    return Object.entries(map).map(([value, weight]) => [+value, weight]).sort((a, b) => a[0] - b[0])

};
```