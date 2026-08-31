# [JavaScript] 2780. Minimum Index of a Valid Split

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771906/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771906/)

---

- Q1 - https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3771965/javascript-2778-sum-of-squares-of-special-elements/
- Q2 - https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3773661/javascript-2779-maximum-beauty-of-an-array-after-applying-operation/
- Q3 - see below

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

```
From left to right, move index from 0 to n-1
  count left array maxfreq count
    if 2*above > left array length
  count right array maxfreq count
    if 2*above > right array length

  if both above conditions are good, we found that index
```

```
f = frequency
maxf = max frequency
maxfe = max frequency element

lf = left subarray frequency
rf = right subarray frequency

n = number of elements in array
ln = number of elements in left subarray
rn = number of elements in right subarray
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```
var minimumIndex = function (a) {
  let n = a.length

  let f = {}
  let maxf, maxfe
  for (let e of a) {
    f[e] = (f[e] || 0) + 1
    if (
      maxf === undefined || //
      f[e] > maxf
    ) {
      maxf = f[e]
      maxfe = e
    }
  }

  let an = -1

  let lf = 0
  let rf = maxf
  let ln = 0
  let rn = n
  a.some((e, i) => {
    ln++
    rn--
    if (e === maxfe) {
      lf++
      rf--
      if (lf * 2 > ln && rf * 2 > rn) {
        an = i
        return true
      }
    }
  })

  return an
}
```
