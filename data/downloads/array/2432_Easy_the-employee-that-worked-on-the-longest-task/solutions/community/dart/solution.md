# 🟢🔴🟢 Beats 100.00%👏 Dart Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/6034422/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/6034422/)

---

```dart []
class Solution {
  int hardestWorker(int n, List<List<int>> logs) {

    Map<int,int> employTasks = {logs.first.first : logs.first.last};
    
    for(int i = 1; i < logs.length; i++){
        int times = logs[i].last - logs[i-1].last;
        employTasks.update(logs[i].first,(value)=> max(value,times), ifAbsent: ()=> times);
    }

    int maxTimes = employTasks.values.reduce((a,b)=> a > b ? a : b);
    int longestWork = employTasks.entries
                     .where((e)=> e.value == maxTimes)
                     .reduce((a,b)=> a.key > b.key ? b : a).key;

    return longestWork;

  }
}
```