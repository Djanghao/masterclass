# Dart clear and concise solution using a SplayTreeSet

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/5055060/](https://leetcode.com/problems/search-suggestions-system/solutions/5055060/)

---

# Intuition
A trie could be used but I found that in many cases, sorting the list is just as fast and using a simpler data structure.

# Approach
Dart has a [SplayTreeSet](https://api.flutter.dev/flutter/dart-collection/SplayTreeSet-class.html) which is an ordered Set. It is based on a self-balancing binary tree. It allows most operations in amortized logarithmic time.

# Complexity
- Time complexity: O(n log n)
- Space complexity: O(n)

# Code
```
import 'dart:collection';

class Solution {
  List<List<String>> suggestedProducts(
      List<String> products, String searchWord) {
    
    List<List<String>> answer = [];

    var sortedProducts = SplayTreeSet.of(products);

    for (var i = 0; i < searchWord.length; i++) {
      var search = searchWord.substring(0, i + 1);
      var suggestions = sortedProducts
          .where((product) => product.startsWith(search))
          .take(3)
          .toList();
      answer.add(suggestions);
    }

    return answer;
  }
}
```