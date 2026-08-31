# Simple Iterative Solution

**Author:** ayush6203
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/3924653/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/3924653/)

---

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int LongestContinuousSubstring(string s) {
        int prev = s[0] - 1;
        int maxCount = 0, currCount = 0;

        foreach(int c in s){
            if(c == prev + 1){
                ++currCount;
                maxCount = Math.Max(maxCount, currCount);
            }
            else{
                currCount = 1;
            }

            prev = c;
        }
        
        return maxCount;
    }
}
```