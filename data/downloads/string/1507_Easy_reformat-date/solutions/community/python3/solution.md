# Python 3 - Easy Dict. Solution w/out imports (98%)

**Author:** IvanTsukei
**Votes:** 17
**Link:** [https://leetcode.com/problems/reformat-date/solutions/1861804/](https://leetcode.com/problems/reformat-date/solutions/1861804/)

---

Explanation in comments. Avoided using imports.
```
class Solution:
    def reformatDate(self, date: str) -> str:
        s = date.split() # Divides the elements into 3 individual parts
        
        monthDict = {'Jan': '01', 'Feb': '02', 
                     'Mar': '03', 'Apr': '04', 
                     'May': '05', 'Jun': '06', 
                     'Jul': '07', 'Aug': '08', 
                     'Sep': '09', 'Oct': '10', 
                     'Nov': '11', 'Dec': '12'}
        
        day = s[0][:-2] # Removes the last 2 elements of the day
        month = s[1] 
        year = s[2]
        
        if int(day) < 10: # Adds 0 to the front of day if day < 10
            day = '0' + day
        
        return ''.join(f'{year}-{monthDict[month]}-{day}') # Joins it all together. Month is used to draw out the corresponding number from the dict.
```