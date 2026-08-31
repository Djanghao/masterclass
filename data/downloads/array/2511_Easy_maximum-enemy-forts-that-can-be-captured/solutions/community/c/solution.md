# One Pass

**Author:** votrubac
**Votes:** 75
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2947175/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2947175/)

---

Basically, we need to count zeros between the opposite non-zero elements (`1` and `-1`, or `-1` or `1`).
**C++**
```cpp
int captureForts(vector<int>& forts) {
    int res = 0;
    for (int i = 0, j = 0; i < forts.size(); ++i)
        if (forts[i] != 0) {
            if (forts[j] == -forts[i])
                res = max(res, i - j - 1);
            j = i;
        }
    return res;
}
```