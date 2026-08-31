# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS - Single Pass - O(N)

**Author:** lancertech6
**Votes:** 147
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412053/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412053/)

---

![Screenshot 2024-07-04 055119.png](./images/0.png)


# YouTube Video Explanation:

### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail.

<!-- **If you want a video for this question please write in the comments** -->


https://youtu.be/5mQjCgtYT58


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2600 Subscribers*
*Current Subscribers: 2504*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires modifying a linked list by merging nodes between consecutive zeroes into a single node whose value is the sum of all the nodes being merged. The resulting list should exclude all zeroes. 

The key insight is to traverse the list, keep summing values between zeroes, and replace the starting zero's next node with the computed sum. This ensures that the new list is constructed as we traverse, excluding the zeroes.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialization**: Start with a dummy node that helps simplify edge cases and begin traversal from the node next to the head.
2. **Traversal and Summation**:
   - Iterate through the list and keep summing values until encountering a zero.
   - Each time a zero is encountered (indicating the end of a segment), update the next node to hold the computed sum and skip to the next segment.
3. **List Update**:
   - After computing the sum for a segment, link the last node of the current segment to the first node of the next segment to exclude the zeroes.
4. **Termination**:
   - Ensure the new list is properly terminated by setting the next of the last node to null.

# Complexity
- **Time Complexity**: O(n) where n is the number of nodes in the linked list. We traverse the list once.
- **Space Complexity**: O(1) because we only use a few additional pointers and integer variables for summing, without extra data structures.

# Step by Step Explanation

The linked list we start with: `0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0`

| Step | Current Node | Action | Sum | Modified List | Next Node |
|------|---------------|--------|-----|----------------|-----------|
| 1    | 0             | Initialize pointers | 0   |  | 3 |
| 2    | 3             | Add to sum | 3   |  | 1 |
| 3    | 1             | Add to sum | 4   |  | 0 |
| 4    | 0             | Create new node with sum | 4   | 4 | 4 |
| 5    | 4             | Add to sum | 4   | 4 | 5 |
| 6    | 5             | Add to sum | 9   | 4 | 2 |
| 7    | 2             | Add to sum | 11  | 4 | 0 |
| 8    | 0             | Create new node with sum | 11  | 4 -> 11 | null |
| 9    | null          | End |  | 4 -> 11 |  |

#### Steps
1. **Step 1**: Initialize pointers. We skip the initial 0 and start from the next node (3). Set `modify` and `nextSum` to this node.
2. **Step 2 & 3**: Traverse nodes and accumulate the sum until the next 0 is encountered. For nodes 3 and 1, sum becomes 4.
3. **Step 4**: When a 0 is encountered, create a new node with the accumulated sum (4). Move `modify` and `nextSum` pointers to the next non-zero node (4).
4. **Step 5, 6 & 7**: Repeat the process for the next block. Traverse nodes 4, 5, and 2, accumulating their sum to 11.
5. **Step 8**: When the next 0 is encountered, create a new node with the sum (11). As there are no more nodes, the process ends.
6. **Step 9**: The resulting modified list is `[4, 11]`.


# Code
```java []
public class Solution {

    public ListNode mergeNodes(ListNode head) {
        // Initialize a sentinel/dummy node with the first non-zero value.
        ListNode modify = head.next;
        ListNode nextSum = modify;

        while (nextSum != null) {
            int sum = 0;
            // Find the sum of all nodes until you encounter a 0.
            while (nextSum.val != 0) {
                sum += nextSum.val;
                nextSum = nextSum.next;
            }

            // Assign the sum to the current node's value.
            modify.val = sum;
            // Move nextSum to the first non-zero value of the next block.
            nextSum = nextSum.next;
            // Move modify also to this node.
            modify.next = nextSum;
            modify = modify.next;
        }
        return head.next;
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
    ListNode* mergeNodes(ListNode* head) {
        ListNode* modify = head->next; // Start from the node after the initial 0
        ListNode* nextSum = modify;

        while (nextSum != nullptr) {
            int sum = 0;
            // Find the sum of all nodes until you encounter a 0.
            while (nextSum->val != 0) {
                sum += nextSum->val;
                nextSum = nextSum->next;
            }

            // Assign the sum to the current node's value.
            modify->val = sum;
            // Move nextSum to the first non-zero value of the next block.
            nextSum = nextSum->next;
            // Move modify also to this node.
            modify->next = nextSum;
            modify = modify->next;
        }
        return head->next; // Skip the initial 0 node.
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
    def mergeNodes(self, head):
        modify = head.next  # Start from the node after the initial 0
        next_sum = modify

        while next_sum:
            total = 0
            # Find the sum of all nodes until you encounter a 0.
            while next_sum.val != 0:
                total += next_sum.val
                next_sum = next_sum.next

            # Assign the sum to the current node's value.
            modify.val = total
            # Move next_sum to the first non-zero value of the next block.
            next_sum = next_sum.next
            # Move modify also to this node.
            modify.next = next_sum
            modify = modify.next

        return head.next  # Skip the initial 0 node
        
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
var mergeNodes = function(head) {
    let modify = head.next; // Start from the node after the initial 0
    let nextSum = modify;

    while (nextSum !== null) {
        let sum = 0;
        // Find the sum of all nodes until you encounter a 0.
        while (nextSum.val !== 0) {
            sum += nextSum.val;
            nextSum = nextSum.next;
        }

        // Assign the sum to the current node's value.
        modify.val = sum;
        // Move nextSum to the first non-zero value of the next block.
        nextSum = nextSum.next;
        // Move modify also to this node.
        modify.next = nextSum;
        modify = modify.next;
    }
    return head.next; // Skip the initial 0 node
};
```

![upvote.png](./images/1.png)
