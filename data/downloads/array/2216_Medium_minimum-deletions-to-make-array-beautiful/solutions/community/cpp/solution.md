# ✅ [C++] | EASY SOLUTION | TC : O(N) | SC : O(1)

**Author:** jaysudani
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1893237/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/1893237/)

---

```
class Solution {
public:
    int minDeletion(vector<int>& nums) {
        
        int ans=0;
        int sz=nums.size();
        
        for(int i=0;i<sz-1;i++){
            //if effective index is even and it has same number at its index + 1  then we have to remove it  
            if((i-ans)%2==0 and nums[i+1]==nums[i]){
                    ans++;
            }
            
        }
		//if after deleting optimizely new size is odd then we have to remove one more element to make size even
        if((sz-ans)%2) ans++;
        return ans;
        
    }
};
```