# Straightforward Solution

**Author:** Vajid_Hussain
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/5057292/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/5057292/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Find the group is odd or even if it odd then using recursion reverse it. 

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:)(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseEvenLengthGroups(head *ListNode) *ListNode {
    var(
        i =1
        j =1
        prev *ListNode
        result = head
    )

    for head.Next!=nil{
        j=1
        prev= head

        for j<=i && head.Next != nil && i!=1{
            head=head.Next
            j++
        }

        if i!=1{
            j--
            prev= prev.Next
        }

        if j%2==0{
            reverse(prev, j/2)
        }
        i++
    }
    return result
}

func reverse(head *ListNode, count int)*ListNode {
    if count==0 {
        return head
    }
    next:=reverse(head.Next, count-1)
    head.Val, next.Val= next.Val, head.Val
    return next.Next
}
```