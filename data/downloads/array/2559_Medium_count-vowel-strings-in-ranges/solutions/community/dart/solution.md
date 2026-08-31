# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5121714/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5121714/)

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
  List<int> vowelStrings(List<String> words, List<List<int>> queries) {
    final List<int> nums = words.map((word) {
        final f = word[0];
        final l = word[word.length - 1];
        if ((f == 'a' || f == 'e' || f == 'i' || f == 'o' || f == 'u') && (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u')) {
            return 1;
        } else {
            return 0;
        }
    }).toList();

    final List<int> prefix = List.filled(nums.length, 0);
    prefix[0] = nums[0];
    for (int i = 1; i < nums.length; i++) {
        prefix[i] = nums[i] + prefix[i - 1];
    }

    final List<int> ans = [];
    for (final query in queries) {
        final start = query.first;
        final end = query.last;
        if (start == 0) {
            final total = prefix[end];
            ans.add(total);
        } else {
            final total = prefix[end] - prefix[start - 1];
            ans.add(total);
        }
    }

    return ans;
  }
}
```