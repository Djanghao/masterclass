# [Kotlin] Simple O(n) Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1461369/](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1461369/)

---

```
class Solution {
    fun smallestMissingValueSubtree(parents: IntArray, nums: IntArray): IntArray {
        val children = Array(parents.size) { mutableListOf<Int>() }.also {
            for (i in 1..parents.lastIndex) {
                it[parents[i]].add(i)
            }
        }

        val res = IntArray(parents.size) { 1 }
        nums.indexOfFirst { it == 1 }.let { startNode ->
            var currentMissing = 1
            var currentNode = startNode
            var prevNode = -1
            val values = mutableSetOf<Int>()
            
            fun addValuesUnder(node: Int) {
                values.add(nums[node])
                children[node].forEach { addValuesUnder(it) }
            }
            
            while (currentNode != -1) {
                values.add(nums[currentNode])
                children[currentNode].forEach {
                    if (it != prevNode) { addValuesUnder(it) }
                }

                while (values.contains(currentMissing)) {
                    ++currentMissing
                }

                res[currentNode] = currentMissing
                prevNode = currentNode
                currentNode = parents[currentNode]
            }
        }

        return res
    }
}
```