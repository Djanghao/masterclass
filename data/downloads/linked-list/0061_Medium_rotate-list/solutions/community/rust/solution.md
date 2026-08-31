# Rust solution: O(1) space, O(n) time

**Author:** apjenkins
**Votes:** 4
**Link:** [https://leetcode.com/problems/rotate-list/solutions/3593450/](https://leetcode.com/problems/rotate-list/solutions/3593450/)

---

# Intuition
I assumed it was possible to solve this in $$O(1)$$ space, so I ruled out obvious solutions involving copying the elements into a vector.  For the same reason I also ruled out a recursive solution that wasn't tail-recursive, because that would still allocate $$O(n)$$ space, just on the stack.  

# Approach
I end up needing to iterate over the list twice.  

The first time is to find the length of the list. Since `k` is allowed to be longer than the list length, I mod `k` by the list length and only need to rotate by the remainder.

Once I have `k = k % length`, I can chop off the `k` elements at the end of the list and put them at the beginning. So first I need to iterate past the initial `length - k` list elements to find the portion to move to the beginning.

# Complexity
- Time complexity:
$$O(n)$$, where $$n$$ is the list length.  I iterate over the list twice, once to find the length, and a second time to perform the rotation.

- Space complexity:
Space complexity is $$O(1)$$. The algorithm doesn't require copying the list.

# Code
```
impl Solution {
    pub fn rotate_right(mut head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        assert!(k >= 0);

        // find length of list
        let mut len = 0;

        {
            let mut node_ref = head.as_ref();
            while let Some(node) = node_ref {
                len += 1;
                node_ref = node.next.as_ref();
            }
        }

        if len == 0 {
            return head;
        }

        let k = k % len;
        
        if k == 0 {
            // nothing to do
            return head;
        }

        // Now I need to remove the last k elements from the list and put them at the head
        let mut node_ref = head.as_deref_mut().unwrap();
        for _ in 0..(len - k - 1) {
            node_ref = node_ref.next.as_deref_mut().unwrap();
        }
        // node_ref now points to the node before the nodes we want to move

        let mut new_head = node_ref.next.take().unwrap();

        // find the end of new_head and connect it to old head
        node_ref = new_head.as_mut();
        while node_ref.next.is_some() {
            node_ref = node_ref.next.as_deref_mut().unwrap();
        }

        node_ref.next = head;


        Some(new_head)
    }
}
```