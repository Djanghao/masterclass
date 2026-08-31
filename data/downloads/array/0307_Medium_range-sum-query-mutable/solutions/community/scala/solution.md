# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-mutable/solutions/3629844/](https://leetcode.com/problems/range-sum-query-mutable/solutions/3629844/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
    class NumArray(_nums: Array[Int]) {
      private val nums = _nums.clone()
      private val tree = Array.ofDim[Int](4 * nums.length)

      buildTree(0, 0, nums.length - 1)

      def update(index: Int, value: Int): Unit = {
        updateTree(0, 0, nums.length - 1, index, value)
        nums(index) = value
      }

      def sumRange(left: Int, right: Int): Int = queryTree(0, 0, nums.length - 1, left, right)

      private def buildTree(treeIndex: Int, lo: Int, hi: Int): Unit = 
        if (lo == hi) {
          tree(treeIndex) = nums(lo)
        } else {
          val mid = lo + (hi - lo) / 2
          buildTree(2 * treeIndex + 1, lo, mid)
          buildTree(2 * treeIndex + 2, mid + 1, hi)
          tree(treeIndex) = tree(2 * treeIndex + 1) + tree(2 * treeIndex + 2)
        }

      private def updateTree(treeIndex: Int, lo: Int, hi: Int, index: Int, value: Int): Unit = 
        if (lo == hi) tree(treeIndex) = value
        else {
          val mid = lo + (hi - lo) / 2
          if (index <= mid) updateTree(2 * treeIndex + 1, lo, mid, index, value)
          else updateTree(2 * treeIndex + 2, mid + 1, hi, index, value)
          tree(treeIndex) = tree(2 * treeIndex + 1) + tree(2 * treeIndex + 2)
        }

      private def queryTree(treeIndex: Int, lo: Int, hi: Int, left: Int, right: Int): Int = 
        if (lo > right || hi < left) 0
        else if (lo >= left && hi <= right) tree(treeIndex)
        else {
          val mid = lo + (hi - lo) / 2
          queryTree(2 * treeIndex + 1, lo, mid, left, right) + queryTree(2 * treeIndex + 2, mid + 1, hi, left, right)
        }
    }

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,`val`)
 * var param_2 = obj.sumRange(left,right)
 */
```