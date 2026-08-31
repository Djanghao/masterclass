# Two Loops

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5144325/](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5144325/)

---

Let `dp[i]` be the minimum number of partitions starting from `s[i]`.

For a position `i`, we increase size `sz` of our substring, counting characters in `cnt`.

If the substring of size `sz` is balanced:
- `dp[i] = min(dp[i], 1 + dp[i + sz])`

**C++**
Efficient check for balanced substring suggested by [sgallivan](https://leetcode.com/u/sgallivan/).
```cpp
int minimumSubstringsInPartition(const string &s) {
    vector<int> dp(s.size() + 1, s.size());
    dp.back() = 0;
    for (int i = s.size() - 1; i >= 0; --i) {
        int cnt[26] = {}, unique = 0, max_cnt = 0;
        for (int sz = 1; i + sz <= s.size(); ++sz) {
            unique += ++cnt[s[i + sz - 1] - 'a'] == 1;
            max_cnt = max(max_cnt, cnt[s[i + sz - 1] - 'a']);
            if (sz == unique * max_cnt)
                dp[i] = min(dp[i], 1 + dp[i + sz]);
        }
    }
    return dp[0];
}
```

**Complexity Analysis**
- Time: O(n * n)
- Memory: O(n)