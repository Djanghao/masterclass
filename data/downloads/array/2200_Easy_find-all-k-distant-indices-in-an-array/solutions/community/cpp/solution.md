# simple cpp

**Author:** avnish39cs
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/2954362/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/2954362/)

---

vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {
           vector<int> ans;
    for(int i=0;i<nums.size();i++){
        for(int j=0;j<nums.size();j++){
            //if found atleast one index , break and save
            if(abs(i-j)<=k and nums[j]==key){
                ans.push_back(i);
                break;
            }
        }
    }
    return ans;
        
    }
};
```