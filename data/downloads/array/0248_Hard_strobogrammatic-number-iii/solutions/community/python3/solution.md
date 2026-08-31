# [Python] | super simple | backtrack to generate all combinations

**Author:** TangHao1987
**Votes:** 4
**Link:** [https://leetcode.com/problems/strobogrammatic-number-iii/solutions/3284458/](https://leetcode.com/problems/strobogrammatic-number-iii/solutions/3284458/)

---

# Intuition
For any number string `s`, the strobogrammatic number can only be
`8 + s[1:-1] + 8`, `1 + s[1:-1] + 1`, `0 + s[1:-1] + 0`, `6 + s[1:-1] + 9`, `9 + s[1:-1] + 6`. 

It's easy to get that for any digit i, the number of the strobogrammatic string on that digit is `dp[i]` = `dp[i - 2] * 5` 

As the constraint gives that the highest digit is 15, so at most we can get `3* (5 ** 7) = 234375` numbers with the given highest constraint, which is still possible to generate all of them. 

# Approach
1) use dp to generate all of the strobogrammatic strings, 
2) convert them to number and add to a SortedSet()
   a) For this step, be careful the numbers strings that start with "0", 
all of those should be removed except the real "0"
3) use binary search to find the left and right index with given low and high,

# Complexity
- Time complexity:
O(5^(high // 2)log5^(high // 2))

- Space complexity:
O(5^(high // 2)

# Code
```
class Solution:
    def strobogrammaticInRange(self, low: str, high: str) -> int:
        dp = dict()
        dp[0] = ['0', '1', '8']
        dp[1] = ['00', '11', '88', '69', '96']
        for i in range(2, len(high) + 1):
            dp[i] = []
            for j in dp[i - 2]:
                dp[i].append('0' + j + '0')
                dp[i].append('1' + j + '1')
                dp[i].append('8' + j + '8')
                dp[i].append('6' + j + '9')
                dp[i].append('9' + j + '6')
        
        nums = []
        for d in dp:
            for v in dp[d]:
                if v[0] == '0' and len(v) > 1: continue
                nums.append(int(v))
        nums.sort()
        left = bisect_left(nums, int(low))
        right = bisect_right(nums, int(high))
        return right - left
            
```