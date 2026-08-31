# Simple Solution O(n*2):O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/4848481/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/4848481/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_sum(nums)
    
    max_dig_at_index = {}
    nums.each_with_index do |num, index|
        max_dig_at_index[index] = num.digits.max
    end

    max = -1
    i = 0
    while i < nums.size
        j = i+1
        while nums[j] and j < nums.size
            if max_dig_at_index[i] == max_dig_at_index[j]
                max = [max, nums[i] + nums[j] ].max
            end 
            j += 1
        end
        i += 1
    end
    
    max
end
```