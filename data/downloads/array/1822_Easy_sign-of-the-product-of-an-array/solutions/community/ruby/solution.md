# 1 Liner using reduce method

**Author:** SayamBar
**Votes:** 4
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3475980/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3475980/)

---

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def array_sign(nums)
    nums.reduce(:*) <=> 0
end
```