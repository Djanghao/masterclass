# Dart Solution with StringBuffer

**Author:** Maqcel
**Votes:** 1
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/3699754/](https://leetcode.com/problems/reformat-phone-number/solutions/3699754/)

---

# Approach
Code is easy to understand hence I'll add only that [StringBuffer](https://api.dart.dev/stable/3.0.5/dart-core/StringBuffer-class.html) is more efficient in handling writes.

# Code
```
class Solution {
  String reformatNumber(String number) {
    String cleanedNumber = number.replaceAll(RegExp(r'[-\\s]'), '');
    int length = cleanedNumber.length;
    StringBuffer formattedNumber = StringBuffer();

    int i = 0;
    while (i < length - 4) {
      formattedNumber.write(cleanedNumber.substring(i, i + 3));
      formattedNumber.write('-');
      i += 3;
    }

    if (length - i == 4) {
      formattedNumber.write(cleanedNumber.substring(i, i + 2));
      formattedNumber.write('-');
      formattedNumber.write(cleanedNumber.substring(i + 2, i + 4));
    } else {
      formattedNumber.write(cleanedNumber.substring(i));
    }

    return formattedNumber.toString();
  }
}

```