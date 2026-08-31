# Kotlin. O(1). Explained

**Author:** anton-pogonets
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/5108094/](https://leetcode.com/problems/minimum-operations-to-make-array-equal/solutions/5108094/)

---

# Approach
If we looks on first 7 solutions we will get:
```
1: [1] ->                 1
2: [1, 3] ->              1
3: [1, 3, 5] ->           2
4: [1, 3, 5, 7] ->        3 + 1
5: [1, 3, 5, 7, 9] ->     4 + 2 
6: [1, 3, 5, 7, 9, 11] -> 5 + 3 + 1
```

So this is just sum of arithmetic progression:
    - For odd n: from 1 to n - 1 with step 2
    - For even n: from 2 to n - 1 with step 2
In both cases count is `n / 2`

So using sum of arithmetic progression formula $$S_{n}={\\dfrac {a_{1}+a_{n}}{2}}\\cdot n$$, we can get answer without any iteration

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun minOperations(n: Int) = n * n / 4
}
```