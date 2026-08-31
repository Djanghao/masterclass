# Dart Solution

**Author:** Shivamm03
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/3447623/](https://leetcode.com/problems/valid-palindrome/solutions/3447623/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
As I saw the ques. I thought it can be done by comparing the first & last element and moving to center in the string.
# Approach
<!-- Describe your approach to solving the problem. -->
first I converted the string to lowercase and then using ascii I made new string with just alphanumeric elements and then check the first and last element while moving to center of the new string.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
  bool isPalindrome(String s) {
  s = s.toLowerCase();

  String bag = '';

  for (int i = 0; i < s.length; i++) {
    int a = s.codeUnitAt(i);
    if ((a >= 48 && a < 58) || (a >= 97 && a <= 122)) {
      bag += s[i];
    }
  }

  int r = bag.length - 1;
  bool pal = true;
if(bag.length<=1){
  return true;
}
else{

  for (int j = 0; j < (bag.length / 2).floor(); j++) {
    if (bag[j] != bag[r]) {
      pal = false;
      break;
    }
    r--;
  }
}

  return pal;
}


  }

```