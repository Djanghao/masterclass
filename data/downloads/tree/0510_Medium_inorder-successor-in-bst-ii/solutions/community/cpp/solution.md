# Beats 93% Runtime | 2 Cases | C++

**Author:** yetong_li
**Votes:** 1
**Link:** [https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/5056344/](https://leetcode.com/problems/inorder-successor-in-bst-ii/solutions/5056344/)

---

# Code
```cpp
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* parent;
};
*/

class Solution {
public:
    Node* inorderSuccessor(Node* node) {
      //2 cases
      //with right
      if(node->right!=nullptr){
        Node* p=node->right;
        while(p->left!=nullptr){
          p=p->left;
        }
        return p;
      }

      //no right
      Node* p=node->parent;
      Node* q=node;
      while(p!=nullptr&&p->left!=q){
        q=p;
        p=p->parent;
      }

      return p;
    }
};
```