# Swift💯fast

**Author:** OrchidHunter
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3532534/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3532534/)

---

**Reverse First Half of List, O(1) space (accepted answer)**
```
class Solution {
    func pairSum(_ head: ListNode?) -> Int {
        var (fast, slow, revHead) = (head, head, ListNode?.none)
        
        // Reverse first half of list
        while fast != nil {
            (slow!.next, revHead, slow, fast) = (revHead, slow, slow?.next, fast?.next?.next)
        }
        
        // Iterate both halves of the list, determine max sum of pairs.
        var (p,q) = (revHead, slow), maxSum = 0
        while p != nil {
            maxSum = max(maxSum, p!.val + q!.val)
            (p,q) = (p?.next, q?.next)
        }
                
        return maxSum
    }
}
```

---

**Transfer First Half to Array, O(n) space (accepted answer)**
```
class Solution {
    func pairSum(_ head: ListNode?) -> Int {
		// Store first half of list in array.
        var (fast,slow) = (head,head), arr = [Int]()
        while fast != nil {
            arr.append(slow!.val)
            slow = slow?.next
            fast = fast?.next?.next
        }
        
		// Iterate over second half of list combining with stored values to determine max sum
        return arr.indices.reversed().reduce(into: 0) { maxSum, index in
            maxSum = max(maxSum, arr[index] + slow!.val)
            slow = slow?.next
        }
    }
}
```

\uD83D\uDD25  **BONUS: Reverse First Half of List, and UNREVERSE it before returning (accepted answer)**
```
class Solution {
    func pairSum(_ head: ListNode?) -> Int {
        var (fast, slow, revHead) = (head, head, ListNode?.none)
        
        // Reverse first half of list
        while fast != nil {
            (slow!.next, revHead, slow, fast) = (revHead, slow, slow!.next, fast?.next?.next)
        }
        
        // Iterate both halves of the list, determine max sum of pairs.
        var (p,q,prev) = (revHead, slow, slow), maxSum = 0
        while p != nil {
            maxSum = max(maxSum, p!.val + q!.val)
            (p!.next,prev,p,q) = (prev, p, p?.next, q?.next) // un-reverse `next` pointers
        }
                
        return maxSum
    }
}
```