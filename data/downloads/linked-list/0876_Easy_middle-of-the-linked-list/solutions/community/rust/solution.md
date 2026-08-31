# [Java, Rust, Python] Two Pointers solution with clear explanation and real life application. 🔥

**Author:** anhle_tr
**Votes:** 109
**Link:** [https://leetcode.com/problems/middle-of-the-linked-list/solutions/3334252/](https://leetcode.com/problems/middle-of-the-linked-list/solutions/3334252/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem "Middle of the Linked List" asks us to find the middle node of the linked list. The intuition behind this problem is to use two pointers - a slow pointer and a fast pointer - to traverse the list.

# Approach
<!-- Describe your approach to solving the problem. -->
We first initialized the slow pointer and the fast pointer to point to the head of the linked list. For each iteration, the slow pointer moves one node and the fast pointer moves 2 nodes. 

By the time the fast pointer reaches the end of the list, the slow pointer will be pointing to the middle node.

# Code
``` java []
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null)
        {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}
```
``` python []
class Solution(object):
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        slow  = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        return slow
```
``` rust []
impl Solution {
    pub fn middle_node(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut slow = &head;
        let mut fast = &head;
        
        while fast.is_some() && fast.as_ref().unwrap().next.is_some() {
            slow = &slow.as_ref().unwrap().next;
            fast = &fast.as_ref().unwrap().next.as_ref().unwrap().next;
        }
        return slow.clone();
    }
}
```


# Complexity
- Time complexity: $$O(n)$$ where n is the number of nodes in the linked list.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ because we use a constant amount of extra space to perform the search.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Application
The Middle of the Linked List problem have several real-life applications:

1. **Browser Hsitory**: a browser history is typically implement using a linked list data structure, where each webpage visited is stored as a node in the list.

2. **Music Playlists**: each song is stored as a node in the list, and the order of songs in the playlist is determined by the order of nodes in the list.

3. **File systems:** a file system is usually organized as a hierarchy of directories and files. Each directory and file can be represented as a node in a linked list, with a pointer to its parent directory and a list of child nodes.

4. **LRU Cache:** a LRU (Least Recently Used) cache is common caching stategy used in computer systems to store recently accessed items.

5. **Garbage collection**: implmented using a linked list of objects that are no longer in use called "free list". The garbage colletor scans this list periodically to free up memory.


5. **Image manipulation**: represent images as a set of pixels. Each pixel is stored as a node in the list, with a pointer to its neighboring pixels.
This allow for efficient image manipulation, such as scaling or cropping.

*Thank you for reading! If you found this solution helpful, please give me an upvote. Feel free to add suggestions.*