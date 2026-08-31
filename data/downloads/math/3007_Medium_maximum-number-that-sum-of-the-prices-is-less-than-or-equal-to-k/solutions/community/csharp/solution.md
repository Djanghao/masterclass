# Directly Count bits O(59) 18ms beat 100%

**Author:** junwan1979
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4563286/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4563286/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Directly check the final result from high bits to low bits and check if it is 1 or 0
# Approach
<!-- Describe your approach to solving the problem. -->
Suppose x is 3. For high bits, say: poisition is 5, if it is 1, it will contribute 2**(5-2) counts. If the counts is more than k, we set this bits to 0, otherwise set it 1 and reduce k from counts.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(59)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
public class Solution {
    public long FindMaximumNumber(long k, int x) {
        long res = 0;
        int count = 0;
        for (int i = 59; i >= 1; i--)
        {
            long c = Contribute(x, i) + count * (long)Math.Pow(2, i - 1);
            if (c <= k) {
                res += ((long)1 << (i - 1));
                k -= c;
                if (i % x == 0) count++;
            }
        }
        return res;  
    }
    
    private long Contribute(int x, int b) {
        int p = (b - 1) / x;
        long c = 0;
        if (b >= 2) c += p * (long) Math.Pow(2, b - 2);
        if (b % x == 0) c += 1;
        return c;
    }
}
```