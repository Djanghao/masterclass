# Recursive solution with TC = O(n) & SC = O(n)

**Author:** RajanSingh
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3954649/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3954649/)

---

# Intuition
**Steps**
1. Count both linked list items
2. Take result node as nil & carry as 0
3. Call the recursive method where we have to pass 
    1. l1, l2 refers head node of linked list
    2. node1, node2 refers current node
    3. l1count, l2count
    4. result & carry
4. Now as a base condition if l1Count is 0 && l2Count is 0 break the recursion
5. To calculate the sum we have 3 condition
    1. l1Count > l2Count then pass only node1 = node1.next & node2 will be nil also l1count will be decreases by 1. sum = valOf(node1) + carry
    2. l1Count < l2Count then pass only node2 = node2.next & node1 will be nil also l2count will be decreases by 1. sum = valOf(node2) + carry
    3. l1Count == l2Count, pass node1 = node1.next, node2 = node2.next, decreases l1count & l2count by 1. And sum = valOf(node1) + valOf(node2) + carry. **Note** We have to make take care that node1 or node2 can be nil because of condition 1 or 2 which means we haven't started node1 or node stream. To start it let's compare if node1 is nil then pass l1 which is head of linklest input 1 otherwise pass node1 directly. Repeate same condition with node2.
6. After getting the sum create new node assign value and link with result now result node will be replaced by new node because we always have to take a head of the node.
7. After recursion check if carry is greater than 0 then repeat step 6 and inplace of sum use carry, until carry become 0.
8. Retutn the result which is the head node of your output.

# Approach
Recursion

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
final class Solution {
    func countOf(_ node: ListNode?) -> Int {
        var node = node
        var count = node == nil ? 0 : 1
        while node?.next != nil {
            count = count + 1
            node = node?.next
        }
        return count
    }

    func valOf(_ node: ListNode?) -> Int {
        return node?.val ?? 0
    }

    func createAndAddNode(value: Int, resultNode: ListNode?) -> (node: ListNode?, carry: Int) {
        let newNode = ListNode(value%10)
        newNode.next = resultNode
        return (newNode, value/10)
    }

    func addNodes(l1: ListNode?, l2: ListNode?, node1: ListNode?, node2: ListNode?, l1Count: Int, l2Count: Int, carry: inout Int, result: inout ListNode?) {
        if l1Count <= 0 && l2Count <= 0 {
            return
        }
        var sum = 0
        if l1Count > l2Count {
            addNodes(l1: l1, l2: l2, node1: node1?.next, node2: nil, l1Count: l1Count - 1, l2Count: l2Count, carry: &carry, result: &result)
            sum = valOf(node1) + carry
        }
        else if l1Count < l2Count {
            addNodes(l1: l1, l2: l2, node1: nil, node2: node2?.next, l1Count: l1Count, l2Count: l2Count - 1, carry: &carry, result: &result)
            sum = valOf(node2) + carry
        } else {
            let node1 = node1 == nil ? l1 : node1
            let node2 = node2 == nil ? l2 : node2
            addNodes(l1: l1, l2: l2, node1: node1?.next, node2: node2?.next, l1Count: l1Count - 1, l2Count: l2Count - 1, carry: &carry, result: &result)
            sum = valOf(node1) + valOf(node2) + carry
        }
        let item = createAndAddNode(value: sum, resultNode: result)
        carry = item.carry
        result = item.node
    }

    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        let l1Count: Int = countOf(l1)
        let l2Count: Int = countOf(l2)
        var result: ListNode?
        var carry: Int = 0
        addNodes(l1: l1, l2: l2, node1: l1, node2: l2, l1Count: l1Count, l2Count: l2Count, carry: &carry, result: &result)
        while carry > 0 {
            let item = createAndAddNode(value: carry, resultNode: result)
            carry = item.carry
            result = item.node
        }
        return result
    }
}
```