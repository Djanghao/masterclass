# Python3 / Golang, 2 Easy and intuitive solutions

**Author:** ioan33
**Votes:** 3
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/3281228/](https://leetcode.com/problems/linked-list-random-node/solutions/3281228/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
## Version 1
1. In `__init__` / constructor we initialize a list and append to it all the values from the single-linked list
2. In `getRandom` return a random integer from the list 

# Complexity
- Time complexity:
`__init__` / constructor O(n)
`getRandom` O(1)

- Space complexity: O(n)



#### Don't forget to Vote! :)

# Code 
```python []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:

    def __init__(self, head: Optional[ListNode]):
        self.l = []
        
        curr = head
        while curr:
            self.l.append(curr.val)
            curr = curr.next
        
    def getRandom(self) -> int:
        return random.choice(self.l)


# Your Solution object will be instantiated and called as such:
# obj = Solution(head)
# param_1 = obj.getRandom()
```
```golang []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

type Solution struct {
    Values []int
}


func Constructor(head *ListNode) Solution {
    values := []int{}
    curr := head
    for curr != nil {
        values = append(values, curr.Val)
        curr = curr.Next
    }

    return Solution{Values: values}
}


func (this *Solution) GetRandom() int {
    randInt := rand.Intn(len(this.Values))
    return this.Values[randInt]
}

/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(head);
 * param_1 := obj.GetRandom();
 */
```

<!-- Describe your approach to solving the problem. -->
## Version 2
1. In `__init__` / constructor we only set the head field
2. In `getRandom` iterate over the single-linked list, generate a random integer between 1 and counter that starts with 0, and if it is equal with 1 we set the node value. at the end we return the stored value.  

# Complexity
- Time complexity:
`__init__` / constructor O(1)
`getRandom` O(n)

- Space complexity: O(1)


# Code 
```python []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:

    def __init__(self, head: Optional[ListNode]):
        self.h = head
        
    def getRandom(self) -> int:
        
        curr = self.h
        count = 0
        res = 0

        while curr:
            count += 1
            if randint(1, count) == 1:
                res = curr.val
            curr = curr.next
        
        return res


# Your Solution object will be instantiated and called as such:
# obj = Solution(head)
# param_1 = obj.getRandom()
```
```golang []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

type Solution struct {
    Head *ListNode
}


func Constructor(head *ListNode) Solution {
    return Solution{Head: head}
}


func (this *Solution) GetRandom() int {
    
    curr := this.Head
    count := 0
    result := 0

    for curr != nil {
    
        count++    
        if (rand.Intn(count) + 1) == 1 {
            result = curr.Val
        }
        
        curr = curr.Next
    }
    return result
}


/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(head);
 * param_1 := obj.GetRandom();
 */
```


