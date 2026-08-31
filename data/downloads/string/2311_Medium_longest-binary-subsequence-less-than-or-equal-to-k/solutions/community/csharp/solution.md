# C# | O(n) | One-pass | Queue

**Author:** Alghi
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/5045237/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/5045237/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int LongestSubsequence(string s, int k) {
        // Init a queue to keep track of the indexes of '1'
        Queue<int> onesQueue = new Queue<int>();
        // Value of the current longest subsequence
        int currSub = 0;
        // Length of the current longest subsequence
        int maxLengthSub = 0;
        for (int i = 0; i < s.Length; i++)
        {
            // Update the value of the current subsequence
            currSub = 2 * currSub + (s[i] - '0');
            // If the current bit is one, add the index to the queue
            if (s[i] == '1') onesQueue.Enqueue(i);
            // Increment the value of the longest subsequence if the value is less or equal to k
            if (currSub <= k)
            {
                maxLengthSub++;
            }
            // Else remove the least recent one added to the subsequence
            else
            {
                currSub -= 1 << (i - onesQueue.Dequeue());
            }
        }
        return maxLengthSub;
    }
}
```