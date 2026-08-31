# C++ Explained solution

**Author:** Rajdeep_Nagar
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/2090411/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/2090411/)

---

```
/*
        
        min sum= 2
        max sum= 2*lim
        
        so we needs to make the sum of pair = X = nums[i]+nums[j]
        where x belongs to the range [2,2*lim]
        
        
        for any pair [nums[i],nums[j]]
        
        mn=min(nums[i],nums[j])
        mx=max(nums[i],nums[j])
        
        X=mn+mx
        
1. for X=2 , change each to 1   (2 changes)

2. for X=mn+1, change mx to 1  (1 change)
   for X=mx+lim, change mn to lim (1 change)
 
3.  for X=2*lim, change both to lim (2 changes)
        
     
Total Range of sum :  [2...........................................2*lim] 
                            
                            
[[2....X....mn] [mn+1.......X....mx+lim] [mx+lim+1.....X.....2*lim]]

       ||                   ||                          ||
    2 changes             1 change                   2 changes
    
    
    
we make a vector changes

changes[X] = total no of changes needed to make each pair sum equals to X

ans= min (changes[X])



NOTE: for X=mn+mx
      we need 0 changes

*/
        
class Solution {
public:
    int minMoves(vector<int>& nums, int lim) {        
        
        int n=nums.size();
        
        vector<int>changes(2*lim+2,0);
        
        int i=0,j=n-1;
        
        int mn,mx;
        while(i<j){
            
            mn=min(nums[i],nums[j]);
            
            mx=max(nums[i],nums[j]);
            
            changes[2]+=2, changes[mn+1]-=2;
            
            changes[mn+1]+=1, changes[mx+lim+1]-=1;
            
            changes[mx+lim+1]+=2, changes[2*lim+1]-=2;
            
     //       for X=mn+mx  we need 0 changes
            
            changes[mn+mx]--, changes[mn+mx+1]++;
           
           i++,j--;
   
        }
        
        for(int i=2;i<=2*lim;i++){
            changes[i]+=changes[i-1];
        }
        
        int ans=INT_MAX;
        
        for(int i=2;i<=2*lim;i++){
            ans=min(ans,changes[i]);
        }
            
        return ans;
        
    }
};