# Beats 100.00%

**Author:** mohamedmostafaBig
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/5910015/](https://leetcode.com/problems/rank-teams-by-votes/solutions/5910015/)

---

# Intuition
The problem requires ranking teams based on votes, where each vote is a string representing a voter's preference order of teams. The key insight is to count the votes for each team at each position and then sort the teams based on these counts.

# Approach
1. Create a map to store rankings for each team, where the key is the team (character) and the value is a list of vote counts for each position.
2. Initialize the rankings map with all teams and zero votes for each position.
3. Iterate through all votes, incrementing the appropriate position count for each team.
4. Sort the teams based on their vote counts:
   - Compare teams by looking at their vote counts for each position in order.
   - If there's a tie in all positions, use alphabetical order as a tiebreaker.
5. Join the sorted teams into a string and return it as the final ranking.

# Complexity
- Time complexity: O(n * m * log(m))
  - n is the number of votes
  - m is the number of teams
  - We iterate through all votes once: O(n * m)
  - Sorting takes O(m * log(m)) in the worst case
  - The comparison function in the sort can take up to O(m) time
  - Therefore, the overall complexity is O(n * m + m^2 * log(m)), which simplifies to O(n * m * log(m)) assuming n > m

- Space complexity: O(m)
  - We store a list of m integers for each of the m teams in the rankings map
  - The sorted list of teams also takes O(m) space
  - Therefore, the overall space complexity is O(m^2), which simplifies to O(m) as m is typically small (\u2264 26 in this case)

# Code
```dart
class Solution {
  String rankTeams(List<String> votes) {
    if (votes.isEmpty) return '';
    if (votes.length == 1) return votes[0];

    final int teamCount = votes[0].length;
    final Map<String, List<int>> rankings = {};

    // Initialize rankings
    for (final team in votes[0].split('')) {
      rankings[team] = List.filled(teamCount, 0);
    }

    // Count votes
    for (final vote in votes) {
      for (int i = 0; i < vote.length; i++) {
        rankings[vote[i]]![i]++;
      }
    }

    // Sort teams
    final List<String> sortedTeams = rankings.keys.toList();
    sortedTeams.sort((a, b) {
      for (int i = 0; i < teamCount; i++) {
        final diff = rankings[b]![i] - rankings[a]![i];
        if (diff != 0) return diff;
      }
      return a.compareTo(b); // Alphabetical order if all votes are tied
    });

    return sortedTeams.join();
  }
}
```

This solution efficiently handles the ranking of teams based on votes, considering all positions and resolving ties appropriately. It's designed to work with any number of teams and votes, making it a robust solution for the team ranking problem.