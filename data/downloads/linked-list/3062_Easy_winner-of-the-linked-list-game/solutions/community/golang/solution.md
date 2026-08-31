# Golang Straightforward

**Author:** cakuang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/5822524/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/5822524/)

---



# Code
```golang []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func gameResult(head *ListNode) string {
    index := 0
    previouseven := head.Val
    evenscore := 0
    oddscore := 0
    for head != nil {
        if index % 2 == 1 {
            if head.Val > previouseven {
                oddscore ++ 
            } else if head.Val < previouseven {
                evenscore ++
            }
        } else {
            previouseven = head.Val
        }
        
        index ++
        head = head.Next
    }
    if evenscore > oddscore {
        return "Even"
    } else if oddscore > evenscore {
        return "Odd"
    }

    return "Tie"

    
}
```