# Kotlin - Postorder Recursive

**Author:** idiotleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/1371656/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/1371656/)

---

```
/**
 * https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/
 *
 * Time Complexity:     O(N)
 * Space Complexity:    O(H)
 *
 * Reference:
 *  https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/discuss/101519/Neat-Java-Solution-Single-pass-O(n)/105240
 *  https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/discuss/101519/Neat-Java-Solution-Single-pass-O(n)
 */
class Solution {
    fun longestConsecutive(root: TreeNode?): Int = postorder(root).longest
    
    private fun postorder(node: TreeNode?): Res{
        if(node == null)
            return Res(0, 0, 0)
            
        val (leftInc, leftDec, leftLongest) = postorder(node.left)
        val (rightInc, rightDec, rightLongest) = postorder(node.right)
        
        val curVal = node.`val`
        
        var inc = 1
        var dec = 1
        
        node.left?.let{ 
            val leftSubVal = it.`val`
            if(curVal - leftSubVal == 1){
                dec = 1 + leftDec
            }else if(curVal - leftSubVal == -1){
                inc = 1 + leftInc
            }
        }
        
        node.right?.let{
            val rightSubVal = it.`val`
            if(curVal - rightSubVal == 1){
                dec = maxOf(dec, 1 + rightDec)
            }else if(curVal - rightSubVal == -1){
                inc = maxOf(inc, 1 + rightInc)
            }
        }
        
        val longest = maxOf(leftLongest, rightLongest, inc + dec - 1)
        return Res(inc, dec, longest)
    }
    
    private data class Res(val inc: Int, val dec: Int, val longest: Int)
}
```