# Optimized Solution 100% Beats

**Author:** dmkyr20
**Votes:** 332
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/3137715/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/3137715/)

---

# Intuition
In any case (suffix or prefix), any operation will have its main operation "identifier" (plus or minus) in the middle. Since every character has an equivalent integer value, and related characters have close int values, we can use it. The plus character (+) is equal to 43, and the minus character (-) is equal to 45. Therefore, x += 44 - middle operation character; if it's plus, it will be x += 44 - 43 (1); if it's minus, it will be x += 44 - 45 (-1)

# Complexity
- Time complexity: O(n), where n is the number of operations.

- Space complexity:
O(1), since only a single integer variable x is used to store the sum of the operations.

# Code
```
class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int x = 0;
        for(String o : operations) x += (44 - o.charAt(1));
        return x;
    }
}
```
![Screenshot 2023-02-03 at 19.57.18.png](./images/0.png)
