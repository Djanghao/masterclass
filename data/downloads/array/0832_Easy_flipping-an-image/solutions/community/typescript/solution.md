# Typescript one liner solution beats 100%

**Author:** sdarnadeem
**Votes:** 1
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/5134131/](https://leetcode.com/problems/flipping-an-image/solutions/5134131/)

---


# Approach
- We can use a nested loop structure or nested map functions to iterate over each row and each element within the row.
- For each row, we reverse the elements using the reverse() function.
- Then, for each element in the reversed row, we check if it's 0 or 1 and invert it accordingly.

# Complexity
- Time complexity:
O(n * m)

- Space complexity:
O(1)

# Code
```
function flipAndInvertImage(image: number[][]): number[][] {
    return image.map(i => i.reverse().map(i => i === 0 ? 1 : 0))
};
```