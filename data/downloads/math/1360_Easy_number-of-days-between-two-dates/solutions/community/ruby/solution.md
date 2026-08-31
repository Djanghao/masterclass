# Labored Solution, no date library

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/4902412/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/4902412/)

---

Only took 20 minutes. Could be much more efficient.

# Code
```
# @param {String} date1
# @param {String} date2
# @return {Integer}
def days_between_dates(date1, date2)
    # September, April, June, and November = 30 days
    # January, March, May, July, August, October, and December = 31 days
    # feb = 28 days and 29 days on leap years.
    days_of_month = {}
    days_of_month[1] = 31
    days_of_month[2] = 28
    days_of_month[3] = 31
    days_of_month[4] = 30
    days_of_month[5] = 31
    days_of_month[6] = 30
    days_of_month[7] = 31
    days_of_month[8] = 31
    days_of_month[9] = 30
    days_of_month[10] = 31
    days_of_month[11] = 30
    days_of_month[12] = 31

    leap_years = Set.new([1972,1976,1980,1984,1988,1992,1996,2000,2004,2008,2012,2016,2020,2024,2028,2032,2036,2040,2044,2048,2052,2056,2060,2064,2068,2072,2076,2080,2084,2088,2092,2096])
    

    year1, month1, day1 = date1.split("-").collect{|d| d.to_i}
    year2, month2, day2 = date2.split("-").collect{|d| d.to_i}

    if year1 < year2 ||(year1 == year2 and month1 < month2) || (year1 == year2 and month1 == month2 and day1 < day2)
        past_date = [year1, month1, day1]
        future_date = [year2, month2, day2]
    else
        future_date = [year1, month1, day1]
        past_date = [year2, month2, day2]
    end

    ans = 0
    while future_date != past_date
        past_date[2] += 1
        if past_date[1] == 2 and past_date[2] == 29 and leap_years.include? past_date[0]
            ans += 1
        end
        if days_of_month[past_date[1]] < past_date[2]
            past_date[1] += 1
            past_date[2] = 1
        end

        if past_date[1] > 12
            past_date[1] = 1
            past_date[0] += 1
        end

        ans += 1
    end

    ans
end
```