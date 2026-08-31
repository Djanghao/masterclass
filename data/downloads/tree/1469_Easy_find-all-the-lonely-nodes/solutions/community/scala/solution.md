# Scala | DFS | 100%

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/800379/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/800379/)

---

Here is the scala solution with DFS

```
def getLonelyNodes(root: TreeNode): List[Int] = {
        val ans = mutable.ListBuffer[Int]()
        def dfs(root: TreeNode, isLonely: Boolean): List[Int] = root match {
            case null => ans.toList
            case x => {
                if(isLonely)  ans += root.value

                dfs(root.left, root.right == null)
                dfs(root.right, root.left == null)
            }
        }

        dfs(root, false)
    }
```