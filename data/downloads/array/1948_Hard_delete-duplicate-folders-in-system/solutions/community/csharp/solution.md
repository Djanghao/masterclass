# C# Tree Serialization and Hashing

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/5771849/](https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/5771849/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Tree Representation: When given a list of folder paths, we can represent the file structure as a tree, where each folder is a node, and subfolders are children of that node.

- Duplicate Detection: To detect duplicates, we need a way to uniquely identify the structure of a subtree. A simple idea is to convert the subtree into a string (or other comparable representation) that captures both the folder names and the hierarchical structure. If two folders produce the same string, they must have identical subtrees.

- Serialization: Since the problem involves hierarchical data (subfolders inside folders), it naturally suggests a recursive approach to traverse the structure from the bottom up (post-order traversal), serialize subtrees, and use a dictionary to count occurrences of each subtree.

- Duplicate Pruning: Once we identify subtrees that appear more than once, we can safely prune them, ensuring that any folder containing a duplicate subtree is marked for deletion.
___

# Approach
<!-- Describe your approach to solving the problem. -->
- Build the tree as before, where each node represents a folder.
- Use a recursive serialization function to convert each subtree to a unique string that can be used for comparison.
- Track subtree occurrences using a map to count how often each serialized subtree occurs.
- Mark duplicates based on subtree serialization and recursively traverse the tree to identify and delete duplicates.
- Return valid paths, ensuring only duplicate subtrees are removed.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(L), where 'L' is the total length of all paths.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(L).
___

# Code
```csharp []
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    // Node class to represent the tree structure
    public class Node {
        public string name;
        public Dictionary<string, Node> children;
        public Node(string name) {
            this.name = name;
            this.children = new Dictionary<string, Node>();
        }
    }
    
    public IList<IList<string>> DeleteDuplicateFolder(IList<IList<string>> paths) {
        // Root of the tree
        Node root = new Node("/");

        // Build the tree from the given paths
        foreach (var path in paths) {
            AddPath(root, path);
        }

        // Dictionary to store serialized subtree structures and their frequency
        Dictionary<string, int> subtreeCount = new Dictionary<string, int>();
        Dictionary<Node, string> nodeToSerialization = new Dictionary<Node, string>();
        
        // Post-order traversal to serialize subtrees and count them
        SerializeSubtree(root, subtreeCount, nodeToSerialization);

        // List to collect remaining paths after removing duplicates
        IList<IList<string>> remainingPaths = new List<IList<string>>();
        
        // Traverse the tree again to collect valid paths
        CollectPaths(root, new List<string>(), remainingPaths, subtreeCount, nodeToSerialization);
        
        return remainingPaths;
    }
    
    // Helper method to add a path to the tree
    private void AddPath(Node root, IList<string> path) {
        Node current = root;
        foreach (var dir in path) {
            if (!current.children.ContainsKey(dir)) {
                current.children[dir] = new Node(dir);
            }
            current = current.children[dir];
        }
    }
    
    // Helper method to serialize a subtree and count the frequency of each serialization
    private string SerializeSubtree(Node node, Dictionary<string, int> subtreeCount, Dictionary<Node, string> nodeToSerialization) {
        if (node.children.Count == 0) return ""; // Leaf node
        
        // Serialize the subtree rooted at this node
        List<string> serializedChildren = new List<string>();
        foreach (var child in node.children.Values) {
            serializedChildren.Add(child.name + "(" + SerializeSubtree(child, subtreeCount, nodeToSerialization) + ")");
        }
        
        serializedChildren.Sort(); // Sort to ensure identical structures have the same serialization
        string serialized = string.Join(",", serializedChildren);
        
        // Count the serialized structure
        if (subtreeCount.ContainsKey(serialized)) {
            subtreeCount[serialized]++;
        } else {
            subtreeCount[serialized] = 1;
        }
        
        nodeToSerialization[node] = serialized;
        return serialized;
    }
    
    // Helper method to collect valid paths (those not marked for deletion)
    private void CollectPaths(Node node, List<string> currentPath, IList<IList<string>> remainingPaths, Dictionary<string, int> subtreeCount, Dictionary<Node, string> nodeToSerialization) {
        if (node == null) return;

        // Serialize the subtree to check if it has duplicates
        if (nodeToSerialization.ContainsKey(node)) {
            string serialized = nodeToSerialization[node];

            // If this subtree occurs more than once, skip this subtree
            if (subtreeCount.ContainsKey(serialized) && subtreeCount[serialized] > 1) {
                return;
            }
        }

        // Add the current path to remaining paths if not the root node
        if (!node.name.Equals("/")) {
            remainingPaths.Add(new List<string>(currentPath));
        }

        // Recursively collect paths from child nodes
        foreach (var child in node.children) {
            currentPath.Add(child.Key);
            CollectPaths(child.Value, currentPath, remainingPaths, subtreeCount, nodeToSerialization);
            currentPath.RemoveAt(currentPath.Count - 1);
        }
    }
}
```