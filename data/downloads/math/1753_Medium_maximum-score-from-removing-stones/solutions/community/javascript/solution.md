# [JavaScript] 1753. Maximum Score From Removing Stones

**Author:** pgmreddy
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/3797261/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/3797261/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```
var maximumScore = function (x, y, z) {
  // sort ascending
  [x, y, z] = [x, y, z].sort((a, b) => a - b);

  // make   z equal to y     by pairing with x
  // equally distribute x    to y & z
  // take min of remaining y & z

  let s = 0
  let extra = z - y
  if (x >= extra) {
    s += extra
    z -= extra
    x -= extra
  } else {
    s += x
    z -= x
    x -= x
  }

  if (x) {
    if (x % 2 === 0) {
      y -= x / 2
      z -= x / 2
      s += x
      x -= x
    } else {
      z -= 1
      x -= 1
      s += 1

      y -= x / 2
      z -= x / 2
      s += x
      x -= x
    }
  }

  s += Math.min(y, z)
  return s
};
```

---

1 Sort all, ascending
2 if sum of x&y is less than z, it is answer
3 else half of sum of all, decimals removed, is answer

O(1)

```
var maximumScore = function (x, y, z) {
  [x, y, z] = [x, y, z].sort((a, b) => a - b);

  if ((x + y) <= z) {
    return x + y
  }
  return Math.trunc((x + y + z) / 2)
}
```
