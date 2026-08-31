# 💥C# | Both runtime AND memory beats 100%! [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/5783104/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/5783104/)

---

# Intuition
My first thought was that the key is to make sure every number can fit into a subsequence of length at least k. If there's a number that repeats too often, like more than k times, it could become a problem because I can't spread it across multiple long subsequences. So I realized that the maximum frequency of any number determines whether it's possible to split the array as needed.

# Approach
 I first count how often each number appears. If the most frequent number appears maxFreq times, then I need at least maxFreq * k elements in total to build valid subsequences. If the total number of elements in the array (n) is greater than or equal to maxFreq * k, then it\u2019s possible to split them. Otherwise, it\u2019s not.

# Complexity
- Time complexity:
O(n) \u2013 I go through the array just once to count the numbers.

- Space complexity:
O(1) \u2013 I only use a few variables to track frequencies, so no extra memory is needed.

# Code
```csharp []
public class Solution {
    public bool CanDivideIntoSubsequences(int[] nums, int k) {
        int n = nums.Length;
        int maxFreq = 0;
        int currentFreq = 0;
        int prev = nums[0];
        
        // Calculate the frequency of the most frequent number
        foreach (var num in nums) {
            if (num == prev) {
                currentFreq++;
            } else {
                maxFreq = Math.Max(maxFreq, currentFreq);
                currentFreq = 1;  // reset for new number
                prev = num;
            }
        }
        maxFreq = Math.Max(maxFreq, currentFreq);  // handle last group
        
        // If the most frequent number occurs `maxFreq` times, we need at least
        // `maxFreq * k` total elements to divide into valid subsequences
        return maxFreq * k <= n;
    }
}

```