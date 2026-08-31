# Hash Table solution

**Author:** Marat_Ramazanov
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-labels/solutions/3802108/](https://leetcode.com/problems/partition-labels/solutions/3802108/)

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
```
class Solution {
  List<int> partitionLabels(String s) {
  List<int> result = [];
  Map<String, int> lastOccurrences = {};

  // \u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0432\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0431\u0443\u043A\u0432\u044B
  for (int i = 0; i < s.length; i++) {
    lastOccurrences[s[i]] = i;
  }

  int startIndex = 0;
  int lastIndex = 0;

  // \u041F\u0440\u043E\u0445\u043E\u0434\u0438\u043C \u043F\u043E \u0441\u0442\u0440\u043E\u043A\u0435 \u0441\u043D\u043E\u0432\u0430 \u0438 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0435\u043C \u0447\u0430\u0441\u0442\u0438
  for(int i = 0; i < s.length; i++) {
    int currentLastIndex = lastOccurrences[s[i]]!;


    // \u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C lastIndex \u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u043C \u0432\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0431\u0443\u043A\u0432\u044B
    lastIndex = (lastIndex > currentLastIndex) ? lastIndex : currentLastIndex;

    // \u0415\u0441\u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u0440\u0430\u0432\u0435\u043D lastIndex, \u044D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u043C\u044B \u043D\u0430\u0448\u043B\u0438 \u043D\u043E\u0432\u0443\u044E \u0447\u0430\u0441\u0442\u044C
    if(i == lastIndex) {
      result.add(lastIndex - startIndex + 1);
      startIndex = i + 1;
    }
  }
  
  return result;
  }
}
```