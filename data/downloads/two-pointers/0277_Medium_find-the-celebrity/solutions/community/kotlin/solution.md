# Kotlin with infix function O(n)

**Author:** aymaletdinov2012
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/5398137/](https://leetcode.com/problems/find-the-celebrity/solutions/5398137/)

---

# Code
```
/* The knows API is defined in the parent class Relation.
      fun knows(a: Int, b: Int) : Boolean {} */

class Solution: Relation() {

    override fun findCelebrity(n: Int) : Int {
        var a = 0
        var b = n-1

        while (a < b) {
            if (a know b) a++ else b--
        }

        val seleba = a
        for (guy in 0 until n) {
            if (guy != seleba && (seleba know guy || guy notKnow seleba)) {
                return -1
            }
        }

        return seleba
	}

    private infix fun Int.know(b: Int) = knows(this, b)
    private infix fun Int.notKnow(b: Int) = !knows(this, b)
}
```