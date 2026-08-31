# Swift – One pass solution, no extra memory

**Author:** DevilDimon
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/4759938/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/4759938/)

---

# Approach
The idea is to reverse the sections as we traverse the list.
Let $$requiredCount$$ be the current group length that we want to traverse.
On every iteration of the outer loop we move the $$fast$$ pointer from the $$cur$$ position until we either pass $$requiredCount$$ nodes, or reach the end of the list.

If we pass all the required nodes and the group length is even, we reverse the sublist between $$cur$$ and $$fast$$ \u2013 note that this may or may not be the last group but the algorithm is the same. The tricky bit here is to connect the head and the tail to the existing list, which is performed using $$oldPrev$$ (to connect the new head) and $$newPrev$$ (to make sure that $$prev$$ points to the new tail on the next outer loop iteration).

If the group length is not even, we just move $$prev$$ and $$cur$$ across the group without any changes.

At this point we might be at the end of the list, which we can check using the $$fast$$ pointer. In that case that was the last group so we can return $$head$$, which is guaranteed to remain in the list unchanged (size >= 1).

If this was not the last group, we increment $$requiredCount$$ to make sure the next outer loop iteration moves through the next group.

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$

# Code
```

class Solution {
    func reverseEvenLengthGroups(_ head: ListNode?) -> ListNode? {
        var prev: ListNode? = nil
        var cur = head
        var requiredCount = 1

        while true {
            var count = 1
            var fast = cur
            while count < requiredCount, fast?.next != nil {
                fast = fast?.next
                count += 1
            }
            if count.isMultiple(of: 2) {
                let oldPrev = prev
                prev = fast?.next
                let newPrev = cur
                for _ in 0..<count {
                    let next = cur?.next
                    cur?.next = prev
                    prev = cur
                    cur = next
                }
                oldPrev?.next = prev
                prev = newPrev
            } else {
                for _ in 0..<requiredCount {
                    prev = cur
                    cur = cur?.next
                }
            }

            if fast?.next == nil {
                return head
            }

            requiredCount += 1
        }
    }
}
```