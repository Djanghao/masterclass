# ✅ Easy-to-understand C# solution with no usage of 64-bit integers [O(log(n)), O(1)]

**Author:** KamronSaliev
**Votes:** 55
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/3251935/](https://leetcode.com/problems/reverse-integer/solutions/3251935/)

---

# Complexity
- Time complexity:  $$O(log(n))$$

- Space complexity: $$O(1)$$

# Code
```
public class Solution 
{
    public int Reverse(int x)
    {
        var result = 0;

        while (x != 0)
        {
            var remainder = x % 10;
            var temp = result * 10 + remainder;

            // in case of overflow, the current value will not be equal to the previous one
            if ((temp - remainder) / 10 != result)
            {
                return 0;
            }

            result = temp;
            x /= 10;
        }
        
        return result;
    }
}
```

![pleaseupvote.jpg](./images/0.jpeg)
