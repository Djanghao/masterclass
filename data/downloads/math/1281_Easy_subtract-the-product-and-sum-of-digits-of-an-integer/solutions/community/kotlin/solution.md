# Best Simple Solution

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/3138125/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/3138125/)

---


```
class Solution {
public:
        int subtractProductAndSum(int n) {
        int sum = 0, product = 1;
        for (; n > 0; n /= 10) {
            sum += n % 10;
            product *= n % 10;
        }
        return product - sum;
    }
};
```