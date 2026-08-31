# Standard Java Solution

**Author:** sriharik
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/690782/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/690782/)

---

### Theory
If we do as the hint says and find the difference in dates from both a common date, then our result will simply be `from1971(date1) - from1971(date2)`.
I can't really imagine this being asked in an interview, cause there are just so many better questions to ask, and not everyone has a grasp of the dates, and its API (like knowing which year is a leap year for example).

### Solution
```
    private int[] months = new int[]{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        
    public int daysBetweenDates(String date1, String date2) {
        return Math.abs(from1971(date1) - from1971(date2));
    }
    
    private int from1971(String date) {
        String[] parts = date.split("-");
        int year = Integer.parseInt(parts[0]), month = Integer.parseInt(parts[1]), day = Integer.parseInt(parts[2]);
        int count = day;
        for (int i = 1971; i < year; i++) count += (isLeapYear(i)) ? 366 : 365;
        for (int i = 0; i < month - 1; i++) count += months[i];
        if (month > 2 && isLeapYear(year)) count += 1;
        return count;
    }
    
    private boolean isLeapYear(Integer year) {
        return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
    }
```