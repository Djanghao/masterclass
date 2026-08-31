# Ruby 100 %

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4708248/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4708248/)

---


# Code
```
def account_balance_after_purchase(purchaseAmount)
    d = {0=>0,1=>0,2=>0,3=>0,4=>0,5=>10,6=>10,7=>10,8=>10,9=>10}
    return 100 -( d[purchaseAmount%10] + (purchaseAmount-purchaseAmount%10))
end
```