# Super easy Kotlin iterator solution beats 95%

**Author:** Unrelentingfox
**Votes:** 1
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/2352127/](https://leetcode.com/problems/flatten-2d-vector/solutions/2352127/)

---

https://leetcode.com/submissions/detail/760085346/
```
class Vector2D(vec: Array<IntArray>) {
    private val remaining: Sequence<Sequence<Int>> = vec.map { it.asSequence() }.asSequence() 
    var curr: Sequence<Int> = emptyList<Int>().asSequence()

    fun next(): Int {
        return if (curr.hasNext()) {
            curr.next()
        } else if (remaining.hasNext()) {
            curr = remaining.next()
            this.next()
        } else throw Exception("bad input")
    }

    fun hasNext(): Boolean {
        return if (curr.hasNext()) {
            true
        } else if (remaining.hasNext()) {
            curr = remaining.next()
            this.hasNext()
        } else {
            false
        }
    }

}
```