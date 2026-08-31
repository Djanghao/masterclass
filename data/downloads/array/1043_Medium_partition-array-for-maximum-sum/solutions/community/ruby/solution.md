# Ruby solution

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4673470/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4673470/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer}
def max_sum_after_partitioning(arr, k)
    n = arr.length
    dp = Array.new(n)
    dp[0] = arr[0]
    (1...n).each do |i|
        dp[i] = best_answer(arr, dp, i, k)
    end
    dp[n-1]
end

def best_answer(arr, dp, index, k)
    return dp[index-1] + arr[index] if k == 1
    max_element = arr[index]
    max_answer = dp[index-1] + arr[index]
    (2..k).each do |i|
        break if index-i+1 < 0
        max_element = [max_element, arr[index-i+1]].max
        if index-i+1 == 0
            return (index+1) * max_element
        end
        max_answer = [max_answer, dp[index-i] + i * max_element].max
    end
    max_answer
end
```