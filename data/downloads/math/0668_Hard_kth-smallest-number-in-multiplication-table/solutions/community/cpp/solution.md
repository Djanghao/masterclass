# [C++] Easiest Binary Search Solution, Clean Code (W/ Clear Explanation)

**Author:** Mythri_Kaulwar
**Votes:** 17
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1580478/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1580478/)

---

Firstly, thanks for refering to my solution and please upvote if you like it :)
The aim here is to find the kth smallest element in the multiplication table. 
We can think of adding all the elements to a 'multiset' and returning the kth element from the beginning. But that would require O(m*x*n) time but the upper bound of m*x*n = 9x10^8 which is huge. 
So we can think of a solution that has logarithmic time complexity, hence **Binary Search**.

* Using Binary Search, we **search in the range of [0, m*x*n]** (Since the highest element in the multiplication table is m*x*n) and check if the 'mid' element is the kth smallest element.
* How do we do that? **We check if there are atleast 'k' elements present in the multiplication table that are smaller than or equal to the 'mid' element** - This we can do very easily.

If we look at the multiplication table, 
```
     (1)        (2)        (3)  --- n
(1)   1          2          3

(2)   2          4          6

(3)   3          6          9
 '
 '
 m
 ```
*   We have 'n' elements  in each row ```i``` and 'm' rows. That is, in each row, we have 
    (1*x*i, 2*x*i, 3*x*i, 4*x*i, 5*x*i, ....n*x*i)
*   So we can traverse through each row and find how how many elements are smaller than or equal to 'mid'.
 This we do as follows : 
 Let us say, in a row 'i' there are 'X' elements smaller than 'mid' i.e; 
 ```
 X*i <= mid
 X <= mid/i
 ``` 
But we have to make sure that 'X' doesn't exceed 'n' (Since the max elements in a row is 'n').
Hence,  we take min(X, n) from each row that are smaller than or equal to 'mid'. 
If after iterating through all rows, 
   1.   If we have more elements than 'k' that are smaller than or equal to 'mid', then we need to do decrement our range of binary search to [l, mid], since for the obtained mid, there are more than 'k' smaller elements we we don't need.
   2.   Else, if we have less than k elements smaller than mid then mid or any integer smaller than that can't be our answer. So we decrement our search space to [mid+1, r]. 
 Finally we return the value for which there are atleast 'k' elements smaller than it in the table. 
 
**Time Complexity :** O(m*x*log(mn)) - Since, the Binary search takes O(log(mn)) time and in each binary search, we're traversing 'm' rows of the table to see how many elements are smaller than the obtained 'mid'. 
**Auxiliary Space :** O(1)

**Code : **
```
class Solution {
public:
    int countSmaller(int m, int n, int mid){
        int ans=0;
        for(int i=1;i<=m;i++) ans += min(n, mid/i);
        return ans;
    }
    int findKthNumber(int m, int n, int k) {
        int l=0, r=m*n, mid, res;
        
        while(l<=r){
            mid = l+(r-l)/2;
            
            if(countSmaller(m, n, mid) < k) l=mid+1;
            else r=mid-1;
        }
        return l;
    }
};
```

If you like my solution and explanation, please upvote!! :)
Suggestions or doubts are always welcome !
 
 

