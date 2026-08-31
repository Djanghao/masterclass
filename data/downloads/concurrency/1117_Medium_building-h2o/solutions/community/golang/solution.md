# Golang Simple Channel based solution

**Author:** afrozalm
**Votes:** 3
**Link:** [https://leetcode.com/problems/building-h2o/solutions/958070/](https://leetcode.com/problems/building-h2o/solutions/958070/)

---

```
package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

var wg sync.WaitGroup

func barrier(hchan, ochan chan chan bool) {
	for {
		h1 := <-hchan
		h2 := <-hchan
		o1 := <-ochan

		h1 <- true
		h2 <- true
		o1 <- true
	}
}

func hydrogen(hchan chan chan bool) {
	defer wg.Done()
	t := time.Duration(rand.Intn(3000))
	time.Sleep(time.Millisecond * t)
	h := make(chan bool)
	hchan <- h
	<-h
	fmt.Print("H")
}

func oxygen(ochan chan chan bool) {
	defer wg.Done()
	t := time.Duration(rand.Intn(5000))
	time.Sleep(time.Millisecond * t)
	o := make(chan bool)
	ochan <- o
	<-o
	fmt.Print("O")
}

func main() {
	hchan := make(chan chan bool, 2)
	ochan := make(chan chan bool)
	go barrier(hchan, ochan)
	for i := 0; i < 20; i++ {
		wg.Add(3)
		go hydrogen(hchan)
		go hydrogen(hchan)
		go oxygen(ochan)
	}
	wg.Wait()
}
```