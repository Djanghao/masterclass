# golang beats 100% time and memory

**Author:** craig08
**Votes:** 5
**Link:** [https://leetcode.com/problems/implement-queue-using-stacks/solutions/316889/](https://leetcode.com/problems/implement-queue-using-stacks/solutions/316889/)

---

Use two arrays (only access the last element) to implement queue.
```go
type MyQueue struct {
    stackPush, stackPop []int
}
/** Initialize your data structure here. */
func Constructor() MyQueue {
    return MyQueue{}
}
/** Push element x to the back of queue. */
func (this *MyQueue) Push(x int)  {
    this.stackPush = append(this.stackPush, x)
}
/** Removes the element from in front of queue and returns that element. */
func (this *MyQueue) Pop() int {
    ans := this.Peek()
    this.stackPop = this.stackPop[:len(this.stackPop)-1]
    return ans
}
/** Get the front element. */
func (this *MyQueue) Peek() int {
    if len(this.stackPop) == 0 {
        for len(this.stackPush) != 0 {
            this.stackPop = append(this.stackPop, this.stackPush[len(this.stackPush)-1])
            this.stackPush = this.stackPush[:len(this.stackPush)-1]
        }
    }
    return this.stackPop[len(this.stackPop)-1]
}
/** Returns whether the queue is empty. */
func (this *MyQueue) Empty() bool {
    return len(this.stackPush) == 0 && len(this.stackPop) == 0
}
/**
 * Your MyQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Peek();
 * param_4 := obj.Empty();
 */
 ```