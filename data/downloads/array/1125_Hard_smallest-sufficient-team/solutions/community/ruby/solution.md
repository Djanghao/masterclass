# Ruby Solution(Beats 100% and 100%)

**Author:** remy727
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3774074/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3774074/)

---

# Approach
Bottom-Up Dynamic Programming with Bitmasks

# Complexity
- Time complexity: O(n * 2^m)

- Space complexity: O(n * 2^m)

# Code
```
# @param {String[]} req_skills
# @param {String[][]} people
# @return {Integer[]}
def smallest_sufficient_team(req_skills, people)
  n = req_skills.size
  skill_map, dp = {}, Array.new(1 << n, [n + 1])

  req_skills.each_with_index { |rs, idx| skill_map[rs] = idx }

  people = people.map { |p| p.inject(0) { |acc, skill| acc | (1 << skill_map[skill]) } }

  dp[0] = [0, []]

  people.each_with_index do |skills, p|
    ((1 << req_skills.length) - 1).downto(0) do |i|
      nex = i | skills
      if dp[nex][0] > dp[i][0] + 1
        dp[nex] = [dp[i][0] + 1, dp[i][1] + [p]]
      end
    end
  end

  dp[(1 << req_skills.size) - 1][1]
end
```