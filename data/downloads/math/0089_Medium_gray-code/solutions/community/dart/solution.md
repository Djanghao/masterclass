# Recursive Function

**Author:** mh72156
**Votes:** 0
**Link:** [https://leetcode.com/problems/gray-code/solutions/5240752/](https://leetcode.com/problems/gray-code/solutions/5240752/)

---

# Intuition
The code generates the Gray code sequence for a given number n. The Gray code is a binary numeral system where two successive values differ in only one bit

The base case is when n == 1, returning the list ['0', '1'].
For any other value of n, it recursively generates the Gray code for n-1.

# Approach
The approach used in the code is recursive

Converting each binary string to an integer has a complexity of 
\uD835\uDC42(\uD835\uDC5B)
O(n) (since each binary string has n bits).
# Complexity
- Time complexity: O(n\u22C52^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

List Storage:

At each recursive step, a list of 2^n elements is created.
Each element in the list is a binary string of length n.
- Space complexity:O(n\u22C52^n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> grayCode(int n) {
    List<int> result = [];
    final list = generateGrayCode(n);
    for (var item in list) {
      result.add(int.parse(item, radix: 2));
    }
    return result;
  }

  List<String> generateGrayCode(int n) {
    List<String> list1 = [];
    List<String> list2 = [];
    if (n == 1) return ['0', '1'];
    final list = generateGrayCode(n - 1);
    for (int i = 0; i < list.length; i++) {
      list1.add('0${list[i]}');
    }
    for (int i = list.length - 1; i >= 0; i--) {
      list1.add('1${list[i]}');
    }
    list1.addAll(list2);
    return list1;
  }
}
```