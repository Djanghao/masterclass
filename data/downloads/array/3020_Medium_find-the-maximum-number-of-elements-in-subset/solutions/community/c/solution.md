# Check each number

**Author:** votrubac
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4637056/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4637056/)

---

The longest subsequence we can have is `2, 4, 16, 256, 65536, 256, 16, 4, 2`, which has the length of `9`.

So, it is feasiable to explore a sequence for each number, as it will require no more than `n * 9` operations if we use a hash map.

> Note the edge case - we can have longer sequences containining all `1`. 
> For this edge case, the lenth is the count of `1` elements, minus `1` if the count is even.

**C++**
```cpp
int maximumLength(vector<int>& nums) {
    unordered_map<long long, int> c;
    for (int n : nums)
        ++c[n];
    int res = 1;
    for (auto &[n, cnt] : c) {
        if (n == 1)
            res = max(res, cnt - (cnt % 2 == 0));
        else if (cnt > 1) {
            int n_res = 1;
            for (auto it = c.find(n * n); it != end(c); it = c.find(it->first * it->first)) {
                n_res += 2;
                if (it->second == 1)
                    break;
            }
            res = max(res, n_res);
        }
    }
    return res;
}
```