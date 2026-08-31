# Fast and clear O(n) solution without nested loops.

**Author:** Drugged_Monkey
**Votes:** 3
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/4375815/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/4375815/)

---

# Intuition
It should be easy but looks medium.

# Approach
1. I create frequency map of digits in `digits` and store it in array size of 10.
2. I iterate every 3-digit even number from `100` to `999` and create frequency map of its digits.
3. Then I determine if number `i` passes or not conditions using simple, clear and most importantly $$O(1)$$ espression `n[ones] <= d[ones] && n[tens] <= d[tens] && n[huns] <= d[huns]` where `n` is frequency map of digits of `i` and `d` is global frequency map of `digits`.
4. And finally. The answer I got is sorted already!

# Complexity
- Time complexity:
$$O(n)$$ cause no nested loops involved

- Space complexity:
$$O(n)$$ but should be somewhere near $$O(4*n)$$ 

# Code
```
public sealed class Solution 
{
    public int[] FindEvenNumbers(int[] digits) 
    {
        var ans = new List<int>();
        var d = new int[10];

        foreach(int digit in digits) 
        {
            d[digit]++;
        }

        var n = new int[10];

        for(int i = 100; i < 1000; i+=2) 
        {
            var ones = i % 1000 / 100;
            var tens = i % 100 / 10;
            var huns = i % 10;

            n[ones]++;
            n[tens]++;
            n[huns]++;

            if(n[ones] <= d[ones] && n[tens] <= d[tens] && n[huns] <= d[huns]) 
            {
                ans.Add(i);
            }

            n[ones] = 0;
            n[tens] = 0;
            n[huns] = 0;
        }

        return ans.ToArray();
    }
}
```