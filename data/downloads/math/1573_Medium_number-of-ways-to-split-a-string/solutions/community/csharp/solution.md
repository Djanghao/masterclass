# C# | Find two split points, easy to understand

**Author:** bobdog1986
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/3171430/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/3171430/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Question ask us to find all possible ways to split to 3 segments. Aka, find all possible 2 split points.

# Approach
<!-- Describe your approach to solving the problem. -->
First of all, s must contain 3*n one(s), n>=0.
Then, every segment must contain n one(s).
So, we design a list to record all indexed of 1, then:
1. the tail of segment1 must satisfy 2 conditions:
    - Must >= the index of n ones;
    - Must < the index of n+1 ones;
2. the tail of segment2 must satisfy 2 conditions:
    - Must >= the index of 2n ones;
    - Must < the index of 2n+1 ones;

Result = Count(1) * Count(2) % MOD;

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
        public int NumWays(string s)
        {
            var list = new List<int>();//get all indexes of '1'
            int n = s.Length;
            for (int i = 0; i < n; i++)
            {
                if (s[i] == '1')
                    list.Add(i);
            }
            long res = 0;
            long mod = 1_000_000_007;
            if (list.Count % 3 != 0) return 0;//no possible
            if (list.Count == 0)//edge case
            {
                //there will be n-2 position that we can pick any 2 of them to split s to 3 segments
                //eg, "0000", "0|0|0|0" , all 3 positions marked as | 
                //eg, "00000", "0|0|0|0|0" , all 4 positions marked as | 
                //=> calculate Combine(n-1,2) = Factoral(n-1,2)/Factoral(2);
                long x = n - 1;
                long y = n - 2;
                res = x * y / 2 % mod;
            }
            else
            {
                //every segment must contain list.Count / 3 ones
                //First split point : must start from list[list.Count / 3 - 1], then end before list[list.Count / 3],
                //Second split point : must start from list[list.Count / 3 *2- 1], then end before list[list.Count / 3*2],
                long x = list[list.Count / 3] - list[list.Count / 3 - 1];//all possible indexes for point1
                long y = list[list.Count / 3 * 2] - list[list.Count / 3 * 2 - 1];//all possible indexes for point2
                res = x * y % mod;
            }
            return (int)res;
        }
}
```