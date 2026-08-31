# Splitting Words by a Separator and Removing Empty Segments

**Author:** akhilsnediyathu
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/5693642/](https://leetcode.com/problems/split-strings-by-separator/solutions/5693642/)

---

# Intuition
The problem involves splitting words by a specific separator. My initial thought is to iterate through each word and apply the split operation, collecting all the resulting segments. After that, I'll remove any empty strings that might have been created due to consecutive separators or leading/trailing separators.

# Approach
1. Initialize an empty list to store the results.
2. Loop through each word in the given list.
3. Use the `split` method on each word with the given separator.
4. Append all the split parts to the results list.
5. Remove any empty strings from the results list, as these are not meaningful parts of the words.
6. Return the cleaned list of segments.

# Complexity
- Time complexity:
  - $$O(n \\cdot m)$$, where $$n$$ is the number of words and $$m$$ is the average length of the words. This is because each word is split by the separator, and splitting a word of length $$m$$ takes $$O(m)$$ time.
  
- Space complexity:
  - $$O(k)$$, where $$k$$ is the total number of characters across all words after splitting. This accounts for the space required to store the resulting segments.

# Code
```dart []
class Solution {
  List<String> splitWordsBySeparator(List<String> words, String separator) {
   List<String> res = [];
  for (String word in words) {
    res.addAll(word.split(separator));
  }
  res.removeWhere((word) => word.isEmpty);

  return res;
  }
}
```