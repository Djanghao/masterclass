# Scala solution with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4280231/](https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4280231/)

---

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
  // Method to find the mode(s) (most frequent elements) in a binary tree.
  def findMode(root: TreeNode): Array[Int] = {
    
    // Tail-recursive helper function to traverse the tree.
    @scala.annotation.tailrec
    def loop(
      unvisited: List[TreeNode], // List of nodes yet to be visited.
      freqMap: Map[Int, Int]     // Map to keep track of the frequency of each value.
    ): Array[Int] =
      unvisited match {
        case Nil =>
          // When no more nodes are left to visit, find the maximum frequency.
          val maxFreq = freqMap.values.max
          // Filter the frequencies to find all values with the maximum frequency and convert them to an array.
          freqMap.filter(_._2 == maxFreq).keys.toArray
        case null :: tail =>
          // If the current node is null, continue with the remaining nodes.
          loop(tail, freqMap)
        case node :: tail =>
          // Update frequency map with the current node's value and continue traversal.
          loop(
            node.left :: node.right :: tail, // Add the left and right children of the current node to the list.
            freqMap.updated(node.value, freqMap(node.value) + 1) // Increment the count of the current node's value.
          )
      }

    // Initialize the loop with the root node and an empty frequency map.
    loop(List(root), Map.empty.withDefaultValue(0))
  }
}

```