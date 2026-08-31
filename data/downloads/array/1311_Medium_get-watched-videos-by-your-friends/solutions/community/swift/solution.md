# Swift Solution

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/2709976/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/2709976/)

---

```
// Get Watched Videos by Your Friends
// https://www.hackerrank.com/challenges/get-watched-videos-by-your-friends

class Solution {
    func watchedVideosByFriends(_ watchedVideos: [[String]], _ friends: [[Int]], _ id: Int, _ level: Int) -> [String] {
        var visited = [Bool](repeating: false, count: friends.count)
        var queue = [Int]()
        var result = [String]()
        var count = [String: Int]()
        queue.append(id)
        visited[id] = true
        var currentLevel = 0
        while !queue.isEmpty {
            let size = queue.count
            for _ in 0..<size {
                let current = queue.removeFirst()
                if currentLevel == level {
                    for video in watchedVideos[current] {
                        count[video, default: 0] += 1
                    }
                } else {
                    for friend in friends[current] {
                        if !visited[friend] {
                            queue.append(friend)
                            visited[friend] = true
                        }
                    }
                }
            }
            currentLevel += 1
        }
        result = count.sorted { $0.value == $1.value ? $0.key < $1.key : $0.value < $1.value }.map { $0.key }
        return result
    }
}
```