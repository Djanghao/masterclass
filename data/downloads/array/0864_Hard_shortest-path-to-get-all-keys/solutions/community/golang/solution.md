# GO | BFS | bitmanipulation

**Author:** xtreding
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/2231618/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/2231618/)

---

At first let's think about the general approach of such kind of tasks. We should find the shortest path in a matrix. It leads us to thoughts that we can use bfs. Next question that we can have is: "how can we handle already visited cells?". 
	Usually we can change the value of the cell and check if value has been changed then don't consider this cell again. Since in this task we can visit a call with a locker first time without the key and we can't go further but we can visit this cell second time with the key and can go firther. 
	It means that we should have a `seen` structure where we will memorize `i`, `j ` and `keys` that we have at the moment. We should not go the the same cell with the same keys. 

The last question is how can we store and calculate `keys` efficiently? We can do it with bit manipulations! According to the task description, we know that there are maximum 6 keys with lockers and they are all start from 'a' ('A') to 'f' ('F'). 
	So we can just have an integer `keys` and initialize it with `0`. Then we can easily calculate the bit of the key like:
	`grid[i][j] - 'a'` - if value of the grid is a key value and `grid[i][j] - 'A'` - if value of the grid is a lock value. Counting keys by `keys |= 2 << grid[i][j] - 'a'` - it sets one bit to 1. Each bit indicates the certain key. E.g. 
- 110 means that we have key 0 and key 1. 
- 1110 means that we have key 0,1 and 2. (because bit #0 and bit #1 and bit#2 are set to `1`)
	Check if we have a key with bit and: `if keys & 2 << int(grid[nextI][nextJ]-'A' == 0` - if the bit is `0` then we don't have a key.
	For checking that we finally have all keys we should know how many keys are stored on the grid. Then we can check:
`if keys == (2 << keysCount) - 2`. You can play with bit operations for better understanding why it works.

**Algorithm**:
1. For each all cells and find start position and amount of keys.
2. Put the start position with steps=0 and keys=0 to the Queue.
3. Read from Queue, check if we have all keys (then return steps). Otherwise get all adjacement cells, check if they valid (not out of boud, not a wall), check if it is lock and we can open it, check if it is a key (save it), put next cell to the Queue.
4. if Queue is empty then we can't find a solution => return -1
	
```
type Move struct {
    data Data
    steps int
}

type Data struct {
    i,j int
    keys int
}

type Queue struct {
	arr []Move
}

func (q *Queue) Push(v Move) {
	q.arr = append(q.arr, v)
}

func (q *Queue) Pop() Move {
	v := q.arr[0]
	q.arr = q.arr[1:]
	return v
}

func (q *Queue) Size() int {
	return len(q.arr)
}

func shortestPathAllKeys(grid []string) int {
    startI,startJ := -1, -1
    keysCount := 0
    
	//all directions
    ops := [][]int{{-1,0},{0,1},{1,0},{0,-1}}
    
    m := len(grid)
    n := len(grid[0])
    for i:=0;i<m;i++{
        for j:=0;j<n;j++{
            if grid[i][j] == '@'{
                startI = i
                startJ = j
                continue
            }
            
            if grid[i][j] >= 'a' && grid[i][j] <= 'z'{
                keysCount++
            }
        }
    }
    
    q := Queue{}
    seen := make(map[Data]bool)
    start := Data{i:startI, j:startJ, keys: 0}
    seen[start]=true
    q.Push(Move{data: start, steps: 0})
    
    for q.Size() > 0 {
        curr := q.Pop()
		//check if all keys found
        if curr.data.keys == ((2<<keysCount)-2){
            return curr.steps
        }
        
        for _, op := range ops {
            nextI,nextJ := curr.data.i + op[0], curr.data.j + op[1]
            if nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && grid[nextI][nextJ] != '#'{
                next := Data{i:nextI, j:nextJ, keys: curr.data.keys}
                //skip if seen with same keys
                if _, ok := seen[next];ok{
                    continue
                }
                
                //lock
                if grid[nextI][nextJ] >= 'A' && grid[nextI][nextJ] <= 'Z'{
                    bit := (2 << int(grid[nextI][nextJ] -'A'))
                    if curr.data.keys & bit == 0{
                        //don't have the key
                        continue
                    }
                }
                
                //key
                if grid[nextI][nextJ] >= 'a' && grid[nextI][nextJ] <= 'z'{
                    bit := (2 << int(grid[nextI][nextJ] - 'a'))
					//save the key
                    next.keys |= bit
                }
                
                seen[next]=true
                nextMove := Move{data:next, steps: curr.steps + 1}
                q.Push(nextMove)
            }
        }
    }
    
	//can't find a solution
    return -1
}
```