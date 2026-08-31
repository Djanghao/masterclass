# Ruby | Easy | Swap Sort

**Author:** amaratasia
**Votes:** 3
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/848263/](https://leetcode.com/problems/first-missing-positive/solutions/848263/)

---

```
# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
    i = 0
    return 1 if nums.size == 0
    
    return nums[0] == 1 ? 2 : 1 if nums.size == 1
    total_size = nums.size
    
    while(i < total_size) 
        if(nums[i] < 1 || nums[i] > total_size || nums[i] == i+1 ||
           nums[i] == nums[nums[i]-1] )
            i+=1
            next
        else
           curr = nums[i]
            nums[i] = nums[curr-1]
            nums[curr-1] = curr
        end
    end
    for i in 0..total_size-1
        return i+1 if(nums[i]!=i+1)
    end
    nums.size+1
end