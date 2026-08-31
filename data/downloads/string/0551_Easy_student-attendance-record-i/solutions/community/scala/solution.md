# Scala code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/5210702/](https://leetcode.com/problems/student-attendance-record-i/solutions/5210702/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.util.control.Breaks._

object Solution {
    def checkRecord(s: String): Boolean = {
        var l = 0
        var a = 0

        if(s(0) == 'A') a += 1
        else if(s(0) == 'L') l += 1

        var ans = true

        breakable {
            for(i <- 1 to s.length-1) {
                if(s(i) == 'A') {
                    a += 1
                    l = 0
                    if(a > 1){
                        ans = false
                        break()
                    }
                }

                else if(s(i) == 'L'){
                    l += 1
                    if(l > 2){
                        ans = false
                        break()
                    }
                }

                else if(s(i) == 'P'){
                    l = 0
                }
            }
        }

        if(l > 2 || a > 1) return false
        ans
    }
}
```