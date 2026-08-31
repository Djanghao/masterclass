# ✅ [c++]  ||  union find(DSU) + sorting

**Author:** xor09
**Votes:** 12
**Link:** [https://leetcode.com/problems/gcd-sort-of-an-array/solutions/1595919/](https://leetcode.com/problems/gcd-sort-of-an-array/solutions/1595919/)

---

```
class Solution {
public:
    vector<int> parent;
    vector<int> rank;
    
    int find(int x){
        if(parent[x]==x) return x;
        return parent[x] = find(parent[x]);
    }
    
    
    void unionDSU(int a, int b){
        int x=find(a), y=find(b);
        if(x==y) return;
        if(rank[x]>rank[y]) parent[y]=x;
        else if(rank[y]>rank[x]) parent[x]=y;
        else{
            parent[x]=y;
            rank[y]++;
        }
    }
    
    bool gcdSort(vector<int>& nums) {
        vector<int> nums2(nums);
        sort(nums2.begin(), nums2.end());
        int n = *max_element(nums.begin(), nums.end());
        parent.resize(n+1);
        for(int i=1; i<=n; ++i) parent[i]=i;
        rank.resize(n+1,1);
        for(int i=0; i<nums.size(); ++i){
            for(int j=2; j<=sqrt(nums[i]); ++j){
                if(nums[i]%j==0){ 
                    unionDSU(nums[i],j);
                    unionDSU(nums[i],nums[i]/j);
                }
            }
        }
        
        for(int i=0; i<nums.size(); ++i){
            if(find(nums[i]) != find(nums2[i])) return false;
        }
        return true;
    }
};
```
Please **UPVOTE**