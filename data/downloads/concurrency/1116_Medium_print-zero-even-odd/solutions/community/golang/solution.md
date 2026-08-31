# Golang Solutions

**Author:** 1211al
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-zero-even-odd/solutions/1817040/](https://leetcode.com/problems/print-zero-even-odd/solutions/1817040/)

---

```
package main

import (
	"fmt"
	"sync"
)

type ZeroEvenOdd struct {
	n int

	zeroChan chan int
	evenChan chan int
	oddChan  chan int

	wg sync.WaitGroup
}

func (z *ZeroEvenOdd) zero() {
	defer z.wg.Done()

	for num := 1; num <= z.n; num++ {
		<-z.zeroChan
		z.printNumber(0)
		if num%2 == 0 {
			z.evenChan <- num
		} else {
			z.oddChan <- num
		}
	}
}

func (z *ZeroEvenOdd) even() {
	defer z.wg.Done()

	for num := 2; num <= z.n; num += 2 {
		<-z.evenChan
		z.printNumber(num)
		if num != z.n {
			// if this num is the last one to print, avoid to release z.zeroChan -> which cause deadlock
			z.zeroChan <- num
		}
	}
}

func (z *ZeroEvenOdd) odd() {
	defer z.wg.Done()

	for num := 1; num <= z.n; num += 2 {
		<-z.oddChan
		z.printNumber(num)
		if num != z.n {
			// if this num is the last one to print, avoid to release z.zeroChan -> which cause deadlock
			z.zeroChan <- num
		}
	}
}

func (z *ZeroEvenOdd) printNumber(num int) {
	print(num)
}

func main() {
	n := 50
	z := ZeroEvenOdd{
		n:        n,
		zeroChan: make(chan int),
		evenChan: make(chan int),
		oddChan:  make(chan int),
	}

	z.wg.Add(3)

	go z.zero()
	z.zeroChan <- 0
	go z.even()
	go z.odd()

	z.wg.Wait()

	fmt.Println("\
FINISH")
}
```
