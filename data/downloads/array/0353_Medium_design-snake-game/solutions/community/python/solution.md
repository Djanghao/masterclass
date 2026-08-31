# Python 3 -> Fun game. 91.84% faster. Explanation added

**Author:** mybuddy29
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/771764/](https://leetcode.com/problems/design-snake-game/solutions/771764/)

---

Used list as a queue to store all the positions of the snake.
Edge cases:
1. Snake head tries to move in a position which is occupied by it's body. If this position is tail's position, then ok, otherwise game over
2. Snake goes out of screen boundary

If it's not a game over, then the position is correct. Insert it in the front of the queue.
1. If this position has food, then lenghth of the snake increases. So don't remove the tail position
2. If no food in this position, then snake moves to this position and the tail leaves it's position by using pop()

```
class SnakeGame:

    def __init__(self, width: int, height: int, food: List[List[int]]):
        """
        Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
        """
        self.width = width
        self.height = height
        self.food = food
        self.score = 0
        self.positions:List[List[int]] = [[0,0]] #this will act like a queue for the snake body. It always starts from 0,0        
        

    def move(self, direction: str) -> int:
        """
        Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body.
        """
        head = self.positions[0]        #We find the next position where head of the snake moves. Head is always first in the queue
        
        if direction == 'U':            
            newHead = [head[0] - 1, head[1]]
        elif direction == 'D':
            newHead = [head[0] + 1, head[1]]
        elif direction == 'L':
            newHead = [head[0], head[1] - 1]
        elif direction == 'R':
            newHead = [head[0], head[1] + 1]
                
        if self.positions and newHead in self.positions:    #If next location is already occupied by its body and that part is before tail, then it bites itself and it's a game over
            if self.positions[-1] != newHead:
                return -1
        
        if newHead[0] == -1 or newHead[0] == self.height or newHead[1] == -1 or newHead[1] == self.width:
            return -1                                   #If snake head crosses the screen boundary, game over
        
        self.positions.insert(0, newHead)               #If snake didn't kill itself, then it's good to move to new location
        if self.food and newHead == self.food[0]:       #Now check if the new position is where food is found
            self.food.pop(0)                            #If food is found, remove the food from the positions
            self.score += 1
        else:        
            self.positions.pop()                        #If food not found, then the length of snake didn't increase and hence tail will move forward
        
        return self.score
```