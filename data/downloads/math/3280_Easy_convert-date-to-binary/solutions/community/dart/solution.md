# 🟢🔴🟢 Beats 100.00%👏 Simple Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/6047857/](https://leetcode.com/problems/convert-date-to-binary/solutions/6047857/)

---

```
class Solution {
  String convertDateToBinary(String date) {

    List<String> dates = date.split("-");
    for(int i = 0; i < dates.length; i++){
        dates[i] = int.parse(dates[i]).toRadixString(2);
    }
    return dates.join("-");

  }
}
```