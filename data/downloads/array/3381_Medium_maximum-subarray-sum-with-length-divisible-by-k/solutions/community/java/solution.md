# [Java/C++/Python] Best Time to Buy and Sell Stock

**Author:** lee215
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6124583/](https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6124583/)

---

# **Intuition**
Calculate the prefix sum,
then it's similar to this solution [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

# **Explanation**
`prefix[i % k]` saves the minimum prefix sum of `i + 1` first elements.

# **Complexity**
Time `O(n)`
Space `O(k)`
<br>

```Java [Java]
    public long maxSubarraySum(int[] A, int k) {
        long[] prefix = new long[k];
        Arrays.fill(prefix, (long)1e15);
        prefix[k - 1] = 0;
        long res = (long)-1e15, pre = 0;
        for (int i = 0; i < A.length; i++) {
            pre += A[i];
            res = Math.max(res, pre - prefix[i % k]);
            prefix[i % k] = Math.min(prefix[i % k], pre);
        }
        return res;
    }
```

```C++ [C++]
    long long maxSubarraySum(vector<int>& A, int k) {
        vector<long long> prefix(k, 1e15);
        prefix[k - 1] = 0;
        long long res = -1e15, pre = 0;
        for (int i = 0; i < A.size(); ++i) {
            pre += A[i];
            res = max(res, pre - prefix[i % k]);
            prefix[i % k] = min(prefix[i % k], pre);
        }
        return res;
    }
```

```py [Python3]
    def maxSubarraySum(self, A: List[int], k: int) -> int:
        prefix = [inf] * k
        prefix[-1] = 0
        res = -inf
        for i, pre in enumerate(accumulate(A)):
            res = max(res, pre - prefix[i % k])
            prefix[i % k] = min(prefix[i % k], pre)
        return res
```
