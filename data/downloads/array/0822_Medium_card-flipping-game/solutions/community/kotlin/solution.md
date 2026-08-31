# Kotlin same logic but two ways

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/card-flipping-game/solutions/4620257/](https://leetcode.com/problems/card-flipping-game/solutions/4620257/)

---

# Intuition
The idea is that any card is valid, except for that where it has a face down and face up at the same index, then we cannot consider that cards since its impossible to flip it.

After filtering out all non valid cards, we just pick the smallest one.


# With DIY Logic
```
class Solution {
    fun flipgame(fronts: IntArray, backs: IntArray): Int {
        val invalid = HashSet<Int>()
        val nums = HashSet<Int>()

        for (i in 0 until fronts.size) {
            if (fronts[i] == backs[i])
                invalid.add(fronts[i])
            nums.add(fronts[i])
            nums.add(backs[i])
        }

        var res = 2001
        for (num in nums) {
            if (num !in invalid) {
                res = minOf(res, num)
            }
        }
        
        return if (res == 2001) 0 else res
    }
}
```

# With Kotlin functions
```
class Solution {
    fun flipgame(f: IntArray, b: IntArray) = f
        .zip(b)
        .filter { (x, y) -> x == y }
        .map { it.first }
        .toSet()
        .run {
            (f + b)
            .filter { it !in this }
            .minOrNull() ?: 0
        }
}
```