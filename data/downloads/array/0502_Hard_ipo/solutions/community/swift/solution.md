# [Swift] built-in Heap

**Author:** iamhands0me
**Votes:** 2
**Link:** [https://leetcode.com/problems/ipo/solutions/5315140/](https://leetcode.com/problems/ipo/solutions/5315140/)

---



# Code
```
import Collections

class Solution {
    func findMaximizedCapital(_ k: Int, _ w: Int, _ profits: [Int], _ capital: [Int]) -> Int {
        var projects = zip(profits, capital).map(Project.init).sorted { $0.capital > $1.capital }
        var hp: Heap<Project> = []
        var currentCapital = w

        for _ in 1...k {
            while let minCapitalProject = projects.last, minCapitalProject.capital <= currentCapital {
                hp.insert(projects.removeLast())
            }

            guard let maxProfitProject = hp.popMax() else { break }

            currentCapital += maxProfitProject.profit
        }

        return currentCapital
    }
}

struct Project: Comparable {
    let profit: Int
    let capital: Int

    static func <(lhs: Project, rhs: Project) -> Bool {
        lhs.profit < rhs.profit
    }
}
```