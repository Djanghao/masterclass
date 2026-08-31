# C# easy solution

**Author:** shaahir08
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/6032526/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/6032526/)

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
    public int CountEven(int num) {
        int count = 0;
        for(int i=1;i<=num;i++){
            int sum = DigitSum(i);

            if(sum % 2 == 0){
                count++;
            }
        }
        return count;   
    }

    public int DigitSum(int n){
        int sum =0;
        while(n>0){
            sum+=n%10;
            n/=10;
        }
        return sum ;
    }
}
```