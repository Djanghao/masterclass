# Recursive + queue

**Author:** AlexMoran
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/5946424/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/5946424/)

---

# Approach
Recursive with queue realization. Simply checking that in every node we have correct nodes. If we trying to iterate through node but it's empty -> tree is invalid. Also it's invalid when the tree is built but queue is not empty.

# Complexity
- Time complexity: O(n) - where n - basicaly the length of input
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
type Queue struct {
    queue []string
}

func (this *Queue) push(val string) {
    this.queue = append(this.queue, val)
}

func (this *Queue) pop() {
    this.queue = this.queue[1:]
}

func (this *Queue) top() string {
    return this.queue[0]
}

func (this *Queue) empty() bool {
    return len(this.queue) == 0
}

func isValid(que *Queue) bool {
    if que.empty() {
        return false
    }
    if que.top() == "#" {
        que.pop()
        return true
    } else {
        que.pop()
        left := isValid(que)
        right := isValid(que)
        return left && right
    }
}

func isValidSerialization(preorder string) bool {
    var que Queue
    for _, val := range strings.Split(preorder, ",") {
        que.push(val)
    }
    valid := isValid(&que)
    return valid && que.empty()
}
```