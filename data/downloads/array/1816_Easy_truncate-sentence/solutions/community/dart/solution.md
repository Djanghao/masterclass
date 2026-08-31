# Dart Solution

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/6096026/](https://leetcode.com/problems/truncate-sentence/solutions/6096026/)

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
  String truncateSentence(String s, int k) {
    String result ='' ;
    int wordCount = 0;
    for(int i = 0; i<s.length;i++){
        if(s[i] == ' '){
            wordCount++;
            if(wordCount == k) break;
        }
        result += s[i];
    }
    return result;
  }
}
```