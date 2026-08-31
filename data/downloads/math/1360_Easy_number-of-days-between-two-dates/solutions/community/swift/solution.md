# My Swift solution

**Author:** yamironov
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/525862/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/525862/)

---

My Swift solution
```
class Solution {
    func daysBetweenDates(_ date1: String, _ date2: String) -> Int {

        func isLeapYear(_ year: Int) -> Bool {
            return year % 4 == 0 ? (year % 100 == 0 ? (year % 400 == 0 ? true : false) : true) : false
        }

        func daysSince1970(_ date: String) -> Int {
            let dateParts = date.split(separator: "-"), year = Int(dateParts[0]) ?? 0, month = Int(dateParts[1]) ?? 0, day = Int(dateParts[2]) ?? 0
            var days: Int = day
            for i in 1..<month {
                switch i {
                    case 1, 3, 5, 7, 8, 10, 12: days += 31
                    case 4, 6, 9, 11: days += 30
                    case 2: days += isLeapYear(year) ? 29 : 28
                    default: days += 0
                }
            }
            for i in 1971..<year {
                days += isLeapYear(i) ? 366 : 365
            }
            return days
        }

        return abs(daysSince1970(date1) - daysSince1970(date2))

    }
}
```