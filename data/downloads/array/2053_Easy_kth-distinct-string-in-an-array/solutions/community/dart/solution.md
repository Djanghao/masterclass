# Beats 90% Solution in Dart

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5620847/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5620847/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

class Solution {
  String kthDistinct(List<String> arr, int k) {
    Map<String, int> frequencyMap = {};
    int distrinctCount = 0;

    for (String word in arr) {
      frequencyMap[word] = (frequencyMap[word] ?? 0) + 1;
    }

    for (String word in arr) {
      if (frequencyMap[word] == 1) {
        distrinctCount++;
        if (distrinctCount == k) {
          return word;
        }
      }
    }

    return '';
  }
}

```