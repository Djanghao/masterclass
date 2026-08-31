# C# concise greedy filling solution | 76ms 100%

**Author:** Legon2k
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4377457/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4377457/)

---

# Approach
The main idea agressively take distances k,-1(k-1), k-2, -(k-3).., 1 starting from value: 1 and moving to the next calculated value.

For example n=5, k=4

a) 1, 1 + distance:4 => 5
b) 1, 5, 5 - distance:3 => 2
c) 1, 5, 2 + distance:2 => 4
d) 1, 5, 2, 4 - distance: 1 => 3

After that just filling the rest of the number starting after the (k+1). In this example it is empty set.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) for resulting array

# Code
```
public class Solution {
    public int[] ConstructArray(int n, int k) 
    {
        var seed = new List<int>(n) { 1 };

        for(int i = k, sign=1; i > 0; i--, sign = -sign) 
          seed.Add(seed[^1] + i*sign);

        for(var i = k + 2; i <= n; i++) seed.Add(i);

        return seed.ToArray();
    }
}
```