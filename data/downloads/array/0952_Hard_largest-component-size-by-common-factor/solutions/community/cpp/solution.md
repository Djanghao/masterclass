# ✅ [c++]  ||  Disjoint Set (Union Find) + Map

**Author:** xor09
**Votes:** 15
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/1592323/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/1592323/)

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
    
    void unionDsu(int x, int y){
        int _x = find(x), _y = find(y);
        if(_x == _y) return;
        if (rank[_x] < rank[_y]){
            parent[_x] = _y;
        }else if(rank[_x] > rank[_y]){
            parent[_y] = _x;
        }else{
            parent[_y] = _x;
            rank[_x]+=1;
        }
    }
    
    int largestComponentSize(vector<int>& nums) {
        int size = *max_element(nums.begin(), nums.end());
        parent.resize(size+1);
        for(int i=0; i<size+1; ++i) parent[i]=i;
        rank.resize(size+1,1);
        
        for(int i=0; i<nums.size(); ++i){
            for(int j=2; j<=sqrt(nums[i]); ++j){
                if(nums[i]%j==0){
                    unionDsu(nums[i], j);
                    unionDsu(nums[i]/j, j);
                }
            }
        }
        
        unordered_map<int,int> map;
        for(int i=0; i<nums.size(); ++i){
            int _x = find(nums[i]);
            map[_x]++;
        }
        
        int maxCount = 0;
        for(auto &m : map) maxCount = max(maxCount, m.second);
        
        return maxCount;
    }
};
```
Please **UPVOTE**