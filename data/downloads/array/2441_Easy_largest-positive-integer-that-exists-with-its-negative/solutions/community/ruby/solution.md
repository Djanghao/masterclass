# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/3133686/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/3133686/)

---

```
# @param {Integer[]} nums
# @return {Integer}
def find_max_k(nums)
    set = Set.new
    max = -1
    
    nums.each do |num|
        max = [max, num.abs].max if set.include?(-1*num)
        set.add(num)
    end
    
    max
end
```