# C#

**Author:** neildeng0705
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2711668/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2711668/)

---


# Code
```
public class Solution 
{
    public bool SumOfNumberAndReverse(int num) 
    {
        if(num == 0) 
        {    
            return true;
        }

        for(int i=1; i<num; i++)
        {
            int n = i;
            int reverse=0;           
            while(n != 0)      
            {      
                int rem = n % 10;        
                reverse = reverse*10 + rem;      
                n /= 10;      
            }

            if(reverse + i == num)
            {   
                return true;
            }
        }

        return false;    
    }
}
```