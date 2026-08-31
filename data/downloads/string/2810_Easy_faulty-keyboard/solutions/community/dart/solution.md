# String Path Reversal Algorithm with 'i' Marker Handling

**Author:** adhilfouzi
**Votes:** 1
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/4663571/](https://leetcode.com/problems/faulty-keyboard/solutions/4663571/)

---

# Intuition
We will iterate through the given string. For each character, if it's not 'i', we add it to the path. If it's 'i', we reverse the current path. Finally, we return the joined path.

# Approach
We iterate through the string, maintaining a path. When encountering 'i', we reverse the current path. After processing the entire string, we return the joined path.

# Complexity
- Time complexity:
O(n), where n is the length of the input string. We iterate through the string once.
- Space complexity: O(n), where n is the length of the input string. The space used is primarily for the path list.

# Code
```
class Solution {
  String finalString(String s) {
    List<String> path = [];
    for (int i = 0; i < s.length; i++) {
      if (s[i] != 'i') {
        path.add(s[i]);
        print(path);
      } else {
        path = reverse(path);
      }
    }
    return path.join();
  }

    List<String> reverse(List<String> list) {
      int n = list.length;
      for (int i = 0; i < n ~/ 2; i++) {
        String temp = list[i];
        list[i] = list[n - i - 1];
        list[n - i - 1] = temp;
      }
      return list;
    }

}
```