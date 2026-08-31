# [Java/C++/Python] DP Solution

**Author:** lee215
**Votes:** 186
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/334572/](https://leetcode.com/problems/smallest-sufficient-team/solutions/334572/)

---

# **Intuition**
The goal is to find the smallest team of people that can cover all of the required skills.
We can apply dp solution, where
`dp[skills]` is a sufficient team to satisfy a required `skills` set.
<br>

# **Explanation**

First creates a map of skills to `skill index`,
so that it can quickly look up which skill corresponds to which index.

We use the bit mask to represent a skills set.
`req_skills[0]` is `1 << 0`
`req_skills[i]` is `1 << 1`
`req_skills[n - 1]` is `1 << (n - 1)`
Then a skills set can be expressed as an integer bit mask.

Then creates a hashmap `dp` for size `1 << n`.
`dp[skills]` will contain the indices of the people required to satisfy the skills.

We loops through the people,
and for each person, find his `cur_skill` bit mask.
Then we check all `dp[prev]` in the existing `dp`.
we combine the new skills `comb = prev | cur_skill`
and then check if `dp[comb]` not found or `dp[comb].size() > 1 + dp[prev].size()`,
then we can update `dp[comb]` by `dp[prev] + [this person]`

We continuly do this and finally,
returns the indices of the people `dp[(1 << n) - 1]` with all skills covered.
<br>

# **Complexity**
Time `O(people * 2^skill)`
Space `O(2^skill)`
<br>


**Java:**
```java
    public int[] smallestSufficientTeam(String[] req_skills, List<List<String>> people) {
        int n = req_skills.length, m = people.size();
        HashMap<String, Integer> skill_index = new HashMap<>();
        for (int i = 0; i < n; ++i)
            skill_index.put(req_skills[i], i);
        List<Integer>[] dp = new List[1 << n];
        dp[0] = new ArrayList<>();
        for (int i = 0; i < m; ++i) {
            int cur_skill = 0;
            for (String s : people.get(i))
                cur_skill |= 1 << skill_index.get(s);
            for (int prev = 0; prev < dp.length; ++prev) {
                if (dp[prev] == null) continue;
                int comb = prev | cur_skill;
                if (dp[comb] == null || dp[prev].size() + 1 < dp[comb].size()) {
                    dp[comb] = new ArrayList<>(dp[prev]);
                    dp[comb].add(i);
                }
            }
        }
        return dp[(1 << n) - 1].stream().mapToInt(i -> i).toArray();
    }
```

**C++:**
```cpp
    vector<int> smallestSufficientTeam(vector<string>& req_skills, vector<vector<string>>& people) {
        int n = req_skills.size();
        unordered_map<int, vector<int>> dp;
        dp.reserve(1 << n); // reserve space and avoid hash collisions
        dp[0] = {};
        unordered_map<string, int> skill_index;
        for (int i = 0; i < req_skills.size(); ++i)
            skill_index[req_skills[i]] = i;
        for (int i = 0; i < people.size(); ++i) {
            int cur_skill = 0;
            for (auto& skill: people[i])
                cur_skill |= 1 << skill_index[skill];
            for (auto it = dp.begin(); it != dp.end(); ++it) {
                int comb = it->first | cur_skill;
                if (dp.find(comb) == dp.end() || dp[comb].size() > 1 + dp[it->first].size()) {
                    dp[comb] = it->second;
                    dp[comb].push_back(i);
                }
            }
        }
        return dp[(1 << n) - 1];
    }
```

**Python:**
```python
    def smallestSufficientTeam(self, req_skills, people):
        n, m = len(req_skills), len(people)
        skill_index = {v: i for i, v in enumerate(req_skills)}
        dp = {0: []}
        for i, p in enumerate(people):
            cur_skill = 0
            for skill in p:
                if skill in skill_index:
                    cur_skill |= 1 << skill_index[skill]
            for prev, need in dict(dp).items():
                comb = prev | cur_skill
                if comb == prev: continue
                if comb not in dp or len(dp[comb]) > len(need) + 1:
                    dp[comb] = need + [i]
        return dp[(1 << n) - 1]
```
