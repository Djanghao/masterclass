# [C#] Two Pointer- Simple and Easy to understand

**Author:** sh2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/4480138/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/4480138/)

---

# Intuition
1 use two pointer (first and last) to make the head and tail the same
2 since the number are all positive, therefore merge the smaller number between head and tail with adjacent
3 repeat the process to make the next pair same

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
public class Solution {
    public int MinimumOperations(int[] nums) {
        int n = nums.Length;
        int left = 0, right = n - 1;
        int operations = 0;

        while (left < right) {
            int currLeft = nums[left];
            int currRight = nums[right];

            while (left < right && currLeft != currRight) {
                if (currLeft < currRight) currLeft += nums[++left];
                else currRight += nums[--right];
                operations++;
            }
            left++;
            right--;
        }
        
        return operations;
        
    }
}
```