# Python | Finding the rightmost set bit

**Author:** mark233
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6028676/](https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6028676/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
The logit behind this solution is finding the num & -num (the rightmost set bit). 
        
For example for "1100100", we find the "100" first, and reduce it from the num, now we have "1100000" and the valid num less than the original one would be "1100000" + the binary representation of length 2 (e.g. 00, 01, 10, 11), which means that we can just fill up at most 2 ***1*** regardless of positions. So it's a combination, we would have comb(2,0), comb(2,1), comb(2,2). And for the valid num we count its ***1***, and see whether count_1 is (k-1)-reducible.
        
Repeat it until the num become 0.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^3 + nk)$$, n is the length of s
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(nk)$$

# Code
```python3 []
class Solution:
    def countKReducibleNumbers(self, s: str, k: int) -> int:
        count_1 = s.count("1")
        
        @cache
        def is_count_1_valid(num, limit):
            if num == 1:
                return True
            if limit == 0:
                return False
            return is_count_1_valid(bin(num).count("1"), limit - 1)
        
        res = 0 
        MOD = 10 ** 9 + 7
        for i in range(len(s) - 1, -1, -1):
            if s[i] == '1':
                count_1 -= 1
                length = len(s) - i - 1
                for j in range(length + 1):
                    if is_count_1_valid(count_1 + j, k - 1):
                        res += math.comb(length, j)   ## O(n)
                        res = res % MOD
        return res
```