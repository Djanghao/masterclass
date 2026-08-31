# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/5337682/](https://leetcode.com/problems/day-of-the-year/solutions/5337682/)

---


# Code
```
# @param {String} date
# @return {Integer}
def day_of_year(date)
    month_day_count = {}
    month_day_count[1] = 31
    month_day_count[2] = 28
    month_day_count[3] = 31
    month_day_count[4] = 30
    month_day_count[5] = 31
    month_day_count[6] = 30
    month_day_count[7] = 31
    month_day_count[8] = 31
    month_day_count[9] = 30
    month_day_count[10] = 31
    month_day_count[11] = 30
    month_day_count[12] = 31

    leap_years = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000,2004, 2008, 2012, 2016]

    month = date.split("-")[1]
    day = date.split("-")[2]
    case month
    when "01"
        return day.to_i
    else   
        answer = 0
        month = month.to_i
        i = 1
        while i < month
            answer += month_day_count[i]
            i += 1
        end

        if leap_years.index(date.split[0].to_i) and month > 2
            answer += 1
        end
        
        return answer + day.to_i
    end


    
end
```