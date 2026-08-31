# C# | Recursion | Tree algorithm

**Author:** jianminchen
**Votes:** 0
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/3845021/](https://leetcode.com/problems/clone-n-ary-tree/solutions/3845021/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I like to warmup algorithms and it is time for me to solve another 10 medium level tree algorithms. 
# Approach
<!-- Describe your approach to solving the problem. -->
The problem can be solved using recursion. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/*
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> children;
    
    public Node() {
        val = 0;
        children = new List<Node>();
    }

    public Node(int _val) {
        val = _val;
        children = new List<Node>();
    }
    
    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
}
*/


public class Solution {
    public Node CloneTree(Node root) {
         if (root == null)
            {
                return null;
            }

            var rootCopy = new Node(root.val);

            rootCopy.children = new List<Node>();

            foreach (var child in root.children)
            {
                rootCopy.children.Add(this.CloneTree(child));
            }

            return rootCopy; 
    }
}
```