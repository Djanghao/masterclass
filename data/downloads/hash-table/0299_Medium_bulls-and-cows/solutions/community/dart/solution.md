# Dart solution

**Author:** AlexandrMolecule
**Votes:** 2
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/3281816/](https://leetcode.com/problems/bulls-and-cows/solutions/3281816/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
String getHint(String secret, String guess) {
  int bulls = 0;
  int cows = 0;
  Map<String, int> digitCount = {};

  for (int i = 0; i < secret.length; i++) {
    if (secret[i] == guess[i]) {
      bulls++;
    } else {
      digitCount[secret[i]] = (digitCount[secret[i]] ?? 0) + 1;
    }
  }

  for (int i = 0; i < guess.length; i++) {
    if (guess[i] != secret[i] && digitCount.containsKey(guess[i]) && digitCount[guess[i]]! > 0) {
      cows++;
      digitCount[guess[i]] = digitCount[guess[i]]! - 1;
    }
  }

  return '$bulls' + 'A' + '$cows' + 'B';
}
}
```