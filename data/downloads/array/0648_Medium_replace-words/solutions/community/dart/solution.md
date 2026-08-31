# Easy Approach!

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-words/solutions/5272596/](https://leetcode.com/problems/replace-words/solutions/5272596/)

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
  String replaceWords(List<String> dictionary, String sentence) {
    String res = '';
    List<String> words = sentence.split(' ');
    for(var char in dictionary){
       for(int i = 0 ; i < words.length ; i++){
           if(words[i].startsWith(char)){
            words[i] = char;
           }
       }
    }
    return words.join(' ');
  }
}
```