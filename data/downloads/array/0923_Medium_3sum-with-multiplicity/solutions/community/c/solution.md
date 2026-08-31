# C++ Super Simple 7-line Solution Without Sorting

**Author:** YehudisK
**Votes:** 166
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1123612/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1123612/)

---

Use a map to count all sums of two numbers.
Then, if target - arr[i] is in map, it means we have a three-sum, so we add it to the result.
```
class Solution {
public:
    int threeSumMulti(vector<int>& arr, int target) {
        unordered_map<int, int> m;
        int res = 0, mod = 1e9 + 7;
        for (int i = 0; i < arr.size(); i++) {
            res = (res + m[target - arr[i]]) % mod;
            for (int j = 0; j < i; j++) {
                m[arr[i] + arr[j]]++;
            }
        }
        return res;
    }
};
```
**Like it? please upvote!**