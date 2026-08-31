# Scala solution

**Author:** minato_yukina
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/3597584/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/3597584/)

---

# Complexity
- Time complexity: O(N)
- Space complexity: O(H), where H is the height of the tree
# Code
```
object Solution {
    var path: Int = 0
    
    def oneChild(child: TreeNode, parent: TreeNode): (Int, Int) = {
        val tmp = dfs(child)
        
        if (parent.value + 1 == child.value) {
            val len = tmp._1 + 1
            path = path max len
            (len, 1)
        }
        else if (parent.value - 1 == child.value) {
            val len = tmp._2 + 1
            path = path max len
            (1, len)
        }
        else (1, 1)
    }

    def dfs(node: TreeNode): (Int, Int) = (node.left, node.right) match {
        case (null, null) => (1, 1)
        case (left, null) => oneChild(left, node)
        case (null, right) => oneChild(right, node)
        case (left, right) => {
            val l = oneChild(left, node)
            val r = oneChild(right, node)
            
            path = Seq(path, l._1 + r._2 - 1, l._2 + r._1 - 1).max
            (l._1 max r._1, l._2 max r._2)
        }
    }

    def longestConsecutive(root: TreeNode): Int = {
        path = 1
        dfs(root)
        path
    }
}
```