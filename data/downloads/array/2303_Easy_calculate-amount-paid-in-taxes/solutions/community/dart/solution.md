# 🟢🔴🟢 Beats 100.00%👏 Best Approach 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/6000994/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/6000994/)

---

```
class Solution {
  double calculateTax(List<List<int>> brackets, int income) {

    double taxes = 0.0;
    int prevUpper = 0;

    for(int i = 0; i < brackets.length; i++){

        int upper = brackets[i].first;
        int perchent = brackets[i].last;

        int diff = min(upper, income) - prevUpper;
        taxes += diff * perchent / 100;

        prevUpper = upper;
        
        if(upper > income) break;

    }

    return taxes;
  }
}
```