# Swift Solution DFS -> BFS

**Author:** iCodeForExcellence
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/1225121/](https://leetcode.com/problems/shortest-bridge/solutions/1225121/)

---

```
class Solution {
    func shortestBridge(_ A: [[Int]]) -> Int {
        var visited = Array(repeating:Array(repeating:false,count:A[0].count),count:A.count)
        var found = false
        
        var queue = Queue<Pair>()
        let moves = [[1,0],[0,1],[-1,0],[0,-1]]

        //find the islands
        for i in 0..<A.count {
            if(found) {
                break
            }
            for j in 0..<A[0].count {
                if(A[i][j] == 1) {
                    dfsHelper(&queue,i,j,A,&visited)
                    found = true
                    break
                }
            }
        }
        
        //apply BFS to expand the islands 
        var result = 0
        while (!queue.isEmpty) {
            let size = queue.size
            for i in 0..<size {
                let point = queue.dequeue()!
                for move in moves {
                    let x = point.p + move[0]
                    let y = point.q + move[1]
                    if(x >= 0 && y >= 0 && x < A.count && y < A[0].count && !visited[x][y]) {
                        if(A[x][y] == 1) {
                            return result
                        }
                        visited[x][y] = true
                        queue.enqueue(Pair(p:x,q:y))
                    }
                }
            }
            result += 1
        }
        return -1
    }
    
    
    func dfsHelper(_ queue:inout Queue<Pair>, _ i:Int, _ j:Int, _ A:[[Int]], _ visited:inout [[Bool]]) {
        if(i < 0 || i >= A.count || j < 0 || j >= A[0].count || visited[i][j] || A[i][j] == 0) {
            return
        }
        let moves = [[1,0],[0,1],[-1,0],[0,-1]]
        visited[i][j] = true
        queue.enqueue(Pair(p:i,q:j))
        for move in moves {
            let x = i + move[0]
            let y = j + move[1]
            dfsHelper(&queue,x,y,A,&visited)
        }
    }
}
struct Pair {
    var p:Int
    var q:Int
}
class Queue<T> {
   private var list = [T]()
   func enqueue(_ val:T) {
       list.append(val)
   }
   func dequeue() ->T? {
       if(list.isEmpty) {
           return nil
       }
       return list.removeFirst()
   }
   var isEmpty:Bool {
       return list.isEmpty
   }

   var size:Int {
       return list.count
   }
   func peek() ->T? {
       return list.last
   }
}
```