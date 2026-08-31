# Simple java solution

**Author:** Siddhant_1602
**Votes:** 17
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985538/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985538/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public String getSmallestString(String s, int k) {
        StringBuilder nm=new StringBuilder();
        for(int i=0;i<s.length();i++)
            {
                char c=s.charAt(i);
                int val=Math.min(123-c, c-97);
                if(k>0)
                {
                    if(val<=k)
                    {
                        nm.append("a");
                        k-=val;
                    }
                    else
                    {
                        c=(char)(c-k);
                        nm.append(c);
                        k-=val;
                    }
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