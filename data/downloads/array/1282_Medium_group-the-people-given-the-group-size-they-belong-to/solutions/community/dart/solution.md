# Grouping the People Given the Group Size They Belong To using Dart 🐐 Prog Lang.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/5955959/](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/5955959/)

---

# Code
```dart []
class Solution {
  List<List<int>> groupThePeople(List<int> groupSizes) {
  List<int> list2 = List.from(groupSizes);
  groupSizes.sort((a, b) => a.compareTo(b));
  List<List<int>> nestedList = [];
  for(int i = 1; i <= 500; i++){
    List<int> list = [];
    if(groupSizes.contains(i)){
      for(int j = 0; j < groupSizes.length; j++){
        if(groupSizes[j] == i){
          list.add(groupSizes[j]);
          groupSizes.removeAt(j);
          j--;
          if(list.length == i){
            break;
          }
        }
      }
      nestedList.add(list);
      i--;
    }
  }

  List<int> indexes = [];
  List<List<int>> finalList = [];
  for(var lists in nestedList){
    List<int> anotherList = [];
    for(int elem in lists){
      for(int i = 0; i < list2.length; i++){
        if(!indexes.contains(i) && elem == list2[i]){
          anotherList.add(i);
          indexes.add(i);
          break;
        }
      }
    }
    finalList.add(anotherList);
  }

  return finalList;
}

}
```