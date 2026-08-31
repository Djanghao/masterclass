# [82,49%] One loop and no if-else block

**Author:** smarenkov
**Votes:** 10
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/2497418/](https://leetcode.com/problems/roman-to-integer/solutions/2497418/)

---

```
class Solution {
  int romanToInt(String s) {
    final romans = <String, int>{
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900,
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };

    int result = 0;

    for (final roman in romans.entries) {
      //Get count of roman number in string
      final count = roman.key.allMatches(s).length;
      //Multiply count to value
      result += roman.value * count;
      //Remove the Roman number from the string so as dont repeat I in IV and IX, etc.
      s = s.replaceAll(roman.key, '');
    }

    return result;
  }
}
```
[Submission Detail](https://leetcode.com/submissions/detail/785748761/)
**Please upvote if it was helpful!**