# [C++] O(n) | Greedy | Easy To Understand

**Author:** uds5501
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/780973/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/780973/)

---

Take Aways:
I am using the notion that :

`prefix[i:j] = target`
`prefix[j] - prefix[i] = target`
`prefix[j] - target = prefix[i]`

Now we can use hashmaps to store the index at which last `prefix[i]` was seen
`map<int, int> f // f[prefix[i]] = i`

Now, for a `prefix[j]` if `prefix[j] - target` is found in the hashmap, we can use that as our valid interval `[i:j]`

Now it's just maximum disjoint interval problem which can be solved by sorting the array of intervals by their endpoints and greedily picking the intervals

Time : `O(n)`

```
class Solution {
public:
    static bool comp (pair<int, int> &a, pair<int, int> &b) {
        return a.second < b.second;
    }
    int maxNonOverlapping(vector<int>& nums, int target) {
        map<int, int> f;
        int ctr = 0;
        f[0] = ctr;
        vector<pair<int, int>> ps;
        int pre = 0;
        for(int i=0; i<nums.size(); i++) {
            ctr++;
            pre += nums[i];
            // if prefix-target exists, make a new interval
            if (f.find(pre-target) != f.end()) {
                ps.push_back({f[pre-target], i});
            }
            // update pointer for the current prefix sum
            f[pre] = ctr;
        }
        int ans = 0;
        if (ps.size()) {
            // if there are valid intervals, always take the first one
            ans = 1;
            int r1 = ps[0].second;
            for(int i=1; i<ps.size(); i++) {
                int l = ps[i].first;
                int r2 = ps[i].second;
                if (l > r1) {
                    ans++;
                    r1 = r2;
                }
            }
        }
        return ans;
    }
};
```