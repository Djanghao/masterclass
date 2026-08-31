# :: Kotlin :: Union-Find & Priority Queue

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4369897/](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4369897/)

---

```
class Solution {
    class UnionFind {
        var ids: IntArray
        var ranks: IntArray

        constructor(size: Int) {
            ids = IntArray(size){ it }
            ranks = IntArray(size){ 1 }
        }

        fun find(x: Int): Int {
            return if(ids[x] != x) find(ids[x]) else x
        }

        fun union(x: Int, y: Int): Unit {
            if (find(x) == find(y)) {
                return
            }

            val idx = find(x)
            val idy = find(y)

            if(ranks[idx] > ranks[idy]){
                ids[idy] = idx
                ++ranks[idx]
            } else {
                ids[idx] = idy
                ++ranks[idy]
            }
        }
    }

    fun lexicographicallySmallestArray(nums: IntArray, limit: Int): IntArray {
        var temp = TreeSet<Int>()
        val sorted = mutableListOf<Pair<Int, Int>>()

        for (i in nums.indices) {
            val num = nums[i]
            sorted.add(Pair(num, i))
        }

        sorted.sortWith(compareBy({ it.first }, {it.second }))
        val uf = UnionFind(nums.size)

        for (i in 1 until sorted.size) {
            val curr = sorted[i]
            val prev = sorted[i - 1]

            if (curr.first - prev.first <= limit) {
                uf.union(curr.second, prev.second)
            }
        }

        val pqmap = HashMap<Int, PriorityQueue<Int>>()
        val result = IntArray(nums.size){0}

        for (i in nums.indices) {
            pqmap.computeIfAbsent(uf.find(i)){ PriorityQueue<Int>() }.offer(nums[i])
        }

        for (i in nums.indices) {
            result[i] = pqmap.get(uf.find(i))?.poll()!!
        }

        return result
    }
}
```