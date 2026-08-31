# easy solution

**Author:** mahmedAhmedAbdelfattah
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5986781/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/5986781/)

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
    public int CountNumbersWithUniqueDigits(int n) {
        int result=1;
        int mul=9;
        if(n>=1){
            result=10;
            }
            for(int i=1;i<n;i++)
            {
                mul=mul*(10-i);
                result=result+mul;
            }
            return result;
      
/*
        if(n==1) return 10;
        if(n==2) return 91;
        if(n==3) return 739;
        if(n==4) return 5275;
        if(n==5) return 32491;
        if(n==6) return 168571;
        if(n==7) return 712891;
        if(n==8) return 2345851;
        return 1;
  */      
    }
}
```