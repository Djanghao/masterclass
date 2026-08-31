# Official Solution

**Link:** [https://leetcode.com/problems/next-day/solution/](https://leetcode.com/problems/next-day/solution/)

---

[TOC]


## Overview:
In this problem we will improve upon the date objects by adding a `nextDay()` method. It operates on a date object and returns the next day's date in the format YYYY-MM-DD.

---

## Approach 1: Using timestamp

### Intuition:
We can use ISO 8601 time format to get the timestamp and from it we can easily extract the date.

An ISO 8601 formatted date string follows the pattern: $$YYYY-MM-DDTHH:mm:ss.sssZ$$. Where,
`YYYY` represents the year.
`MM` represents the month (01 to 12).
`DD` represents the day of the month (01 to 31).
`THH` represents the hour in 24-hour format (00 to 23).
`mm` represents the minutes (00 to 59).
`ss` represents the seconds (00 to 59).
`sss` represents milliseconds.
`Z` represents the time zone offset in the format `±hh:mm` or `Z` for UTC.

### Algorithm:
1. Calculate the timestamp for the next day by adding 24 hours to the current date's timestamp using `this.getTime()`.
2. Now create a new Date object and make it an ISO 8601 formatted string using `toISOString()`.
3. Finally we split the ISO string at the `T` character to isolate the date part leading to the `YYYY-MM-DD` portion and return the formatted date.

### Implementation:

<iframe src="https://leetcode.com/playground/GF3Mn2SD/shared" frameBorder="0" width="100%" height="225" name="GF3Mn2SD"></iframe>


### Complexity Analysis:

* **Time complexity:** The time complexity is $$O(1)$$ as it involves simple arithmetic and string manipulation.

* **Space complexity:** The space complexity is $$O(1)$$ as the space used is constant and does not depend on the input.

---

## Approach 2: Date Manipulation Using Built-in Methods

### Intuition:
We can use built-in `Date` methods and operations to increment the date.

### Algorithm:
1. Create a new `Date` object named `currentDate` and initialize it with the time value of the input `Date` object. This ensures that we are working with a copy of the original date and won't modify the original.
2. Increment the day of the `currentDate` by setting the next day by using `setDate`. 
3. Now extract the year, month, and day components from the `currentDate` 
4. Finally return the formatted date string in the `YYYY-MM-DD` format using the filtered year, padded month, and padded day.

### Implementation:

<iframe src="https://leetcode.com/playground/mDM2W2XD/shared" frameBorder="0" width="100%" height="327" name="mDM2W2XD"></iframe>


### Complexity Analysis:

* **Time complexity:** The time complexity is $$O(1)$$ as it involves a constant number of built-in method calls.

* **Space complexity:** The space complexity is $$O(1)$$ as the space used for the `currentDate` object is constant and doesn't depend on the input.

---

## Approach 3: Date Manipulation with Array

### Intuition:
We can make our own logic by manipulating dates. During the process we just need to consider months with varying numbers of days, leap years, and change of year i.e., from 31st Dec to 1st Jan.

### Algorithm:
1. Create an array `daysInMonth` to store the maximum days in each month and get the current day, month, and year from the given date object.
2. Now check if the current year is a leap year:
    * If it's a leap year, update the number of days in February to 29 in the `daysInMonth` array.
3. Retrieve the maximum days for the current month from the `daysInMonth` array. Then, add one day to the current date.
4. Now if the nextDay is greater than the maximum days for the current month:
    * Set the day to 1 and increment the month by 1.
    * And if the month becomes 13, set it to 1 and increment the year.
5. Finally return the date in `YYYY-MM-DD` format.

> #Note: Leap year conditions that you might want research:
> **Divisible by 4:** Leap years are generally determined by the Earth's orbit around the sun. Dividing the year by 4 is a basic rule because it helps account for the extra quarter of a day that the Earth takes to complete its orbit.
> **Not Divisible by 100:** While the "divisible by 4" rule works for most cases, it would lead to too many leap years if we didn't add an exception. Not all years divisible by 4 are leap years. So, to avoid too many leap years, we don't count years that are divisible by 100 unless...
> **Divisible by 400:** The exception to the "not divisible by 100" rule is when a year is divisible by 400. This rule corrects the accuracy of the calendar by making sure certain years that would otherwise be skipped as non-leap years (due to the "not divisible by 100" rule) are indeed counted as leap years.

### Implementation:

<iframe src="https://leetcode.com/playground/mLoZXQpE/shared" frameBorder="0" width="100%" height="500" name="mLoZXQpE"></iframe>


### Complexity Analysis:

* **Time complexity:** The time complexity is $$O(1)$$ as the number of operations doesn't vary with the input date.

* **Space complexity:** The space complexity is $$O(1)$$ as the space used for the `daysInMonth` array is constant and doesn't depend on the input.

---

All the three approaches are good and it will depend upon the usecase where you want to use which one. For example Approach 3 provides a comprehensive understanding of the date manipulation process, while Approach 1 offers a concise solution relying on built-in methods and timestamp arithmetic. Approach 2 strikes a balance between these two, combining some minor manual manipulation with built-in methods.

## Interview Tips:

* What are some potential edge cases to consider?
    * Edge cases include the end-of-month transition, leap years affecting February, and the transition from December to January.

* How can you ensure that the `nextDay()` method doesn't modify the original date object?
    * Ensure your implementation works with a copy or the values of the current date object, rather than directly modifying the original. This ensures that the method is pure and doesn't have unintended side effects.

---