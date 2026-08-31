# Java Solution with binary search and base systems (No Digit DP)

**Author:** profchi
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4518439/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4518439/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea is to find the number of powerful Integers less than or equal to finish then subtract from it the number of powerful Integers less that or equal to (start - 1). This would give the number of powerful Integers between start and finish Inclusive.

For a given target, say 20,000 , a limit 4 with suffix 124, the powerful Integers less than target equals to the target are 124, 1124, 2124, 3124, 4124, 10124, 11124, 12124, 13124 and 14124.

Notice the prefixes(powerful Integers with suffix removed) are 0, 1, 2, 3, 4, 10, 11, 12, 13, 14

This follows a base 5 pattern and this is fairly intutive as we can only use numbers from 0 to limit which is 4 in the case so the prefix follow an incremental sequence of base 5 (limit + 1).  

# Approach
<!-- Describe your approach to solving the problem. -->
As explained above, the prefix would follow the patter of base limit + 1,
We can use this to find the minimum prefix in base (limit + 1) such that when the suffix is appended to it, it exceeds the target. The value of this prefix in base 10 tells us the number of prefix that would be less than the target. We can easily find this with binary search because prefix above a certain threshold would be greater than the target when combined with the suffix while those below the threshold would be less than or equal to the target

Please upvote if you like the Solution :)

# Complexity
- Time complexity: O(log ^ 2 n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->



# Code
```
class Solution {
    public long numberOfPowerfulInt(long start, long finish, int limit, String s) {
        long sVal = Long.parseLong(s);
        
        long mul = 1;
        
        while (mul <= sVal) {
            mul *= 10;
        }
        
        long result = solve(finish, sVal, mul, limit);
        result  -= solve(start - 1, sVal, mul, limit);
        
        return result;
    }
    
    private double convertBase (long val, long base) {
        
        double result = 0;
        
        List<Integer> results = new ArrayList<>();
        
        int mod;
        
        while (val != 0) {
            mod = (int) (val % base);
            results.add(mod);
            val /= base;
        }
        
        Collections.reverse(results);
        
        for (int num : results) {
            result *= 10;
            result += num;
        }
        
        return result;
    }
    
    private long solve(long val, long s, long mul, int limit) {
        
        long max = 1;
        
        while (max * mul <= val) {
            max *= 10;
        }
        
        long min = -1;
        
        long mid;
        
        double mVal;
        
        while (max - min > 1) {
            mid = (max + min) / 2;
            
            mVal = convertBase(mid, limit + 1) * mul + s;
            
            //System.out.println(max + " " + min + " " + mVal + " " + val);
            
            if (mVal <= val) {
                min = mid;
            } else {
                max = mid;
            }
        }
        
        //System.out.println(max);
        return max;
    }
}
```