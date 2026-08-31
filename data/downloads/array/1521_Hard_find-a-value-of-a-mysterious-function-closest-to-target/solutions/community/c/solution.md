# [C++] easy solution using Set

**Author:** rks022
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/2405311/](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/2405311/)

---

```
class Solution {
public:
    int closestToTarget(vector<int>& arr, int target) {
        set<int>s;
        int ans=INT_MAX;
        for(int i=0;i<arr.size();i++)
        {
            set<int>s1;
            s1.insert(arr[i]);
            for(auto j:s)
                s1.insert(j&arr[i]);
            for(auto j:s1)
              ans=min(abs(j-target),ans);
            s=s1;
        }
        return ans;
    }
};