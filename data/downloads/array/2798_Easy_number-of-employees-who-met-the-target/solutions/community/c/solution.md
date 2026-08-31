# count_if

**Author:** votrubac
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3836576/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3836576/)

---

**C++**
```cpp
int numberOfEmployeesWhoMetTarget(vector<int>& hs, int t) {
    return count_if(begin(hs), end(hs), [&](int h) { return h >= t; });
}
```