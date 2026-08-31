# Scala

**Author:** kamikumakun
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-quad-tree/solutions/3241579/](https://leetcode.com/problems/construct-quad-tree/solutions/3241579/)

---

# Complexity
- Time complexity: O(N^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(LogN)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def construct(grid: Array[Array[Int]]): Node = {
        
        def isLeaf(root: Node): Boolean = {
            root.topLeft.isLeaf && 
            root.topRight.isLeaf && 
            root.bottomLeft.isLeaf && 
            root.bottomRight.isLeaf && 
            root.topLeft.value == root.topRight.value && 
            root.topRight.value == root.bottomLeft.value && 
            root.bottomLeft.value == root.bottomRight.value
        }

        def dfs(x: Int, y: Int, length: Int): Node = {
            
            if(length.equals(1)) new Node(grid(x)(y) == 1, true)
            else {
                val root = new Node(false, false)

                root.topLeft = dfs(x, y, length / 2)
                root.topRight = dfs(x, y + length / 2, length / 2)
                root.bottomLeft = dfs(x + length / 2, y, length / 2)
                root.bottomRight = dfs(x + length / 2, y + length / 2, length / 2)

                if(isLeaf(root)) new Node(root.topLeft.value, true)
                else root
            }
        }

        dfs(0, 0, grid.length)
    }
}
```