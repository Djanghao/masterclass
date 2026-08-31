# 🟢🔴🟢 Beats 100.00%👏 Dart Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/5973391/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/5973391/)

---

```
class Solution {
  int convertTime(String current, String correct) {

    List<int> currentTimes = current.split(":").map((e)=> int.parse(e)).toList();
    List<int> correctTimes = correct.split(":").map((e)=> int.parse(e)).toList();
    int totalCurrentMinutes = currentTimes.first * 60 + currentTimes.last;
    int totalCorrectMinutes = correctTimes.first * 60 + correctTimes.last;

    int count = 0;
    int duration = (totalCorrectMinutes - totalCurrentMinutes);
    while(duration != 0){
        if(duration >= 60 ){
            duration -= 60;
        }else if(duration >= 15){
            duration -= 15;
        }else if(duration >= 5){
            duration -= 5;
        }else if(duration >= 1) {
            duration -= 1;
        }
        count++;
    }
    return count;
  }
}
```