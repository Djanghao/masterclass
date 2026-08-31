# O(n)

**Author:** votrubac
**Votes:** 18
**Link:** [https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/2851426/](https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/2851426/)

---

The initial penalty is when the shop stays closed.

Then, we open it for days `[0, n)`, update the penalty, track and return the minimum one.

**C++**
```cpp
int bestClosingTime(string cust) {
    int p = count(begin(cust), end(cust), 'Y'), min_p = p, j = 0;
    for (int i = 0; i < cust.size(); ++i) {
        p += cust[i] == 'Y' ? -1 : 1;
        if (p < min_p) {
            min_p = p;
            j = i + 1;
        }
    }
    return j;
}
```