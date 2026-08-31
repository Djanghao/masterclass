# Rust/Python deque with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/3557095/](https://leetcode.com/problems/design-snake-game/solutions/3557095/)

---

# Intuition
We will need the following requirements from this implementation:

1. grow the size of snake by 1 element adding it to the head of the snake
2. reduce the size of snake by 1 element adding it to the tail of the snake
3. checking if the snake at the corresponding reward
4. checking if the snake touched the borders
5. checking if the snake touched any parts of the snake

You can do 
 - 1, 2 efficiently in costant ammortized time with a double ended queue (will call it queue). 
 - 3 with storing all the rewards in the array of rewards and maintaining the current needed position. If you ate a reward, increase this position.
 - 4 with storing the Y/X of the board and checking if the head of the queue is not touching it.
 - 5 with storing all parts of the snake also in a set. So when the snake is moving you add at most 1 element from a set/queue and remove at most 1 as well

# Complexity
Consider that the game will take $n$ moves. And the maximum length of the snake will be $l$

- Time complexity: $O(1)$ for each move. $O(n)$ in total
- Space complexity: $O(l)$

# Code
```Rust []
use std::collections::VecDeque;
use std::collections::HashSet;

#[derive(PartialEq, Eq, Hash, Debug)]
struct Pos {
  y: i32,
  x: i32,
}

struct SnakeGame {
  Y: i32,
  X: i32,
  snake_deque: VecDeque<Pos>,
  snake_set: HashSet<Pos>,
  food: Vec<Pos>,
  food_pos: usize,
}

impl SnakeGame {

  fn new(width: i32, height: i32, food: Vec<Vec<i32>>) -> Self {
    let mut food_data = Vec::with_capacity(food.len() + 1);
    for el in food {
      food_data.push(Pos{y: el[0], x: el[1]});
    }
    food_data.push(Pos{y: -1, x: -1});

    return SnakeGame{
      Y: height,
      X: width,
      snake_deque: VecDeque::from([Pos{y: 0, x: 0}]),
      snake_set: HashSet::from([Pos{y: 0, x: 0}]),
      food: food_data,
      food_pos: 0,
    }
  }
  
  fn make_a_move(&mut self, direction: String) -> i32 {
    let p = self.snake_deque.front().unwrap_or(&Pos{y:-1, x:-1});
    let (mut y, mut x) = (p.y, p.x);
    if direction == "U" {
      y -= 1;
    } else if direction == "R" {
      x += 1;
    } else if direction == "D" {
      y += 1;
    } else {
      x -= 1;
    }

    if y < 0 || x < 0 || y == self.Y || x == self.X {
      return -1;
    }

    self.snake_deque.push_front(Pos{y: y, x: x});
    if y == self.food[self.food_pos].y && x == self.food[self.food_pos].x {
      self.food_pos += 1;
    } else {
      self.snake_set.remove(&self.snake_deque.pop_back().unwrap_or(Pos{y:-1, x:-1}));
    }

    if self.snake_set.contains(&Pos{y: y, x: x}) {
      return -1;
    }

    self.snake_set.insert(Pos{y: y, x: x});
    return (self.snake_deque.len() - 1) as i32;
  }
}
```
```python []
from collections import deque

class SnakeGame:

  def __init__(self, width: int, height: int, food: List[List[int]]):
    self.X = width
    self.Y = height
    self.food = food
    self.food.append((-1, -1))
    self.food_pos = 0

    self.snake_deque = deque([(0, 0)])
    self.snake_set = {(0, 0)}

  def move(self, direction: str) -> int:
    y, x = self.snake_deque[-1]
    if direction == 'U':
      y -= 1
    elif direction == 'R':
      x += 1
    elif direction == 'D':
      y += 1
    else:
      x -= 1
    
    if y < 0 or y == self.Y or x < 0 or x == self.X:
      return -1

    self.snake_deque.append((y, x))
    if [y, x] == self.food[self.food_pos]:
      self.food_pos += 1
    else:
      self.snake_set.remove(self.snake_deque.popleft())

    if (y, x) in self.snake_set:
      return -1
    
    self.snake_set.add((y, x))
    return len(self.snake_deque) - 1

```
