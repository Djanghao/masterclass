# Fast, simple single-pass dfs solution using a Map for prefix sums

**Author:** jazzdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/6063169/](https://leetcode.com/problems/path-sum-iii/solutions/6063169/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.collection.mutable

object Solution {
  def pathSum(root: TreeNode, targetSum: Int): Int = {
    val prefixSums = mutable.Map[Long, Int](0L -> 1).withDefaultValue(0)

    def dfs(node: TreeNode = root, currentSum: Long = 0L): Int = {
      if node == null then 0
      else {
        val newSum = currentSum + node.value
        val countForThisNode = prefixSums(newSum - targetSum)
        prefixSums(newSum) += 1

        val leftCount = dfs(node.left, newSum)
        val rightCount = dfs(node.right, newSum)

        prefixSums(newSum) -= 1

        countForThisNode + leftCount + rightCount
      }
    }

    dfs()
  }
}
```