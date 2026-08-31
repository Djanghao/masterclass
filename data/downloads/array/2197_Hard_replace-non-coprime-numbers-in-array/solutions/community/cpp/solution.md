# C++ || MOST SIMPLE

**Author:** ganeshkumawat8740
**Votes:** 3
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/3621447/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/3621447/)

---

# Code
```
class Solution {
public:
    vector<int> replaceNonCoprimes(vector<int>& nums) {
        vector<int> ans;
        for(auto i: nums){
            while(!ans.empty() && __gcd(ans.back(),i) != 1){
                i = (i*1LL*ans.back())/__gcd(i,ans.back());
                ans.pop_back();
            }
            ans.push_back(i);
        }
        return ans;
    }
};
```