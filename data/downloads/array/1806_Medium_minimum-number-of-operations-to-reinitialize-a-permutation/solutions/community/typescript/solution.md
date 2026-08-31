# TypeScript solution - runtime beats 100%, memory beats 100%

**Author:** mironovahl
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/4456751/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/4456751/)

---


# Code
```
function reinitializePermutation(n: number): number {
  const initialPerm = Array.from(Array(n).keys())

  let perm = initialPerm

  const mutate = () => {
    let arr = []

    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        arr.push(perm[i / 2])
      } else {
        arr.push(perm[n / 2 + (i - 1) / 2])
      }
    }

    perm = arr
    return arr
  }

  let count = 1

  while (mutate().join(',') !== initialPerm.join(',')) {
    count++
  }

  return count
};
```