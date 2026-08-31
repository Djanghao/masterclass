# Idiomatic solution with zipWithNext in Kotlin

**Author:** behzodhalil
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/4630105/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/4630105/)

---

# Complexity
- Time complexity:O (n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minimumCardPickup(cards: IntArray): Int {
        val bucket = mutableMapOf<Int,MutableList<Int>>()

        cards.forEachIndexed { index, card ->
            /**
                cards:      [3, 4, 2, 3, 4, 7]
                indices:     0  1  2  3  4  5

                We iterate over cards, key is number, value is a list of index.

                3 = [0, 3]
                4 = [1, 4]
                2 = [2]
                7 = [5]
             */
            with(bucket) {
                getOrPut(card) { mutableListOf<Int>()}.add(index)
            }
        }

        return bucket.values.flatMap { card -> card.zipWithNext {
            first, second -> second - first + 1
        }}.minOrNull() ?: - 1
    }
}
```