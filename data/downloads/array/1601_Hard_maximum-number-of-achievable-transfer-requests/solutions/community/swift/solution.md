# Swift Solution 196ms

**Author:** kripenometr
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3708115/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3708115/)

---

# Complexity
![Screenshot 2023-07-02 at 13.45.13.png](./images/0.png)
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
struct Human: Hashable {
    let from: Int
    let to: Int
}

class Solution {
    func maximumRequests(_ n: Int, _ requests: [[Int]]) -> Int {
        let requestsCount = requests.count
        
        var vacantJobs = Array(repeating: 0, count: n)
        var transferTo = Array(repeating: 0, count: n)

        let myRequests = requests.enumerated().map { Human(from: $0.1[0], to: $0.1[1]) }
        var result = 0

        dfs(0)

        func dfs(_ i: Int) {
           guard i != requestsCount else {
               result = max(result, check())
               return
           }

           let request = myRequests[i]
           
           vacantJobs[request.from] += 1
           transferTo[request.to] += 1
           
           dfs(i + 1)
           
           vacantJobs[request.from] -= 1
           transferTo[request.to] -= 1
           
           dfs(i + 1)
        }
        
        func check() -> Int {
            var currResult = 0
            for i in 0..<n {
                if vacantJobs[i] == transferTo[i] {
                    currResult += vacantJobs[i] != 0 ? vacantJobs[i] : 0
                } else {
                    currResult = 0
                    break
                }
            }
            
            return currResult
        }
        
        return result
    }
}
```