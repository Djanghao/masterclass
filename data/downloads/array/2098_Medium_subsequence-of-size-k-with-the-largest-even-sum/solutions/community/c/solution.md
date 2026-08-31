# Sum k largest numbers - O(n)

**Author:** votrubac
**Votes:** 24
**Link:** [https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/1620312/](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/1620312/)

---

We sum `k` largest numbers. If the result is even, we are done.

If not, we try to replace the smallest even value among those `k` numbers with the largest odd value from the remaining numbers. Or, we replace the smallest odd value with the largest even one from the remaining numbers.

We return the largest sum from these two operations, or -1 (could happen only if all numbers are odd and `k` is odd).

**C++**
This solution is O(n) in the average case. We do not need to sort all numbers - we only need to find `k` largest ones. We will use `nth_element` function - it is analogous to the quick select algorithm and has linear average complexity.

> The runtime of this solution (as of 2021-12-09) is 68 ms, where solutions with sort or heap take 100 or more ms.

```cpp
long long largestEvenSum(vector<int>& n, int k) {
    nth_element(begin(n), begin(n) + k, end(n), greater<int>());
    long long sum = accumulate(begin(n), begin(n) + k, 0ll), sum1 = -1;
    if (sum % 2 == 0)
        return sum;
    int min_k[2] = {INT_MAX, INT_MAX};
    for (int i = 0; i < k; ++i)
        min_k[n[i] % 2] = min(min_k[n[i] % 2], n[i]);
    for (int i = k; i < n.size(); ++i)
        sum1 = max(sum1, sum - min_k[!(n[i] % 2)] + n[i]);
    return sum1;
}
```