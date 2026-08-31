# Kotlin | dfs + memo | O(N) & O(N)

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-cameras/solutions/2163131/](https://leetcode.com/problems/binary-tree-cameras/solutions/2163131/)

---

On each step we choose between place / not place. Also, caching memo[node] - answer starting with node.
```
class Solution {
    data class Key(val node:TreeNode, val a: Boolean, val b:Boolean)
    fun minCameraCover(root: TreeNode?): Int {
      val cache = mutableMapOf<Key, Int>()
      
      fun dfs(root:TreeNode?, parentPlaced:Boolean, mustPlace:Boolean) :Int {
          if (root == null) return if (mustPlace) Int.MAX_VALUE/2 else 0
          val key = Key(root, parentPlaced, mustPlace)
          if (cache[key] != null) return cache[key]!!
          val placed = 1 + dfs(root.left, true, false) + dfs(root.right, true, false)
          cache[key] =  if (mustPlace)  placed
               else if (parentPlaced) 
                  minOf(placed, dfs(root.left, false, false) + dfs(root.right, false, false))
               else  // !parentPlaced && !mustPlace
                  minOf(placed, 
                        dfs(root.left, false, true) + dfs(root.right, false, false),
                        dfs(root.left, false, false) + dfs(root.right, false, true)
                       )
              
          return cache[key]!!
      }  
      return dfs(root, false, false)
    }
}
```