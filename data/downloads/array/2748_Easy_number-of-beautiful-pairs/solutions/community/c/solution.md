# O(n log m)

**Author:** votrubac
**Votes:** 57
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3679353/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3679353/)

---

A quadratic solution is accepted, but it is not good enough for an interview.

We count first digits in `cnt`.

When we process a number, we add `cnt[n]` for each co-prime `n`.

The complexity is O(n log m), where `m` is the maximum value of `nums`.

**C++**
```cpp
int countBeautifulPairs(vector<int>& nums) {
    int cnt[10] = {}, res = 0;
    for(int i = 0; i < nums.size(); ++i) {
        for (int n = 1; n < 10; ++n)
            if (gcd(n, nums[i] % 10) == 1)
                res += cnt[n];
        while (nums[i] >= 10)
            nums[i] /= 10;
        ++cnt[nums[i]];
    }
    return res;
}
```