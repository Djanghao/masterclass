# Beats 100% in Memory and Space

**Author:** ambar_cat2014
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5284179/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5284179/)

---

# Intuition
Convert to Date and use Date Comparison to check conflict

# Approach
Converted the Time Arrays to Date Arrays using map on Array. And then compare Dates from 2 Arrays to check conflict

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
import java.text.SimpleDateFormat

object Solution {
    def haveConflict(event1: Array[String], event2: Array[String]): Boolean = {
        var event1_modified = event1.map(r => {val formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
                               formatter.parse("2024-01-01 " + r + ":00")})
        var event2_modified = event2.map(r => {val formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
                               formatter.parse("2024-01-01 " + r + ":00")})
        
        var answer : Boolean = false

        if( ( event1_modified(0).after(event2_modified(0)) && event1_modified(0).before(event2_modified(1)) ) ||  
            ( event2_modified(0).after(event1_modified(0)) && event2_modified(0).before(event1_modified(1)) ) ||
            ( event1_modified(0).equals(event2_modified(0)) ||  event1_modified(0).equals(event2_modified(1))) ||
            ( event2_modified(0).equals(event1_modified(0)) ||  event2_modified(0).equals(event1_modified(1)))  ) {
                  answer = true
            }
                       
        answer
    }
}
```