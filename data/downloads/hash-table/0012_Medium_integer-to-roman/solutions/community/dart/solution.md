# «thous, hunds, tens и ones» by mdeakyne

**Author:** smarenkov
**Votes:** 5
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/2497457/](https://leetcode.com/problems/integer-to-roman/solutions/2497457/)

---

**Please upvote if it was helpful!**

The old elegant solution without a loop.
```
class Solution {
  String intToRoman(int num) {
    final ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    final tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    final hunds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    final thous = ["", "M", "MM", "MMM", "MMMM"];

    final t = thous[num  ~/ 1000];
    final h = hunds[num ~/ 100 % 10];
    final te = tens[num ~/ 10 % 10];
    final o = ones[num % 10];

    return t + h + te + o;
  }
}
```
[Submission Detail](https://leetcode.com/submissions/detail/785763057/)