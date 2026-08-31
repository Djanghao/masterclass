# Simple | Greedy | C++ |O(n*m) | 80%+ | Easy

**Author:** gavnish_kumar
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5581029/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/solutions/5581029/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
 First, we will traverse all these points:
- (i, j)
- (i, m - j - 1)
- (n - i - 1, j)
- (n - i - 1, m - j - 1)
We will only traverse for 0 <= i < n/2 and 0 <= j < m/2. If m or n are odd, then m/2 and n/2 need to be traversed separately. All these points must have the same value to ensure all rows and columns are palindromic. If the number of ones among these points is more than or equal to 2, then we can make all 4 points 1.

Now, if m or n is odd, count the number of (1, 1) pairs on palindromic positions. These will increase the number of ones by 2. If the count of such pairs is even, then the number of ones remains divisible by 4. Otherwise, we need to make it divisible by 4. We use the checkOnes variable to check if there's any pair (0, 1) or (1, 0) in row n/2 or column m/2 when m and n are odd. If such a pair exists, increase ans by one; otherwise, increase it by two.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n*m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minFlips(vector<vector<int>>& grid) {
        int n=grid.size();
        int m= grid[0].size();
        int totalones=0;
        int ans=0;
        for(int i=0;i<n/2;i++){
            for(int j=0;j<m/2;j++){
                int ones=0;
                if(grid[i][j]==1) ones++;
                if(grid[i][m-j-1]==1) ones++;
                if(grid[n-i-1][j]==1) ones++;
                if(grid[n-i-1][m-j-1]==1) ones++;
                if(ones==4 || ones==0){
                    totalones+= ones;
                    continue;
                }
                else if(ones>=2){
                    // cout<<ones<<endl;
                    ans+=(4-ones);
                    totalones+=4;
                }else{
                    ans+= ones;
                }
            }
        }
        // cout<<ans<<endl;
        if(n%2==0 && m%2==0) return ans;
        int palinOnes=0;
        int onechange=0;
        if(m%2==1){
            for(int i=0;i<n/2;i++){
                if(grid[i][m/2]==1 && grid[n-i-1][m/2]==1) palinOnes++;
                if(grid[i][m/2]!= grid[n-i-1][m/2]){
                    ans++;
                    onechange++;
                }
            }
        }
        if(n%2==1){
            for(int i=0;i<m/2;i++){
                if(grid[n/2][i]==1 && grid[n/2][m-i-1]==1) palinOnes++;
                if(grid[n/2][i]!= grid[n/2][m-i-1]){
                    ans++;
                    onechange++;
                }
            }
        }
        if(palinOnes%2==1){
            if(onechange==0) ans+=2;
        }
        if(n%2==1 && m%2==1 && grid[n/2][m/2]==1) ans++;
        return ans;
    }
};
```