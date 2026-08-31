# Python 3   ||   1 line,  div as round   ||   T/S: 96% / 81%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/3868763/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/3868763/)

---


```python3 []
class Solution:
    def accountBalanceAfterPurchase(self, purchaseAmount: int) -> int:

        return (104 -purchaseAmount)//10*10
```
```cpp []
class Solution {
public:
    int accountBalanceAfterPurchase(int purchaseAmount) {
        return (104 - purchaseAmount) / 10 * 10;
    }
};
```
```Java []
class Solution {
    public int accountBalanceAfterPurchase(int purchaseAmount) {
        return (104 - purchaseAmount) / 10 * 10;}
}
```
[https://leetcode.com/problems/account-balance-after-rounded-purchase/submissions/1292792761/](https://leetcode.com/problems/account-balance-after-rounded-purchase/submissions/1292792761/)

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).