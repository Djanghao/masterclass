# Simple O(n) Solution || C++

**Author:** abhijeet5000kumar
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4194352/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4194352/)

---

# Code
```
int minimumSum(vector<int>& nums) {
    int n=nums.size();
    vector<int> l_r(n,INT_MAX);
    vector<int> r_l(n,INT_MAX);
    int minil=nums[0],minir=nums[n-1],ans=INT_MAX;
    for(int i=1;i<n;i++){
        minil=min(minil,nums[i-1]);
        l_r[i]=minil;
    }
    for(int i=n-2;i>=0;i--){
        minir=min(minir,nums[i+1]);
        r_l[i]=minir;
    }
    for(int i=1;i<n-1;i++){
        if(l_r[i]<nums[i] && r_l[i]<nums[i]){
            ans=min(ans,nums[i]+l_r[i]+r_l[i]);
        }
    }
    return (ans==INT_MAX)?-1:ans;        
}
```