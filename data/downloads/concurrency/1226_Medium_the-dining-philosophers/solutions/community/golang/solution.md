# Go Using Channel

**Author:** sorcererxw
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-dining-philosophers/solutions/1199597/](https://leetcode.com/problems/the-dining-philosophers/solutions/1199597/)

---

```go

// count of Philosophers
const P = 5

// times of eat
const N = 1

type DiningPhilosophers struct {
	forks [P]chan struct{}
}

func NewDiningPhilosophers() *DiningPhilosophers {
	forks := [P]chan struct{}{}
	for i := 0; i < P; i++ {
		forks[i] = make(chan struct{}, 1)
		forks[i] <- struct{}{}
	}
	return &DiningPhilosophers{forks: forks}
}

func (x *DiningPhilosophers) WantsToEat(
	philosopher int,
	pickLeftFork func(),
	pickRightFork func(),
	eat func(),
	putLeftFork func(),
	putRightFork func(),
) {
	var left, right chan struct{}
	if philosopher == 0 {
		// reverse
		left, right = x.forks[0], x.forks[P-1]
	} else {
		left, right = x.forks[philosopher-1], x.forks[philosopher]
	}

	<-left
	pickLeftFork()
	<-right
	pickRightFork()
	eat()
	left <- struct{}{}
	putLeftFork()
	right <- struct{}{}
	putRightFork()
}

func main() {
	resultCh := make(chan [3]int)

	results := make([][3]int, 0)
	go func() {
		for {
			v, ok := <-resultCh
			if !ok {
				break
			}
			results = append(results, v)
		}
	}()

	dp := NewDiningPhilosophers()

	var g sync.WaitGroup

	for i := 0; i < P; i++ {
		i := i
		g.Add(1)
		go func() {
			defer g.Done()
			for j := 0; j < N; j++ {
				dp.WantsToEat(i,
					func() { resultCh <- [3]int{i, 1, 1} },
					func() { resultCh <- [3]int{i, 2, 1} },
					func() { resultCh <- [3]int{i, 0, 3} },
					func() { resultCh <- [3]int{i, 1, 2} },
					func() { resultCh <- [3]int{i, 2, 2} },
				)
			}
		}()
	}

	g.Wait()
	close(resultCh)

	fmt.Println(results)
}

```