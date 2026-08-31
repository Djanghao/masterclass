# C++ iterative & recursive solutions

**Author:** IgorB
**Votes:** 6
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/558702/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/558702/)

---

Iterative:
```
class Solution {
    public:
        Node* treeToDoublyList(Node* root) 
        {
            if(!root) return nullptr;
            Node* head = nullptr;
            Node* node = root;
            Node* prev = nullptr;
            stack<Node*> st;
            while(st.size() || node)
            {
                while(node)
                {
                    st.push(node);
                    node = node->left;
                }
                node = st.top(); st.pop();
                if(!prev) 
                    head = node;
                else 
                {
                    prev->right = node;
                    node->left = prev;
                }
                prev = node;
                node = node->right;
            }
            prev->right = head;
            head->left = prev;
            return head;
        }
};
```
Recursive:
```
class Solution {
    public:
        Node* treeToDoublyList(Node* root) 
        {
            if(!root) return nullptr;
            Node* head = nullptr;
            Node* prev = nullptr;
            inOrder(root, prev, head);
            prev->right = head;
            head->left = prev;
            return head;
        }

    protected:
        void inOrder(Node* node, Node*& prev, Node*& head)
        {
            if(node->left) inOrder(node->left, prev, head);
            if(!prev) 
                head = node;
            else
            {
                prev->right = node;
                node->left = prev;
            }
            prev = node;
            if(node->right) inOrder(node->right, prev, head);
            
        }
};
```
