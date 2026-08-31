# C++ Recursive to Memoization

**Author:** shukla_harsh_11
**Votes:** 44
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/1579321/](https://leetcode.com/problems/largest-divisible-subset/solutions/1579321/)

---

Recursion Code: This will give TLE.
```
class Solution {
public:
    vector<int> ans;
    void lds(vector<int> temp,int i,int prev,vector<int>& nums){
        
        if(i>=nums.size()){
            if(temp.size()>ans.size())  ans=temp;
            return;
        }
        if(nums[i]%prev==0){  
            temp.push_back(nums[i]);
            lds(temp,i+1,nums[i],nums);
            temp.pop_back();
        }
        lds(temp,i+1,prev,nums);
    }
    
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        vector<int> temp;
        lds(temp,0,1,nums);
        return ans;
    }
};
```

From Recursion to Memoziation : Accepted

```
class Solution {
public:
    vector<int> ans;
    vector<int> dp;
    void lds(vector<int> temp,int i,int prev,vector<int>& nums){
        if(i>=nums.size()){
            if(temp.size()>ans.size()) ans=temp;
            return;
        }
        //We can't directly use temp.size() without typecasting because it will return an unsigned int and hence if() will not work.
        if((int)temp.size()>dp[i] && (nums[i]%prev==0)){ 
            dp[i]=temp.size();
            temp.push_back(nums[i]);
            lds(temp,i+1,nums[i],nums);
            temp.pop_back();
        }
        lds(temp,i+1,prev,nums);
    }
    
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        for(int i=0;i<=nums.size();i++) dp.push_back(-1);
        vector<int> temp;
        lds(temp,0,1,nums);
        return ans;
    }
};
```