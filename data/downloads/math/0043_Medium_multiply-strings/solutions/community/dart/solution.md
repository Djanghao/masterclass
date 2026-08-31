# Simple, clear and fast!

**Author:** AbdulazimIslomjonov
**Votes:** 2
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/2975527/](https://leetcode.com/problems/multiply-strings/solutions/2975527/)

---

# Code
```
class Solution {
String multiply(String num1, String num2) {
  if (num1 == '0' && num2 == '0') return '0';
  List<int > res = List.generate(num1.length + num2.length, (index) => 0);
  num1 = num1.split('').reversed.join();
  num2 = num2.split('').reversed.join();
  for (int i1 = 0; i1 < num1.length; i1++) {
    for (int i2 = 0; i2 < num2.length; i2++) {
      final digit = int.parse(num1[i1]) * int.parse(num2[i2]);
      res[i1 + i2] += digit;
      res[i1 + i2 + 1] += (res[i1 + i2] ~/ 10);
      res[i1 + i2] = res[i1 + i2] % 10;
    }
  }
  res = res.reversed.toList();
  while (res.length > 0 && res.first == 0) {
    res.removeAt(0);
  }
  final r = res.join();
  return r.isEmpty ? '0' : r;
}
}
```