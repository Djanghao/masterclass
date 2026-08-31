# So hard, but we can manage to resolve this question 🫣

**Author:** odinokovg95
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/5170714/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/5170714/)

---

# Intuition

My initial thought was to select a set of columns such that the maximum number of rows are covered. A row is covered if all its 1s are in the selected columns, or if the row has no 1s at all. To achieve this, I needed to explore all possible combinations of columns and check how many rows are covered for each combination.

# Approach

1. I first created a set of indices for each row where there is a 1.
2. Then, I filtered the rows that can be covered if the number of unique indices in them is less than or equal to numSelect.
3. I separately counted the rows that are already covered (contain no 1s).
4. If I don't have any possible selections - I exit with the rows that are already covered
5. For each possible combination of selected columns, I checked how many rows could be covered.
6. I iterated through all possible combinations to find the one that maximizes the number of covered rows, adding the already covered rows.

# Complexity
- Time complexity:
The time complexity of my approach involves generating all combinations of columns, which takes $$O(C(n,numSelect)*m*n)$$, where $$C(n,numSelect)$$ is the number of combinations of $$n$$ columns taken $$numSelect$$ at a time, $$m$$ is the number of rows, and $$n$$ is the number of columns.

- Space complexity:
The space complexity is $$O(m*n)$$ for storing all sets of indices and $$O(C(n,numSelect))$$ for storing all combinations of columns.

# Code
```
class Solution {
    func maximumRows(_ matrix: [[Int]], _ numSelect: Int) -> Int {
        let allSelections = matrix.map { Set($0.enumerated().compactMap { index, element in element == 1 ? index : nil }) }
        let possibleSelections = allSelections.filter { !$0.isEmpty && $0.count <= numSelect }
        let freeCount = allSelections.filter(\\.isEmpty).count

        guard !possibleSelections.isEmpty else { return freeCount }

        var result = 0
        for i in 0..<possibleSelections.count {
            let currentSelection = possibleSelections[i]
            let possibleDif = numSelect - currentSelection.count

            var possibleMatches = possibleSelections.enumerated()
                .filter { index, value in index != i && value.filter { !currentSelection.contains($0) }.count <= possibleDif }
                .map(\\.element)

            let totallyMatch = possibleMatches.filter { $0.filter { !currentSelection.contains($0) }.count == 0 }.count

            possibleMatches = possibleMatches.filter { $0.filter { !currentSelection.contains($0) }.count != 0 }

            guard !possibleMatches.isEmpty else {
                result = max(result, totallyMatch + 1)

                continue
            }

            var matchesInPossible = 1
            for j in 0..<possibleMatches.count {
                var possibleSelection = currentSelection
                possibleMatches[j].forEach { possibleSelection.insert($0) }

                var currentMatches = 1
                for k in 0..<possibleMatches.count {
                    guard k != j else { continue }

                    possibleMatches[k].forEach { possibleSelection.insert($0) }

                    guard possibleSelection.count <= numSelect else { break }

                    currentMatches += 1
                }

                matchesInPossible = max(matchesInPossible, currentMatches)
            }
            result = max(result, totallyMatch + matchesInPossible + 1)
        }

        return result + freeCount
    }
}
```