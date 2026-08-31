# Track sum and count

**Author:** votrubac
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-consecutive-subarrays/solutions/5773411/](https://leetcode.com/problems/sum-of-consecutive-subarrays/solutions/5773411/)

---

Consecutive element `n[i]` produces subarrays with the sum `sum + cnt * n[i]`, where:
- `cnt` is the number of elements in the consecutive sequence. 
- `sum` is the sum of consecutive subarrays up to `n[i - 1]`.

Example for `[1, 2, 3]`:
- 0 + 1 * 1 = 1
- **1** + 2 * 2 = 5
- **5** + 3 * 3 = 14

The sum of all subarrays is `1 + 5 + 14 = 20`.

We need to track the count and sum for increasing and decreasing subarrays separately (`sum1` and `sum2`).

Note that, when adding the sum to the result, we need to subtract `n[i]` as it's included in both `sum1` and `sum2`.

**C++**
```cpp
int getSum(vector<int>& n) {
    long long sum1 = n[0], sum2 = n[0], res = n[0], cnt1 = 1, cnt2 = 1;
    for (int i = 1; i < n.size(); ++i) {
        if (n[i] - n[i - 1] != 1)
            sum1 = cnt1 = 0;
        if (n[i] - n[i - 1] != -1)
            sum2 = cnt2 = 0;      
        sum1 += ++cnt1 * n[i];
        sum2 += ++cnt2 * n[i];
        res = (res + sum1 + sum2 - n[i]) % 1000000007;
    }
    return res;
}
```