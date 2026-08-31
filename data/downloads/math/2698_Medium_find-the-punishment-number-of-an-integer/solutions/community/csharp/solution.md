# Simple Solution Using Recursion

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/4386943/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/4386943/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Breaking each number and validating using recursion 
# Approach
<!-- Describe your approach to solving the problem. -->
Iterate over all numbers, then break down the square of number from each spot from 1 to 4 and validate using recursion if the number is possible.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*(4^n))$$
- Space complexity:
$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int PunishmentNumber(int n) {
        int result = 0;
        if (n <= 37) {
            for(int i=1; i<=n; i++)
            {
                if (i == 1) {
                    result += 1;
                }
                if (i == 9) {
                    result += 81;
                }
                if (i == 10) {
                    result += 100;
                }
                if (i == 36) {
                    result += 1296;
                }
            }
            return result;
        }
        result = 1478;
        for(int i=37; i<=n;i++)
        {
            if(IsValid(i*i, i))
            {
                result += i*i;
            }
        }
        return result;
    }

    private bool IsValid(int num, int x)
    {
        if (num == x){
            return true;
        }
        if (num < x){
            return false;
        }
        if (num <10 && num != x) {
            return false;
        }
        string s = num.ToString();
        for(int i=1;i<=4 && i<=s.Length;i++) 
        {

            string s1 = s.Substring(0, i);
            if (s.Length <= i) {
                continue;
            }
            string s2 = s.Substring(i, s.Length-i);
            int a = int.Parse(s1);
            if (a > x)
            {
                continue;
            }
            int b = int.Parse(s2);
            bool valid = IsValid(b, x-a);
            if (valid)
            {
                return true;
            }
        }
        return false;
    }
}
```