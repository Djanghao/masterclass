# C# | Runtime beats 80.00%, Memory beats 65.00% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/5796728/](https://leetcode.com/problems/smallest-sufficient-team/solutions/5796728/)

---

# Intuition
I wanted to find the smallest group of people that together have all the required skills. By using bitmasks to represent skill combinations, I could track the best team for each set of skills.

# Approach
I converted each person\u2019s skills into a bitmask. Then, for each skill combination, I checked if adding a person created a smaller team. I kept updating the smallest team for each skill set until all skills were covered.

# Complexity
- Time complexity:
O(people.length * 2^skills.length) \u2014 We process each person for every possible skill combination.

- Space complexity:
O(2^skills.length) \u2014 We store the best team for each skill combination.

# Code
```csharp []
public class Solution {
    public int[] SmallestSufficientTeam(string[] req_skills, IList<IList<string>> people) {
        int n = req_skills.Length;
        int targetMask = (1 << n) - 1;  // Bitmask for all required skills

        // Map each skill to a bit index
        var skillIndex = new Dictionary<string, int>();
        for (int i = 0; i < n; i++) {
            skillIndex[req_skills[i]] = i;
        }

        // DP to store the smallest team for each bitmask
        var dp = new Dictionary<int, List<int>>();
        dp[0] = new List<int>();  // Starting point with no skills

        // Process each person and their skills
        for (int i = 0; i < people.Count; i++) {
            int personSkills = 0;

            // Convert current person's skills to a bitmask
            foreach (var skill in people[i]) {
                if (skillIndex.ContainsKey(skill)) {
                    personSkills |= (1 << skillIndex[skill]);
                }
            }

            if (personSkills == 0) continue;  // Skip if the person has no useful skills

            // Update the dp table by iterating over the current state
            var currentDp = new List<int>(dp.Keys);  // Avoid modifying dp while iterating
            foreach (int mask in currentDp) {
                int newMask = mask | personSkills;  // Combine current skills with the person's skills

                // If we already have a smaller or equal-sized team for this newMask, skip updating
                if (!dp.ContainsKey(newMask) || dp[newMask].Count > dp[mask].Count + 1) {
                    // Build a new team by adding this person to the current team
                    var newTeam = new List<int>(dp[mask]) { i };
                    dp[newMask] = newTeam;
                }
            }
        }

        // Return the result for the full skills set (targetMask)
        return dp[targetMask].ToArray();
    }
}

```