# [c++ / javascript] solution

**Author:** dilipsuthar60
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2323073/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2323073/)

---

```
class Solution {
public:
    int shortestSequence(vector<int>& nums, int k) {
        unordered_set<int>s;
        int n=nums.size();
        int ans=0;
        for(int i=0;i<n;i++)
        {
            s.insert(nums[i]);
            if(s.size()==k)
            {
                ans++;
                s.clear();
            }
        }
        return ans+1;
    }
};
```

```
var shortestSequence = function(nums, k) {
    let ans=0;
    let st=new Set();
    for(let it of nums){
        st.add(it);
        if(st.size===k){
            ans++;
            st=new Set();
        }
    }
    return ans+1;
};
```