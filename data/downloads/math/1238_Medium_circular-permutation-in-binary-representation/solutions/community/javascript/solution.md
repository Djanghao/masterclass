# [JavaScript] 1238. Circular Permutation in Binary Representation

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/3228976/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/3228976/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
\r
1\r
```\r
/*\r
    n n^(n/2)\r
    0\r
    0    1\r
    1    0\r
   10   11\r
   11   10\r
  100  110\r
  101  111\r
  110  101\r
  111  100\r
*/\r
var grayCode = function (n) {\r
    let a = [];\r
    for (let i = 0; i < 2 ** n; i++) {\r
        a.push(i ^ (i / 2));\r
    }\r
    return a;\r
};\r
var circularPermutation = function (n, start) {\r
    let a = grayCode(n);\r
    let i = a.indexOf(start);\r
    return [\r
        start,\r
        ...a.slice(i + 1),\r
        ...a.slice(0, i), //\r
    ];\r
};\r
```\r
\r
2\r
```\r
var grayCodeStartingWith = function (n, start) {\r
    let a = [];\r
    for (let i = 0; i < 2 ** n; i++) {\r
        a.push(i ^ (i / 2) ^ start);\r
    }\r
    return a;\r
};\r
var circularPermutation = function (n, start) {\r
    let a = grayCodeStartingWith(n, start);\r
    return a;\r
};\r
```\r
