# Finding Minimum Amount of Time to Collect Garbage using Dart 🐐 Prog Lang.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/6028955/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/6028955/)

---

# Code
```dart []
class Solution {
  int garbageCollection(List<String> garbage, List<int> travel) {

  int maxHomeP = 0;
  int maxHomeG = 0;
  int maxHomeM = 0;

  for(int i = garbage.length-1; i >= 0; i--){
    if(garbage[i].contains("P")){
      maxHomeP = i;
      break;
    }
  }

  travel.insert(0, 0);

  for(int i = garbage.length-1; i >= 0; i--){
    if(garbage[i].contains("G")){
      maxHomeG = i;
      break;
    }
  }

  for(int i = garbage.length-1; i >= 0; i--){
    if(garbage[i].contains("M")){
      maxHomeM = i;
      break;
    }
  }

  int count = 0;

  for(int i = 0; i <= maxHomeP; i++){
    int innerCount = 0;
    for(int j = 0; j < garbage[i].length; j++){
      if(garbage[i][j] == "P"){
        innerCount++;
      }
    }
    count += travel[i];
    if(innerCount > 0){
      count+=innerCount;
    }
  }

  for(int i = 0; i <= maxHomeG; i++){
    int innerCount = 0;
    for(int j = 0; j < garbage[i].length; j++){
      if(garbage[i][j] == "G"){
        innerCount++;
      }
    }
    count += travel[i];
    if(innerCount > 0){
      count+=innerCount;
    }
  }

  for(int i = 0; i <= maxHomeM; i++){
    int innerCount = 0;
    for(int j = 0; j < garbage[i].length; j++){
      if(garbage[i][j] == "M"){
        innerCount++;
      }
    }
    count += travel[i];
    if(innerCount > 0){
      count+=innerCount;
    }
  }

  print(maxHomeP);
  print(maxHomeG);
  print(travel);
  return count;
}
}
```