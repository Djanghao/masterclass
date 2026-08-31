# practice solving solution with Dart

**Author:** pqan112
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5455203/](https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5455203/)

---

# Code
```
class Solution {
  int maxHeightOfTriangle(int red, int blue) {
    int redAtTop = maxHeight(red, blue);
    int blueAtTop = maxHeight(blue, red);
    return redAtTop > blueAtTop ? redAtTop : blueAtTop;

  }

  int maxHeight(int firstColor, int secondColor) {
    int result = 0;
    int level = 1;
    while(true) {
        if(level % 2 == 1) {
            if(firstColor >= level) {
                firstColor -= level;
            } else {
                break;
            }
        } else {
            if(secondColor >= level) {
                secondColor -= level;
            } else {
                break;
            }
        }
        result++;
        level++;
    }
    return result;
  }
}
```