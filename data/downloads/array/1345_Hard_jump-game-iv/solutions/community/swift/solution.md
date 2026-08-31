# Swift Breadth-First Search beats 100% memory & runtime

**Author:** TigranNeDoDeveloper
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game-iv/solutions/3259037/](https://leetcode.com/problems/jump-game-iv/solutions/3259037/)

---

# Complexity
- Time complexity:
The time complexity of the given code is O(N + K*log(K)), where N is the length of the input vector nums and K is the number of distinct elements in the input vector.

- Space complexity:
The space complexity of the code is O(N) because we use a map m to store the indexes of each element, and a queue q to implement BFS. We also use a vector vis to keep track of visited indexes. All these data structures require O(N) space in the worst case.

# Code
```
class Solution {
    func minJumps(_ nums: [Int]) -> Int {
        let n = nums.count
        var m = [Int: [Int]]()
        var vis = Array(repeating: 0, count: n)
        
        for i in 0..<n {
            m[nums[i], default: []].append(i)
        }
        
        var q = [Int]()
        q.append(0)
        vis[0] = 1
        var f = false
        var c = 0
        
        while !q.isEmpty {
            let sz = q.count
            for _ in 0..<sz {
                let i = q.removeFirst()
                if i == n-1 {
                    f = true
                    break
                }
                if i+1 < n && vis[i+1] == 0 {
                    q.append(i+1)
                    vis[i+1] = 1
                }
                if i-1 >= 0 && vis[i-1] == 0 {
                    q.append(i-1)
                    vis[i-1] = 1
                }
                if let indexes = m[nums[i]], !indexes.isEmpty {
                    for x in indexes {
                        if vis[x] == 0 {
                            q.append(x)
                            vis[x] = 1
                        }
                    }
                    m[nums[i]] = nil
                }
            }
            if f { break }
            else { c += 1 }
        }
        return c
    }
}
```