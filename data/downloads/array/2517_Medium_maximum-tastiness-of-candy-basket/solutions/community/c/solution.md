# Binary Search

**Author:** votrubac
**Votes:** 45
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/2948107/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/2948107/)

---

If we sort the array, we can check if it's possible to pick `k` candies with a given tastiness in O(n).

Thus, we can binary-search for the largest tastiness, resulting in O(n log m) solution.

**C++**
```cpp
int maximumTastiness(vector<int>& price, int k) {
    sort(begin(price), end(price));
    int l = 0, r = price.back() - price.front();
    while(l - r) {
        int m = (l + r + 1) / 2, cnt = 1;
        for (int i = 1, j = 0; i < price.size(); ++i)
            if (price[i] - price[j] >= m) {
                ++cnt;
                j = i;
            }
        if (cnt >= k)
            l = m;
        else
            r = m - 1;
    }
    return l;
}
```