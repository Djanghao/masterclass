# [JavaScript] 2438. Range Product Queries of Powers

**Author:** pgmreddy
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solutions/4154180/](https://leetcode.com/problems/range-product-queries-of-powers/solutions/4154180/)

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

---

```
var productQueries = function (n, qs) {
  const mod = 10 ** 9 + 7;

  let nBinary = n.toString(2).split("").reverse();

  let sum = 0;
  let prod = 1;
  let powers = [];
  let prefixProd = [];

  for (let i = 0; i < nBinary.length; i++) {
    if (nBinary[i] === "0") {
      prod *= 2;
      continue;
    }
    powers.push(prod);
    if (!prefixProd.length) prefixProd.push(prod);
    else prefixProd.push(prefixProd.at(-1) * prod);
    prod *= 2;
    sum += prod;
    if (sum > n) break;
  }

  let ans = [];
  for (let [sum, e] of qs) {
    ans.push((prefixProd[e] / (prefixProd[sum - 1] || 1)) % mod);
  }
  return ans;
};
```

---
