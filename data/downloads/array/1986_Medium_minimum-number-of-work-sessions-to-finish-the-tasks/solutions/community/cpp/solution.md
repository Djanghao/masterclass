# C++ | Backtracking

**Author:** Believe_itt
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1432363/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/1432363/)

---

1.Here we will create **groups** of hours whose sum is less than `SessionTime` .
2.basically we will store only the sum of hours in `grps` array which is less than `SessionTime` .
3.Our aim is to minimize such number of groups to get minimum number of week sessions.

So, this is how  we gonna create `grps` array : 
case 1: if **current element + sum**  is less than `SessionTime` , then we will add the element in previously created grps.
else 
case 2: we will create new group in grps array.
```
class Solution {
public:
    int ans=INT_MAX;
    void solve(int start, vector<int>& v, int target,vector<int>& grps){
        if(start>=v.size()){
            int temp = grps.size();
            ans=min(ans,temp);
            return ;
        }
        if(grps.size()>ans)return;  // if grps size is greater than previously found size then we dont need to check this answer 
		
        //Case 1
        int ans=INT_MAX;
        for(int i=0;i<grps.size();i++){
            if(grps[i]+v[start]<=target){
                grps[i]+=v[start];
                solve(start+1,v,target,grps);
                grps[i]-=v[start];
            }
        }
        //Case 2
        grps.push_back(v[start]);
        solve(start+1,v,target,grps);
        grps.pop_back();        
    }
    int minSessions(vector<int>& v, int target) {
        int n=v.size();
        vector<int>grps;
        solve(0,v,target,grps);
        return ans;
    }
};
```