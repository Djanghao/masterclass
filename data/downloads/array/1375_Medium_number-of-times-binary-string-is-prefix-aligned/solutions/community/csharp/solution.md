# Easy C# Solution | O (N)

**Author:** Rohit_chiki
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/3588876/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/3588876/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int NumTimesAllBlue(int[] flips) {          
        int idx = 0;
        int count = 0;
        int maxUpdatedIndex = -1;
        while(idx < flips.Length)
        {  
            maxUpdatedIndex = Math.Max(flips[idx], maxUpdatedIndex);
            
            if(maxUpdatedIndex == idx+1) count++;
            
            idx++;
        }

        return count;
    }
}





```