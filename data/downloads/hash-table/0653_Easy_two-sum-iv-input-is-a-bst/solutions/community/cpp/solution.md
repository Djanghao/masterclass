# Easy C++ solution + Detailed Explanation. O(n) Time O(log n) space

**Author:** shivamprakashsp
**Votes:** 57
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1226659/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1226659/)

---

##### The solution discussed below takes O(n) time, O(Logn) space and doesn\u2019t modify BST. 
##### We traverse BST in Normal Inorder and Reverse Inorder simultaneously. 
##### In reverse inorder, we start from the rightmost node which is the maximum value node. In normal inorder, we start from the left most node which is minimum value node. 
##### We add sum of current nodes in both traversals and compare this sum with given target sum which will give 3 cases:
##### Case 1:
	 If the sum is same as target sum, we return true.
##### Case 2:
	If the sum is more than target sum, we move to next node in reverse inorder traversal, 
##### Case 3:
	We move to next node in normal inorder traversal. 
If any of the traversals is finished without finding a pair, we return false. 
   
#####  Code :-
   
	   bool findTarget(TreeNode* root, int target) {
        
       if(!root) return false;

        stack<TreeNode*> s1, s2;
        TreeNode* temp1 = root;
        TreeNode* temp2 = root;


        while(1)
        {
            while(temp1)
            {
                s1.push(temp1);
                temp1 = temp1->left;
            }

            while(temp2)
            {
                s2.push(temp2);
                temp2 = temp2->right;
            }

            if(s1.empty() || s2.empty()) break;

            temp1 = s1.top();
            temp2 = s2.top();

            if((temp1->val + temp2->val) == target)
            {
                if(temp1 == temp2) return false;

                return true;
            }

            else if((temp1->val + temp2->val) < target)
            {
                s1.pop();
                temp1 = temp1->right;
                temp2 = NULL;
            }
            else
            {
                s2.pop();
                temp2 = temp2->left;
                temp1 = NULL;
            }
        }

        return false;
    }