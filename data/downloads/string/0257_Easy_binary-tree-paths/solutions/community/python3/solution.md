# 😎Brute Force to Efficient Method🤩 | Java | C++ | Python | JavaScript | C#

**Author:** Akhilesh21
**Votes:** 52
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/4091706/](https://leetcode.com/problems/binary-tree-paths/solutions/4091706/)

---


# 1st Method :- Brute Force
<!-- Describe your first thoughts on how to solve this problem. -->
> This brute force solution would be to perform a depth-first traversal of the binary tree and, at each node, generate all possible paths from the root to that node. We can use a recursive approach to traverse the tree and construct paths as we go.

### Steps
1. Start at the root of the tree.
2. Initialize an empty list (ArrayList) to store the paths.
3. Define a recursive function (`dfs`) that takes the current node, the current path, and the list of paths as parameters.
4. In the `dfs` function:
    - If the current node is null, return.
    - Append the current node's value to the current path as a string.
    - If the current node is a leaf node (both left and right children are null):
        - Convert the current path to a string and add it to the list of paths.
    - Recursively call `dfs` on the left child with the updated path.
    - Recursively call `dfs` on the right child with the updated path.
5. Call the `dfs` function starting from the root node with an empty path and the list of paths.
6. Return the list of paths.

# Code
``` Java []
class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> result = new ArrayList<>();
        dfs(root, "", result);
        return result;
    }

    private void dfs(TreeNode node, String path, List<String> result) {
        if (node == null) return;
        //Append the current node's value to the path.
        path += node.val;

        //If it's a leaf node, add the path to the result list.
        if (node.left == null && node.right == null) {
            result.add(path);
        } else {
            path += "->";// Separate nodes in the path.
            dfs(node.left, path, result);
            dfs(node.right, path, result);
        }
    }
}
```
``` C++ []
class Solution {
    public:
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> result;
        dfs(root, "", result);
        return result;
    }

    void dfs(TreeNode* node, string path, vector<string>& result) {
        if (!node) return;
        path += to_string(node->val);
        if (!node->left && !node->right) {
            result.push_back(path);
        } else {
            dfs(node->left, path + "->", result);
            dfs(node->right, path + "->", result);
        }
    }
};
```
``` Python []
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        def dfs(node, path, result):
            if not node:
                return
            path += str(node.val)
            if not node.left and not node.right:
                result.append(path)
            else:
                dfs(node.left, path + '->', result)
                dfs(node.right, path + '->', result)

        result = []
        dfs(root, '', result)
        return result 
```
``` Javascript []
var binaryTreePaths = function(root) {
    const paths = [];

    function dfs(node, path) {
        if (!node) return;
        path.push(node.val.toString());
        if (!node.left && !node.right) {
            paths.push(path.join('->'));
        } else {
            dfs(node.left, path.slice()); // Copy the path array
            dfs(node.right, path.slice()); // Copy the path array
        }
    }
    
    dfs(root, []);
    return paths;
};
```
```C# []
public class Solution {
    public IList<string> BinaryTreePaths(TreeNode root) {
        List<string> result = new List<string>();
        DFS(root, "", result);
        return result;
    }

    private void DFS(TreeNode node, string path, List<string> result) {
        if (node == null) return;
        path += node.val.ToString();
        if (node.left == null && node.right == null) {
            result.Add(path);
        } else {
            DFS(node.left, path + "->", result);
            DFS(node.right, path + "->", result);
        }
    }
}
```
# if(UpVote)? Good Bless You :(
![upvote.png](./images/0.png)


# 2nd Method :- Efficient Method
In the efficient approach, we aim to minimize unnecessary string concatenations and improve overall performance. Here are the steps:
### Steps
1. Start at the root of the tree.
2. Initialize an empty list (ArrayList) to store the paths and an empty StringBuilder to represent the current path.
3. Define a recursive function (dfs) that takes the current node, the current path, and the list of paths as parameters.
4. In the dfs function:
    - If the current node is null, return.
    - Append the current node's value to the current path using StringBuilder.
    - If the current node is a leaf node (both left and right children are null):
        - Convert the current StringBuilder to a string and add it to the list of paths.
    - Recursively call dfs on the left child with the updated path StringBuilder.
    - Recursively call dfs on the right child with the updated path StringBuilder.
5. Call the dfs function starting from the root node with an empty path StringBuilder and the list of paths.
6. Return the list of paths.

# Code 
``` java []
class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> result = new ArrayList<>();
        dfs(root, new StringBuilder(), result);
        return result;
    }

    private void dfs(TreeNode node, StringBuilder path, List<String> result) {
        if (node == null) return;
        int len = path.length();
        if (len > 0) {
            path.append("->");
        }
        path.append(node.val);
        if (node.left == null && node.right == null) {
            result.add(path.toString());
        } else {
            dfs(node.left, path, result);
            dfs(node.right, path, result);
        }
        path.setLength(len); // Backtrack by resetting the StringBuilder
    }
}
```
``` C++ []
class Solution {
    public:
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> result;
        vector<int> path;
        dfs(root, path, result);
        return result;
    }
    void dfs(TreeNode* node, vector<int>& path, vector<string>& result) {
        if (!node) return;
        path.push_back(node->val);
        if (!node->left && !node->right) {
            string pathStr;
            for (int i = 0; i < path.size(); ++i) {
                pathStr += to_string(path[i]);
                if (i < path.size() - 1) {
                    pathStr += "->";
                }
            }
            result.push_back(pathStr);
        } else {
            dfs(node->left, path, result);
            dfs(node->right, path, result);
        }
        path.pop_back();
    }

};
```
``` Python []
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        def dfs(node, path, result):
            if not node:
                return
            path.append(str(node.val))
            if not node.left and not node.right:
                result.append('->'.join(path))
            else:
                dfs(node.left, path, result)
                dfs(node.right, path, result)
            path.pop()  # Backtrack by removing the last element

        result = []
        dfs(root, [], result)
        return result
```
``` Javascript []
var binaryTreePaths = function(root) {
    const paths = [];

    function dfs(node, path) {
        if (!node) return;
        path.push(node.val.toString());
        if (!node.left && !node.right) {
            paths.push(path.join('->'));
        } else {
            if (node.left) {
                dfs(node.left, path);
                path.pop();
            }
            if (node.right) {
                dfs(node.right, path);
                path.pop();
            }
        }
    }

    dfs(root, []);
    return paths;
};
```
```C# []
public class Solution {
    public IList<string> BinaryTreePaths(TreeNode root) {
        List<string> result = new List<string>();
        List<int> path = new List<int>();
        DFS(root, path, result);
        return result;
    }

    private void DFS(TreeNode node, List<int> path, List<string> result) {
        if (node == null) return;
        path.Add(node.val);
        if (node.left == null && node.right == null) {
            result.Add(string.Join("->", path));
        } else {
            DFS(node.left, path, result);
            DFS(node.right, path, result);
        }
        path.RemoveAt(path.Count - 1);
    }
}
```





# Java, detail explanation for brute force 

### Steps
1. ***Method Signature***: Define a method called binaryTreePaths that takes the root of the binary tree as its input and returns a list of strings representing the paths.

2. ***Initialize Result List***: Create an empty ArrayList called paths to store the paths that we find in the binary tree.

3. ***Recursive Helper Function***: Define a recursive helper function called constructPaths. This function will be responsible for constructing paths as we traverse the binary tree.

4. ***Base Case***: Inside the constructPaths function, check if the current node is null. If it is, return, as there's nothing to do for a null node.

5. ***Path Construction***: 
    - Append the value of the current node to the currentPath string. This represents adding the current node to the path.
    - If the current node is a leaf node (both left and right children are null), add the currentPath to the paths list. We've found a complete path from the root to a leaf node.
    - If the current node is not a leaf node, add the arrow symbol "->" to the currentPath to separate nodes in the path.

6. ***Recursive Calls***: Recursively call the constructPaths function for the left and right children of the current node. This step explores all possible paths in the binary tree.

7. ***Backtracking***: After processing the left and right subtrees of the current node, backtrack by removing the current node's value (and the "->" separator, if added) from the currentPath. This is important to avoid mixing paths when backtracking to different nodes.

8. ***Return Result***: Finally, after traversing the entire tree and adding paths to the paths list, return the paths list as the output.

# Java, detail explanation for Efficient Method

1. ***Method Signature***: Define a method called binaryTreePaths that takes the root of the binary tree as its input and returns a list of strings representing the paths.

2. ***Initialize Result List***: Create an empty ArrayList called paths to store the paths that we find in the binary tree.

3. ***Initialize StringBuilder***: Create a StringBuilder called currentPath to keep track of the current path as we traverse the tree. StringBuilder is used because it allows efficient string manipulation (append and remove).

4. ***Recursive Helper Function***: Define a recursive helper function called constructPaths. This function will be responsible for constructing paths as we traverse the binary tree.

5. ***Base Case***: Inside the constructPaths function, check if the current node is null. If it is, return, as there's nothing to do for a null node.

6. ***Path Construction***:
    - Check the length of the currentPath. If it's not empty, add the arrow symbol "->" to separate nodes in the path.
    - Append the value of the current node to the currentPath using StringBuilder. This represents adding the current node to the path.
    - If the current node is a leaf node (both left and right children are null), add the currentPath.toString() to the paths list. We've found a complete path from the root to a leaf node.

7. ***Recursive Calls***: Recursively call the constructPaths function for the left and right children of the current node. This step explores all possible paths in the binary tree.

8. ***Backtracking***: After processing the left and right subtrees of the current node, backtrack by setting the length of the currentPath back to its previous length. This removes the current node's value (and the "->" separator, if added) from the currentPath. This is important to avoid mixing paths when backtracking to different nodes.

9. ***Return Result***: Finally, after traversing the entire tree and adding paths to the paths list, return the paths list as the output.