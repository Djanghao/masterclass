# Improved BFS with integer encoding

**Author:** dominik1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/4340290/](https://leetcode.com/problems/k-similar-strings/solutions/4340290/)

---

# Intuition
This solution is an improved BFS as seen in other posts. For the general idea, check [Logical Thinking with Clear Java Code](https://leetcode.com/problems/k-similar-strings/solutions/151500/logical-thinking-with-clear-java-code/) first.

# Approach
Like in other solutions, we will perform BFS. The improvement is to encode each state as a integer. Since the alphabet contains 6 letters, we can map it to binary as follows:

```
a \u2192 000
b \u2192 001
c \u2192 010
d \u2192 011
e \u2192 100
f \u2192 101
```

Coupled with the fact that the maximum length of input strings is 20 characters, we need only 3 * 20 = 60 bits.

By using integers, we don't have to do $$O(n)$$ copying of string every time we add a new neighbor. Instead, we always do a constant number of bit operations.

# Complexity
For complexity analysis of BFS without optimization, see [Java BFS with complexity analysis](https://leetcode.com/problems/k-similar-strings/solutions/3281428/java-bfs-with-complexity-analysis/).

- Time complexity: $$O(6^n \\cdot n)$$
Note that it is lower by a factor of $$O(n)$$, because there is no string copying.


- Space complexity: $$O(6^n)$$

# Code
```
class Solution {
    fun kSimilarity(s1: String, s2: String): Int {
        val S = s1.encode()
        val T = s2.encode()
        val visited = mutableSetOf<Long>(S)
        val queue = ArrayDeque<Long>()
        queue.add(S)
        var k = 0

        while (queue.isNotEmpty()) {
            repeat(queue.size) {
                val s = queue.removeFirst()
                if (s == T) {
                    return k
                }
                var i = 0
                while (s.get(i) == T.get(i)) i++
                for (j in (i+1)..<s1.length) {
                    if (s.get(j) != T.get(i)) continue
                    val t = s.swap(i, j)
                    if (t in visited) continue
                    visited.add(t)
                    queue.addLast(t)
                }
            }
            k++
        }

        assert(false)
        return -1
    }

    fun String.encode(): Long {
        var r = 0L
        for (i in indices) {
            r = r or ((this[i].code - 'a'.code).toLong() shl (i*3))
        }
        return r
    }

    fun Long.swap(i: Int, j: Int): Long {
        val a = get(i)
        val b = get(j)
        return set(i, b).set(j, a)
    }

    fun mask(i: Int): Long =
        7L shl (i*3)

    fun Long.get(i: Int): Long =
        (this and mask(i)) shr (i*3)
    
    fun Long.set(i: Int, v: Long): Long =
        (this and mask(i).inv()) or (v.toLong() shl (i*3))
}
```