# C# Solution for Maximize the Confusion of an Exam Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3729995/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3729995/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to use a sliding window approach to find the maximum consecutive count of the same answer in the given string. We maintain two counts (trueCount and falseCount) to keep track of the consecutive 'T's and 'F's respectively.

# Approach
<!-- Describe your approach to solving the problem. -->
- Initialize variables maxCount, trueCount, and falseCount to 0.
- Use a sliding window represented by two pointers, left and right.
- Move the right pointer to the right and update the corresponding count (trueCount or falseCount) based on the current character in the string.
- If the number of changes required to maintain the window within the limit k exceeds k, move the left pointer to the right and adjust the counts accordingly.
- Update the maxCount with the maximum consecutive count found so far.
- Repeat steps 3-5 until the right pointer reaches the end of the string.
- Return the maxCount as the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(n), where n is the length of the input string. This is because we iterate through the string once using the sliding window approach.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) as we only use a constant amount of extra space to store the counts and variables.

# Code
```
public class Solution {
    public int MaxConsecutiveAnswers(string answerKey, int k) {
        int n = answerKey.Length;
        int maxCount = 0;  // Maximum consecutive count of the same answer
        int trueCount = 0;  // Count of consecutive 'T's
        int falseCount = 0;  // Count of consecutive 'F's
        
        // Sliding window approach
        int left = 0;
        int right = 0;
        
        while (right < n) {
            if (answerKey[right] == 'T') {
                trueCount++;
            } else {
                falseCount++;
            }
            
            // If the number of changes required exceeds k, move the left pointer
            if (Math.Min(trueCount, falseCount) > k) {
                if (answerKey[left] == 'T') {
                    trueCount--;
                } else {
                    falseCount--;
                }
                left++;
            }
            
            // Update the maxCount
            maxCount = Math.Max(maxCount, right - left + 1);
            
            right++;
        }
        
        return maxCount;
    }
}
```