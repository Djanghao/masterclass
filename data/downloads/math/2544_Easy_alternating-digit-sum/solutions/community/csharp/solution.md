# Very easy to Read Solution in C#✅

**Author:** alexvenmil
**Votes:** 3
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/4416782/](https://leetcode.com/problems/alternating-digit-sum/solutions/4416782/)

---



# Code
```
public class Solution {
    public int AlternateDigitSum(int n) 
    {
        string digits = n.ToString();
        int br = 0;
        
        for (int i = 0; i < digits.Length; i++) 
        {
            int digit = int.Parse(digits[i].ToString());
            
            if (i == 0) 
            {
                br += digit;
            } 
            else 
            {
                if (i % 2 == 1) br -= digit; 
                else br += digit;
            }
        }
        
        return br;
    }
}
```