# Binary Search | Double Hashing O(nlogn) Time Complexity

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-subpath/solutions/5933582/](https://leetcode.com/problems/longest-common-subpath/solutions/5933582/)

---

# Intuition
- It is simple combo of concepts.
- First if there is suppose a **len of 3 path is common in all paths** then **len of 1 and 2 paths are also common** do you notice any change, yes it is **binary search**.
- We are gonna apply binary search on each length and perform the **rolling hash on each subpath of len = mid then count all the hashs**.
- For test case 81 is failing for single hash so, we are using **double hashing**

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int mod1 = 1e9+7;
    int mod2 = 1e9+83;
    bool isPossible(vector<vector<int>> &paths, long long len, int n) {
        map<pair<long long,long long>,int> count;
        long long mul1 = 1e5;
        long long mul2 = 1e6;
        for(auto &path : paths) {
            set<pair<int,int>> unique_paths;
            long long hash1 = 0;
            long long hash2 = 0;
            long long radix1 = 1;
            long long radix2 = 1;
            for(int i = 0;i < len;i++) {
                hash1 = ((hash1 + (path[len-i-1]*radix1) % mod1) + mod1) % mod1;
                radix1 = (radix1 * mul1) % mod1;
                hash2 = ((hash2 + (path[len-i-1]*radix2) % mod2) + mod2) % mod2;
                radix2 = (radix2 * mul2) % mod2;
            }
            unique_paths.insert({hash1,hash2});
            long long size = path.size();
            for(int i = 0;i < size - len;i++) {
                hash1 = (hash1 * mul1) % mod1;
                hash1 = ((hash1 - (path[i]*radix1) % mod1) + mod1) % mod1;
                hash1 = (hash1 + path[i+len]) % mod1;
                hash2 = (hash2 * mul2) % mod2;
                hash2 = ((hash2 - (path[i]*radix2) % mod2) + mod2) % mod2;
                hash2 = (hash2 + path[i+len]) % mod2;
                unique_paths.insert({hash1,hash2});
            }
            for(auto &x : unique_paths) count[x]++;
        }
        for(auto &x : count) {
            if(x.second == paths.size()) return true;
        }
        return false;
    }
    int longestCommonSubpath(int n, vector<vector<int>>& paths) {
        long long low = 0,high = INT_MAX;
        for(auto &x : paths) high = min(high, (long long)x.size());
        long long ans = -1;
        while(low <= high) {
            long long mid = low + (high - low)/2;
            if(isPossible(paths,mid,n)) {
                ans = mid;
                low = mid + 1;
            }
            else high = mid - 1;
        }
        return ans;
    }
};
```