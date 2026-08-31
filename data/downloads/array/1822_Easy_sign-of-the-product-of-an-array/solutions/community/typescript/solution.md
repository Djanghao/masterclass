# 1 line Math.sign

**Author:** wood0761
**Votes:** 3
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3478763/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3478763/)

---

# Code
```
function arraySign(nums: number[]): number {
    return nums.reduce((sign, cur) => sign * Math.sign(cur), 1);
};
```