# Finding Destination City using Dart 🐐 Programming Language.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/destination-city/solutions/5935512/](https://leetcode.com/problems/destination-city/solutions/5935512/)

---

# Code
```dart []
class Solution {
  String destCity(List<List<String>> paths) {
  List<String> startingPoints = [];
  for(var elem in paths){
    startingPoints.add(elem.first);
  }

  String destination = paths[0].last;

  if(!startingPoints.contains(destination)){
    return destination;
  }

  while(true) {
    if(!startingPoints.contains(destination)){
      return destination;
    }
    for (int i = 1; i < paths.length; i++) {
      if (paths[i].first == destination) {
        destination = paths[i].last;
      }
    }
    if(!startingPoints.contains(destination)){
      return destination;
    }
  }
}
}
```