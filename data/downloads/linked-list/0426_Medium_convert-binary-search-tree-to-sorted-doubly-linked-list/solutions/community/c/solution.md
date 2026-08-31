# C++ recursive solution(72ms) beats 100%

**Author:** GraceGy
**Votes:** 8
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/284942/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/284942/)

---


```
class Solution {
public:
    Node* head=NULL;
    Node* tail=NULL;
    Node* treeToDoublyList(Node* root) {
        if(!root) return NULL;
        dfs(root);
        head->left=tail;
        tail->right=head;
        return head;
    }
    void dfs(Node* root){
        if(!root) return;
        dfs(root->left);     
        if(!head) // find the leftmost as head
            head=root;
        else { // when head is found, tail is also set
            root->left=tail;
            tail->right=root; 
        }
        tail=root;
        dfs(root->right);
    }
};
```