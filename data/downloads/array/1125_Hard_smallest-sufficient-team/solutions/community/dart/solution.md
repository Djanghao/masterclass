# Dart solution

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3770953/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3770953/)

---

# Code
```

class Solution {

  List<int> smallestSufficientTeam(List<String> req_skills, List<List<String>> people) {
    final N = req_skills.length;
    final skills = <String, int>{};
    for (int i = 0; i < N; i++) skills[req_skills[i]] = i;

    final offer = List.filled(people.length, 0);
    for (int i = 0; i < people.length; i++) {
      var tmp = 0;
      for (final skill in people[i]) {
        final id = skills[skill] ?? -1;
        if (id != -1)
          tmp |= (1 << id);
      }
      offer[i] = tmp;
    }

    List<List<int>?> memo = List.filled(1 << N, null);
    memo[0] = [];

    List<int> dfs(int state) {
      if (memo[state] != null) return memo[state]!;

      var best = 1 << 30;
      var best_pilot = -1;
      List<int> best_list = [];
      for (int i = 0; i < people.length; i++) {
        final my_offer = offer[i] & state;
        if (my_offer == 0) continue;

        final their = dfs(state ^ my_offer);
        if (their.length == 0 || (their[0] != -1 && their.length < best)) {
          best = their.length;
          best_pilot = i;
          best_list = their;
        }
      }
      return memo[state] = [best_pilot, ...best_list];
    }
    return dfs((1 << N) - 1);
  }

}
```