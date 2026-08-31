# C++ solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/4956628/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/4956628/)

---

```
class Solution {
public:
    bool isLeapYear(int year) {
        if (year % 100 == 0)
            return year % 400 == 0;
        return year % 4 == 0;
    }

    int numberOfDays(int year, int month) {
        map<int, int> days { {1, 31}, {2, 28}, {3, 31}, {4, 30},
                             {5, 31}, {6, 30}, {7, 31}, {8, 31},
                             {9, 30}, {10, 31}, {11, 30}, {12, 31}};
        return days[month] + (month == 2 && isLeapYear(year));
    }
};`
```