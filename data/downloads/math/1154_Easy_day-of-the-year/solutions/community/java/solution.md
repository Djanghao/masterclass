# Simple Java Solution [easy to understand] #GregorianCalendar

**Author:** JatinYadav96
**Votes:** 30
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/355880/](https://leetcode.com/problems/day-of-the-year/solutions/355880/)

---

If it is leap year then simple add 1 to feb
Rest is easy to understand
Java has inBuilt split function no need to use substring for that :P
```
 public int dayOfYear(String S) {
        String[] s = S.split("-");
        int year = Integer.parseInt(s[0]);
        int month = Integer.parseInt(s[1]);
        int date = Integer.parseInt(s[2]);
        boolean isLeap = checkYear(year);
        int noOfDays = 0;
        int[] days = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        for (int i = 0; i < month - 1; i++) {
            if (isLeap && i == 1) {
                noOfDays += days[i] + 1;
                continue;
            }
            noOfDays += days[i];
        }
        return noOfDays + date;
    }
``````
And to check leap Year

```

    boolean checkYear(int year) {
        if (year % 400 == 0)
            return true;
        if (year % 100 == 0)
            return false;
        if (year % 4 == 0)
            return true;
        return false;
    }
```

we can also check leap year with help of GregorianCalendar inBuilt class in java 
```
		GregorianCalendar gregorianCalendar = new GregorianCalendar();
        boolean isLeap = gregorianCalendar.isLeapYear(year);
```
