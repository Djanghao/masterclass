# 💥 C# | Runtime beats 91.14% [EXPLAINED

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5763010/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5763010/)

---

# Intuition
The task is to insert a node between each pair of adjacent nodes in a linked list. The value of the new node will be the greatest common divisor (GCD) of the values in the two original nodes. We repeat this for every adjacent pair in the list.

# Approach
Traverse the list, and for each pair of adjacent nodes, calculate the GCD.

Insert a new node with the GCD value between the two nodes.

Continue traversing and repeat the process for all pairs until the end of the list.

# Complexity
- Time complexity:
O(n): We go through the list once, calculating GCD and inserting nodes.

- Space complexity:
O(1) (ignoring the extra nodes added to the list).

# Code
```csharp []
public class Solution {
    // Optimized GCD calculation
    private int GCD(int a, int b) {
        while (b != 0) {
            a %= b;
            int temp = a;
            a = b;
            b = temp;
        }
        return a;
    }

    public ListNode InsertGreatestCommonDivisors(ListNode head) {
        ListNode current = head;

        // Traverse the list in a single pass
        while (current != null && current.next != null) {
            // Directly calculate the GCD and insert the new node
            current.next = new ListNode(GCD(current.val, current.next.val), current.next);

            // Move to the next original node
            current = current.next.next;
        }

        return head;
    }
}

```