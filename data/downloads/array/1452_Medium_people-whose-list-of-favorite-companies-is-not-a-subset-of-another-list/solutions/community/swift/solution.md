# Swift O(n^2) Time Complexity

**Author:** tmunir
**Votes:** 0
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/4393522/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/4393522/)

---

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    func peopleIndexes(_ favoriteCompanies: [[String]]) -> [Int] {
        let setArr = favoriteCompanies.map(Set.init)
        var result = [Int]()
        for i in 0..<setArr.count {
            var isSubset = false
            for j in 0..<setArr.count where i != j && setArr[i].isSubset(of: setArr[j]) {
                isSubset = true
                break
            }

            if !isSubset {
                result.append(i)
            }
        }

        return result
    }
}
```