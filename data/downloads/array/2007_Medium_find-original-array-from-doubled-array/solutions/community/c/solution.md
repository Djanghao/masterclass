# C++ | Hashmap/Sorting(NlogN) Approach ✅

**Author:** prantik0128
**Votes:** 114
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2577700/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2577700/)

---

**If you like it, please give a star, to my [Github](https://github.com/champmaniac/LeetCode) Repository and upvote this post.**

**Intuition:**
Since we need to return an original array if `changed` is a `doubled` array. If changed is not a doubled array, return an `empty` array. The elements in `original` may be returned in any `order`, so we first sort the array.
Since we have **sorted** the array, so we will find the **twice** of a **number**, If we get it, well and good, check further, else return **{}**

**Approach:**
* First we take a `map`, then we **sort** the given array `changed`.
* We keep removing the smallest element `n` and `2 * n` and keep putting n into the answer until changed array becomes empty.
* If at anytime the we are unable to remove elements we **return** `empty` array.

**C++:**
```
class Solution {
public:
    vector<int> findOriginalArray(vector<int>& changed) {
        int n = changed.size();
        if (n % 2 == 1) return {};
        sort(changed.begin(), changed.end());
        vector<int> ans;
        map<int, int> mp;
        for (int i = 0; i < n; i++) {
            mp[changed[i]]++;
        }
        for (int i = 0; i < n; i++) {
          if (mp[changed[i]] == 0) continue;
          if (mp[changed[i] * 2] == 0) return {};
          ans.push_back(changed[i]);
          mp[changed[i]]--;
          mp[changed[i] * 2]--;
        }
        return ans;
    }
};
```
****
**Time Complexity:** **O(NLogN)**
**Space Complexity:** **O(N)**
****

