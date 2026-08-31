# BFS Go w/ In-Depth Explanation

**Author:** imjoshellis
**Votes:** 6
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/956284/](https://leetcode.com/problems/walls-and-gates/solutions/956284/)

---

## Simple Case

To start with, let's think about a small 2x2 grid with one gate and no walls. I'll be using `#` for walls and `?` for empty, un-calculated rooms.

```txt
 -----
| 0 ? |
| ? ? |
 -----
```

The clear first step is to label any room touching a gate:

```txt
 -----      -----
| 0 ? | => | 0 1 |
| ? ? | => | 1 ? |
 -----      -----
```

Then, we can go through and label anything touching a 1 to finish the task:

```txt
 -----      -----
| 0 1 | => | 0 1 |
| 1 ? | => | 1 2 |
 -----      -----
```

Notice how every time we labeled a room, it was 1 more than the previous round of rooms.

## Bigger Grid

Does anything change if we introduce a bigger grid with more gates?

```txt
// initial
 -------
| 0 ? 0 |
| ? ? ? |
| ? ? ? |
 -------

// fill in anything touching a 0
 -------
| 0 1 0 |
| 1 ? 1 |
| ? ? ? |
 -------

// fill in anything touching a 1
 -------
| 0 1 0 |
| 1 2 1 |
| 2 ? 2 |
 -------

// fill in anything touching a 2
 -------
| 0 1 0 |
| 1 2 1 |
| 2 3 2 |
 -------
```

As you can see, the algorithm continues to work.

## Adding Walls

What happens if we include some walls?

```txt
// initial
 -------
| 0 ? 0 |
| # # ? |
| ? ? ? |
 -------

// 1s
 -------
| 0 1 0 |
| # # 1 |
| ? ? ? |
 -------

// 2s
 -------
| 0 1 0 |
| # # 1 |
| ? ? 2 |
 -------

// 3s
 -------
| 0 1 0 |
| # # 1 |
| ? 3 2 |
 -------

// 4s
 -------
| 0 1 0 |
| # # 1 |
| 4 3 2 |
 -------
```

The algorithm still works! We basically just have to ignore the walls.

## How to Code

This is a classic Breadth First Search, so we can use a queue to solve this one.

First, let's set up some helpful constants:

```go
const (
 empty = math.MaxInt32
 gate  = 0
)

var dirs = [4][2]int{
 {1, 0},
 {-1, 0},
 {0, 1},
 {0, -1},
}
```

Then we can set up our function. We need to return early if either dimension of `rooms` is 0:

```go
func wallsAndGates(rooms [][]int) {
 if len(rooms) == 0 || len(rooms[0]) == 0 {
  return
 }
}
```

Next, we save the length of rows and cols into `rs` and `cs`:

```go
func wallsAndGates(rooms [][]int) {
 // ...
 rs, cs := len(rooms), len(rooms[0])
}
```

For BFS, we need a queue. In this case, we want to start with the gates, so we loop over `rooms` and add all coordinates of gates to the queue.

```go
q := [][]int{}
for row := range rooms {
  for col := range rooms[row] {
    if rooms[row][col] == gate {
      q = append(q, []int{row, col})
    }
  }
}
```

Once we have a queue set up, we loop until the queue is empty.

The first thing we need at the start of each iteration is to pop off the head of the queue and grab the row and col values from it:

```go
for len(q) > 0 {
  p := q[0]
  q = q[1:]
  row, col := p[0], p[1]
}
```

Next, we need to move in every direction, so let's create a nested loop over our constant dirs.

We set `r` and `c` based on the values of the direction pair:

```go
for len(q) > 0 {
  // ...
  for _, dir := range dirs {
    r := row + dir[0]
    c := col + dir[1]
  }
}
```

If `r` or `c` is outside the grid or if the room isn't empty, we can move on to the next direction:

```go
for _, dir := range dirs {
  // ...
  if r < 0 || c < 0 ||
  r >= rs || c >= cs ||
  rooms[r][c] != empty {
    continue
  }
}
```

Otherwise, we put a value into the room and add it to the queue for processing later:

```go
for _, dir := range dirs {
 // ...
 rooms[r][c] = rooms[row][col] + 1
 q = append(q, []int{r, c})
}
```

And that's it! Just keep looping over the queue until it's empty. In this way, we're guaranteed to visit every room that can be reached from a gate.

## Final Solution

This code completes in O(mn) time. It's actually O(2mn) because at worst it will loop over the full grid twice, but we can simplify O(2mn) to O(mn).

It requires a maximum of O(mn) space for the queue, but usually will require less. In the weird case where every room is a gate, we'd store all of them in the queue, which is where O(mn) comes from.

Other than the queue, we're modifying rooms in place, so there's no added space complexity.

```go
import (
 "math"
)

const (
 empty = math.MaxInt32
 gate  = 0
)

var dirs = [4][2]int{
 {1, 0},
 {-1, 0},
 {0, 1},
 {0, -1},
}

func wallsAndGates(rooms [][]int) {
 if len(rooms) == 0 || len(rooms[0]) == 0 {
  return
 }

 rs, cs := len(rooms), len(rooms[0])

 q := [][]int{}
 for row := range rooms {
  for col := range rooms[row] {
   if rooms[row][col] == gate {
    q = append(q, []int{row, col})
   }
  }
 }

 for len(q) > 0 {
  p := q[0]
  q = q[1:]
  row, col := p[0], p[1]

  for _, dir := range dirs {
   r := row + dir[0]
   c := col + dir[1]
   if r < 0 || c < 0 || r >= rs || c >= cs || rooms[r][c] != empty {
    continue
   }

   rooms[r][c] = rooms[row][col] + 1
   q = append(q, []int{r, c})
  }
 }
}
```
