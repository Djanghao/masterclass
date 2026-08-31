# Simple solution Fast 100% of Sapce and time complixty

**Author:** m3n99
**Votes:** 1
**Link:** [https://leetcode.com/problems/decoded-string-at-index/solutions/4095996/](https://leetcode.com/problems/decoded-string-at-index/solutions/4095996/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to decode a given string s and find the kth character in the decoded string. To do this efficiently, we need to calculate the size of the decoded string without constructing it entirely. We can work backward from the target index k and keep track of the size of the string as we go.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a variable size to 0. This variable will represent the size of the decoded string.
2. Iterate through each character in the input string s.
- If the character is a digit, update the size by multiplying it by the digit's numeric value.
- If the character is a non-digit, increment the size by 1 since each non-digit character represents a single character in the decoded string.
3. Next, iterate through the characters in s in reverse order (from the end of the string).
- If the character is a digit, divide the size by the digit's numeric value and take the remainder of k when divided by the size. This step ensures that we are working backward and keeping track of which part of the string contributes to the kth character.
- If the character is a non-digit, check if k is 0 or equal to the size. If it is, return the current character since it is the kth character we are looking for. Otherwise, decrement the size by 1.
4. Continue this process until you find the kth character or reach the beginning of the string.
5. If k is out of bounds (less than 1 or greater than the size of the decoded string), return an empty string
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n), where n is the length of the input string s. We iterate through the string twice, first to calculate the size and then to find the kth character.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 O(1). We use a constant amount of extra space to store variables, and we don't construct the entire decoded string, which saves memory.

# Code
```
class Solution {
  String decodeAtIndex(String s, int k) {
    int size = 0;

    // Calculate the size of the decoded string
    for (int i = 0; i < s.length; i++) {
      if (isDigit(s[i])) {
        size *= int.parse(s[i]);
      } else {
        size++;
      }
    }

    // Iterate to find the kth character
    for (int i = s.length - 1; i >= 0; i--) {
      if (isDigit(s[i])) {
        size ~/= int.parse(s[i]);
        k %= size;
      } else {
        if (k == 0 || k == size) {
          return s[i];
        }
        size--;
      }
    }

    return ''; // Return an empty string if k is out of bounds
  }

  bool isDigit(String c) {
    return c.compareTo('0') >= 0 && c.compareTo('9') <= 0;
  }
}
// Another sol using Lists but have  Limit Exceeded
// String decodeAtIndex(String s, int k) {
//   List<String> addS = [];
//   List<String> curr = [];
//   List<String> res = [];
//   int? d = 0;
//   for (int i = 0; i < s.length; i++) {
//     d = int.tryParse(s[i]);
//     if (d != null) {
//       if (res.isEmpty) {
//         curr.addAll(addS);
//       } else {
//         curr.clear();
//         curr.addAll(res); //leet leet
//         curr.addAll(addS); // leet leet code
//         res.clear();
//       }

//       while (d! != 0) {
//         res.addAll(curr); // leet leet
//         d--;
//       }
//       addS.clear();
//     } else {
//       addS.add(s[i]); //code
//     }
//   }
//   return res.elementAt(k - 1);
// }

```