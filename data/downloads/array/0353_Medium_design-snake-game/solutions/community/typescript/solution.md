# Beats 95%.. Super simple, Fast (TypeScript) with Comments

**Author:** Lsaadeh1
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/5109766/](https://leetcode.com/problems/design-snake-game/solutions/5109766/)

---

https://leetcode.com/problems/design-snake-game/submissions/1248839953

# Code
```
class SnakeGame {
  snake = [[0, 0]];
  food = null;
  x = null;
  y = null;
  constructor(width: number, height: number, food: number[][]) {
    this.food = food;
    this.x = width;
    this.y = height;
  }

  updateSnake(y: number, x: number): number {
    // Check if out of bounds
    if (y > this.y - 1 || x > this.x - 1 || x < 0 || y < 0) return -1

    // Check if about to eat food, if not remove tail
    if (this.food.length > 0 && (this.food[0][0] === y && this.food[0][1] === x)) this.food.shift();
    else this.snake.shift();

    // Check if about to eat itself
    if (this.snake.find(s => s[0] === y && s[1] === x)) return -1;

    // Update head location
    this.snake.push([y, x]);

    return this.snake.length - 1;
  }

  move(direction: string): number {
    const [y, x] = this.snake[this.snake.length - 1];
    switch (direction) {
      case 'U': return this.updateSnake(y - 1, x)
      case 'D': return this.updateSnake(y + 1, x)
      case 'L': return this.updateSnake(y, x - 1)
      case 'R': return this.updateSnake(y, x + 1)
    }
  }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
```