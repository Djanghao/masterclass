# simple loop

**Author:** jaikechen2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/5768068/](https://leetcode.com/problems/closest-divisors/solutions/5768068/)

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
    public int[] ClosestDivisors(int num) {
        var arr1 = GetDivisors(num + 1);
        var arr2 = GetDivisors(num + 2);
        if (Math.Abs(arr1[0] - arr1[1]) < Math.Abs(arr2[0] - arr2[1]) ){
            return arr1;
        }else {
            return arr2;
        }
    }

    public int[] GetDivisors(int num){
        int[] ret = [1, num];
        
        for(var i = 2; i * i <= num; i ++){
            if (num % i == 0){
                ret = [i, num / i];
            }
        }
        return ret;
    }
}
```