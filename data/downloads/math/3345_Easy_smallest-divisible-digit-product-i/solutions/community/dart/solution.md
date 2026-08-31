# 🟢🔴🟢 Beats 100.00%👏 Best Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6040353/](https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6040353/)

---

```
class Solution {
  int smallestNumber(int n, int t) {
    
    while(true){
        int temp = n;
        int multiply = 1;
        while(temp != 0){
            int r = temp % 10;
            temp ~/= 10; 
            multiply *= r;
        }
        if(multiply % t == 0) return n;
        n++;
    }
    
  }
}
```