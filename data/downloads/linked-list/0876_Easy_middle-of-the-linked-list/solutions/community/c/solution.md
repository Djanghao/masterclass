# ✅ [Python/Java/C++] Simple Solution || One-Pass || Beginner Friendly || Detailed Explanation

**Author:** linfq
**Votes:** 639
**Link:** [https://leetcode.com/problems/middle-of-the-linked-list/solutions/1651600/](https://leetcode.com/problems/middle-of-the-linked-list/solutions/1651600/)

---

**PLEASE UPVOTE if you like** \uD83D\uDE01 **If you have any question, feel free to ask.** 

* While `slow` moves one step forward, `fast` moves two steps forward.
* Finally, when `fast` reaches the end, `slow` happens to be in the middle of the linked list.
* For example, head = [1, 2, 3, 4, 5], I **bolded** the `slow` and `fast` in the list.
	* step 0: `slow`: [**1**, 2, 3, 4, 5], `fast`: [**1**, 2, 3, 4, 5]
	* step 1: `slow`: [1, **2**, 3, 4, 5], `fast`: [1, 2, **3**, 4, 5]
	* step 2: `slow`: [1, 2, **3**, 4, 5], `fast`: [1, 2, 3, 4, **5**]
	* end because `fast` cannot move forward anymore and `return [3, 4, 5]`


**Python**
```
class Solution(object):
    def middleNode(self, head):
        # While slow moves one step forward, fast moves two steps forward.
        # Finally, when fast reaches the end, slow happens to be in the middle of the linked list.
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow
```
**C++**
```
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
};
```
**Java**
```
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
```

**PLEASE UPVOTE if you like \uD83D\uDE01 If you have any question, feel free to ask.**


