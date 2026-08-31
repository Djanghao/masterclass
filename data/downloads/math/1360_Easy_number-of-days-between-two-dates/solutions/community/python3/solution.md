# Python 3 - One Liner Using DATETIME

**Author:** mb557x
**Votes:** 18
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/748686/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/748686/)

---

Approach:
1. The input is of type <```string```>. To use the datetime module, these strings will first be converted into type <```date```> using ```datetime.strptime(date_string, format)```.
2. After conversion, the dates are subtracted, i.e. ```(date2 - date1).days()```

Note:
```abs()``` must be used when calculating the difference as any of the dates could be bigger than the other.

```
from datetime import datetime
class Solution:
    def daysBetweenDates(self, date1: str, date2: str) -> int:
        return abs((datetime.strptime(date2, '%Y-%m-%d').date() - datetime.strptime(date1, '%Y-%m-%d').date()).days)
```
<br>**Cleaner Version:**
```
from datetime import datetime
class Solution:
    def daysBetweenDates(self, date1: str, date2: str) -> int:
        M = datetime.strptime(date1, '%Y-%m-%d').date()
        N = datetime.strptime(date2, '%Y-%m-%d').date()
        return abs((N - M).days)
```