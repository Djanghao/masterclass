# [JavaScript] 553. Optimal Division

**Author:** pgmreddy
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-division/solutions/4372130/](https://leetcode.com/problems/optimal-division/solutions/4372130/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

Look at Input & Expected output

```
Input            Expected
[1]              "1"
[1,2]            "1/2"
[1,2,3]          "1/(2/3)"
[1,2,3,4]        "1/(2/3/4)"
[1,2,3,4,5]      "1/(2/3/4/5)"
[1,2,3,4,5,6]    "1/(2/3/4/5/6)"
[1,2,3,4,5,6,7]  "1/(2/3/4/5/6/7)"
```

Now we can forumate the answer
Below is code for same

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

---

```
var optimalDivision = function (a) {
  const n = a.length
  switch (n) {
    case 1:
      return a[0] + ''
    case 2:
      return a[0] + '/' + a[1]
    default: {
      let s = a[0] + '/('
      for (let i = 1; i < n - 1; i++) {
        s += '' + a[i] + '/'
      }
      s += a[n - 1] + ')'
      return s
    }
  }
}
```

---
