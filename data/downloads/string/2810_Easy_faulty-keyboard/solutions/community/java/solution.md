# Simple java solution

**Author:** Siddhant_1602
**Votes:** 15
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/3869846/](https://leetcode.com/problems/faulty-keyboard/solutions/3869846/)

---

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public String finalString(String s) {
        StringBuilder nm=new StringBuilder();
        for(char c:s.toCharArray())
        {
            if(c=='i')
            {
                nm.reverse();
            }
            else
            {
                nm.append(c);
            }
        }
        return nm.toString();
    }
}
```