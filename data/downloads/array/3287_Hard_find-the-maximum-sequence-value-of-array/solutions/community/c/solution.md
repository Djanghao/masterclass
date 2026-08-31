# L2R and R2L

**Author:** votrubac
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5787213/](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5787213/)

---

We find all possible OR values for the left subsequence.

> We use take/not take DFS with memoisation. 

Once we take `k` numbers, we track the **earliest** position `i` for the OR value.

Then we do the same for the right subsequence.


This time, however, we go right-to-left, and store the **latest** position for each OR value we found.

Now, we check all combinations of left and right OR values.

If the left OR value appears before the right one, the subsequences do not overlap and we can do XOR.

**C++**
```cpp
bool dp1[401][201][128] = {}, dp2[401][201][128] = {};
void dfs1(int i, vector<int>& nums, int cnt, int k, int cur, vector<int> &vals) {
    if (cnt == 0)
        vals[cur] = min(vals[cur], i - 1);
    else if (i + k < nums.size() && !dp1[i][cnt][cur]) {
        dp1[i][cnt][cur] = true;
        dfs1(i + 1, nums, cnt, k, cur, vals);
        dfs1(i + 1, nums, cnt - 1, k, cur | nums[i], vals);            
    }
}
void dfs2(int i, vector<int>& nums, int cnt, int k, int cur, vector<int> &vals) {
    if (cnt == 0)
        vals[cur] = max(vals[cur], i + 1);        
    else if (i >= k && !dp2[i][cnt][cur]) {
        dp2[i][cnt][cur] = true;
        dfs2(i - 1, nums, cnt, k, cur, vals);
        dfs2(i - 1, nums, cnt - 1, k, cur | nums[i], vals);            
    }
}
int maxValue(vector<int>& nums, int k) {
    int res = 0;
    vector<int> vals1(128, INT_MAX), vals2(128);
    dfs1(0, nums, k, k, 0, vals1);
    dfs2(nums.size() - 1, nums, k, k, 0, vals2);
    for (int i = 0; i < 128; ++i)
        for (int j = 0; j < 128; ++j)
            if (vals1[i] < vals2[j])
                res = max(res, i ^ j);
    return res;
}
```