# Javascript Set

**Author:** mokarma
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/2695240/](https://leetcode.com/problems/design-snake-game/solutions/2695240/)

---

```
var SnakeGame = function(width, height, food) {
    this.height = height;
    this.width = width;
    this.food = food;
    this.currFood = this.food.shift();
    this.row = 0;
    this.col = 0;
    this.score = 0;
    this.set = new Set(); // set stores the keys in order
    this.set.add('0-0');
};

SnakeGame.prototype.move = function(direction) {
    // increment / decrement based on direction
    if (direction === 'U') {
        this.row--;
    } else if (direction === 'D') {
        this.row++;
    } else if (direction === 'L') {
        this.col--;
    } else if (direction === 'R') {
        this.col++;
    }
    // Out of bounds so end the game
    if (this.row < 0 || this.col < 0 || this.row >= this.height || this.col >= this.width) {
        return -1;
    }
    // grab a ref to the first item in the set
    let tail = this.set.keys().next().value;
    let head = `${this.row}-${this.col}`;
    // if we hit ourself, and it's not the tail, end the game
    if (this.set.has(head) && head !== tail) {
        return -1;
    }
    // if we're eating food now
    if (this.currFood[0] === this.row && this.currFood[1] === this.col) {
        // set the currentFood to the next food in the array
        if (this.food.length > 0) {
            this.currFood = this.food.shift();
        } else {
            this.currFood = [-1, -1];
        }
        this.score++;
    } else {
        // else remove the tail from the queue and set
        this.set.delete(tail);
    }
    // always add the current coordinates to the queue
    this.set.add(head);
    return this.score;
};
```