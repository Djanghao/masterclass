# ruby 1-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4280723/](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4280723/)

---

```
def maximum_sum(nums) =

  (1..nums.size).map{|i,s=0| (1..).sum{ s += nums[i*_1*_1-1] } rescue s }.max
```