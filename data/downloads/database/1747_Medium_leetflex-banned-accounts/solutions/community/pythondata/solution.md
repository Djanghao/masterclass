# Pandas oneliner 100%

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/leetflex-banned-accounts/solutions/4165841/](https://leetcode.com/problems/leetflex-banned-accounts/solutions/4165841/)

---

# Intuition
Simply do inner join on account_id and check if there are any logins earlier or equal to logouts, when on different ip

# Approach
The simplest method is to use `.query()` since there is a lot of conditions:

`.query("login_x < login_y & login_y <= logout_x & ip_address_x != ip_address_y")`

`_x` and `_y` are default suffixes, automatically given to duplicated columns with the same name, and since we are selfjoining, all columns except those on which we are joining (`account_id`) will be duplicated

Finally we want to drop duplicated accounts, since one account could violate rules more than once.
# Code
```
import pandas as pd

def leetflex_banned_accnts(log_info: pd.DataFrame) -> pd.DataFrame:
    return log_info.merge(log_info, on = "account_id").query("login_x < login_y & login_y <= logout_x & ip_address_x != ip_address_y")[["account_id"]].drop_duplicates()
```