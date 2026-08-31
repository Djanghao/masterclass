# Swift

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/5645888/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/5645888/)

---

Let $t$ and $c$ be the number of slices of tomato and cheese.
Let $j$ and $s$ be the number of jumbo and small burgers.

We have:
$t = 4j + 2c$
$c = j + c$

Solving this:
$j = t/2 -c$
$s = 2c - t/2$

Finally we need to make sure that $j$ and $s$ are nonnegative integers.

# Code
```
class Solution {
    func numOfBurgers(_ t: Int, _ c: Int) -> [Int] {
        if t % 2 != 0 { return [] }
        let j = t / 2 - c, s = 2 * c - t / 2
        return j >= 0 && s >= 0 ? [j, s] : []
    }
}
```