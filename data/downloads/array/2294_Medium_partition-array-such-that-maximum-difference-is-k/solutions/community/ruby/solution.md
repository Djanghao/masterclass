# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/3141390/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/3141390/)

---

```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def partition_array(nums, k)
    nums.sort!
    partitions, partition_room = 1, k
    
    (1...nums.size).each do |i|
        diff = nums[i] - nums[i-1]
        if diff > partition_room # need new partition
            partition_room = k
            partitions += 1
        else
            partition_room -= diff
        end
    end
    
    partitions
end
```