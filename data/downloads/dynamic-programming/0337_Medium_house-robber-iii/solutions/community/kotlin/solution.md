# DP beats 100% soln | same template as House Robber 1 and 2

**Author:** sanskarpatidar
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/5945775/](https://leetcode.com/problems/house-robber-iii/solutions/5945775/)

---



# Approach
*****All things are same just instead of using a DP matrix, we use a HashMap dp to store our answers for parameters --> TreeNode?, previouslyLooted(boolean)*****

# Time complexity
*Since number of parameters are 2 which can at max be n and 2 respectively -->
TC == O(2N)*

# Code
```kotlin []
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    private fun robIt(root: TreeNode?, prevLooted: Boolean, dp: HashMap<Pair<TreeNode?, Boolean>, Int>): Int{
        if(root == null)return 0
        if(dp.containsKey(Pair(root, prevLooted)))return dp[Pair(root, prevLooted)]!!

        var notTake = robIt(root.left, false, dp) + robIt(root.right, false, dp)

        var take = Int.MIN_VALUE
        if(!prevLooted){
            take = root.`val` + robIt(root.left, true, dp) + robIt(root.right, true, dp)
        }

        dp[Pair(root, prevLooted)] = max(notTake, take)
        return dp[Pair(root, prevLooted)]!!
    }
    fun rob(root: TreeNode?): Int {
        val dp = HashMap<Pair<TreeNode?, Boolean>, Int>()
        return robIt(root, false, dp)//passing false since we haven't looted our previous adjacent or 
        //should i say prev adjacent does not exist for root
    }
}
```