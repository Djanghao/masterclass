# C# || 8 ms solution using if statements

**Author:** timmok2022
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/4908564/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/4908564/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The main challenge is first recognizing how to handle February, i.e. checking for a leap year, to see if 28 or 29 days should be returned.  The other months are straightforward. 

The unforunate thing about this problem is it is not clear whether the calendar is Gregorian and Julian since the leap year calculation differs.  Thus, I made the assumption that only the Gregorian calendar is used as the input.

# Approach
<!-- Describe your approach to solving the problem. -->
Given the number of only 12 months, using some data structures such as HashSet which I actually used in my initial solution is an unnecessary overhead.

I had to look up how to calculate for the leap year: if the year is divisible by 4 (i.e. modulus of 4 is 0), then if it is divisible by 400 - it's leap year **or** if it is divisible by 100 - it is not.

I created a helper function for readability of the code.

I used two if statements.  The first if is checking for February.  If yes, check whether it's a leap year or not.  The second if statement is checking whether the month is one of the four months with 30 days.  If yes, return 30.  Otherwise, return 31 since all the remaining months have 31 days.

8 ms is the best performance among multiple submissions made with the exactly same code.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
public class Solution {
    public int NumberOfDays(int year, int month) {
        if (month == 2)
        {
           return IsLeap(year) ? 29 : 28;
        }
        if (month == 4 || month == 6 || month == 9 || month == 11) return 30;
        else return 31;

        bool IsLeap(int year) =>  
            year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }
}
```