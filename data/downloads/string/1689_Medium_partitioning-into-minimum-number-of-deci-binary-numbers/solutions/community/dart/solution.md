# [100%] Solution with explanation and  without a complex algorithm

**Author:** smarenkov
**Votes:** 6
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/2509728/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/2509728/)

---

*It is important to think before writing code.*
We don't need any algorithm to calculate the required number of binary digits. All we need is to find the **largest digit** in the string.

```
100 = 100
// 1 minimum number

2 = 1 + 1
// 2 minimum numbers

130 = 110 + 10 + 10
// 3 minimum numbers

1234 = 1111 + 111 + 11 + 1
// 4 minimum numbers

142967 =
111111 +
 11111 +
 10111 +
 10111 +
   111 +
   111 +
   101 +
   100 + 
   100
// 9 minimum numbers
```

And it doesn't matter how long is string

**Please upvote if it was helpful!**

``` Dart []
class Solution {
  int minPartitions(String n) {
    // 9 is the largest digit, so if it's in the string, 
    // there's no point looking any further
    if (n.contains('9')) return 9;

    int result = 0;
    for (int i = 0; i < n.length; i++) {
      result = max(result, int.parse(n[i]));
    }
    return result;
  }
}
```
``` Dart []
class Solution {
  int minPartitions(String n) {
    // It works but I don't like the way it looks
    if (n.contains('9')) return 9;
    if (n.contains('8')) return 8;
    if (n.contains('7')) return 7;
    if (n.contains('6')) return 6;
    if (n.contains('5')) return 5;
    if (n.contains('4')) return 4;
    if (n.contains('3')) return 3;
    if (n.contains('2')) return 2;
    return 1;
  }
}
```
[Submission Detail](https://leetcode.com/submissions/detail/788064461/)