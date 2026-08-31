# [JavaScript] 2745. Construct the Longest New String

**Author:** pgmreddy
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-the-longest-new-string/solutions/3681222/](https://leetcode.com/problems/construct-the-longest-new-string/solutions/3681222/)

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

1
```
var longestString = function (x, y, z) {
  if (x === y) return (x + y + z) * 2
  let minxy = Math.min(x, y)
  return (minxy + minxy + 1 + z) * 2
}
```

2
```
var longestString = function (x, y, z) {
  let sum = 0
  if (x === y) {
    sum = x * 2
  } else if (x > y) {
    sum = 2 * y + 1
  } else {
    sum = 2 * x + 1
  }
  return (sum + z) * 2
}
```

3
```
var longestString = function (X, Y, Z) {
  function aa(x, y, z) {
    let minxy = Math.min(x, y)
    x -= minxy
    y -= minxy

    let s = ''
    while (minxy--) {
      s += 'BBAA'
    }

    if (x) {
      s = 'AA' + s
      x--
      while (z) {
        s = 'AB' + s
        z--
      }
    } else if (y) {
      s += 'BB'
      y--
      while (z) {
        s += 'AB'
        z--
      }
    } else if (!s) {
      while (z) {
        s += 'AB'
        z--
      }
    }
    return s
  }

  function bb(x, y, z) {
    let minxy = Math.min(x, y)

    x -= minxy
    y -= minxy

    let s = ''
    while (minxy--) {
      s += 'AABB'
    }

    if (x) {
      while (z) {
        s = 'AB' + s
        z--
      }
      s += 'AA'
      x--
    } else if (y) {
      s = 'BB' + s
      y--
      while (z) {
        s += 'AB'
        z--
      }
    } else {
      while (z) {
        s += 'AB'
        z--
      }
    }
    return s
  }

  let a = aa(X, Y, Z)
  let b = bb(X, Y, Z)

  return Math.max(a.length, b.length)
}
```
