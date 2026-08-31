# O(n)

**Author:** votrubac
**Votes:** 28
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3706503/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3706503/)

---

Alternating subarrays cannot overlap.

So, we start over when two consecutive numbers have the same parity, resulting in a linear solution.

**C++**
```cpp
int longestAlternatingSubarray(vector<int>& n, int threshold) {
    int res = 0;
    for (int l = 0, cnt = 0; l < n.size(); ++l) {
        if (n[l] <= threshold)
            cnt = cnt == 0 ?
                n[l] % 2 == 0 :
                n[l] % 2 == n[l - 1] % 2 ? n[l] % 2 == 0 : cnt + 1;
        else
            cnt = 0;
        res = max(res, cnt);
    }
    return res;
}
```