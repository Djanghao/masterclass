# Unordered Map , C++ Two Sum ✅✅

**Author:** Deepak_5910
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/3648668/](https://leetcode.com/problems/count-good-meals/solutions/3648668/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Approach is Very Similar to **Two Sum Problem.** Store the values of power 2 (upto 2^21) and Apply Two Sum Approach.

# Complexity
- Time complexity:O(21*N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int countPairs(vector<int>& arr) {
        int mod = 1e9+7;
        unordered_map<int,int> mp;
        vector<int> v;
        int num = 1,ans = 0,n = arr.size();
        v.push_back(1);

        for(int i = 0;i<=21;i++)
        {
            num<<=1;
            v.push_back(num);
        }
        
        for(int i = 0;i<arr.size();i++)
        mp[arr[i]]++;
        
        for(int i = 0;i<n;i++)
        {
             mp[arr[i]]--;
             if(mp[arr[i]]==0)
             mp.erase(arr[i]);
             for(int j = 0;j<v.size();j++)
             {
                 if(mp.find(v[j]-arr[i])!=mp.end())
                 ans = (ans+mp[v[j]-arr[i]])%mod;    
             }
        }
        return ans;
    }
};
```
![upvote.jpg](./images/0.jpeg)