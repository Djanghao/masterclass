# 🟢🔴🟢 2 Lines Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/5843732/](https://leetcode.com/problems/day-of-the-week/solutions/5843732/)

---

# Intuition
To determine the day of the week for a given date, we can leverage built-in functions that allow us to easily retrieve the weekday from a `DateTime` object. This simplifies the problem significantly, as the system takes care of all the complexities related to leap years, month variations, and date formatting.

# Approach
1. We create a list of day names starting with "Monday" and ending with "Sunday".
2. We use Dart's `DateTime` constructor to create a `DateTime` object for the given date (day, month, year).
3. The `DateTime.weekday` property returns a number between 1 and 7 representing the day of the week, where 1 corresponds to Monday and 7 corresponds to Sunday.
4. We adjust the index to align with our list of day names and return the correct day.

# Example Walkthrough
### Example 1:
**Input**:  
`day = 15, month = 8, year = 2023`

1. Create a `DateTime` object: `DateTime(2023, 8, 15)`.
2. Get the weekday: `DateTime(2023, 8, 15).weekday` returns 2, corresponding to Tuesday.
3. Return "Tuesday" from the list of day names.

**Output**: `"Tuesday"`

# Complexity
- **Time Complexity**:  
  $$O(1)$$  
  The time complexity is constant since creating a `DateTime` object and accessing the weekday requires only a few operations.

- **Space Complexity**:  
  $$O(1)$$  
  The space complexity is constant because we only store a small list of seven day names and a `DateTime` object.

# Code
```dart
class Solution {
  String dayOfTheWeek(int day, int month, int year) {
    List<String> dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return dayNames[DateTime(year, month, day).weekday - 1];
  }
}
