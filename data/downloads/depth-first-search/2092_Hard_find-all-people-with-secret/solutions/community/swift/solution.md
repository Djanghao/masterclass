# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/4773929/](https://leetcode.com/problems/find-all-people-with-secret/solutions/4773929/)

---

# Complexity
- Time complexity: $$O(n * m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n + m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findAllPeople(_ n: Int, _ meetings: [[Int]], _ firstPerson: Int) -> [Int] {
        var sharingTimes = Array(repeating: Int.max, count: n)
        sharingTimes[0] = 0
        sharingTimes[firstPerson] = 0

        var schedule = Array(repeating: [(person: Int, time: Int)](), count: n)
        for meeting in meetings {
            schedule[meeting[0]].append((meeting[1], meeting[2]))
            schedule[meeting[1]].append((meeting[0], meeting[2]))
        }

        var queue = [0, firstPerson]
        while let person = queue.popLast() {
            for meeting in schedule[person] where meeting.time >= sharingTimes[person] && meeting.time < sharingTimes[meeting.person] {
                sharingTimes[meeting.person] = meeting.time
                queue.append(meeting.person)
            }
        }

        return sharingTimes
            .enumerated()
            .filter { $0.element != .max }
            .map(\\.offset)
    }
}

```