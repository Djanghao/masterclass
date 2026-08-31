# Beats 100% Ruby solution for pivot or middle index problem

**Author:** dlamichhane
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/5959643/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/5959643/)

---

# Complexity
- Time complexity: O(n)

- Space complexity:O(1)

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def find_middle_index(nums)
    nums_size = nums.length
    i = 0
    pivot_index = -1
    while i < nums_size do
        left_sum= i == 0 ? 0 : nums[0..i-1].sum
        right_sum = nums[i+1..-1].sum

        if left_sum == right_sum
            pivot_index = i
            break
        end
        i += 1
    end
    pivot_index
end
```