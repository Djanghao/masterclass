# Solving Rings and Rods problem with Dart GOAT 🐐 language.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/5831082/](https://leetcode.com/problems/rings-and-rods/solutions/5831082/)

---

# Intuition
- **That problem will be solved easly if we split all the rods that labeled from 0 to 9. Doing that helps us to check if rods have exactly 3 colors and that is what we gonna do.**

# Approach
1. First I created a nested list which contains 10 empty lists which I used to store colors of rods.
2. After that I used for() loop to iterate given rings String.
3. In each iteration I checked next element of the iterated element if it was digit. If it was digit then, I added iterted element to the nested that is located exactly in the index of digit that I found through iteration. But before adding I checked if list didn't contain element that I tried to add. This way I managed to store exactly 3 elements or less to each lists inside nested list.
4. After that I created a variable that helped me to count how many lists contains exactly 3 colors.
5. After that I used for in() loop to iterate through nested list that I created before. In each iteration I checked if iterated list contains exactly 3 colors. If the length of iterted list was equal to 3 then I added 1 to the variable that I created in order to count lists that contains all three colors.
6. At the end I returned value of the variable that was created in order to count lists that contains all three colors.

# Code
```dart []
class Solution {
  int countPoints(String rings) {

  List<List<String>> list = [[], [], [], [], [], [], [], [], [], []];

  for(int i = 0; i < rings.length-1; i++){
    if(rings.codeUnitAt(i+1) >= 48 && rings.codeUnitAt(i+1) <= 57){
      if(!list[int.parse(rings[i+1])].contains(rings[i])){
        list[int.parse(rings[i+1])].add(rings[i]);
      }
    }
  }

  int count = 0;
  for(var lists in list){
    if(lists.length == 3){
      count++;
    }
  }

  print(list);
  return count;
}
}
```