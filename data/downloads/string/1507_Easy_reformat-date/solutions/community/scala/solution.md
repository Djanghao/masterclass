# Scala triple pattern Matching

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-date/solutions/3292596/](https://leetcode.com/problems/reformat-date/solutions/3292596/)

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
object Solution {
    def reformatDate(date: String): String = {
        date.split(" ") match {
            case Array(a,b,c) => c + "-" + (b match {
                case "Jan" => "01"
                case "Feb" => "02"
                case "Mar" => "03"
                case "Apr" => "04"
                case "May" => "05"
                case "Jun" => "06"
                case "Jul" => "07"
                case "Aug" => "08"
                case "Sep" => "09"
                case "Oct" => "10"
                case "Nov" => "11"
                case "Dec" => "12"
            }) + "-" + (a.filter(_.isDigit) match {
                case x if x.length == 1 => "0" + x
                case x => x
            })
        }
    }
}
```