# ⭐ C++ || Binary Search Easy Explanation || Simple Solution⭐

**Author:** ritikakhanduri01
**Votes:** 48
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/2369163/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/2369163/)

---

**Kindly Upvote , if you like the solution\uD83D\uDC4D**


The Approach used here is  **BINARY SEARCH**
1. We will take l as matrix[0][0] and h as matrix[m-1][m-1] where m are the rows in matrix
2. Then find mid and count the no of elements < mid in each row 
3. if count < k means we have to find the greater mid so that count can become equal to k
4. else h =mid;
5. return l

**Acc to EXAMPLE 1 of testcase : l =1 and h=15 mid==>8 
then in matrix , we found that there are only 2 element lesser than mid but we have to find k elements , therefore we have to increment l by mid+1
else if count >k then decrement h by mid
if count == k return l**

```
class Solution {
public:
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        
 int n= matrix.size();        
        int l=matrix[0][0];
        int h = matrix[n-1][n-1];
        int mid;
        int count;
        while(l<h)
        {
            count=0;
            mid = l + (h-l)/2;
            
            for(int i=0;i<n;i++)
            {
                
             count += upper_bound(matrix[i].begin() , matrix[i].end(),mid) - matrix[i].begin();
                
            }
            
                if(count<k)
            {
                l =mid+1;
            }
            else
            {
                h=mid;
            }
            }
           
    
        
        return l;
		
		   }
};
```

**1st Approach Link** :- https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/discuss/2369108/Easy-C%2B%2B-Solution-Using-Priority-Queue-oror-Explanation-oror-Comments