# golang: int list, map for counts, and minimal de-duping to minimize loops

**Author:** bunnycode
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/3671497/](https://leetcode.com/problems/first-unique-number/solutions/3671497/)

---

# Approach
We need to know the count of each int added to FirstUnique. Maps are great for that. We also want to reduce the looping of our "remove dupes" routine. Allowing dupes in the queue reduces clean-up time; we only clean the head of the queue and only when ShowFirstUnique is called.

# Code
```
type FirstUnique struct{
    queue []int
    count map[int]int
}
func Constructor(nums []int) FirstUnique {
    res := FirstUnique{
        queue: []int{},
        count: map[int]int{},
    }
    for _, n := range nums { res.Add(n) }
    return res
}
func (X *FirstUnique) ShowFirstUnique() int {
    // remove dupes from start of queue -- this catches the "first seen"
    // values that our Add function put into the queue
    for len(X.queue) > 0 && X.count[X.queue[0]] > 1 { X.queue = X.queue[1:] }

    if len(X.queue) == 0 { return -1 }
    return X.queue[0]
}
func (X *FirstUnique) Add(value int)  {
    X.count[value]++

    // avoid adding known dupes; we know the first-seen of that
    // value is still in the queue & will clean it as needed
    if X.count[value] > 1 { return } 

    X.queue = append(X.queue, value)
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * obj := Constructor(nums);
 * param_1 := obj.ShowFirstUnique();
 * obj.Add(value);
 */
```