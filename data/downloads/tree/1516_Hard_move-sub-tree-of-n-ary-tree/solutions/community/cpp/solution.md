# DFS, Detect Cases By Store Recursion Path with Hashset

**Author:** Benlegend
**Votes:** 0
**Link:** [https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/solutions/3818044/](https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/solutions/3818044/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    // remove child from parent children array
    // parent and child guaranteed to be valid
    // reduce children array size by 1
    void removeChild(Node* parent, Node* child) {
        int i = 0;
        for (; i < parent->children.size(); i++) {
            if (parent->children[i] == child) {
                break;
            }
        }


        for (; i + 1 < parent->children.size(); i++) {
            parent->children[i] = parent->children[i + 1];
        }

        parent->children.pop_back();
    }

    int dfs(Node* node, Node* p, Node* q, Node*& pp, Node*& pq, unordered_set<Node*>& s) {
        s.insert(node);

        for (int i = 0; i < node->children.size(); i++) {
            if (node->children[i] == p) {
                // record parent of p, for case 3
                pp = node;

                // p in subtree of q
                if (s.count(q)) {
                    return 2;
                }
            }

            // q in subtree of p
            if (node->children[i] == q) {
                pq = node;

                if (s.count(p)) {
                    return 1;
                }
            }

            int retval = dfs(node->children[i], p, q, pp, pq, s);
            if (retval > 0) {
                return retval;
            }
        }

        s.erase(node);
        return 0;
    }
public:
    // detect cases with a dfs, and gather necessary information
    // O(n) space and time
    Node* moveSubTree(Node* root, Node* p, Node* q) {
        // nodes in dfs path
        unordered_set<Node*> s;

        // parent of p, parent of q
        Node* pp = NULL, *pq = NULL;
        int ret = dfs(root, p, q, pp, pq, s);
        if (ret == 1) {
            assert(pq != NULL);
            // remove q from pq
            removeChild(pq, q);

            // p is root
            if (pp == NULL) {
                q->children.push_back(p);
                return q;
            }

            for (int i = 0; i < pp->children.size(); i++) {
                if (pp->children[i] == p) {
                    pp->children[i] = q;
                    break;
                }
            }

            q->children.push_back(p);
        } else if (ret == 2) {
            // not direct child
            if (pp != q) {
                removeChild(pp, p);
                q->children.push_back(p);
            }
        } else {
            // case 3
            // p must have parent, as p cannot be root
            removeChild(pp, p);
            q->children.push_back(p);
        }

        return root;
    }
};
```