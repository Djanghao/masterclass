# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/5922752/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/5922752/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func numberOfDays(_ year: Int, _ month: Int) -> Int {
		// if month is Feb, and year is divisible by 4, and year is not century or is divisable by 400 = leap year
        if month == 2 && (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
          29  
        } else { 
            [31,28,31,30,31,30,31,31,30,31,30,31][month-1]
        }
    }
}
```