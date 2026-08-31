# C# one line solution

**Author:** deleted_user
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4439295/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4439295/)

---

# Approach

This question can easily solved if you think about how shapes can be divided equally. For equally dividing a circle into even number of parts you need n lines at equal angles. For diving the circle into odd number of parts you need n lines. 

There is a edge case here though. When n is 1 or when you need only 1 equal part, effectively you are saying that you don't need to divide the circle. In that case return 0;

The solution posted here is one line but it is basically a ternary opertaor nested within another.

# Complexity
- Time complexity:
O(1) - constant

- Space complexity:
O(1) - constant

# Code
```
public class Solution {
    public int NumberOfCuts(int n) => n % 2 == 0 ? n / 2 : n == 1 ? 0 : n;
}
```