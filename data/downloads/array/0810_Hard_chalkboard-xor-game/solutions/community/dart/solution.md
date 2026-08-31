# Dart Solution

**Author:** gobindsingh6799
**Votes:** 0
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/5756673/](https://leetcode.com/problems/chalkboard-xor-game/solutions/5756673/)

---

# Intuition
The game involves a list of numbers, and the goal is to determine the winner based on XOR operations. A key observation is that if the XOR of all numbers is `0`, the first player always wins. Otherwise, if the number of elements is even, the first player can win by strategically removing numbers. If the number of elements is odd and the XOR is non-zero, the second player wins because the first player will run out of moves.

# Approach
1. First, compute the XOR of all numbers in the list.
2. If the XOR of all numbers is `0`, return `true` because the first player can win by selecting any number.
3. If the length of the list is even, return `true` because the first player can always win with optimal play.
4. Otherwise, return `false` since the second player will win.

# Complexity
- Time complexity:  
  $$O(n)$$  
  We iterate through the list once to compute the XOR of all elements.

- Space complexity:  
  $$O(1)$$  
  We only use a constant amount of extra space for storing the XOR result and do not use any extra space proportional to the input size.

# Code
```dart
class Solution {
  bool xorGame(List<int> nums) {
    int xorResult = nums.reduce((x, y) => x ^ y);
    return xorResult == 0 || nums.length % 2 == 0;
  }
}
