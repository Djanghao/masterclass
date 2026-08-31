# simple way

**Author:** muhdsahaddev
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/6047861/](https://leetcode.com/problems/reformat-the-string/solutions/6047861/)

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
String reformat(String s) {
    if(s.length==1) return s;
  List<String> letters =
      List.generate(26, (index) => String.fromCharCode(97 + index));

  List<String> digit = List.generate(10, (index) => index.toString());

  List<String> letter = [];
  List<String> digits = [];
  List<String> sList = s.split('');

  for (var i = 0; i < sList.length; i++) {
    if (letters.contains(sList[i])) {
      letter.add(sList[i]);
    } else if (digit.contains(sList[i])) {
      digits.add(sList[i]);
    }
  }
  List<int> values = [-1, 0, 1];
  int length = letter.length - digits.length;
  List<String> result = [];
  if (letter.isEmpty || digits.isEmpty) {
    return '';
  } else if (values.contains(length)) {
    if (letter.length > digits.length) {
      for (var i = 0; i < letter.length; i++) {
        result.add(letter[i]);
        for (var j = i; j < digits.length;) {
          result.add(digits[j]);
          break;
        }
      }
    } else {
      for (var i = 0; i < digits.length; i++) {
        result.add(digits[i]);
        for (var j = i; j < letter.length;) {
          result.add(letter[j]);
          break;
        }
      }
    }
  }
  return result.isEmpty ? '' : result.join('');
}

}
```