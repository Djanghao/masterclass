# 🔥Easy Solution using Hash Table🔥

**Author:** m3n99
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4572350/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4572350/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The code seems to be attempting to find the winners and losers in a tournament based on a list of matches. It maintains a map to keep track of the number of losses for each player. Players with no losses are considered winners, and players with one loss are considered losers.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize an empty map to store the number of losses for each player.
2. Iterate through the list of matches.
3. For each match, update the map to reflect the result. If a player has no entry in the map, initialize it with 0 losses. If the loser is already in the map, increment their loss count; otherwise, add them with one loss.
4. Iterate through the map and identify winners (0 losses) and losers (1 loss).
5. Sort the winners and losers for the final result.

# Complexity
- Time complexity: **O(nlogn)**, where n is the number of matches. The sorting of the winners and losers contributes to the overall time complexity.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(n)**, where n is the number of players. The space is primarily used for the map, winners, and losers.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> findWinners(List<List<int>> matches) {
    Map<int, int> map = {};
    List<int> win = [];
    List<int> lose = [];

    // Store all values and count how many times does it appeared
    for (int i = 0; i < matches.length; i++) {
        int winner = matches[i][0];
        int loser = matches[i][1];

        if (!map.containsKey(winner)) {
            map[winner] = 0;
        }
        if (map.containsKey(loser)) {
            map[loser] = (map[loser] ?? 0) + 1;
        } else {
            map[loser] = 1;
        }
    };

    // Store the keys that matching the conditions
    map.forEach((key, value) {
        if (value == 1) {
            lose.add(key);
        } else if (value == 0) {
            win.add(key);
        }
    });
    // sort to match the answer only
    win.sort(); 
    lose.sort();

    return [win, lose];
}

}
```