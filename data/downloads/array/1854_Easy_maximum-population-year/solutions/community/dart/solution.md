# Writen by Mr. ABC.

**Author:** johnydepth98
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/4382090/](https://leetcode.com/problems/maximum-population-year/solutions/4382090/)

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
class Solution {
  int maximumPopulation(List<List<int>> values) {
    List<List<int>> expandedValues = [];

  for (List<int> element in values) {
    int firstYear = element[0];
    int lastYear = element[1];
    expandedValues.add(List.generate((lastYear-firstYear), (index) => firstYear+index));
  }

  List<int> allYears = [];
  for (List<int> element in expandedValues) {
    allYears.addAll(element);
  }

  Map<int,List<int>> a = {};
  for (int element in allYears) {
    if(a == {} && a[element] == null){
      a.addAll({element:[element]});
    }
    else{
      List<int> tempValue = a[element]??[];
      tempValue.add(element);
      a[element] = tempValue;
    }
  }

  Map<int,List<int>> b = Map.fromEntries(
      a.entries.toList()..sort((e1, e2) => e1.key.compareTo(e2.key)));
  List<int> tl = [];
  int p = 0;
  for (List<int> element in b.values) {
    if(element.length > p){
      p = element.length;
      tl.add(element[0]);
    }

  }
  int ii = tl.reduce((curr, next) => curr > next? curr: next);
  int yy = tl.firstWhere((element) => element == ii);

  return yy;
  }
}
```