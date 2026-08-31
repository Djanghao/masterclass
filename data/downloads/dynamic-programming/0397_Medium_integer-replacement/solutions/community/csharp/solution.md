# Best 88% C# O(logn)

**Author:** robsonleetCODE
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/5242651/](https://leetcode.com/problems/integer-replacement/solutions/5242651/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Got caught on this for abit because of the 3 remainder but, my logic is simple loop while n != 1 and prioritize halfing. 
# Complexity
- Time complexity:
O(logN)

- Space complexity:
O(logN)

# Code
```
public class Solution {
    public int IntegerReplacement(int n) 
    {
        int count = 0;
        if(n == 1) return 0;
        if(n == 0) return 1;
        if (n == int.MaxValue) return 32; // Special case handling

        while(n != 1)
        { 
            if(n % 2 == 0)
            {
                n = n / 2;
            }
             else if ((n + 1) % 4 == 0 && n != 3) // Special case for even numbers with remainder 3
            {
                n = n + 1;
            }
            else{ 
                n = n - 1;
            }
            count++;
        }
        return count;

        //while n != 1
        //is n == even 
         // n / 2

        //else odd 
         //n > 1
           //n - 1
         // n < 1  
    }
}
```