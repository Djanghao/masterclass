# [dart] simple solution

**Author:** ayyubi_vh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-duplicate-file-in-system/solutions/6080889/](https://leetcode.com/problems/find-duplicate-file-in-system/solutions/6080889/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  List<List<String>> findDuplicate(List<String> paths) {
   Map<String, List<String>> contentToFiles = {};

  for (String path in paths) {
     List<String> parts = path.split(' ');
    String directory = parts[0];

     for (int i = 1; i < parts.length; i++) {
    
      String file = parts[i];
      int openBracketIndex = file.indexOf('(');
      int closeBracketIndex = file.indexOf(')');
      
      String fileName = file.substring(0, openBracketIndex);
      String content = file.substring(openBracketIndex + 1, closeBracketIndex);
      
      // Create the full file path
      String fullPath = '$directory/$fileName';
      
      // Add the file path to the content map
      contentToFiles.putIfAbsent(content, () => []).add(fullPath);
    }
  }

  // Filter out entries with no duplicates
  return contentToFiles.values.where((files) => files.length > 1).toList();

  }
}
```