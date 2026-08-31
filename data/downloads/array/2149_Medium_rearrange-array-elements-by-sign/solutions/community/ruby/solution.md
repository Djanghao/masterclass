# Easy to Understand Ruby Solution || Using #select

**Author:** mosesngan
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4723643/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4723643/)

---

```
# @param {Integer[]} nums
# @return {Integer[]}
def rearrange_array(nums)
    positives = nums.select(&:positive?)
    negatives = nums.select(&:negative?)
    arr = []
    positives.each_with_index do |num, i|
        arr.push(num, negatives[i])
    end
    arr
end
```