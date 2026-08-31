# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1082269/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1082269/)

---

Swift solution
```
class Solution {
    func minimumTeachings(_ n: Int, _ languages: [[Int]], _ friendships: [[Int]]) -> Int {
        let uc = languages.count
        var userLangMatrix = [[Bool]](repeating: [Bool](repeating: false,  count: uc), count: n), needToTeach = Set<Int>(), result = Int.max
        for user in 0..<uc {
            for j in 0..<languages[user].count {
                userLangMatrix[languages[user][j] - 1][user] = true
            }
        }
        for friendship in friendships {
            let user1 = friendship[0] - 1, user2 = friendship[1] - 1
            if !languages[user1].reduce(into: Bool(false), { $0 = $0 || userLangMatrix[$1 - 1][user2] }) {
                needToTeach.insert(user1)
                needToTeach.insert(user2)
            }
        }
        for lang in 0..<n {
            var usersToTeach = 0
            for user in needToTeach where !userLangMatrix[lang][user] {
                usersToTeach += 1
            }
            result = min(result, usersToTeach)
        }
        return result
    }
}
```