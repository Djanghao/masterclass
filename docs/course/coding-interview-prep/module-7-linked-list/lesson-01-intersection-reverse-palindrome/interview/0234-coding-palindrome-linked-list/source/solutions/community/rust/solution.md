# Beats 100% || Full Explained || [Java/C++/#/JavaScript/Python/Rust]

**Author:** Shivansu_7
**Votes:** 7
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/4908495/](https://leetcode.com/problems/palindrome-linked-list/solutions/4908495/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Base Cases Handling**:
   - If the given list is empty or has only one element, it's considered a palindrome since it matches itself.

2. **Finding the Middle of the List**:
   - Two pointers, `slow` and `fast`, are used to find the middle of the linked list.
   - `slow` moves one step at a time while `fast` moves two steps at a time.
   - When `fast` reaches the end of the list, `slow` will be at the middle or just before the middle.

3. **Reversing the Second Half of the List**:
   - Once the middle is found, the second half of the list starting from `slow.next` is reversed.
   - This is done to compare elements from the first half of the list with elements in the reversed second half.
4. **Reversing a Linked List**:
   - The `reverseList` method is used to reverse a given linked list. It iterates through the list, changing the direction of pointers to reverse it.
   - It maintains three pointers: `head`, `pre`, and `next`. `pre` keeps track of the previous node, `next` keeps track of the next node, and `head` moves through the list.
5. **Palindrome Checking**:
   - After reversing the second half of the list, two pointers (`head` and `slow`) are used to compare elements.
   - `head` starts from the beginning of the list and `slow` starts from the middle (or just after the middle) of the list.
   - Both pointers move towards each other, comparing the elements they point to.
   - If at any point, the values at the corresponding positions are not equal, the list is not a palindrome, and `false` is returned.
   - If all elements match, the list is a palindrome, and `true` is returned.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        if(head==null || head.next==null) {
            return true;
        }

        ListNode slow = head;
        ListNode fast = head;

        while(fast.next!=null && fast.next.next!=null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        slow.next = reverseList(slow.next);

        slow = slow.next;

        while(slow != null) {
            if(head.val != slow.val) {
                return false;
            }
            head = head.next;
            slow = slow.next;
        }
        return true;
    }

    private ListNode reverseList(ListNode head) {
        ListNode pre = null;
        ListNode next = null;

        while(head!=null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
}
```
```C++ []
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if(head == nullptr || head->next == nullptr) {
            return true;
        }

        ListNode* slow = head;
        ListNode* fast = head;

        while(fast->next != nullptr && fast->next->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }

        slow->next = reverseList(slow->next);

        slow = slow->next;

        while(slow != nullptr) {
            if(head->val != slow->val) {
                return false;
            }
            head = head->next;
            slow = slow->next;
        }
        return true;
    }

private:
    ListNode* reverseList(ListNode* head) {
        ListNode* pre = nullptr;
        ListNode* next = nullptr;

        while(head != nullptr) {
            next = head->next;
            head->next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
};
```
```Python []
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        if not head or not head.next:
            return True

        slow = head
        fast = head

        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

        slow.next = self.reverseList(slow.next)

        slow = slow.next

        while slow:
            if head.val != slow.val:
                return False
            head = head.next
            slow = slow.next
        return True

    def reverseList(self, head: ListNode) -> ListNode:
        pre = None

        while head:
            next_node = head.next
            head.next = pre
            pre = head
            head = next_node
        return pre
```
```C# []
public class Solution {
    public bool IsPalindrome(ListNode head) {
        if(head == null || head.next == null) {
            return true;
        }

        ListNode slow = head;
        ListNode fast = head;

        while(fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        slow.next = ReverseList(slow.next);

        slow = slow.next;

        while(slow != null) {
            if(head.val != slow.val) {
                return false;
            }
            head = head.next;
            slow = slow.next;
        }
        return true;
    }

    private ListNode ReverseList(ListNode head) {
        ListNode pre = null;
        ListNode next = null;

        while(head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
}
```
```go []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func isPalindrome(head *ListNode) bool {
    if head == nil || head.Next == nil {
        return true
    }

    slow := head
    fast := head

    for fast.Next != nil && fast.Next.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }

    slow.Next = reverseList(slow.Next)

    slow = slow.Next

    for slow != nil {
        if head.Val != slow.Val {
            return false
        }
        head = head.Next
        slow = slow.Next
    }
    return true
}

func reverseList(head *ListNode) *ListNode {
    var pre *ListNode = nil
    var next *ListNode = nil

    for head != nil {
        next = head.Next
        head.Next = pre
        pre = head
        head = next
    }
    return pre
}
```
```Rust []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     val: i32,
 *     next: Option<Box<ListNode>>
 * }
 */
impl Solution {
    pub fn is_palindrome(head: Option<Box<ListNode>>) -> bool {
        let mut head = head;
        if head.is_none() || head.as_ref().unwrap().next.is_none() {
            return true;
        }

        let mut slow = head.as_mut();
        let mut fast = head.as_mut();

        while fast.as_ref().unwrap().next.is_some() && fast.as_ref().unwrap().next.as_ref().unwrap().next.is_some() {
            slow = slow.unwrap().next.as_mut();
            fast = fast.unwrap().next.as_mut().unwrap().next.as_mut();
        }

        let mut slow = slow.unwrap().next.take();
        slow = Self::reverse_list(slow);

        let mut slow = slow.as_ref();
        let mut head = head.as_ref();

        while let (Some(slow_node), Some(head_node)) = (slow, head) {
            if slow_node.val != head_node.val {
                return false;
            }
            slow = slow_node.next.as_ref();
            head = head_node.next.as_ref();
        }
        true
    }

    fn reverse_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut pre = None;

        while let Some(mut node) = head {
            let next_node = node.next.take();
            node.next = pre;
            pre = Some(node);
            head = next_node;
        }
        pre
    }
}
```
```JavaScript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = reverseList(slow.next);

    slow = slow.next;

    while (slow) {
        if (head.val !== slow.val) {
            return false;
        }
        head = head.next;
        slow = slow.next;
    }
    return true;
};

function reverseList(head) {
    let pre = null;
    let next = null;

    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}
```
---

### ***FEEL FREE TO GIVE SOME OTHER APPROACH IN COMMENTS***
---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)
