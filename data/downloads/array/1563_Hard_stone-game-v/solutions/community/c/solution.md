# C++ (Recursion to DP) Intitutive Way

**Author:** vforvibhu
**Votes:** 4
**Link:** [https://leetcode.com/problems/stone-game-v/solutions/910774/](https://leetcode.com/problems/stone-game-v/solutions/910774/)

---

```
class Solution {
public:
    //map<pair<int,int>,int>mp;
    //I got tle using map
    
    int memo[501][501];
    int score(vector<int>&nums,int st,int end)
    {
        if(st>=end)return 0;
        int ans=0;
        //if(mp.find({st,end})!=mp.end())return mp[{st,end}];
        if(memo[st][end]!=-1)return memo[st][end];
        for(int i=st;i<end;i++)
        {
            // Breek it in [st,i] and [i+1,end]  ...both should be non -empty
            int lSum,rSum;
            if(st==0)
            {
                lSum=nums[i];
            }
            else
            lSum=nums[i]-nums[st-1];  // st to i
            rSum=nums[end]-nums[i];  // i+1 to end
            
            if(lSum>rSum)
            {
                ans=max(ans,rSum+score(nums,i+1,end));
            }
            else if(lSum==rSum)
            {
                ans=max(ans,max(lSum+score(nums,st,i),rSum+score(nums,i+1,end)));
            }
            else
            {
                ans=max(ans,lSum+score(nums,st,i));
            }
        }
       // return mp[{st,end}]= ans;
        return memo[st][end]=ans;
    }
    
    //?????????? Recursive Code ?????????
    
//     int score(vector<int>&nums,int st,int end)
//     {
//         if(st>=end)return 0;
//         int ans=0;
//         for(int i=st;i<end;i++)
//         {
//             int lSum,rSum;
//             if(st==0)
//             {
//                 lSum=nums[i];
//             }
//             else
//             lSum=nums[i]-nums[st-1];  // st to i
//             rSum=nums[end]-nums[i];  // i+1 to end
            
//             if(lSum>rSum)
//             {
//                 ans=max(ans,rSum+score(nums,i+1,end));
//             }
//             else if(lSum==rSum)
//             {
//                 ans=max(ans,max(lSum+score(nums,st,i),rSum+score(nums,i+1,end)));
//             }
//             else
//             {
//                 ans=max(ans,lSum+score(nums,st,i));
//             }
//         }
//         return ans;
//     }
    
    
    int stoneGameV(vector<int>& stoneValue) {
        int n=stoneValue.size();
        vector<int>freq(n,0);
        freq[0]=stoneValue[0];
        memset(memo,-1,sizeof(memo));
        for(int i=1;i<n;i++)
        {
            freq[i]+=stoneValue[i]+freq[i-1];  // It's good to have prefix array to calculate rangeSum in o(1)after one time implementation ,will use in recursive function
        }
        return score(freq,0,n-1);
    }
};