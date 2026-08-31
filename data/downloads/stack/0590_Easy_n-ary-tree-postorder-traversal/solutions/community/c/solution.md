# C++ iterative without reverse

**Author:** Dan0907
**Votes:** 72
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/281510/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/281510/)

---

The extra integer in the stack represents the index of the child to push.
```
class Solution {
public:
    vector<int> postorder(Node* root) {
        if (!root) {
            return {};
        }
        std::stack<std::pair<Node *, int>> s;
        std::vector<int> res;
        s.emplace(root, 0);
        while (!s.empty()) {
            auto &[node, index] = s.top();
            if (index == node->children.size()) {
                res.push_back(node->val);
                s.pop();
            } else {
                s.emplace(node->children[index++], 0);
            }
        }
        return res;
    }
};
```