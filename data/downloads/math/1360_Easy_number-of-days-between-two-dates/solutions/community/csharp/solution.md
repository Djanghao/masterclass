# 🟢🔴🟢 1 Line Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/5857364/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/5857364/)

---

# Intuition
We are given two dates and need to calculate the number of days between them. Since dates follow a well-defined format and there are built-in functions to handle date calculations, this problem can be easily solved using the `DateTime` class in Dart.

# Approach
1. Convert both input strings `date1` and `date2` to `DateTime` objects using `DateTime.parse`.
2. Calculate the difference between the two `DateTime` objects using the `difference()` method, which returns a `Duration`.
3. Extract the difference in days using the `inDays` property of the `Duration` object.
4. Return the absolute value of the difference to account for the fact that the dates might be provided in any order (i.e., `date1` could be earlier or later than `date2`).

### Example Walkthrough:
**Example Input**:  
`date1 = "2020-01-01"`,  
`date2 = "2020-12-31"`

1. Parse both dates into `DateTime` objects.
2. Calculate the difference in days between `2020-01-01` and `2020-12-31`, which is `365` days.
3. Return the absolute value of the result (though in this case it's already positive).

**Output**:  
`365` days.

# Complexity
- **Time complexity**:  
  $$O(1)$$ because parsing two dates and calculating the difference between them are constant time operations.
  
- **Space complexity**:  
  $$O(1)$$ because we are only using a constant amount of space to store the two `DateTime` objects and the result.

# Code
```dart
class Solution {
  int daysBetweenDates(String date1, String date2) {
    return (DateTime.parse(date1).difference(DateTime.parse(date2)).inDays).abs();
  }
}
