# Two Pointer

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/4964792/](https://leetcode.com/problems/longest-alternating-subarray/solutions/4964792/)

---

O(n^2), O(1)
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def alternating_subarray(nums)
    l = 0
    r = 1
    max = -1
    
    while l < nums.size and nums[r]
        if (nums[l] - nums[r]).abs == 1
            length = -1
            if nums[r] > nums[l] and nums[l] +1 == nums[r]
                low_num = nums[l]
                high_num = nums[r]
                expected_next_num = low_num
                length = 2
            end

            r+= 1
            while nums[r] and nums[r] == expected_next_num
                length += 1
                if expected_next_num == high_num
                    expected_next_num = low_num
                else
                    expected_next_num = high_num
                end
                r += 1
            end
                
            max = [max, length].max
            
        end

        l += 1
        r = l + 1
    end
    
    max
end
```