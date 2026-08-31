# C#: Inorder traverse tree using IEnumerable

**Author:** romka-04
**Votes:** 5
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/3021415/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/3021415/)

---

# Intuition
Use DFS and traverse BST inorder. 

# Approach
The idea is to use one of key features of IEnumerable, namely Lazy Evaluation. The app should NOT enumerate through all collection and only traverses first K element(s). This should improve performance in contrast with approaches that uses List or Array structures.

This solution beats 99% (89 ms) execution time. Memory usage 42.8 MB (beats 10%).

# Complexity
- Time complexity: O(k)

- Space complexity: O(k) but I'm not sure.

# Code
```
public class Solution {
    public int KthSmallest(TreeNode root, int k) {

        return Inorder(root).Skip(k-1).Take(1).First();

        IEnumerable<int> Inorder(TreeNode node){
            if (node is not null){
                foreach(var n in Inorder(node.left)){
                    yield return n;
                }
                // Trace.WriteLine(node.val); // Output: 1, 2, .. k
                yield return node.val;
                foreach(var n in Inorder(node.right)){
                    yield return n;
                }
            }


        }
    }
}
```