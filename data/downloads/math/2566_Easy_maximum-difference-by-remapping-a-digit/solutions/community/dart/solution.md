# the fastest in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3964686/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3964686/)

---


# Complexity
- Time complexity:
O(n^2)
- Space complexity:
O(n)
# Code
```
class Solution {
  int minMaxDifference(int num) {
    String temp = num.toString();
    String temp2 = num.toString();
    int n = temp.length;

    int chI = -1;

    for (int i = 0; i < n; i++) {
      if (temp[i] != '9') {
        chI = i;
        break;
      }
    }

    if (chI != -1) {
      String c = temp[chI];
      temp = temp.replaceRange(chI, chI + 1, '9');

      for (int i = chI + 1; i < n; i++) {
        if (temp[i] == c) {
          temp = temp.replaceRange(i, i + 1, '9');
        }
      }
    }

    int chI2 = -1;
    for (int j = 0; j < n; j++) {
      if (temp2[j] != '0') {
        chI2 = j;
        break;
      }
    }

    if (chI2 != -1) {
      String c = temp2[chI2];
      temp2 = temp2.replaceRange(chI2, chI2 + 1, '0');
      for (int i = chI2 + 1; i < n; i++) {
        if (temp2[i] == c) {
          temp2 = temp2.replaceRange(i, i + 1, '0');
        }
      }
    }

    int nums1 = int.parse(temp);
    int nums2 = int.parse(temp2);
    return nums1 - nums2;
  }
}

```