# beats 100%   of users with dart(time & memory)

**Author:** m7medmahgoop
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/4734263/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/4734263/)

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
  List<int> circularGameLosers(int n, int k) {
    Map winPlayers = {};
    int newPlayer = 1;
    int i = 1;
    while (checkEnd(winPlayers, newPlayer)) {
      winPlayers[newPlayer] = 1;
      newPlayer = getNext(newPlayer, k * i, n);
      i++;
    }
    List<int> loserPlayers = getLosers(winPlayers, n);
    return loserPlayers;
  }

  List<int> getLosers(Map winPlayers, int maxPlayer) {
    List<int> loserPlayers = [];
    for (int i = 1; i <= maxPlayer; i++) {
      if (!winPlayers.containsKey(i)) {
        loserPlayers.add(i);
      }
    }
    return loserPlayers;
  }

  bool checkEnd(Map winPlayers, int newPlayer) {
    if (winPlayers[newPlayer] == 1) {
      return false;
    } else {
      return true;
    }
  }

  int getNext(int newPlayer, int steps, int maxPlayer) {
    if (steps > maxPlayer) {
      steps = steps % maxPlayer;
    }
    if (steps + newPlayer > maxPlayer) {
      newPlayer = steps + newPlayer - maxPlayer;
      return newPlayer;
    }
    newPlayer += steps;
    return newPlayer;
  }
}
```