# Kotlin | Cache next element to use as a peek result

**Author:** mrn0thing
**Votes:** 1
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/1981824/](https://leetcode.com/problems/peeking-iterator/solutions/1981824/)

---

Please, let me know if you have any questions.

Key notes:
* There is a **maintanState()** procedure which is responsible in checking if there are elements in backing iterator
	* If there are any, cache them in **next** field
	* If there are no, set **end** field to **true** which means we reached the end of the iterator
* On init phase and every **next()** call there is a **maintainState()** procedure
* On **peek()** call return the element cached in **next** field
* On **hasNext()** check if **end** is **true**

Side note: In general iterator can return null values, that's why it is a part of answer for the follow up question... To make it generic - we need just to substitute **Int** with **\\<T\\>**

```
class Solution {
    class PeekingIterator(iterator: Iterator<Int>) : Iterator<Int> {
        private val internalIterator: Iterator<Int> = iterator
        private var next: Int? = null
        private var end = false

        init {
            maintainState()
        }

        fun peek(): Int {
            return next!!
        }

        override fun next(): Int {
            val result = next
            maintainState()
            return result!!
        }

        override fun hasNext(): Boolean {
            return !end
        }

        private fun maintainState() {
            if (internalIterator.hasNext()) {
                next = internalIterator.next()
            } else {
                end = true
            }
        }
    }
}
```