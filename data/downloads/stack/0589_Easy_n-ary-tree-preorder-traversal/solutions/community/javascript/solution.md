# Very Easy || 100% || Fully Explained || Java, C++, Python, Python3 || Iterative & Recursive(DFS)

**Author:** PratikSen07
**Votes:** 130
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2496970/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2496970/)

---

# **Java Solution (Iterative Approach):**
```
class Solution {
    public List<Integer> preorder(Node root) {
        // To store the output array...
        List<Integer> output = new ArrayList<Integer>();
        // Base case: if the tree is empty...
        if (root == null) return output;
        // Create a stack of Node and push root to it...
        Stack<Node> st = new Stack<>();
        st.push(root);
        // Traverse till stack is not empty...
        while (!st.isEmpty()) {
            // Pop a Node from the stack and add it to the output list...
            Node node = st.pop();
            output.add(node.val);
            // Push all of the child nodes of the node into the stack from right to left...
            // Push from right to left to get the right preorder traversal...
            for (int idx = node.children.size() - 1; idx >= 0; idx--) {
                Node child = node.children.get(idx);
                st.push(child);
            }
        }
        return output;      // Return the output...
    }
}
```

# **C++ Solution (Recursive Approach):**
```
class Solution {
public:
    // To store the output result...
    vector<int> output;
    void traverse(Node* root) {
        // Base case: if the tree is empty...
        if(root == NULL) return;
        // Push the value of the root node to the output...
        output.push_back(root->val);
        // Recursively traverse each node in the children array...
        for(auto node:root->children)
            traverse(node);
    }
    vector<int> preorder(Node* root) {
        output.clear();
        traverse(root);
        return output;
    }
};
```

# **Python/Python3 Solution (Recursive Approach):**
```
class Solution(object):
    def preorder(self, root):
        # To store the output result...
        output = []
        self.traverse(root, output)
        return output
    def traverse(self, root, output):
        # Base case: If root is none...
        if root is None: return
        # Append the value of the root node to the output...
        output.append(root.val)
        # Recursively traverse each node in the children array...
        for child in root.children:
            self.traverse(child, output)
```
                
# **JavaScript Solution (Recursive Approach):**
```
var preorder = function(root, output = []) {
    // Base case: if the tree is empty...
    if (!root) return output
    // Push the value of the root node to the output...
    output.push(root.val)
    // Recursively traverse each node in the children array...
    for (let child of root.children)
        preorder(child, output)
    return output       // Return the output result...
};
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**