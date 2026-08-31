# ✅ 100% 🔦 2 solution || inner recursion func || understandable || optimized

**Author:** sunnoca
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4239628/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4239628/)

---

# Please Upvote \uD83D\uDD1D Appreciations!
![image.png](./images/0.png)


# Complexity
- Time complexity: **O(n)**
- Space complexity: **O(n)**
# Code
```
class Solution {
    fun averageOfSubtree(root: TreeNode?): Int {
        var res = 0

        fun TreeNode.calcNode(): Pair<Int, Int> {
            var avg = this.`val` to 1   // sum to count

            this.left?.calcNode()?.also { avg = avg.first + it.first to avg.second + it.second }
            this.right?.calcNode()?.also { avg = avg.first + it.first to avg.second + it.second }
            if (this.`val` == avg.first / avg.second) res++

            return avg
        }

        root?.calcNode()
        return res
    }
}
```
I refactored solution [@mobdev778](https://leetcode.com/mobdev778/) 
[source solution](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4238270/kotlin-short-and-elegant-solution-beats-100/)
![image.png](./images/1.png)
```
class Solution {
    fun averageOfSubtree(root: TreeNode?): Int {
        var res = 0

        fun TreeNode.visitNode(): Int {
            var nodes = 1
            val value = this.`val`

            this.left?.let {
                nodes += it.visitNode()
                this.`val` += it.`val`
            }

            this.right?.let {
                nodes += it.visitNode()
                this.`val` += it.`val`
            }

            if (value == this.`val` / nodes) res++

            return nodes
        }
        root?.visitNode()
        
        return res
    }
}
```