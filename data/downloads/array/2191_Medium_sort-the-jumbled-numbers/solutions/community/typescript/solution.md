# [Typescript] Pure functional programming solution

**Author:** minhtu1708
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5529238/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5529238/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

First, I'm thinking about using a mapping to transform the array into an object that includes both the mapped values and their indices. After that, I'll sort the array and remap the `nums` array.


# Complexity
- Time complexity:$$ O(NLogN) $$ for sort function
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const sortJumbled = (mapping: number[], nums: number[]): number[] =>
  nums
    .map((num, index) => ({
      original: num,
      mapped: parseInt(
        num
          .toString()
          .split("")
          .map((digit) => mapping[parseInt(digit)].toString())
          .join(""),
        10
      ),
      index,
    }))
    .sort((a, b) => a.mapped - b.mapped || a.index - b.index)
    .map(({ original }) => original);
```