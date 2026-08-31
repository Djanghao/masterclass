# 1 while loop only

**Author:** thanhson232
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/5898273/](https://leetcode.com/problems/construct-the-rectangle/solutions/5898273/)

---

# Code
```dart []
class Solution {
List<int> constructRectangle(int area) {
  List<List<int>> result = [];
  int j = 1;

  while (j <= area) {
    int div = area ~/ j;
    if (div < j) {
      break;
    }
    if (area % j == 0) {
      result.add([area ~/ j, j]);
    }
    j++;
  }
  return result.lastOrNull ?? [];
}

}
```