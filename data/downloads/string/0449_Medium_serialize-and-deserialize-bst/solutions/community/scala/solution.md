# scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/4235095/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/4235095/)

---

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(var _value: Int) {
 *   var value: Int = _value
 *   var left: TreeNode = null
 *   var right: TreeNode = null
 * }
 */
class Codec {
  // Function to serialize a binary tree rooted at `root` into a comma-separated string.
  def serialize(root: TreeNode): String = {
    // If the root is null, return an empty string.
    if (root == null) ""
    else {
      // Initialize a queue to hold the tree nodes for level-order traversal.
      val queue = scala.collection.mutable.Queue[TreeNode]()
      queue.enqueue(root)
      
      // Initialize an empty string to hold the serialized data.
      var result = ""
      
      // Perform level-order traversal.
      while (queue.nonEmpty) {
        val node = queue.dequeue()
        
        // If the node is not null, append its value to the result string.
        if (node != null) {
          result += node.value + ","
          queue.enqueue(node.left)
          queue.enqueue(node.right)
        } else {
          // If the node is null, append "null" to the result string.
          result += "null,"
        }
      }
      result
    }
  }

  // Function to deserialize a comma-separated string into a binary tree.
  def deserialize(data: String): TreeNode = {
    // If the input string is empty, return null.
    if (data.isEmpty) null
    else {
      // Split the input string by commas.
      val values = data.split(",")
      
      // Create the root of the tree.
      val root = new TreeNode(values(0).toInt)
      val queue = scala.collection.mutable.Queue[TreeNode]()
      queue.enqueue(root)
      
      // Initialize index for traversal through `values`.
      var i = 1
      
      // Reconstruct the binary tree using level-order traversal.
      while (i < values.length) {
        val parent = queue.dequeue()
        
        // Reconstruct the left child.
        if (values(i) != "null") {
          val left = new TreeNode(values(i).toInt)
          parent.left = left
          queue.enqueue(left)
        }
        i += 1
        
        // Reconstruct the right child.
        if (values(i) != "null") {
          val right = new TreeNode(values(i).toInt)
          parent.right = right
          queue.enqueue(right)
        }
        i += 1
      }
      root
    }
  }
}



/**
 * Your Codec object will be instantiated and called as such:
 * val ser = new Codec()
 * val deser = new Codec()
 * val tree: String = ser.serialize(root)
 * val ans = deser.deserialize(tree)
 * return ans
 */
```