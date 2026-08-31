# Mutant House Robber

**Author:** votrubac
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/5209805/](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/5209805/)

---

This is a house robber on a mutating array.

To speed things up, we split the street into smaller parts. We can then update the affected part only, and combine the result.

#### SQRT Segmentation

The time complexity for this solution is O(m sqrt n). The second solution uses a logarithmic data structure bring it down to O(m log n).

I think that the SQRT Segmentation solution is a bit easier to understand, so I recommend to start with it.

We split the streen into `sqrt(len(num))` parts. When we process a query, we update the value and re-run `rob` only for the affected part. 

Then, we `glue` all parts to get the final result. In order to `glue` parts, we need to track `4` best results:
1.  `[*][*]...[*][*]`: From first to last (`_11`)
2.  `[*][*]...[*][ ]`: From first to second last (`_10`)
3.  `[ ][*]...[*][*]`: Second to last (`_01`)
4.  `[ ][*]...[*][ ]`: Second to second last (`_00`)

When gluing two parts, we can combine previous second lasts with firsts, or previous lasts with seconds.

> Note: variable names are just for fun.
> Note: the Python solution started SLE as of 05/27.
<iframe src="https://leetcode.com/playground/KQMzXbZc/shared" frameBorder="0" width="700" height="450"></iframe>

#### Segment Tree
Now, we can do the same as above but for logarithmic intervals. Having defined the `glue` function, we can otherwise use the standard segment tree implementation.

For this problem and test cases, the segment tree solution is actually 200 ms slower than SQRT Segmentation.

This is, perhaps, because of memory overhead of the segment tree. It will become faster if we increase the size of the input array. 

<iframe src="https://leetcode.com/playground/Tko3YFaR/shared" frameBorder="0" width="700" height="500"></iframe>

#### Black Magic (now TLE)
Just found this solution. I am still figuring out how exactly this works, but it the simplest and fastest solution by far.

For the test cases in this solution, it looks like it process no more than 12 elements in `dp` during an update.

> Update: this solution is TLE now, so it worked fast for weaker test cases.

**C++**
```cpp
long long dp[50001] = { 0 }; // Only need to initialize the first element.
class Solution {
public:
int maximumSumSubsequence(vector<int>& n, vector<vector<int>>& queries) {
    for (int i = 0; i < n.size(); ++i)
        dp[i + 1] = max(n[i] - dp[i], 0LL);
    long long sum = accumulate(begin(dp), begin(dp) + n.size() + 1, 0), res = 0;
    for (const auto &q : queries) {
        n[q[0]] = q[1];
        for (int i = q[0]; i < n.size(); ++i) {
            int temp = max(n[i] - dp[i], 0LL);
            if (temp == dp[i + 1])
                break;
            sum += temp - dp[i + 1];
            dp[i + 1] = temp;
        }
        res += sum;
    }
    return res % 1000000007;
}
};
```