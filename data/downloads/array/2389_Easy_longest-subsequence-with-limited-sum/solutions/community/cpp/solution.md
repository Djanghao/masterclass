# CPP | Easy | Prefix Sum | Time O(QlogN)

**Author:** amirkpatna
**Votes:** 17
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2492714/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2492714/)

---

**Intuition :** Sort the array and generate prefix sum for `nums` and for each query search for this sum using `binary-search` in your `prefix-sum` array

**Time complexity :** `O(QlogN + NlogN)`
**Space complexity :** `O(Q)`

```
class Solution {
public:
    vector<int> answerQueries(vector<int>& v, vector<int>& q) {
        sort(v.begin(),v.end());
        for(int i=1;i<v.size();i++)v[i]+=v[i-1];
        vector<int> ans;
        for(int x:q){
            int idx=upper_bound(v.begin(),v.end(),x)-v.begin();
            ans.push_back(idx);
        }
        return ans;
    }
};
```