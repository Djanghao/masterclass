# 100% beats dart Simple Solution

**Author:** user5429LL
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-and-say/solutions/6040227/](https://leetcode.com/problems/count-and-say/solutions/6040227/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Simple approach take a 2d array and now start counting the From 1 like Take 1 as the initial string and then loop through the String check wheather that particular number is equal to the next one if yes then increase the count by one and if its not equal then make it zero and if its not equal add to the list [count of that number,value].

# Complexity
- Time complexity:O(N*M)


- Space complexity:O(N+M)


# Code
```dart []
class Solution {
  String countAndSay(int n) {
    if (n <= 0) return "0";
    String myString = "1";

    for (int i = 0; i < n - 1; i++) {
      myString = runLengthEncoder(myString);
    }
    return myString;

   
  }

   String runLengthEncoder(String decoded) {
    if (decoded.isEmpty) return "";
    List<List<int>> tracker = [];
    int currentCount = 0;
    int firstPointer = 0;
    int secondPointer = 1;
    if (decoded.length == 1) {
      tracker.add([decoded.length, int.parse(decoded[0])]);
    }
    while (firstPointer < decoded.length - 1) {
      if (decoded[firstPointer] == decoded[secondPointer]) {
        currentCount++;
      } else {
        tracker.add([currentCount + 1, int.parse(decoded[firstPointer])]);
        currentCount = 0;
      }
      if (firstPointer == decoded.length - 2) {
        tracker.add([currentCount + 1, int.parse(decoded[secondPointer])]);
      }
      firstPointer++;
      secondPointer++;
    }

    return tracker
        .toString()
        .replaceAll("[", "")
        .replaceAll("]", "")
        .replaceAll(",", "")
        .replaceAll(" ", "");
  }

}
```