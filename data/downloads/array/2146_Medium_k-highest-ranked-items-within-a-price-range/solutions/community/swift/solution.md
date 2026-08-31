# Swift BFS and sort results

**Author:** AdamSmsher
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/3166883/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/3166883/)

---

# Intuition
BFS. **Read problem carefully I was stuck for a good while because I forgot you cant cross 0's**

# Approach
BFS

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    func highestRankedKItems(_ grid: [[Int]], _ pricing: [Int], _ start: [Int], _ k: Int) -> [[Int]] {
        var queue = [[Int]]()
        var visited = Set<[Int]>()
        var rows = grid.count 
        var cols = grid[0].count
        var res = [[Int]]()
        var directions = [[0,1],[1,0],[0,-1],[-1,0]]
        queue.append([0, grid[start[0]][start[1]], start[0], start[1]])
        visited.insert([start[0],start[1]])
        while queue.count > 0 {
            let item = queue.removeFirst()
            let distance = item[0]
            let price = item[1]
            let x = item[2]
            let y = item[3]
            if price >= pricing[0] && price <= pricing[1] {
                res.append([distance, price, x, y])
            }
            for dir in directions {
                let newX = dir[0] + x 
                let newY = dir[1] + y
                if newX >= 0 && newX < rows && newY >= 0 && newY < cols && !visited.contains([newX,newY]) && grid[newX][newY] != 0 {
                    queue.append([distance + 1, grid[newX][newY], newX, newY])
                    visited.insert([newX,newY])
                }
            }
        }
        res.sort { 
            if $0[0] != $1[0] {
                return $0[0] < $1[0]
            } 
            else if $0[1] != $1[1] {
                return $0[1] < $1[1]
            }   
            else if $0[2] != $1[2] {
                return $0[2] < $1[2]
            } 
            else {
                return $0[3] < $1[3]
            }
        }
        return k >= res.count ? res.map { $0.suffix(2) } : res[0..<k].map{ $0.suffix(2) }
    }
}

```