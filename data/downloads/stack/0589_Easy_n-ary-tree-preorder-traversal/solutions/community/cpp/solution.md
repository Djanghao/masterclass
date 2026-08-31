# C++ solution explained | recursion | iteration

**Author:** coding_menance
**Votes:** 19
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2731751/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/2731751/)

---

We'll be using recusion on this question to solve this question. 
I've tried to explain the code as much as possible in the form of comments. Hope it helps :D

``` C++ []
class Solution {
public:
    vector<int> preorder(Node* root) {

        // we return an empty vector in case of null root, or when there is no node
        if (!root) return {};

        // Since this is pre-order traversal of the the tree, we're 
        // going to push the root into the result vector first 

        vector<int> v;

        // then we would proceed to push the other children nodes

        // we basically iterate through the children list and recursively
        // call the function on the child nodes and the returned 
        // vector is added to the current vector

        v.push_back(root->val);
        for (int i=0; i<root->children.size(); i++) {
            vector<int>v1 = preorder(root->children[i]);
            v.insert(v.end(), v1.begin(), v1.end());
        }
        return v;
    }
};
```

*Also don't forget to upvote if it helped you!*

![kitty.jpeg](./images/0.jpeg)
