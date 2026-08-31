# Easy solution with explanation.

**Author:** ymjoshi
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/3565775/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/3565775/)

---

# Intuition
Easy C# solution.

# Approach
Keep on trying to make the last digit zero.

# Complexity
- Time complexity:
O(log(d)) where d is the number of digits in the long integer.

- Space complexity:
O(1)

# Code
```
public class Solution {
    public long MakeIntegerBeautiful(long n, int target) {
        // try to make last digit zero
        long num = n;
        long answer = 0;
        long multiplier = 1;        

        while(GetSum(num) > target)
        {            
            long add = 10 - num % 10;
            answer += multiplier * add;
            multiplier *= 10;            
            num += add;            
            num /= 10;
        }

        return answer;
    }

    private long GetSum(long num)
    {
        long sum = 0;

        while(num > 0)
        {
            long digit = num % 10;
            sum += digit;
            num /= 10;
        }

        return sum;
    }
}
```