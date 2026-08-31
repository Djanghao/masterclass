# Go slice for sequencing & map for lookup; clean & easy to read

**Author:** bunnycode
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-snake-game/solutions/3690700/](https://leetcode.com/problems/design-snake-game/solutions/3690700/)

---

# Intuition
We need the lookup of a map but the sequencing of a slice. In some language like Python, that could be done with an OrderedDict. Go standard libs do not have such a container.

# Approach
Use a slice for sequencing and a map for lookups. Add to both; prune from both.

# Code
```
const (
    GAME_OVER = -1
)

type Pos struct { r, c int }

type SnakeGame struct {
    snakeArr []Pos        // head is always len(arr)-1 Pos
    snakeMap map[Pos]bool // for quick look-up of collisions
    food     []Pos
    rows     int
    cols     int
}

func Constructor(width int, height int, food [][]int) SnakeGame {
    startPos := Pos{0,0}
    foodPos := []Pos{}
    for _, f := range food {
        foodPos = append(foodPos, Pos{ f[0], f[1] })
    }
    return SnakeGame{
        snakeArr: []Pos{ startPos },
        snakeMap: map[Pos]bool{ startPos: true },
        food:     foodPos,
        rows:     height,
        cols:     width,
    }
}

func (sg *SnakeGame) Move(direction string) int {
    h := sg.snakeArr[len(sg.snakeArr)-1] // snake head before applying move
    var newHead Pos
    switch direction {
        case "U": newHead = Pos{ h.r-1, h.c   }
        case "D": newHead = Pos{ h.r+1, h.c   }
        case "L": newHead = Pos{ h.r,   h.c-1 }
        case "R": newHead = Pos{ h.r,   h.c+1 }
    }
    if sg.OutOfBounds(newHead) { return GAME_OVER }

    eatsFood := len(sg.food) > 0 && newHead == sg.food[0]
    if eatsFood { sg.food = sg.food[1:] }

    collision := sg.UpdateSnake(newHead, eatsFood)
    if collision { return GAME_OVER }

    return len(sg.snakeArr) - 1
}

func (sg *SnakeGame) UpdateSnake(newHead Pos, eatsFood bool) (collision bool) {
    sg.snakeArr = append(sg.snakeArr, newHead)

    if !eatsFood {
        var pop Pos
        pop, sg.snakeArr = sg.snakeArr[0], sg.snakeArr[1:]
        sg.snakeMap[pop] = false
    }

    collision = sg.snakeMap[newHead]
    sg.snakeMap[newHead] = true
    return
}

func (sg *SnakeGame) OutOfBounds(p Pos) bool {
    if p.r < 0 || p.r >= sg.rows { return true }
    if p.c < 0 || p.c >= sg.cols { return true }
    return false
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * obj := Constructor(width, height, food);
 * param_1 := obj.Move(direction);
 */
```