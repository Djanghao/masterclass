# Scala - recursion

**Author:** AnishKumar5811
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5318581/](https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5318581/)

---

```
object Solution {
    def findTheWinner(n: Int, k: Int): Int = {
        def josephus(n: Int, k: Int): Int = {
            if (n == 1) {
                0 
            } else {
                (josephus(n - 1, k) + k) % n
            }
        }
        // Since the recursive function is 0-indexed, we add 1 to get the 1-indexed result
        josephus(n, k) + 1
    }
}
```