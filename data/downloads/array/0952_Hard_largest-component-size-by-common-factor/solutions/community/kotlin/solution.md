# Largest Component Size by Common Factor in Kotlin

**Author:** TakuSemba
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/821586/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/821586/)

---

**explanation**
e.g. A=[2,3,5,8]

1. create factor graph from 1 to max number.

```
1         8        5        6        7
         / \\                |
        2   4               3
```

2. find the parent of the each number in array A and find the max number of parent of all elements.

```
2 -> 8
4 -> 6
5 -> 5
8 -> 8
```

**code snipet**

```
import java.util.*
import kotlin.math.sqrt


class Solution {

    fun largestComponentSize(A: IntArray): Int {

        val max = A.max() ?: return 0
        val unionFind = UnionFind(max)

        for (num in A) {
            var i = 2
            while (i <= sqrt(num.toFloat())) {
                if (num % i == 0) {
                    unionFind.unite(num, i)
                    if (num / i != i) {
                        unionFind.unite(num, num / i)
                    }
                }
                i += 1
            }
        }

        val map = HashMap<Int, Int>()
        var answer = 0
        for (num in A) {
            val root = unionFind.root(num)
            val count = map.getOrDefault(root, 0) + 1
            map[root] = count
            answer = maxOf(answer, count)
        }
        return answer
    }

    class UnionFind(count: Int) {

        private val parents = hashMapOf<Int, Int>()

        init {
            for (num in 1..count) {
                parents[num] = num
            }
        }

        fun root(num: Int): Int {
            val parent = parents.getValue(num)
            return if (parent == num) {
                num
            } else {
                root(parent)
            }
        }

        fun unite(left: Int, right: Int) {
            val leftRoot = root(left)
            val rightRoot = root(right)
            if (leftRoot == rightRoot) return
            val bigger = if (leftRoot < rightRoot) rightRoot else leftRoot
            val smaller = if (leftRoot < rightRoot) leftRoot else rightRoot
            parents[smaller] = bigger
        }
    }
}

```