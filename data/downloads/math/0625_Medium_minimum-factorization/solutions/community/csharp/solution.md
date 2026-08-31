# Fastest Solution

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-factorization/solutions/4467326/](https://leetcode.com/problems/minimum-factorization/solutions/4467326/)

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
```
public class Solution {
    public int SmallestFactorization(int num) {
        int two = 1;
        int three = 1;
        int five = 1;
        int seven = 1;
        int six = 0;
        int eight=0;
        int four = 0;
        int nine = 0;
        if (num == 1)
        {
            return 1;
        }
        while( num%(Math.Pow(2,two)) == 0)
        {
            two++;
        }
        two--;
        num = (int)(num / Math.Pow(2, two));
        while( num%(Math.Pow(3,three)) == 0)
        {
            three++;
        }
        three--;
        num = (int)(num/Math.Pow(3, three));
        while( num%(Math.Pow(5,five)) == 0)
        {
            five++;
        }
        five--;
        num = (int)(num/Math.Pow(5, five));
        while( num%(Math.Pow(7,seven)) == 0)
        {
            seven++;
        }
        seven--;
        num = (int)(num/Math.Pow(7, seven));
        if (num > 1)
        {
            return 0;
        }
        if (two >= 3)
        {
            eight += two/3;
            two = two%3;
        }
        if (three >=2)
        {
            nine += three/2;
            three = three%2;
        }
        while(two>0 && three > 0)
        {
            two--;
            three--;
            six++;
        }
        
        if(two >= 2)
        {
            four += two/2;
            two = two%2;
        }
        int d = 1;
        long ans = 0;
        while(nine-- > 0)
        {
            ans += (long)d*9;
            if (ans > Int32.MaxValue || ans < 0){
                return 0;
            }
            d *= 10;
        }
        while(eight-- > 0)
        {
            ans += (long)d*8;
            if (ans > Int32.MaxValue || ans < 0){
                return 0;
            }

            d *= 10;
        }
        while(seven-- > 0)
        {
            ans += (long)d*7;
            if (ans > Int32.MaxValue || ans < 0){
                return 0;
            }

            d *= 10;
        }
        while(six-- > 0)
        {
            ans += (long)d*6;
            if (ans > Int32.MaxValue || ans < 0){
                return 0;
            }

            d *= 10;
        }
        while(five-- > 0)
        {
            ans += (long)d*5;
            if (ans > Int32.MaxValue || ans < 0){
                return 0;
            }

            d *= 10;
        }
        while(four-- > 0)
        {
            ans += d*4;
            if (ans > Int32.MaxValue || ans < 0){
                return 0;
            }

            d *= 10;
        }
        while(three-- > 0)
        {
            ans += d*3;
            if (ans > Int32.MaxValue || ans < 0){
                return 0;
            }

            d *= 10;
        }
        while(two-- > 0)
        {
            ans += d*2;
            if (ans > Int32.MaxValue || ans < 0){
                return 0;
            }

            d *= 10;
        }
        int a = (int)ans;
        if (ans < 0)
        {
            return 0;
        }
        return a;
    }
}
```