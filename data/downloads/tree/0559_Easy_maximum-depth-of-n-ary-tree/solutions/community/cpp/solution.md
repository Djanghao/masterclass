# DFS & BFS solutions in C++.

**Author:** ttsugrii
**Votes:** 136
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/167010/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/167010/)

---

Recursive DFS:
```
class Solution {
public:
    int maxDepth(Node* root) {
        if (root == nullptr) return 0;
        int depth = 0;
        for (auto child : root->children) depth = max(depth, maxDepth(child));
        return 1 + depth;
    }
};
```

Recursive DFS without raw loops:
```
class Solution {
public:
    static int maxDepth(Node* root) {
        if (root == nullptr) return 0;
        return 1 + transform_reduce(begin(root->children), end(root->children), 0, [](int acc, int d) { return max(acc, d); }, [](auto* node) { return maxDepth(node); });
    }
};
```

Recursive DFS one-liner:
```
class Solution {
public:
    static int maxDepth(Node* root) {
        return root ? 1 + transform_reduce(begin(root->children), end(root->children), 0, [](int acc, int d) { return max(acc, d); }, [](auto* node) { return maxDepth(node); }) : 0;
    }
};
```

BFS:
```
class Solution {
public:
    int maxDepth(Node* root) {
        if (root == nullptr) return 0;
        queue<Node*> q; q.push(root);
        int depth = 0;
        while (!q.empty()) {
            depth += 1;
            int breadth = q.size();
            for (int _ = 0; _ < breadth; ++_) {
                auto node = q.front(); q.pop();
                for (auto child : node->children) if (child) q.push(child);
            }
        }
        return depth;
    }
};
```