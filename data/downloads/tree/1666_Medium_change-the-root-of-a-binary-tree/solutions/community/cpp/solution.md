# C++ | clean | short

**Author:** shubhamchandra01
**Votes:** 1
**Link:** [https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/5012607/](https://leetcode.com/problems/change-the-root-of-a-binary-tree/solutions/5012607/)

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
// I CRIED getting it to work as per test case !!

class Solution {
	

public:
    Node* flipBinaryTree(Node* root, Node * leaf) {
		
		Node* rt = leaf;
		Node* prev = NULL;
		while (true) {
 			Node* pnode = rt->parent;
			rt->parent = prev;

			prev = rt;
            
            if (pnode == NULL) break;

            // update left or right of current / rt  only if you have a parent. Set left to the parent node / pnode

            if (rt->left != NULL) {
                rt->right = rt->left;
            }
			rt->left = pnode; // left child is parent
            
            if (pnode->left == rt) pnode->left = NULL;
            else pnode->right = NULL;
			rt = pnode;
		}
		return leaf;
    }

};
```