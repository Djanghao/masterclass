# Kotlin - O(lgN) space and time solution that works with any positive Integer (NOT using an array)

**Author:** vvgladun
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-hashset/solutions/1968101/](https://leetcode.com/problems/design-hashset/solutions/1968101/)

---

Instead of hacking the requirements by adding an integer of size 1000001, I've implemented a Trie-like structure, that will do no more than 7 operations for any of its methods (to add, find or remove any positive number below 10^7). 
The space is up to 10 elements per level - up to 70 in total.
T: lgN
S: lgN

```
class MyHashSet() {
    data class Node(
        val n: Int = 0,
        val children: Array<Node?> = arrayOfNulls(10)
    )
    private val root = Node()
    
    companion object {//to store up to 10^7 (exclusive) which is more than max Int
        private const val TOP_DIVIDER = 1000000
    }

    fun add(key: Int) {
        var div = TOP_DIVIDER
        var cur = root
        var rem = key
        while (div > 1) {
            val n = rem / div
            if (cur.children[n] == null) {
                cur.children[n] = Node(n)
            }
            cur = cur.children[n]!!
            rem = rem % div
            div = div / 10
        }
        cur.children[rem] = Node(rem) // the last level (10^0)
    }

    fun remove(key: Int) {
        var div = TOP_DIVIDER
        var cur = root
        var rem = key
        while (div > 1) {
            val n = rem / div
            if (cur.children[n] == null) {
                return
            }
            cur = cur.children[n]!!
            rem = rem % div
            div = div / 10
        }
        cur.children[rem] = null
    }

    fun contains(key: Int): Boolean {
        var div = TOP_DIVIDER
        var cur = root
        var rem = key
        while (div > 1) {
            val n = rem / div
            if (cur.children[n] == null) {
                return false
            }
            cur = cur.children[n]!!
            rem = rem % div
            div = div / 10
        }
        return (cur.children[rem] != null)
    }
}
```