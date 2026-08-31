# O(n)

**Author:** votrubac
**Votes:** 118
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/2831702/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/2831702/)

---


First, we count numbers using a hash map `m`.
    
For numbers `a`, `b` and `c`, we can form `m[a] * m[b] * m[c]` unique triplets.

Say we have 26 numbers (`a...z`). Number `n` forms these number of triplets:
- `m[a] * m[n] * m[o] + ... + m[a] * m[n] * m[z]` +
- `m[b] * m[n] * m[o] + ... + m[b] * m[n] * m[z]` +
- `...`
- `m[m] * m[n] * m[o] + ... + m[m] * m[n] * m[z]`.
 
This formula can be simplified as `sum(m[a]...m[m]) * m[n] * sum(m[o]...m[z])`.

We can track sum on the `left` and `right` of `m[n]` as we go.

> What about `0 <= i < j < k` condition? Actually, the relation does not matter. 
> What matters is that `[i, j, k]`, `[i, k, j]`, `[k, i, j]` and `[k, j, i]` represent the same triplet, so it should only be counted once.

**C++**
```cpp
int unequalTriplets(vector<int>& nums) {
    unordered_map<int, int> m;
    for (int n : nums)
        ++m[n];
    int res = 0, left = 0, right = nums.size();
    for (auto [n, cnt] : m) {
        right -= cnt;
        res += left * cnt * right;
        left += cnt;
    }
    return res;
}
```
**Python 3**
Using counter with prefix sum.

```python
class Solution:
    def unequalTriplets(self, nums: List[int]) -> int:
        s = list(accumulate(Counter(nums).values()))
        return sum(s[i - 1] * (s[i] - s[i - 1]) * (s[-1] - s[i]) for i in range(1, len(s)))
```