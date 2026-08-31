# C# Dynamic Programming Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-special-subsequences/solutions/5781368/](https://leetcode.com/problems/count-number-of-special-subsequences/solutions/5781368/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->The key insight is to process the array in a single pass while dynamically counting how many valid subsequences we can build at each step. By maintaining and updating three counters (count0, count1, and count2), we efficiently track and extend subsequences that follow the [0, 1, 2] pattern.
___

# Approach
<!-- Describe your approach to solving the problem. -->Iterate over the array and update the counts for count0, count1, and count2.
Use the modulo 10^9 + 7 to prevent overflow.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n), where 'n' is the length of the array 'nums'.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1), as we are only using a constant amount of extra space.
___

# Code
```csharp []
public class Solution {
    public int CountSpecialSubsequences(int[] nums) {
        long MOD = 1000000007;
        long count0 = 0, count1 = 0, count2 = 0;

        foreach (int num in nums) {
            if (num == 0) {
                count0 = (count0 * 2 + 1) % MOD;
            } else if (num == 1) {
                count1 = (count1 * 2 + count0) % MOD;
            } else if (num == 2) {
                count2 = (count2 * 2 + count1) % MOD;
            }
        }

        return (int)count2;
    }
}

//  count0 = (count0 * 2 + 1) % MOD: Every time we encounter a 0, we can either:
//  *Start a new subsequence with just this 0.
//  *Extend any existing subsequences of 0s by appending this 0. That's why we multiply count0 by 2 and add
//  1 for the new subsequence.
//  count1 = (count1 * 2 + count0) % MOD: Every time we encounter a 1, we can either:
//  *Extend any existing subsequences of 0s to include this 1.
//  *Extend any existing subsequences of 0s followed by 1s by appending this 1. That's why we multiply 
//  count1 by 2 and add count0.
//  count2 = (count2 * 2 + count1) % MOD: Every time we encounter a 2, we can either:
//  *Extend any existing subsequences of 0s and 1s to include this 2.
//  *Extend any existing subsequences of 0s, 1s, and 2s by appending this 2. That's why we multiply 
//  count2 by 2 and add count1.

```