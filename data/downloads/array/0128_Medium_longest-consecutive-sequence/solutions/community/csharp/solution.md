# C# easy and understanding solution

**Author:** TabrizGulmammadov
**Votes:** 17
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/2978710/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/2978710/)

---

# Approach
Firstly, we need to catch nonrepeated numbers. That's why, we use HashSet. After, in the loop we check previous number of the current number exist or not in the array. If previous number doesn't exist, then we guess that our sequence is starting.

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# Code
```
public class Solution {
    public int LongestConsecutive(int[] nums) {
        HashSet<int> set = new HashSet<int>(nums);
        int maxLength = 0;

        foreach(int num in nums) {
            if(set.Contains(num - 1)) continue;
            
            int length = 0;
            while(set.Contains(num + length)) length++;

            maxLength = Math.Max(maxLength, length);
        }

        return maxLength;
    }
}
```