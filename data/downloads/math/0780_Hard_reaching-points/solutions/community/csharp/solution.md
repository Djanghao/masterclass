# 💥Runtime beats 100.00%, Memory beats 65.52% [EXPLAINED]

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/reaching-points/solutions/5743245/](https://leetcode.com/problems/reaching-points/solutions/5743245/)

---

# Intuition
The problem asks if we can reach a target point (tx, ty) starting from a point (sx, sy) by applying two possible operations: add one coordinate to the other. Instead of trying to go forwards from (sx, sy) to (tx, ty), which would involve many possibilities, we take the reverse approach: go backwards from (tx, ty) to (sx, sy).

When you reverse the operations, you can reduce (tx, ty) by subtracting one coordinate from the other. This is faster because the larger number gets reduced much more quickly. The key trick is to repeatedly reduce the larger number until it either matches the starting value or becomes too small to continue. If at any point we reach (sx, sy), we know it's possible.

# Approach
Work backwards: Instead of adding numbers to go forward, we reverse the process and subtract by taking the modulo (%) of the larger number with the smaller one. This is like "jumping" back by several steps in one go.

If tx > ty, we reduce tx by doing tx = tx % ty (this "reverses" multiple (x + y) operations at once).
If ty > tx, we reduce ty by doing ty = ty % tx.

Stop when we get close: If either tx equals sx or ty equals sy, check if the other value can be reached by repeatedly adding. This happens when the difference is a multiple of the smaller value.

Return true if you can exactly match (sx, sy) with (tx, ty) after these reductions; otherwise, return false.

# Complexity
- Time complexity:
O(log(max(tx, ty))): The modulo operation reduces the larger of tx or ty significantly in each step. This means that in the worst case, the number of steps is proportional to the logarithm of the larger target value. This makes the algorithm fast, even for large numbers.

- Space complexity:
O(1): The solution only uses a few variables (sx, sy, tx, ty) and doesn't need any additional data structures. So, the space usage is constant.

# Code
```csharp []
public class Solution {
    public bool ReachingPoints(int sx, int sy, int tx, int ty) {
        while (tx > sx && ty > sy) {
            if (tx > ty) {
                tx %= ty; // Reduce tx by modding with ty
            } else {
                ty %= tx; // Reduce ty by modding with tx
            }
        }
        
        // After one of the coordinates reaches or gets below the target, 
        // check if we can directly reach the target
        if (tx == sx && ty >= sy && (ty - sy) % sx == 0) return true;
        if (ty == sy && tx >= sx && (tx - sx) % sy == 0) return true;

        return false;
    }
}

```