# Swift Concise Deque Solution

**Author:** mudejar
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/4218641/](https://leetcode.com/problems/design-snake-game/solutions/4218641/)

---

# Code
```
class SnakeGame {
    var food = [[Int]](), snake = [[Int]]()
    var width = 0, height = 0, row = 0, col = 0
    
    init(_ width: Int, _ height: Int, _ food: [[Int]]) {
       self.width = width
       self.height = height
       self.food = food
    }
    
    func move(_ dir: String) -> Int {
        if dir == "R" { col += 1 }
        if dir == "L" { col -= 1 }
        if dir == "U" { row -= 1 }
        if dir == "D" { row += 1 }
        if row < 0 || row == height || col < 0 || col == width { return -1 }
        
        if snake.contains([row, col]) { return -1 } // bit itself
        snake += [[row, col]]
        if let first = food.first, first[0] == row && first[1] == col {
            food.removeFirst()
        } else {
            snake.removeFirst() // remove tail
        }
        return snake.count
    }
}


```