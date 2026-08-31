# Scala easy to Understand | O(N) solution | Recursion

**Author:** Shubhang2101
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/5106355/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/5106355/)

---


# Complexity
- Time complexity:
O(N)

- Space complexity:
<O(N)
# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {

    import scala.collection.mutable._

    def findFrequentTreeSum(root: TreeNode): Array[Int] = {

        val freq:Map[Int,Int] = Map().withDefaultValue(0)

        def solve(root:TreeNode):Int = {

            if(root == null){
                return 0
            }
            else{
                val leftSum = solve(root.left)
                val rightSum = solve(root.right)

                val totalSum = root.value+leftSum+rightSum

                freq(totalSum) = freq(totalSum) + 1

                totalSum
            }
        }

        val temp = solve(root)


        val ans = freq.toList.map(el => el._2).max
        val res = freq.toList.filter(el => el._2 == ans).map(el =>el._1).toArray
        res
    }
}
```