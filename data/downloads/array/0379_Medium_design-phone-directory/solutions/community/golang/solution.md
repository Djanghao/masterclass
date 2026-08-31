# golang linkedlists solution

**Author:** chemi
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/436050/](https://leetcode.com/problems/design-phone-directory/solutions/436050/)

---

I post this because there was no solutinons with golang linkedlists. 
This is not designed to assign each number equally. Just to get ac.
```
type PhoneDirectory struct {
    Availables   *Node
    NoAvailables *Node
}

type Node struct {
    Number int
    Next *Node
}

func Constructor(maxNumbers int) PhoneDirectory {
    root := &Node{Number: 0}
    node := root
    for i := 1; i < maxNumbers; i++ {
        node.Next = &Node{Number: i}
        node = node.Next
    }
    return PhoneDirectory{Availables: root}
}

func (this *PhoneDirectory) Get() int {
    if this.Availables == nil {
        return -1
    }
    node := this.Availables
    this.Availables = this.Availables.Next
    node.Next = this.NoAvailables
    this.NoAvailables = node
    return this.NoAvailables.Number
}

func (this *PhoneDirectory) Check(number int) bool {
    node := this.Availables
    for node != nil {
        if node.Number == number {
            return true
        }
        node = node.Next
    }
    return false
}

func (this *PhoneDirectory) Release(number int)  {
    var prev *Node
    node := this.NoAvailables
    for node != nil {
        if node.Number == number {
            if prev == nil {
                this.NoAvailables = node.Next
            } else {
                prev.Next = node.Next
            }
            node.Next = this.Availables
            this.Availables = node
            return
        }
        prev = node
        node = node.Next
    }
}
```