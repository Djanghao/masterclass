# Easy O(N) solution with O(1) space

**Author:** new_bee
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/4123943/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/4123943/)

---

# Intuition
Given the array is sorted so all the repeated occurings of a number will be lying adjacent to each other. We can use this to save extra space required to store occurences of an element

# Approach
We keep a pointer to valid index `idx` starting from 1. `idx` is incremented when we encounter a valid element (having count <= 2). `count` represents number of occurences of an element. Since array is sorted and duplicates of a number will lie next to each other, we can reset count when we find a new number (Condition - `nums[i] != nums[i-1]`)

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    idx, n, count = 1, nums.size, 1
    (1..n-1).each do |i|
        if nums[i] != nums[i-1]
            count = 0 # reset count if neighbour elements are different
        end
        count += 1
        nums[idx] = nums[i]
        if count > 2
            # do not update idx
        else
            idx += 1
        end
    end
    idx
end
```