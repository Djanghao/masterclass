# 🔥100% easy swift solution

**Author:** slavny1
**Votes:** 3
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/4748547/](https://leetcode.com/problems/meeting-rooms-iii/solutions/4748547/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func mostBooked(_ n: Int, _ meetings: [[Int]]) -> Int {
        var meetings = meetings.sorted { $0[0] < $1[0] }
        var endTime = Array(0..<n)
        var numberOfMeetings = Array(repeating: 0, count: n)
        for meeting in meetings {
            var currentRoom: Int? {
                for room in 0..<n {
                    if endTime[room] <= meeting[0] {
                        return room
                    }
                }
                return nil
            }
            if let room = currentRoom {
                endTime[room] = meeting[1]
                numberOfMeetings[room] += 1
            } else if let room = endTime.firstIndex(of: endTime.min()!) {
                endTime[room] += meeting[1] - meeting[0]
                numberOfMeetings[room] += 1
            }
        }
        return numberOfMeetings.firstIndex(of: numberOfMeetings.max()!)!
    }
}
```