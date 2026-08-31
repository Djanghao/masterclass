# [98.59%] JavaScript Simply as possible with readable variables

**Author:** smarenkov
**Votes:** 26
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/3329256/](https://leetcode.com/problems/container-with-most-water/solutions/3329256/)

---

Heights that are as far apart as possible will most likely be able to give the maximum amount of stored water. So we start with them.

In order to find the amount of stored water, we need to multiply the width between the heights by the smaller height.

Next, we will shift the smaller height index to find out the possible amount of stored water with another height.

**Please upvote if it was helpful!**

``` JavaScript []
var maxArea = function (height) {
    var leftIndex = 0;
    var rightIndex = height.length - 1;
    var maxStoredWater = 0;

    while (leftIndex < rightIndex) {
        const leftHeight = height[leftIndex];
        const rightHeight = height[rightIndex];
        const width = rightIndex - leftIndex;
        const smallerHeight = leftHeight < rightHeight ? leftHeight : rightHeight;
        const storedWater = width * smallerHeight;

        maxStoredWater = storedWater > maxStoredWater ? storedWater : maxStoredWater;
        smallerHeight == leftHeight ? leftIndex++ : rightIndex--;
    }

    return maxStoredWater;
};
```

``` Dart []
class Solution {
  int maxArea(List<int> height) {
    int leftIndex = 0;
    int rightIndex = height.length - 1;
    int maxStoredWater = 0;

    while (leftIndex < rightIndex) {
      final leftHeight = height[leftIndex];
      final rightHeight = height[rightIndex];
      final width = rightIndex - leftIndex;
      final smallerHeight = leftHeight < rightHeight ? leftHeight : rightHeight;
      final storedWater = width * smallerHeight;

      maxStoredWater = storedWater > maxStoredWater ? storedWater : maxStoredWater;
      smallerHeight == leftHeight ? leftIndex++ : rightIndex--;
    }

    return maxStoredWater;
  }
}
```
[Submission Detail](https://leetcode.com/submissions/detail/920200213/)