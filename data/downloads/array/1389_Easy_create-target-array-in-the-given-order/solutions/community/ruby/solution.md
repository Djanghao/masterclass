# Ruby Easy Solution

**Author:** coconutman19
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1049058/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1049058/)

---

```
def create_target_array(nums, index)
    result = []
    index.each_with_index {|idx, i| result.insert(idx, nums[i])}
    result
end
```