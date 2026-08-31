# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/4563869/](https://leetcode.com/problems/keys-and-rooms/solutions/4563869/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func canVisitAllRooms(_ rooms: [[Int]]) -> Bool {
        var queue = [0]
        var visited = Set(queue)
        while let room = queue.popLast() {
            for key in rooms[room] where visited.insert(key).inserted {
                queue.append(key)
            }
        }
        return visited.count == rooms.count
    }
}

```