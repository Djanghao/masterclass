# Ruby, two ways: Hash, Binary Search

**Author:** pineapplesonpizza
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3421040/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3421040/)

---

# Hash
```
def is_majority_element(nums, target)
    hash = Hash.new(0)
    nums.each { |num| num == target ? hash[num] += 1 : next } # record count of times target in nums
    hash[target] > (nums.length/2) # return whether count exceeds 'majority'
end
```
# Binary Search
```
def is_majority_element(nums, target)
    # binary search
    low, high = 0, nums.length-1
    count = 0

    while low < high do 
        mid = low + (high-low)/2

        if nums[mid] == target # find mid
            count += 1

            i = mid-1
            while i >= 0 do # count all occurrences on left
                if nums[i] == target
                    count += 1
                else
                    break
                end
                i -= 1
            end

            j = mid+1
            while j < nums.length do # count all occurrences on right
                if nums[j] == target
                    count += 1
                else
                    break
                end
                j += 1
            end

            return count > nums.length/2 # check if greater than majority 

        elsif nums[mid] < target 
            low = mid + 1
        else
            high = mid - 1
        end
    end

    false # return bc none found
end
```