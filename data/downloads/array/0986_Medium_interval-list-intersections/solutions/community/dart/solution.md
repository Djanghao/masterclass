# 🟢🔴🟢 Best Way of Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/5833469/](https://leetcode.com/problems/interval-list-intersections/solutions/5833469/)

---

```
class Solution {
  List<List<int>> intervalIntersection(List<List<int>> firstList, List<List<int>> secondList) {
    List<List<int>> outputs = [];
    int i = 0; int j = 0;
    while(i < firstList.length && j < secondList.length){
        int start = max(firstList[i].first, secondList[j].first);
        int end = min(firstList[i].last, secondList[j].last);
        if(start <= end) outputs.add([start,end]);
        if(firstList[i].last < secondList[j].last) i++;
        else j++;
    }
    return outputs;
  }
}
```