# Easy to understand dfs with maps

**Author:** grabber
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/4340423/](https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/4340423/)

---

There are some other more elegant and effective solutions posted already. This one is easy and straightforward. 

# Code
```
/**
 * Definition for a binary tree node.
 * struct Node {
 *     char val;
 *     Node *left;
 *     Node *right;
 *     Node() : val(' '), left(nullptr), right(nullptr) {}
 *     Node(char x) : val(x), left(nullptr), right(nullptr) {}
 *     Node(char x, Node *left, Node *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
    void dfs(Node* node, unordered_map<char, int>& m) {
        if (!node)
            return;
        if (node->val != '+')
            m[node->val]++;
        dfs(node->left, m);
        dfs(node->right, m);
    }
public:
    bool checkEquivalence(Node* root1, Node* root2) {
        unordered_map<char, int> m1;
        unordered_map<char, int> m2;
        dfs(root1, m1);
        dfs(root2, m2);
        for (const auto [c, count] : m1) {
            if (m2.count(c) == 0 || count != m2[c])
                return false;
            else
                m2.erase(c);
        }
        return m2.empty();
    }
};
```