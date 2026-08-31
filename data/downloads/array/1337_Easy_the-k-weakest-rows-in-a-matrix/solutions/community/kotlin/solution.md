# kotlin

**Author:** donbranson
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/2162568/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/2162568/)

---

```
    fun kWeakestRows(mat: Array<IntArray>, k: Int): IntArray {
        return mat
            .map{ it.sum() }
            .mapIndexed{ index, strength -> Pair(strength, index) }
            .sortedBy{ it.first }
            .map{ it.second }
            .take(k)
            .toIntArray()
    }
```