# Elixir, round

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4774825/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4774825/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec account_balance_after_purchase(purchase_amount :: integer) :: integer
  def account_balance_after_purchase(purchase_amount) do
    100 - round(purchase_amount/10) * 10
  end
end
```