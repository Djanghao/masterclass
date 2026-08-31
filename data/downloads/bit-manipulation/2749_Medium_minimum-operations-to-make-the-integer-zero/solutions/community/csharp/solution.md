# Simple Solution (Runtime & Memory: Beats 100.00%of users with C#)

**Author:** DaniilMikhailov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/4414185/](https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/4414185/)

---

# Intuition

*it's a my simple solution. You need write to method which count quantity bit in number. I recommend you use binary multi on 1. Then, circle calculate difference between num1 and num2 multi on iteraction. Check iteraction large or equals quantity of bits and 
iteraction little or equals difference. If it's true - return iteraction.*


```ruby
Example:
5 = 101, 2 bits
5 & 1 = 1               
5 & 1 = 1
5 >> 1 = 2
2 & 1 = 0 
2 >> 1 = 1      
1 & 1 = 1 
```


# Complexity
- Time complexity: O (logN)
# Code
```
public class Solution {
    public int MakeTheIntegerZero(long num1, long num2) {
        if(num1 < num2)
            return -1;
        if(num1 == 0)
            return 0;
        int countBits = 0;
        long diff = 0;
        for(int i = 0; i <= 100; i++){
            diff = num1 - num2 * i;
            countBits = CountBits(diff);
            if(countBits <= i && i <= diff)
                return i;
            else
                continue;
        }
        return -1;
    }

    private int CountBits(long num){
        long count = 0;
        while(num > 0){
            count += num & 1;
            num >>= 1;
        }
        return (int)count;
    }
}
```