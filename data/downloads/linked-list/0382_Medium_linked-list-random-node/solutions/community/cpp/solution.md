# 🔥Easy Solutions in Java 📝, Python 🐍, and C++ 🖥️🧐Look at once 💻

**Author:** Vikas-Pathak-123
**Votes:** 110
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/3278159/](https://leetcode.com/problems/linked-list-random-node/solutions/3278159/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To select a random node from a singly linked list, one way is to traverse the list and count the number of nodes. Then, we can generate a random number between 1 and the count and traverse the list again, selecting the node at the index equal to the random number. This approach requires two traversals of the list, which can be inefficient for a large list.

A better approach is to traverse the list only once and select a random node during the traversal. We can use reservoir sampling to select a random node with equal probability. The idea is to keep track of the current randomly selected node and replace it with a new node with probability 1/i, where i is the index of the current node. At the end of the traversal, the current randomly selected node is the one we want to return.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize the head of the linked list in the constructor of the `Solution` class.
2. Traverse the linked list, keeping track of the current randomly selected node.
3. At each node, generate a random number between 1 and the index of the node (inclusive).
4. If the random number is equal to 1, update the current randomly selected node to be the current node.
5. Return the value of the current randomly selected node at the end of the traversal.

# Complexity
- Time complexity: The solution traverses the entire linked list once, and generates a random number at each node, which takes $$O(1)$$ time. Therefore, the time complexity of the `getRandom` function is $$O(N)$$, where N is the number of nodes in the linked list.
- Space complexity: The solution only uses constant extra space to store the current randomly selected node, the current node, and the index of the current node. Therefore, the space complexity of the `Solution` class is $$O(1)$$.


![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
``` Java []
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
    private ListNode head;
    private Random random;

    public Solution(ListNode head) {
        this.head = head;
        random = new Random();
    }

    public int getRandom() {
        int count = 0;
        int result = 0;
        ListNode curr = head;

        while (curr != null) {
            count++;
            // generate a random number between 1 and the count
            // if the random number is 1, update the result with the current node's value
            if (random.nextInt(count) == 0) {
                result = curr.val;
            }
            curr = curr.next;
        }

        return result;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(head);
 * int param_1 = obj.getRandom();
 */
```
```Python []


class Solution(object):

    def __init__(self, head):
        """
        :type head: Optional[ListNode]
        """
        self.head = head

    def getRandom(self):
        """
        :rtype: int
        """
        count = 0
        result = None
        curr = self.head

        while curr:
            count += 1
            # generate a random number between 1 and the count
            # if the random number is 1, update the result with the current node's value
            if random.randint(1, count) == 1:
                result = curr.val
            curr = curr.next

        return result

```
```C++ []


class Solution {
private:
    ListNode* head;
    
public:
    Solution(ListNode* head) {
        this->head = head;
        std::srand(std::time(0)); // seed the random number generator
    }
    
    int getRandom() {
        int count = 0;
        int result = 0;
        ListNode* curr = head;
        
        while (curr) {
            count++;
            // generate a random number between 1 and the count
            // if the random number is 1, update the result with the current node's value
            if (std::rand() % count == 0) {
                result = curr->val;
            }
            curr = curr->next;
        }
        
        return result;
    }
};

```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```