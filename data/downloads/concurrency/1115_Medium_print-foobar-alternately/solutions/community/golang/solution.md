# Simple solution with channels | Golang

**Author:** IvanTerekh
**Votes:** 5
**Link:** [https://leetcode.com/problems/print-foobar-alternately/solutions/4800543/](https://leetcode.com/problems/print-foobar-alternately/solutions/4800543/)

---

# Approach
After printing `foo` wait while `bar` is printed and the other way around. For this purpose we use a channel with zero capacity. `Bar` and `Foo` send a value to the channel, than wait for a feedback from each other.

# Code
```
type FooBar struct {
	n int
    ch chan int
}

func NewFooBar(n int) *FooBar {
	return &FooBar{
        n: n,
        ch: make(chan int),
    }
}

func (fb *FooBar) Foo(printFoo func()) {
	for i := 0; i < fb.n; i++ {
        // printFoo() outputs "foo". Do not change or remove this line.
        printFoo()
        fb.ch <- 0
        <-fb.ch
	}
}

func (fb *FooBar) Bar(printBar func()) {
	for i := 0; i < fb.n; i++ {
        <-fb.ch
        // printBar() outputs "bar". Do not change or remove this line.
        printBar()
        fb.ch <- 0
	}
}
```