# [Kotlin] Sequence, lazy, short & clear

**Author:** HiMyNameIs
**Votes:** 0
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/5347745/](https://leetcode.com/problems/iterator-for-combination/solutions/5347745/)

---

```
class CombinationIterator(private val characters: String, private val combinationLength: Int) {
    private val sequence = sequence {
        val stack = LinkedList<Pair<String, Int>>()
        characters.forEachIndexed { index, c -> stack += Pair(c.toString(), index) }
        
        while (stack.isNotEmpty()) {
            val top = stack.poll()
            if (top.first.length == combinationLength) {
                yield(top.first)
            }
            for (i in top.second + 1 until characters.length) {
                stack += Pair(top.first + characters[i], i)
            }
        }
    }
    private val iterator = sequence.iterator()

    fun next() = iterator.next()

    fun hasNext() = iterator.hasNext()
}