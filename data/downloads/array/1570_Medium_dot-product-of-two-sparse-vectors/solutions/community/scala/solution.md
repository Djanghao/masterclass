# Scala 2 liner

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/5222194/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/5222194/)

---

# Intuition
Create an index which is a hashtable of indices where the cells hold non-zero values


# Code
```
class SparseVector(nums: Array[Int]) {
    val index = nums.zipWithIndex.filter((x, i) => x > 0).map(_.swap).toMap.withDefaultValue(0)

    def dotProduct(that: SparseVector): Int =
        this.index.map((k, v) => v * that.index(k)).sum
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums2)
 * val ans = v1.dotProduct(v2)
 */
```