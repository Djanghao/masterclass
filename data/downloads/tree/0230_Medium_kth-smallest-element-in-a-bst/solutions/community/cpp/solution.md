# I bet you will understand | Brute->Better->Optimal | Beginner Friendly | C++

**Author:** imraghavagr
**Votes:** 375
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/3469071/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/3469071/)

---

# (1) Naive Approach: 
## Intuition:
We can do traversal of the given tree using any traversal technique and store the node values in an array/vector. Then we can sort the array in ascending order such that the 1st smallest element comes at 0th index, 2nd smallest element at 1st index ... kth samllest element at k-1th index.

## Algorithm:
1. Initialize an empty vector 'v'.
2. Do any traversal (lets say preorder) and store the node values in v.
3. Sort vector v in ascending order.
4. Return v[k-1].

## Complexity:
- Time complexity: $$O(n)$$ + $$O(nlogn)$$ -> $$O(nlogn)$$
  O(n) for traversing the Tree and O(nlogn) for sorting the vector of size n.

- Space complexity:$$O(n)$$ + recursive stack space 

## Code
```
class Solution {
public:
    void preOrderTraversal(TreeNode* root, vector<int> &v){
        if(root == NULL)    return;
        
        //root, left, right 
        v.push_back(root->val);
        preOrderTraversal(root->left, v);
        preOrderTraversal(root->right, v);      
    }
    int kthSmallest(TreeNode* root, int k) {
        vector<int> v; 
        preOrderTraversal(root, v);
        sort(v.begin(), v.end());
        return v[k-1];
    }
};
```

# (2) Better Approach: 
## Why Better? 
In the above approach we are using an extra O(nlogn) for sorting the vector. We need to remove it somehow so that our time complexity boils down to O(n).

The naive approach of O(nlogn) can also be converted to O(nlogk) using priority queue as we do in the following array question.
https://leetcode.com/problems/kth-largest-element-in-an-array/

But, here I will be discussing only the O(n) one. 

## Intuition:
We know that the tree given to us is a Binary Search Tree, therefore, all the nodes at the left subtree of a given node will be less than the current node value and it will be less then all the nodes at the right subtree of that node.
i.e.

               N
              / \\
             L   R
        
             L<N<R in case of BST

So, we can take advantage of this and do an INORDER TRAVERSAL. The inorder traversal will always result in a sorted array and the extra NlogN that we were using for sorting will be omitted. 

## Algorithm
1. Initialize an empty vector 'v'.
2. Do an Inorder traversal and store the node values in v.
3. Return v[k-1].

## Complexity
- Time complexity: $$O(n)$$
  O(n) for traversing the Tree consisting of n nodes.
- Space complexity:$$O(n)$$ + recursive stack space 

## Code
```
class Solution {
public:
    void inOrderTraversal(TreeNode* root, vector<int> &v){
        if(root == NULL)    return;
        
        //left, root, right 
        inOrderTraversal(root->left, v);
        v.push_back(root->val);
        inOrderTraversal(root->right, v);      
    }
    int kthSmallest(TreeNode* root, int k) {
        vector<int> v; 
        inOrderTraversal(root, v);
        return v[k-1];
    }
};
```

# (3) Optimal Approach: O(N) time and O(1) space:

Approach 2 is fine, but there we are still creating an extra vector to store the node values. We can avoid it so that our space complexity further boils down to O(1).

## Intuition:
We need the kth smallest element. And, we know that our inorder traversal will first give the 1st smallest element, then 2nd smallest element ... and so on. 
So, instead of storing the node values inside a vector, we can maintain a 'cnt' variable to keep track if we have reached kth smallest value or not in the inorder traversal. And then, we can return the value once cnt reaches k value.

## Algorithm:
1. Initialize a variable, cnt = 0;
2. Do an Inorder traversal and instead of saving node->val in vector do a cnt++, denoting that we have encountered cnt th smallest element.
3. Return node->val once cnt == k.

## Complexity:
- Time complexity: $$O(n)$$
  O(n) for traversing the Tree consisting of n nodes.
- Space complexity:$$O(1)$$ + recursive stack space 

## Code:
```
class Solution {
public:
    void solve(TreeNode* root, int &cnt, int &ans, int k){
        if(root == NULL)    return;
        //left, root, right 
        solve(root->left, cnt, ans, k);
        cnt++;
        if(cnt == k){
            ans = root->val;
            return;
        }
        solve(root->right, cnt, ans, k);
    }
    int kthSmallest(TreeNode* root, int k) {
        
        int cnt = 0;        
        int ans;
        solve(root, cnt, ans, k);
        return ans;
    }
};
```

# Please upvote the solution if you understood it.

![NRRa.gif](./images/0.gif)