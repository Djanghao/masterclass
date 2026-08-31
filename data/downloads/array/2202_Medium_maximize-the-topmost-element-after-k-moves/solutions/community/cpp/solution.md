# C++ || Greedy || Cases Discussed With Examples

**Author:** kevinujunior
**Votes:** 21
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1844141/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/1844141/)

---

Three main cases to be noticed:

1) Remove k elements (k+1th is maxm) 
**Example:**
``k = 7``
`` A = [1,2,3,4,5,6,7,8]``
optimal solution = remove top 7 elements then top will be 8

2) Remove k-1 elements then insert maxm element (maxm element lies in [0,k-1])
**Example:**
``k = 7 ``
`` A = [1,2,3,4,5,8,7,6]``
Optimal solution = remove top 6 elements and then insert 8



3) When **k>n (n>=2)**
We can remove all elements and insert top two or top 1 element
For Example: ``A = [1,2,3,4,5]``
``k=6``
Best solution: Remove all elements (5 moves) and insert max element (i.e 5) ( total moves = 6)
``k=7``
Best solution: Remove all elements (5 moves) insert 4 and then insert max element (i.e 5) (total moves = 7)
``k=8``
Best solution: Remove all elements (5 moves) insert max, remove max and then insert max again (total moves = 8)
Similarly we can do for any value of k, k>n

Code Referred From [Sushant Mishra](https://leetcode.com/sushantk_04/)

Time Complexity : **O(min(k,n))**

```
class Solution {
public:
    int maximumTop(vector<int>& nums, int k) {
   
        //if no moves given first element is max element
        if(k == 0) return nums[0];
        
        //if size is one we can remove one element and insert one element only when k is even
        if(k %2 != 0 && nums.size()==1) return -1;
        
        int n = nums.size();
        int i=0, maxm = 0;
        
        // Remove top k-1 elements and find maxm out of them
        while(i < n && i < k-1){
            maxm = max(maxm, nums[i]);
            i++;
        }
        
        int ans = 0;
        
        //We choose best from two options 
        //either remove k elements (k+1th is maxm) or remove k-1 elements then insert maxm element (maxm element lies in [0,k-1])
        if(k < n) ans = nums[k];
        return max(maxm, ans);
    }
};
```