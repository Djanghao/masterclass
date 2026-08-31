# binary search | lower and upper bound

**Author:** nova_404
**Votes:** 7
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2831894/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2831894/)

---

If you wanna clear your doubts related to lower bound and upper bound do this problem , it helps.
my approach: 
1. converting the binary tree into a single array , since the binary search tree's inorder traversal is always sorted we can perform binary search on it.
2. the query part (i broke the question down into subparts and computed all the queries one by one using a loop.

*    calculating the lower of the query:-
1. we store the value returned by lower bound rather the index. 
2. we check if the index returned is within the array , i mean its not out of bound if yes we enter the if condition else we return the last element of the array is the closest to that query will be that element itself.
3. inside the if we check if the value at the returned index is equal to the query or not if yes we insert the answer as same, else we decrease the index by one **since in lower bound if the element is not found in the array it returns the next greatest element**
4. if the value of the index after computation is less than 0 we simply insert -1.
5. else we insert the value at that index.

* now for the upper boundry 
1. we check for the upper bound but if the value itself is present the upper boundry is the same as the query , we check that.
2. if the upper bound value is within the array we return that as an answer.
3. else its -1 always as it doesnt exist.

**The entire catch that i found was there's no inbuilt fucntion that returns the value of the lower boundry of the number in a sorted array so all we had to do is find the lower bound of the array and decrease the value of returned index by one if query not found else return the query itself.**
```
class Solution {
public:
    void inorder(TreeNode* root, vector<int> &arr)
    {
        if(root==NULL)
            return;
        else
        {
            inorder(root->left,arr);
            arr.push_back(root->val);
            inorder(root->right,arr);
        }
    }
    vector<vector<int>> closestNodes(TreeNode* root, vector<int>& q) {
        vector<int> arr;
        inorder(root,arr);
        int n = arr.size();
        vector<vector<int>> ans;
        for(int i =0;i<q.size();i++)
        {
           
            int l = lower_bound(arr.begin(),arr.end(),q[i])-arr.begin();
            if(l>=0 && l<n)
            {
                if(arr[l]!=q[i])
                   l-=1;
                if(l<0)
                    l=-1;
                else
                   l=arr[l];
            }
            else
            {
                l=arr.back();
            }
            
                
            int h = upper_bound(arr.begin(),arr.end(),q[i])-arr.begin();
            if(l!=-1 && q[i]==l)
                h=q[i];
            else if(h>=0 && h<n)
            {
                h=arr[h];
            }
            else
            {
                h=-1;
            }
            ans.push_back({l,h});
        }
        return ans;
    }
};
```
This probably as not that concise a explanation but hey you can always ask if you got a doubt. 
Thanks for reading it till here if you did.