# 1-Line Typescript Solution

**Author:** wentland
**Votes:** 1
**Link:** [https://leetcode.com/problems/nested-array-generator/solutions/3924305/](https://leetcode.com/problems/nested-array-generator/solutions/3924305/)

---

# Code
```
type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  for (const x of arr) Array.isArray(x) ? yield* inorderTraversal(x) : yield x;
}

```