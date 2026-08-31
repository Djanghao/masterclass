# Simple java solution

**Author:** Siddhant_1602
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/4636782/](https://leetcode.com/problems/number-of-changing-keys/solutions/4636782/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int countKeyChanges(String s) {
        s=s.toLowerCase();
        int count=0,len=s.length();
        for(int i=0;i<len-1;i++)
        {
            if(s.charAt(i)!=s.charAt(i+1))
            {
                count++;
            }
        }
        return count;
    }
}
```