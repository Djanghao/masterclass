# Counting the Number of Vowel Strings in Range using Dart 🐐 Prog Lang.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/5940435/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/5940435/)

---

# Code
```dart []
class Solution {
  int vowelStrings(List<String> words, int left, int right) {
    int count = 0;
    List<String> list = ['a', 'e', 'i', 'o', "u"];
    for(int i = left; i <= right; i++){
        if(list.contains(words[i][0]) && list.contains(words[i][words[i].length-1])){
            count++;
        }
    }

    return count;
  }
}
```