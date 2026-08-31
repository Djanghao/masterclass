# Simple java solution

**Author:** Siddhant_1602
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3201886/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3201886/)

---



# Complexity
- Time complexity: $$O(n)$$ where n is the length of the string 

- Space complexity: $$O(n)$$ where n is the length of the string 

# Code
```
class Solution {
    public int minMaxDifference(int num) {
        char x[]=String.valueOf(num).toCharArray();
        char y[]=String.valueOf(num).toCharArray();
        char p=x[0],q=x[0];
        for(int i=0;i<x.length;i++)
        {
            if(x[i]!='9')
            {
                p=x[i];
                break;
            }
        }
        for(int i=0;i<x.length;i++)
        {
            if(x[i]==p)
            {
                x[i]='9';
            }
        }
        for(int i=0;i<x.length;i++)
        {
            if(y[i]==q)
            {
                y[i]='0';
            }
        }
        return Integer.parseInt(String.valueOf(x)) - Integer.parseInt(String.valueOf(y));
    }
}
```