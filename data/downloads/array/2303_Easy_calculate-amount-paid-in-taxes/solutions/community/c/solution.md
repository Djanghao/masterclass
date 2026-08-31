# No Title

**Author:** votrubac
**Votes:** 30
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2141128/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2141128/)

---

**C++**
```cpp
double calculateTax(vector<vector<int>>& b, int income) {
    double res = 0, prev = 0;
    for (int i = 0; i < b.size(); prev = b[i++][0])
        res += max(0.0, (-prev + min(income, b[i][0])) * b[i][1] / 100);
    return res;
}
```