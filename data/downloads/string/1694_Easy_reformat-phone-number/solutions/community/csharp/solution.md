# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/5982421/](https://leetcode.com/problems/reformat-phone-number/solutions/5982421/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public string ReformatNumber(string number) {
       
        StringBuilder res=new StringBuilder(number.Length);
        int count=0;
        for(int i=0;i<number.Length;i++)
        {
            if(char.IsDigit(number[i]))
            {
            res.Append(number[i]);
            ++count;
            if(count==3)
            {
                res.Append('-');
                count=0;
            }}
        }
        if(count==0)
        {
            --res.Length;
        }
        else if(count==1)
        {
            res[^2]=res[^3];
            res[^3]='-';
        }
        return res.ToString();
    }
}
```