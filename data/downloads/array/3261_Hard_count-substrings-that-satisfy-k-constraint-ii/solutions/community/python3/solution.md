# O(N) - Sliding Window

**Author:** vijaykatta3094
**Votes:** 34
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5653148/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5653148/)

---


## Approach
<!-- Describe your approach to solving the problem. -->
Use sliding window to find maximum windows for right index and left index seperately. Use that to calculate the results. Two cases within each query
For each right boundary
1. Leftmost falls within the window
2. Leftmost falls outside

## Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```
class Solution:
    def countKConstraintSubstrings(self, s: str, k: int, queries: List[List[int]]) -> List[int]:
        n = len(s)
        left_to_right = [0] * n
        right_to_left = [0] * n

        # For each right, find the minimum left
        left = 0
        counts = Counter()
        for right in range(n):
            counts[s[right]] += 1
            while counts['0'] > k and counts['1'] > k:
                counts[s[left]] -= 1
                left += 1
            right_to_left[right] = left

        # For each left, find the maximum right
        right = n - 1
        counts = Counter()
        for left in reversed(range(n)):
            counts[s[left]] += 1
            while counts['0'] > k and counts['1'] > k:
                counts[s[right]] -= 1
                right -= 1
            left_to_right[left] = right

        # For the right indexes that has left within the query bounds, all the substrings count
        # For the right indexes that has left outside the query bounds, only substrings within the bounds will count
        # So, seperate the cases for each query
        
        pref_sum = [0] + list(accumulate([(right - left + 1) for right, left in enumerate(right_to_left)]))
        result = []
        for left_bound, right_bound in queries:
            middle = min(right_bound, left_to_right[left_bound])
            length = middle - left_bound + 1
            curr = length * (length + 1) // 2
            curr += pref_sum[right_bound + 1] - pref_sum[middle + 1] # where left is within, so all the substrings count
            result.append(curr)
        return result
```