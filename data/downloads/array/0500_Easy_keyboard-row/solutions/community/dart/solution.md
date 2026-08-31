# Simple and Easy to understand

**Author:** akshaynathks
**Votes:** 1
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/6115481/](https://leetcode.com/problems/keyboard-row/solutions/6115481/)

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
  List<String> findWords(List<String> words) {
    List<String>output=[];
    String first="qwertyuiop";
    String second="asdfghjkl";
    String third ="zxcvbnm";
    for(String word in words){
        String lower=word.toLowerCase();
        if(lower.split('').every((char)=>first.contains(char))||lower.split('').every((char)=>second.contains(char))||lower.split('').every((char)=>third.contains(char))){
            output.add(word);
        }
    }
    return output;
  }
}
```