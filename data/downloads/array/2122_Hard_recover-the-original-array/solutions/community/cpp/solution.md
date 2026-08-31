# Simple Solution using multiset!!!⚡🔥💕💕

**Author:** yashpadiyar4
**Votes:** 2
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/3559609/](https://leetcode.com/problems/recover-the-original-array/solutions/3559609/)

---


# Code
```
class Solution {
public:
    bool f(multiset<int>ms,int n,int k,vector<int>&ans){
        while(!ms.empty()){
            int smallest1=*ms.begin();
            int smallest2=smallest1+2*k;
            if(ms.find(smallest2)==ms.end())return false;
            ans.push_back(smallest1+k);
            ms.erase(ms.begin());
            auto it=ms.find(smallest2);
            ms.erase(it);
        }
        return true;
    }
    vector<int> recoverArray(vector<int>& nums) {
        int n=nums.size();
        sort(nums.begin(),nums.end());
        multiset<int>ms(nums.begin(),nums.end());
        int lowest=nums[0];
        for(int i=1;i<n;i++){
            vector<int>ans;
            int highest=nums[i];
            if((highest-lowest)%2)continue;
            int k=(highest-lowest)/2;
            if(k && f(ms,n,k,ans))return ans;
        }
        return {};
        
    }
};
```