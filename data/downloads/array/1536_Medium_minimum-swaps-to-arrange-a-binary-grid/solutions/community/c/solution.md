# [C++] easy solution = greedy + prove + example

**Author:** codedayday
**Votes:** 51
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/768020/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/768020/)

---

Observation:
Let's use Example 1 for illustration:
[[0,0,1],[1,1,0],[1,0,0]]
tailing zero counts are:   [0, 1, 2]  (starting status)
The desired final goal is: [2,1, 0]   (ending status)

So, the problems is converted to find the minimal ajacent swaping from starting status to ending status:

Comment: If you think this post is helpful, please help upvote.
```
class Solution {
public:
    int minSwaps(vector<vector<int>>& grid) {
        const int n = grid.size();
        vector<int> t(n); //t[i]: tailing zero count for i-th row        
        for(int i=0;i<n;i++){
            int count = 0;
            for(int j = n;--j>=0 && !grid[i][j]; )  count++;                
            t[i] = count;
        }
        int ans = 0;        
        for(int i=0;i< n;i++){
            int k = i;
            int req = n-1 - i; // desired tailing zero count
            while(k<n && t[k]<req) k++; // greedily find first swaping candidate and log the result into k. Note1
            if(k==n) return -1; // k is out of range. Fail in searching

            //Core part of the question: moving up k-th row up, moving down [i, k-1
            //Part 1: move k-th row up to i-th row
            ans += k-i; // accumulate the operation cost of moving k to i
            
            //Part 2: move the rest involved row downward by offset 1
            while(k>i){ // simulate swaping operation of two adjacent rows in range of [i, k-1 ]
                t[k] = t[k-1];
                k--;
            }
        }    
        
        return ans;
    }
};
/*Note 1: why dose greedy approach work? 
Recall the row scanning is performed one by one from row 0, which ask most tailing 0; 
Suppose, current row (i-th row) asks for a row with at least 4 zeros, and the neaerst downward row (j-th) has 5 tailing zeros. You can greedily but aslo safely choose it as candidate. any rows after than i-th row will ask for less than 4 tailing rows. So you greedy approach will cause no trouble at all.
*/
```
reference:
[1] https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/discuss/767974/C%2B%2B-Solution