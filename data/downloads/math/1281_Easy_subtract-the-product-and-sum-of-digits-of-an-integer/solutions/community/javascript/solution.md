# [Javascript]  Efficient and Easy to Read -- 44ms, 98%

**Author:** lochness
**Votes:** 34
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/450728/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/450728/)

---

```
var subtractProductAndSum = function(n) {
    const digits = Array.from(String(n), Number)
    const sum = digits.reduce((a,b) => a+b)
    const product = digits.reduce((a,b) => a*b)
    return product-sum
};
```

[Array.from -- MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)