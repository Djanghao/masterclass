# Solution in C# (beats 100% runtime)

**Author:** yeuhoahuuco
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5547028/](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5547028/)

---

# Code
```
public class Solution {
    public int NonSpecialCount(int l, int r) {
        if(r == 1)
          return 1;

        if(r == 2)
          return l == 1 ? 2 : 1;

        if(r == 3)
          return l == 1 ? 3 : l == 2 ? 2 : 1;

        int numSpecial = 0;
        int min = (int)Math.Sqrt(l);
        int max = (int)Math.Sqrt(r);
        for(int i = min; i <= max; i++)
        {
            if(IsPrime2(i) && i*i >= l && i*i <= r)
             numSpecial++;
        }
        
        return (r - l + 1) - numSpecial;
        
    }

    public bool IsPrime2(int n) 
    {
        if(n == 1)
          return false;

        if(n == 2 || n == 3)
          return true;
        
        int max = (int)Math.Sqrt(n) + 1;
        for(int i = 2; i <= max; i++)
        {
            if(n % i == 0)
              return false;
        }
        return true;
    }
}
```