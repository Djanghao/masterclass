# golang channel only solution

**Author:** YuXiangyong
**Votes:** 1
**Link:** [https://leetcode.com/problems/print-in-order/solutions/1744566/](https://leetcode.com/problems/print-in-order/solutions/1744566/)

---

```go
package concurrency

type PrintInOrderGo struct {
	c1     chan bool
	c2     chan bool
	c3     chan bool
	Output string
}

func (p *PrintInOrderGo) First(f func(int) string) {
	a := f(1)
	p.Output += a
	p.c1 <- true
}

func (p *PrintInOrderGo) Second(f func(int) string) {
	a := f(2)
	<-p.c1
	p.Output += a
	p.c2 <- true
}

func (p *PrintInOrderGo) Third(f func(int) string) {
	a := f(3)
	<-p.c2
	p.Output += a
	p.c3 <- true
}

//unit test
package concurrency

import (
	"fmt"
	"strconv"
	"testing"
)

func TestPrintInOrder_Reverse(t *testing.T) {
	po := PrintInOrderGo{
		c1: make(chan bool),
		c2: make(chan bool),
		c3: make(chan bool),
	}

	f := func(i int) string {
		result := strconv.FormatInt(int64(i), 10)
		return result
	}

	go po.Third(f)
	go po.Second(f)
	go po.First(f)

	<-po.c3

	if po.Output != "123" {
		fmt.Println(po.Output)
		t.Fail()
	}
}
```