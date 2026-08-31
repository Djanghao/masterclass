# Straightforward Ruby solution, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/4197430/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/4197430/)

---

# Intuition
"Thirty days hath September,
April, June and November.
All the rest have thirty-one,
Excepting February alone,
And that has twenty-eight days clear
And twenty-nine in each leap year."

# Approach
Most months are really easy: either it's one of the 4 that's 30 days, it's February, or it has 31 days.
February has 28 days, except on leap year.  Leap year is every 4 years, unless it's divisible by 100 but not 400.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
def number_of_days(year, month)
    return 30 if [4,6,9,11].include?(month)
    if month == 2
        (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? 29 : 28
    else
        31
    end
end
```