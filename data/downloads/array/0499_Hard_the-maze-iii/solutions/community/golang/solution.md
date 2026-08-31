# Priority queue but separate distance and selected path criteria

**Author:** bachngocson0812
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze-iii/solutions/4988920/](https://leetcode.com/problems/the-maze-iii/solutions/4988920/)

---

# Intuition
I don't know it is slower or not.

# Approach
Instead of consider path criteria as priority (in this problem, the lexical order), I separate it from priority function.

# Complexity
- Time complexity: $$O(n*ln(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import (
	"container/heap"
)

type state struct {
	posX    int
	posY    int
	curPath string
}

func findShortestWay(maze [][]int, start []int, destination []int) string {
	queue := make(PriorityQueue[state], 0)
	heap.Push(&queue, &Item[state]{
		value: state{
			posX:    start[0],
			posY:    start[1],
			curPath: "",
		},
		priority: 0,
	})

	var j int
	var curDist, altDist, nextDist int
	ans := "impossible"
	curMin := 1<<63 - 1
	for queue.Len() > 0 {
		curNode := heap.Pop(&queue).(*Item[state])
		curPosX, curPosY, curPath := curNode.value.posX, curNode.value.posY, curNode.value.curPath

		curDist = maze[curPosX][curPosY] >> 1
		if curDist == 0 && (curPosX != start[0] || curPosY != start[1]) {
			curDist = 1<<63 - 1
		}

		if curPosX == destination[0] && curPosY == destination[1] {
			if curDist < curMin {
				curMin = curDist
				ans = curPath
			} else if curDist == curMin {
				ans = min(ans, curPath)
			} else {
                break
            }
		}

		if curDist < curNode.priority {
			continue
		}

		// up
		j = curPosX - 1
		if curPosY == destination[1] {
			for ; j >= 0 && j != destination[0]-1 && maze[j][curPosY]&1 == 0; j-- {
			}
		} else {
			for ; j >= 0 && maze[j][curPosY]&1 == 0; j-- {
			}
		}
		j++
		nextDist = maze[j][curPosY] >> 1
		if nextDist == 0 && (j != start[0] || curPosY != start[1]) {
			nextDist = 1<<63 - 1
		}
		altDist = curDist + curPosX - j
		if altDist <= nextDist && j != curPosX {
			maze[j][curPosY] = altDist << 1
			heap.Push(&queue, &Item[state]{
				value: state{
					posX:    j,
					posY:    curPosY,
					curPath: curPath + "u",
				},
				priority: altDist,
			})
		}

		// down
		j = curPosX + 1
		if curPosY == destination[1] {
			for ; j < len(maze) && j != destination[0]+1 && maze[j][curPosY]&1 == 0; j++ {
			}
		} else {
			for ; j < len(maze) && maze[j][curPosY]&1 == 0; j++ {
			}
		}
		j--
		nextDist = maze[j][curPosY] >> 1
		if nextDist == 0 && (j != start[0] || curPosY != start[1]) {
			nextDist = 1<<63 - 1
		}
		altDist = curDist + j - curPosX
		if altDist <= nextDist && j != curPosX {
			maze[j][curPosY] = altDist << 1
			heap.Push(&queue, &Item[state]{
				value: state{
					posX:    j,
					posY:    curPosY,
					curPath: curPath + "d",
				},
				priority: altDist,
			})
		}

		// left
		j = curPosY - 1
		if curPosX == destination[0] {
			for ; j >= 0 && j != destination[1]-1 && maze[curPosX][j]&1 == 0; j-- {
			}
		} else {
			for ; j >= 0 && maze[curPosX][j]&1 == 0; j-- {
			}
		}
		j++
		nextDist = maze[curPosX][j] >> 1
		if nextDist == 0 && (curPosX != start[0] || j != start[1]) {
			nextDist = 1<<63 - 1
		}
		altDist = curDist + curPosY - j
		if altDist <= nextDist && j != curPosY {
			maze[curPosX][j] = altDist << 1
			heap.Push(&queue, &Item[state]{
				value: state{
					posX:    curPosX,
					posY:    j,
					curPath: curPath + "l",
				},
				priority: altDist,
			})
		}

		// right
		j = curPosY + 1
		if curPosX == destination[0] {
			for ; j < len(maze[curPosX]) && j != destination[1]+1 && maze[curPosX][j]&1 == 0; j++ {
			}
		} else {
			for ; j < len(maze[curPosX]) && maze[curPosX][j]&1 == 0; j++ {
			}
		}
		j--
		nextDist = maze[curPosX][j] >> 1
		if nextDist == 0 && (curPosX != start[0] || j != start[1]) {
			nextDist = 1<<63 - 1
		}
		altDist = curDist + j - curPosY
		if altDist <= nextDist && j != curPosY {
			maze[curPosX][j] = altDist << 1
			heap.Push(&queue, &Item[state]{
				value: state{
					posX:    curPosX,
					posY:    j,
					curPath: curPath + "r",
				},
				priority: altDist,
			})
		}
	}

	return ans
}

type Item[T any] struct {
	value    T
	priority int
	index    int
}

type PriorityQueue[T any] []*Item[T]

func (pq PriorityQueue[T]) Len() int { return len(pq) }

func (pq PriorityQueue[T]) Less(i, j int) bool {
	return pq[i].priority < pq[j].priority
}

func (pq PriorityQueue[T]) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].index = i
	pq[j].index = j
}

func (pq *PriorityQueue[T]) Push(x any) {
	n := len(*pq)
	item := x.(*Item[T])
	item.index = n
	*pq = append(*pq, item)
}

func (pq *PriorityQueue[T]) Pop() any {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil
	item.index = -1
	*pq = old[:n-1]
	return item
}

func (pq *PriorityQueue[T]) Update(item *Item[T], value T, priority int) {
	item.value = value
	item.priority = priority
	heap.Fix(pq, item.index)
}

```