# [Swift/Python] Clean and easy to read solution

**Author:** codaisaduck
**Votes:** 0
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/3124702/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/3124702/)

---

# Swift
```
class Solution {
    func gardenNoAdj(_ n: Int, _ paths: [[Int]]) -> [Int] {

        var result = Array(repeating: 0, count: n)
        var adjacency_list: [Int:[Int]] = [:]
        for path in paths {
            adjacency_list[path[0], default: []].append(path[1])
            adjacency_list[path[1], default: []].append(path[0])
        }
        for i in 1...n {
            var flowers = Set([1,2,3,4])
            if let neighbors = adjacency_list[i] {
                for neighbor in neighbors {
                    if result[neighbor-1] != 0 {
                        flowers.remove(result[neighbor-1])
                    }
                }
            }
            result[i-1] = flowers.first!
        }
        return result
    }
}
```
# Python
```
class Solution:
    def gardenNoAdj(self, n: int, paths: List[List[int]]) -> List[int]:
        
        result = [0] * n
        adjacency_list = defaultdict(list)
        for a, b in paths:
            adjacency_list[a].append(b)
            adjacency_list[b].append(a)
        
        for i in range(1, n+1):
            flowers = {1,2,3,4}
            for neighbor in adjacency_list[i]:
                if result[neighbor-1] != 0:
                    flowers.discard(result[neighbor-1])
            result[i-1] = list(flowers)[0]

        return result
```