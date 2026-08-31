# Kotlin - Explained

**Author:** 2pac_shakur
**Votes:** 3
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/647418/](https://leetcode.com/problems/interval-list-intersections/solutions/647418/)

---

Trying to explain one of the[ good java solutions](https://leetcode.com/problems/interval-list-intersections/discuss/231157/Java-two-pointers) posted here, in kotlin.
credits : @wangzi6147 

```
    fun intervalIntersection(A: Array<IntArray>, B: Array<IntArray>): Array<IntArray> {
        val result = ArrayList<IntArray>()
        var i = 0
        var j = 0
        while (i < A.size && j < B.size) {
            if (A[i][1] < B[j][0]) { // A is too far left
                i++ 
            } else if (A[i][0] > B[j][1]) {  // A is too far right
                j++
            } else {
                result.add(intArrayOf(maxOf(A[i][0], B[j][0]), minOf(A[i][1], B[j][1]))) // consider A [0,2] and B[5,10] to understand this
                if (A[i][1] < B[j][1]) { // A's end is less than B's end
                    i++
                } else j++ // A's end is greater or equal to B's end
            }
        }
        return result.toTypedArray()
    }
```