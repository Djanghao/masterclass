# SUPER CUTE 😊 | BEATS : 100% 🎯| LOLLIPOP SOLUTION 🍭

**Author:** CodeWithSparsh
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/5534837/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/5534837/)

---

![image.png](./images/0.png)

The problem is to find the smallest character in a sorted array of characters that is lexicographically greater than a given target character. If such a character does not exist, return the first character in the array. Let's implement this in Dart.

# Intuition
Given a sorted array of characters, a binary search approach can efficiently find the smallest character greater than the target. If the target is greater than or equal to the last character in the array, we return the first character in the array.

# Approach
1. Initialize `start` to 0 and `end` to the length of the array minus one.
2. Use a binary search loop:
   - Calculate the midpoint `mid`.
   - If `letters[mid]` is greater than the target, move the `end` pointer to `mid - 1`.
   - If `letters[mid]` is less than or equal to the target, move the `start` pointer to `mid + 1`.
3. After the loop, if `start` is within the bounds of the array, return `letters[start]`.
4. If `start` is out of bounds, return the first character of the array.

# Complexity
- Time complexity: \\(O(\\log n)\\) due to the binary search.
- Space complexity: \\(O(1)\\) as we are using a constant amount of extra space.

# Code
```dart
class Solution {
  char nextGreatestLetter(char[] letters, char target) {
    int start = 0;
    int end = letters.length - 1;

    while (start <= end) {
      int mid = start + (end - start) / 2;
      if (letters[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    // If start is out of bounds, wrap around to the first element
    return start < letters.length ? letters[start] : letters[0];
  }
}

```
```java
class Solution {
  String nextGreatestLetter(List<String> letters, String target) {
    int start = 0;
    int end = letters.length - 1;

    while (start <= end) {
      int mid = start + (end - start) ~/ 2;
      if (letters[mid].compareTo(target) > 0) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    // If start is out of bounds, wrap around to the first element
    return start < letters.length ? letters[start] : letters[0];
  }
}
```



### Explanation:
1. **Binary Search Setup**: We initialize `start` and `end` pointers to the start and end of the array.
2. **Binary Search Execution**: The loop runs until `start` is greater than `end`.
   - If the middle element is greater than the target, we move `end` to `mid - 1` to search in the left half.
   - Otherwise, we move `start` to `mid + 1` to search in the right half.
3. **Result Determination**: After the loop:
   - If `start` is still within the array bounds, it means we found the next greatest letter.
   - If `start` exceeds the array length, we wrap around and return the first character.

This solution ensures that we find the smallest character greater than the target efficiently using binary search.