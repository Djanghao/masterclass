# Simple Swift Solution

**Author:** rickRicardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3770887/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3770887/)

---

# Code
```
class Solution {
    func smallestSufficientTeam(_ req_skills: [String], _ people: [[String]]) -> [Int] {
        var dp = [String: [Int]]()

        func dfs(_ skills: Set<String>) -> [Int] {
            let skillKey = skills.sorted().joined(separator: ",")

            if let existingTeam = dp[skillKey] {
                return existingTeam
            }

            var minTeam = [Int]()

            for (index, personSkills) in people.enumerated() {
                let intersection = skills.intersection(personSkills)
                if !intersection.isEmpty {
                    let remainingSkills = skills.subtracting(intersection)
                    let nextTeam = dfs(remainingSkills)
                    if minTeam.isEmpty || nextTeam.count + 1 < minTeam.count {
                        minTeam = [index] + nextTeam
                    }
                }
            }

            dp[skillKey] = minTeam
            return minTeam
        }

        let initialSkills = Set(req_skills)
        return dfs(initialSkills)
    }
}
```