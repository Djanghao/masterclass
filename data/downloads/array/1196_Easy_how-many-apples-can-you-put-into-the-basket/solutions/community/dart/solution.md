# Dart Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/5141300/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/5141300/)

---

# Code
```
class Solution {
  int maxNumberOfApples(List<int> weight) {
    weight = weight..sort();

    int count = 0;
    int w = 5000;
    for (var item in weight) {
      if (w - item >= 0) {
        w -= item;
        count++;
      } else {
        return count;
      }
    }

    return count;
  }
}


```