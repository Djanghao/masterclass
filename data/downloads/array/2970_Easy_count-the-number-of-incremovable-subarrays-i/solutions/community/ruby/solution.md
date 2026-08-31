# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/5080397/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/5080397/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def incremovable_subarray_count(nums)
    if incrementing? nums, Set.new
        return ( (nums.size + 1)*(nums.size) )/2
    end

    # Generate all possible incremovable subarrays by
    # creating all possible subarrays and skipping
    # the subarrays while checking if they are incrementing.
    answer = 0
    i = 0
    while i < nums.size
        set = Set.new()
        j = i
        last_incrementing = false
        while j < nums.size
            set << j
            
            if last_incrementing || ( incrementing? nums, set )
                answer += 1
                last_incrementing = true
            end
            j += 1
        end
        i += 1
    end


    answer 
end



def incrementing? arr, skip_indexes
    prev_ele = nil
    i = 0
    while i < arr.size
        if !(skip_indexes.include? i)
            if prev_ele == nil
                prev_ele = arr[i]
            else
                if prev_ele >= arr[i]
                    return false
                else
                    prev_ele = arr[i]
                end
            end
            
        end
        i += 1
    end

    true
end
```