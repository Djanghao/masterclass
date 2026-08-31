# Ruby; Binary Search

**Author:** pineapplesonpizza
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/3855916/](https://leetcode.com/problems/two-sum-less-than-k/solutions/3855916/)

---

# Intuition
Since we want to find max sum of two elements under the k constraint, we need an outer loop that iterates through each sorted num, then we want to efficently find the max sum through Binary Search algorithm; whenever we find a sum that is within our constraint update the result.

# Approach
Sort nums and create first loop, create an inner loop for the binary search starting i+1.  

# Complexity
- Time complexity: O(NlogN) max N length for the linear scan O(N) in first loop * O(logN) for binary search.

- Space complexity: O(logN) for the built-in sort function for N nums.

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def two_sum_less_than_k(nums, k)
    nums.sort!
    res = -1
    i = 0
    for i in i...nums.length do 
      left, right = i+1, nums.length-1
      
      while left <= right do 
        mid = left + (right-left) / 2
        sum = nums[i] + nums[mid]

        if sum < k
          res = [res, sum].max
          left = mid + 1
        else
          right = mid - 1
        end
      end
    end

    res
end
```