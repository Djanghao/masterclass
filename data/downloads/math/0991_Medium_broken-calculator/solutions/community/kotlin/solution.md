# Kotlin

**Author:** easchner
**Votes:** 1
**Link:** [https://leetcode.com/problems/broken-calculator/solutions/1355780/](https://leetcode.com/problems/broken-calculator/solutions/1355780/)

---

Keep dividing y until you get to an odd number or a value less than or equal to x. Since if after doubling you'd be off by more than 2, it's always better to decrement before doubling (i.e. `4->8->7->6` is worse than `4->3->6`) we'll continue halving until we're at or below the starting value, then we'd decrement to get there.

Walking through, let's say your starting x is 6 and y is 100, here are the loop steps.

0) 100 -> too big, divisible by 2
1) 50 -> too big, divisible by 2
2) 25 -> too big, but not divisible by 2. We can only be off by 1 since otherwise you'd decrement before doubling.
3) 26 -> too big, divisible by 2
4) 13 -> too big, not divisible, add 1
5) 14 -> too big, divisible
6) 7 -> too big, not divisible, add 1
7) 8 -> too big, divisible
8) 4 -> too small

Since we start with 6 and need to get to 4 to get into the sequence, we return those 8 steps plus the difference 6 - 4 = 2. So 10 total steps.

```
class Solution {
    fun brokenCalc(x: Int, y: Int): Int {
        var steps = 0
        var target = y
        while (target > x) {
            if (target % 2 == 0)
                target /= 2
            else
                target++
            steps++
        }

        return steps + (x - target)
    }
}
```