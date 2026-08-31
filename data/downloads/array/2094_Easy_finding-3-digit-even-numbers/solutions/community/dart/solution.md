# Dart Solution

**Author:** JomonJohnson
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/6127732/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/6127732/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Counting and Enumeration: Count occurrences of each digit. Then enumerate all three-digit even numbers, verifying their validity using the digit count.
Brute Force: Use three nested loops to form all three-digit numbers, filtering out invalid ones.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  List<int> findEvenNumbers(List<int> digits) {
  final count = List.filled(10, 0);
  for (var digit in digits) count[digit]++;
  
  final result = <int>[];
  for (int num = 100; num < 1000; num += 2) {
    final hundreds = num ~/ 100;
    final tens = (num ~/ 10) % 10;
    final ones = num % 10;
    
    final tempCount = List.of(count);
    tempCount[hundreds]--;
    tempCount[tens]--;
    tempCount[ones]--;
    
    if (tempCount.every((c) => c >= 0)) {
      result.add(num);
    }
  }
  return result;
}

}
```