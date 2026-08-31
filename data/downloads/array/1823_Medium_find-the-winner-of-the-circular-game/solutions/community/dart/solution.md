# Simple solution using List in dart

**Author:** nidha_nidh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5490595/](https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/5490595/)

---

# Intuition
To determine the winner of the game, you can simulate the process of counting and removing friends in a circle. By repeatedly counting and removing the k-th friend until only one friend remains, you can find the winner.

# Approach
1. **Initialization**:
   - Create a list representing the friends numbered from 1 to n.
   - Use a variable `i` to keep track of the current position in the circle.

2. **Simulating the Game**:
   - Continue the process until only one friend remains in the list.
   - For each step, check if `i` equals `k`. If true, remove the friend at the current position (which is always the first element of the list) and reset `i` to 0.
   - If `i` is not equal to `k`, remove the friend at the current position, but add them back to the end of the list to simulate the circular movement.
   - Increment `i` to count the next friend.

3. **Return the Winner**:
   - Once the list contains only one friend, that friend is the winner.

# Complexity
- Time complexity: \\(O(n \\cdot k)\\)
  - In the worst case, each removal and re-addition operation can take linear time, and this is repeated for each friend until one remains.
- Space complexity: \\(O(n)\\)
  - The space used is primarily for the list of friends.

# Code
```dart
class Solution {
  int findTheWinner(int n, int k) {
    List<int> list = [];
    for (int i = 1; i <= n; i++) {
      list.add(i);
    }
    
    int i = 1;
    while (list.length > 1) {
      if (i == k) {
        list.removeAt(0);
        i = 0;
      } else {
        int num = list.removeAt(0);
        list.add(num);
      }
      i++;
    }
    
    return list.first;
  }
}

