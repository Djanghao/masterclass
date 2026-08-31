# BEATS 100% BEST Dart Solution with explanation

**Author:** Mohamed_Sadeck
**Votes:** 5
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/5203884/](https://leetcode.com/problems/word-break-ii/solutions/5203884/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is a classic example of a word segmentation problem where we need to find all possible sentences that can be formed from a given string using a dictionary of words. The first thought that comes to mind is to use a depth-first search (DFS) approach to explore all possible segmentations of the string.
# Approach
<!-- Describe your approach to solving the problem. -->
1. We start by converting the dictionary of words into a set for faster lookup.

2. We then use a recursive function (DFS) to explore all possible segmentations of the string. For each character in the string, we try to form a word with the remaining characters.

3. If the formed word is in the dictionary, we add it to our current sentence and recursively call our function for the next character. If the word is the first word in the sentence, we do not add a space before it.

4. If we have considered all characters in the string and the current sentence is not empty, we add it to our list of possible sentences.

5. We start our DFS from the first character with an empty sentence.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^m)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ 
# Code
```
class Solution {
  List<String> wordBreak(String s, List<String> wordDict) {
    // Initialize an empty list to store the possible sentences
    List<String> ans = [];
    // Convert the word dictionary to a set for faster lookup
    final dict = wordDict.toSet();

    // Define a recursive function (DFS) to construct the possible sentences
    void dfs(int idx, String word) {
      // If we have considered all characters in the string
      if (idx == s.length) {
        // If the current word is not empty, add it to the list of possible sentences
        if (word.isNotEmpty) ans.add(word);
        return;
      }
      // Try to form a word with the remaining characters in the string
      for (int i = idx + 1; i <= s.length; i++) {
        // Get the current word
        final w = s.substring(idx, i);
        // If the current word is in the dictionary
        if (dict.contains(w)) {
          // If the current word is the first word in the sentence, move to the next character without adding a space
          if (word == "") dfs(i, w);
          // Otherwise, add a space before the current word and move to the next character
          else dfs(i, word + " " + w);
        }
      }
    }
    // Start constructing the possible sentences from the first character
    dfs(0, "");
    // Return the list of possible sentences
    return ans;
  }
}
```