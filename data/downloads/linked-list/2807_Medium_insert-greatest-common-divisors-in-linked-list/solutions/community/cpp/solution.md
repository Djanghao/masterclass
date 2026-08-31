# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS - Simulation- Explained in Detail

**Author:** lancertech6
**Votes:** 83
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5763113/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5763113/)

---

![Screenshot 2024-09-10 064754.png](./images/0.png)

# YouTube Video Explanation:

### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail.

<!-- **If you want a video for this question please write in the comments** -->


https://youtu.be/yrcGRtr03tg


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2900 Subscribers*
*Current Subscribers: 2818*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The task is to insert a new node with the greatest common divisor (GCD) of each pair of adjacent nodes in a singly linked list. To solve this problem, you need to:

1. Traverse the list from the head.
2. For each adjacent pair of nodes, compute their GCD.
3. Insert a new node with the computed GCD between the current pair of nodes.
4. Continue this process until you've processed the entire list.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialization**: Start by checking if the linked list contains only one node. If so, no insertions are needed, so return the head as it is.

2. **Traversal and Insertion**:
   - Use two pointers: `node1` to represent the current node and `node2` to represent the next node.
   - Compute the GCD of the values in `node1` and `node2`.
   - Create a new node with the computed GCD and insert it between `node1` and `node2`.
   - Update the pointers:
     - Set `node1.next` to the new GCD node.
     - Set the new GCD node's `next` to `node2`.
   - Move `node1` to `node2` and `node2` to the next node of `node2`.
   - Repeat this until `node2` is null.

3. **Return**: Once the traversal is complete and all necessary nodes are inserted, return the head of the modified list.

# Complexity
- Time complexity:
   - **Traversal**: Each node in the list is visited once, making the traversal O(n), where n is the number of nodes in the list.
   - **Insertion**: Each insertion operation takes constant time O(1), and since we perform this operation n-1 times (for each adjacent pair), the overall insertion complexity is O(n).
   - **GCD Calculation**: The GCD calculation for two integers is O(log(min(a, b))), where `a` and `b` are the values of the nodes. Given the constraints (values between 1 and 1000), the GCD calculation can be considered a constant-time operation for practical purposes.
   
   Combining these, the overall time complexity is O(n), where n is the number of nodes in the original list.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
   - The space complexity is O(1) in terms of additional space used. We are only using a few extra variables for computation and node creation. The new nodes are added to the original list, so the space used by the nodes is accounted for in the input list itself.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Step By Step Explanation

**Initial Linked List**: `[18, 6, 10, 3]`


1. **Initial Linked List**

   | Node Position | Value |
   |---------------|-------|
   | 1             | 18    |
   | 2             | 6     |
   | 3             | 10    |
   | 4             | 3     |

2. **Calculate and Insert GCD Between Node 1 and Node 2**

   - **GCD Calculation**: `GCD(18, 6) = 6`
   - **Insert Node with Value 6 Between Node 1 and Node 2**

   | Node Position | Value |
   |---------------|-------|
   | 1             | 18    |
   | 2             | 6     |
   | 3             | 6     |
   | 4             | 10    |
   | 5             | 3     |

   Here, the new list is `[18, 6, 6, 10, 3]`.

3. **Calculate and Insert GCD Between Node 2 and Node 3**

   - **GCD Calculation**: `GCD(6, 10) = 2`
   - **Insert Node with Value 2 Between Node 2 and Node 3**

   | Node Position | Value |
   |---------------|-------|
   | 1             | 18    |
   | 2             | 6     |
   | 3             | 6     |
   | 4             | 2     |
   | 5             | 10    |
   | 6             | 3     |

   Now, the list is `[18, 6, 6, 2, 10, 3]`.

4. **Calculate and Insert GCD Between Node 3 and Node 4**

   - **GCD Calculation**: `GCD(10, 3) = 1`
   - **Insert Node with Value 1 Between Node 3 and Node 4**

   | Node Position | Value |
   |---------------|-------|
   | 1             | 18    |
   | 2             | 6     |
   | 3             | 6     |
   | 4             | 2     |
   | 5             | 10    |
   | 6             | 1     |
   | 7             | 3     |

   The final linked list is `[18, 6, 6, 2, 10, 1, 3]`.



# Code
```java []
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

    public ListNode insertGreatestCommonDivisors(ListNode head) {
        // If the list contains only one node, return the head as no insertion is needed
        if (head.next == null) return head;

        // Initialize pointers to traverse the list
        ListNode node1 = head;
        ListNode node2 = head.next;

        // Traverse the linked list
        while (node2 != null) {
            int gcdValue = calculateGCD(node1.val, node2.val);
            ListNode gcdNode = new ListNode(gcdValue);

            // Insert the GCD node between node1 and node2
            node1.next = gcdNode;
            gcdNode.next = node2;

            // Move to the next pair of nodes
            node1 = node2;
            node2 = node2.next;
        }

        return head;
    }

    // Helper method to calculate the greatest common divisor using the Euclidean algorithm
    private int calculateGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
```
```C++ []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* insertGreatestCommonDivisors(ListNode* head) {
        if (head == nullptr || head->next == nullptr) return head;

        ListNode* node1 = head;
        ListNode* node2 = head->next;

        while (node2 != nullptr) {
            int gcdValue = calculateGCD(node1->val, node2->val);
            ListNode* gcdNode = new ListNode(gcdValue);

            // Insert gcdNode between node1 and node2
            node1->next = gcdNode;
            gcdNode->next = node2;

            // Move to the next pair of nodes
            node1 = node2;
            node2 = node2->next;
        }

        return head;
    }

private:
    int calculateGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
};
```
```Python []
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def insertGreatestCommonDivisors(self, head):
        if not head or not head.next:
            return head

        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a

        node1 = head
        while node1.next:
            node2 = node1.next
            gcd_value = gcd(node1.val, node2.val)
            gcd_node = ListNode(gcd_value)
            node1.next = gcd_node
            gcd_node.next = node2
            node1 = node2

        return head
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
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    if (!head || !head.next) return head;

        const gcd = (a, b) => {
            while (b !== 0) {
                [a, b] = [b, a % b];
            }
            return a;
        };

        let node1 = head;
        while (node1.next) {
            let node2 = node1.next;
            let gcdValue = gcd(node1.val, node2.val);
            let gcdNode = new ListNode(gcdValue);
            node1.next = gcdNode;
            gcdNode.next = node2;
            node1 = node2;
        }

        return head;
};
```
![upvote.png](./images/1.png)
