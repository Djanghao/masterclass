# Rust solution reverse list

**Author:** fayedn
**Votes:** 0
**Link:** [https://leetcode.com/problems/plus-one-linked-list/solutions/4908324/](https://leetcode.com/problems/plus-one-linked-list/solutions/4908324/)

---


# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn plus_one(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        // Reverse the list
        let mut head = Solution::reverse_list(head);
        let mut cur = head.as_mut();
        let mut carry = 1;

        // Traverse the reversed list, adding one and handling carries
        while let Some(node) = cur {
            let sum = node.val + carry;
            node.val = sum % 10;
            carry = sum / 10;
            if carry == 0 {
                break;
            }
            if node.next.is_none() && carry > 0 {
                node.next = Some(Box::new(ListNode::new(carry)));
                break;
            }
            cur = node.next.as_mut();
        }

        // Reverse the list back to its original order
        Solution::reverse_list(head)
    }

    fn reverse_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut prev = None;
        let mut current = head;
        while let Some(mut current_node) = current.take() {
            let next_temp = current_node.next.take();
            current_node.next = prev;
            prev = Some(current_node);
            current = next_temp;
        }
        prev
    }
}

```