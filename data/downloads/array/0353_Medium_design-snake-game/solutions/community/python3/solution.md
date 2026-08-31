# Python Solution Using Deque

**Author:** FFurus
**Votes:** 11
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/400493/](https://leetcode.com/problems/design-snake-game/solutions/400493/)

---

Use a deque to store all the locations occupied by the snake.
When the snake is moving and doesn't eat any food, its head would reach a new location while its tail would leave the location it has occupied before that move, which can be intepreted as `append` and `pop` operations of a queue
```
| |S|S|                         |S|S|S|
| | |S|                         | | | |
```

If the snake eats a food, its head would occupy the location of that food while its tail keeps still. As a result, the queue would only `append` new location.

```
| |F|S|                         | |S|S|
| | |S|                         | | |S|
```

My solution is shown below. The movement can also be achieved by using a dictionary such as `{"U":(-1,0), "D":(1,0), "R":(0,1), "L":(0,-1)}` like many other solutions.


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
        self.w = width
        self.h = height
        self.score = 0
        self.path = collections.deque([[0,0]])
        self.foodloc = collections.deque(food)
        if self.foodloc:
            self.foodnow = self.foodloc.popleft()
        

    def move(self, direction: str) -> int:
        """
        Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body.
        """
        curr = self.path[-1]
        if direction == 'R':
            new = [curr[0], curr[1]+1]
        elif direction == 'L':
            new = [curr[0], curr[1]-1]
        elif direction == 'U':
            new = [curr[0]-1, curr[1]]
        else:
            new = [curr[0]+1, curr[1]]
        
        if new[0]<0 or new[0]>=self.h or new[1]<0 or new[1]>=self.w:
            #snake crosses the screen boundary 
			return -1
        if new in self.path and new != self.path[0]:
			# snake bites its body
            return -1
			
        if new == self.foodnow:
            self.score += 1
            self.path.append(new)
            if self.foodloc:
                self.foodnow = self.foodloc.popleft()
            else:
                self.foodnow = []
				# There's no more food
        else:
            self.path.append(new)
            self.path.popleft()
            
        return self.score

```