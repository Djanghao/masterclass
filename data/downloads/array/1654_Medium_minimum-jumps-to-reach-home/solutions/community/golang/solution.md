# golang - bfs

**Author:** vengolan
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/2280533/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/2280533/)

---

````

type Pos struct {
	pos        int
	isBackward bool
}

func minimumJumps(forbidden []int, a int, b int, x int) int {

	jumps := 0
	searchBoundary := max(forbidden) + x + a + b

	visit := make(map[Pos]struct{})

	fmap := make(map[int]struct{})
	for _, x := range forbidden {
		fmap[x] = struct{}{}
	}

	isSeen := func(pos Pos) bool {
		_, ok := visit[pos]
		return ok
	}
	isForbidden := func(pos int) bool {
		_, ok := fmap[pos]
		return ok
	}

	queue := []Pos{{0, false}}

	for len(queue) > 0 {
		currlen := len(queue)
		for _, currPos := range queue[:currlen] {

			curr, isBackward := currPos.pos, currPos.isBackward
			if curr == x {
				return jumps
			}

			// move forward
			nextPos := Pos{curr + a, false}
			if !isForbidden(nextPos.pos) &&      //not in forbidden list
				nextPos.pos < searchBoundary &&   //witin boundary
				!isSeen(nextPos) {    //not visited before 
				queue = append(queue, nextPos)
				visit[Pos{nextPos.pos, false}] = struct{}{}
			}

			//move backward
			nextPos = Pos{curr - b, true}
			if !isForbidden(nextPos.pos) && //is not in forbidden list
				nextPos.pos >= 0 && // within boundary
				!isSeen(nextPos) && //not visited before
				!isBackward { //two consecutive backward movement is not allowed
				queue = append(queue, nextPos)
				visit[nextPos] = struct{}{}
			}

		}
		queue = queue[currlen:]
		jumps++
	}

	return -1

}

//get max element from array
func max(arr []int) int {
	max := arr[0]
	for _, val := range arr[1:] {
		if val > max {
			max = val
		}
	}
	return max
}


`````