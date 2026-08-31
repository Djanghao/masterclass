# Golang beginner - DFS + DP

**Author:** vegabird
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/3556210/](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/3556210/)

---

# Intuition
This is a typical resursive DFS search + DP problem

Myy golang is not good, so just see the idea of solving

# Code
```

type State struct {
	state    []bool
	curRound int
}

type Result struct {
	earliest int
	latest   int
}

var visited map[string]Result

func (s State) ToString() string {
	return fmt.Sprintf("%v", s.state)
}

func (r *Result) Merge(other Result) {
	if other.earliest < r.earliest {
		r.earliest = other.earliest
	}
	if other.latest > r.latest {
		r.latest = other.latest
	}
}

func SolveInternal(state State) (result Result) {
	if r, ok := visited[state.ToString()]; ok {
		return r
	}

	state.curRound++

	fmt.Println("SolveInternal", state)

	makingQueue := [][]int{
		make([]int, 0),
	}
	completedQueue := make([]State, 0)
	oldState := state.state

	for len(makingQueue) > 0 {
		makingState := makingQueue[0]
		makingQueue = makingQueue[1:]

		curIndex := len(makingState)

		//fmt.Println("Examining ", makingState, "curIndex", curIndex)

		if curIndex == len(oldState)/2 {
			if len(oldState)%2 == 1 {
				makingState = append(makingState, curIndex)
			}

			sort.Ints(makingState)
			completedState := State{
				state:    make([]bool, len(makingState)),
				curRound: state.curRound,
			}
			for i := range makingState {
				completedState.state[i] = oldState[makingState[i]]
			}
			completedQueue = append(completedQueue, completedState)
		} else {
			oppIndex := len(oldState) - curIndex - 1

			if oldState[curIndex] && oldState[oppIndex] {
				fmt.Println("Found terminal condition at ", state)
				return Result{earliest: state.curRound, latest: state.curRound}
			}
			if !oldState[curIndex] {
				//fmt.Println("- adding", oppIndex, "to", makingState, "as curIndex", curIndex, "is not true")
				makingQueue = append(makingQueue, append(makingState, oppIndex))
			}
			if !oldState[oppIndex] {
				//fmt.Println("- adding", curIndex, "to", makingState, "as curIndex", oppIndex, "is not true")
				copiedState := make([]int, len(makingState))
				copy(copiedState, makingState)
				makingQueue = append(makingQueue, append(copiedState, curIndex))
			}
		}
	}

	result = Result{earliest: math.MaxInt, latest: math.MinInt}

	for _, newState := range completedQueue {
		newState.curRound = state.curRound

		oneResult := SolveInternal(newState)
		result.Merge(oneResult)
	}

	visited[state.ToString()] = result
	return
}

func earliestAndLatest(n int, firstPlayer int, secondPlayer int) []int {

	visited = make(map[string]Result)

	fmt.Println("Started to solve", n, firstPlayer, secondPlayer)

	state := State{
		state:    make([]bool, n),
		curRound: 0,
	}

	for i := 0; i < n; i++ {
		state.state[i] = (i+1) == firstPlayer || (i+1) == secondPlayer
	}

	result := SolveInternal(state)

	fmt.Println("Finished", result)

	return []int{result.earliest, result.latest}
}
```