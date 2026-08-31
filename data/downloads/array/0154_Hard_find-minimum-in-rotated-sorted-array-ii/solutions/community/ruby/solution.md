# Simple Binary Search Solution - Ruby - Beats 100% Time

**Author:** hydras15
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/5972561/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/5972561/)

---

# Intuition
My intutition was to approach this as a binary search. The brute force method I would have used would take far too long on larger datasets, so a binary search was the desired algorithm. 
# Approach
It's a straightforward binary search, once you get past all the constraints and verbiage. We do what we usually do, create pointers (in this case high and low, but left and right are as valid), and then start to iterate through the array after making a mid, seeing if the left is less than the mid, or the right is higher than the mid, in order to see which section is sorted. If we can't find it, then we return false, else we return true. 

# Complexity
- O(logn)

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def find_min(nums)
  low, high = 0, nums.size - 1 # set the low and high pointers

  while low < high # while our low index is less than the high one 
    mid = low + (high - low) / 2 # find the mid index
    if nums[mid] > nums[high] # if the mid element is greater than the high element, the minimum must be in the right half
      low = mid + 1 # move the low pointer to mid + 1
    elsif nums[mid] < nums[high] # if the mid element is less than the high element, the minimum must be in the left half
      high = mid # move the high pointer to mid
    else
      high -= 1 # else we decrement the high pointer to skip duplicates
    end
  end

  nums[low]
end
```