# 🟢🔴🟢 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-date/solutions/5878898/](https://leetcode.com/problems/reformat-date/solutions/5878898/)

---

```
class Solution {
  String reformatDate(String date) {
    List<String> months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    List<String> dateTimes = date.split(" ");
    String year = dateTimes.last;
    String month = (months.indexOf(dateTimes[1]) + 1).toString();
    String day = dateTimes.first.substring(0,dateTimes.first.length - 2);
    return year + "-" + (month.length < 2 ? "0$month" : month) + "-" + (day.length < 2 ? "0$day" : day);
  }
}
```