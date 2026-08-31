# No Regex. When 'bull' is start of sentense

**Author:** yuanzhi247012
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-occurrences-in-text/solutions/3647067/](https://leetcode.com/problems/count-occurrences-in-text/solutions/3647067/)

---

# Intuition
When 'bull' is at the start or end of a sentense, this question also doesn't count it.
To consider the start and end of sentense case, I was using:
    ' '+convert(content as varchar(max))+' ' like '% bull %'

But since we don't need to consider it, the following simple statement will work:
    content like '% bull %'

# Code
```
/* Write your T-SQL query statement below */
select 'bull' word,
sum(
    case 
        when content like '% bull %' then 1 
        else 0
    end
    ) count
from files
union
select 'bear' word,
sum(
    case 
        when content like '% bear %' then 1 
        else 0
    end
    ) count
from files
```