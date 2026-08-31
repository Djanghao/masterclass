# c#, Running Total

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3984225/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solutions/3984225/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can *sort* both `heroes` and `mosters` by their `strength`. Then we can use running `total` since each next hero is at least as much strong as previous one, so he can earn as least as much coins as a previous one. 

# Approach
<!-- Describe your approach to solving the problem. -->
- Sort both `heroes` and `monsters` by strength
- Iterate both `heores` and `monsters` while computing running `total`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n * log(n) + m * log(m))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n + m)$$

# Code
```
public class Solution {
  public long[] MaximumCoins(int[] heroes, int[] monsters, int[] coins) {
    long[] result = new long[heroes.Length];
 
    var hs = heroes
      .Select((strength, index) => (strength, index)) 
      .OrderBy(pair => pair.strength) 
      .ToArray();

    var ms = monsters
      .Zip(coins, (m, c) => (strength : m, coins : c))    
      .OrderBy(pair => pair.strength)
      .ToArray();

    long total = 0;

    for (int hi = 0, mi = 0; hi < hs.Length; ++hi) {
      for ( ;mi < ms.Length && ms[mi].strength <= hs[hi].strength; ++mi)
        total += ms[mi].coins;

      result[hs[hi].index] = total;
    }  

    return result;    
  }
}
```