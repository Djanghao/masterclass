# Rust merge sort

**Author:** StevenMM
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-list/solutions/2939436/](https://leetcode.com/problems/sort-list/solutions/2939436/)

---

# Complexity
- Time complexity:
 n log n
- Space complexity:
We are not creating new nodes or clonning nodes, that's why is O(1) if we discard the temporary variables created as part of the recursion calls

# Code
```
impl Solution {
    pub fn sort_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() || head.as_ref().unwrap().next.is_none() {
            return head;
        }

        let  (mut h1,mut h2) = Self::split(head);

        h1 = Self::sort_list(h1);
        h2 = Self::sort_list(h2);

        let mut dummy = Some(Box::new(ListNode::new(0)));
        let mut curr = dummy.as_mut();
        while h1.is_some() && h2.is_some() {
            if h1.as_ref().unwrap().val < h2.as_ref().unwrap().val {
                let temp = h1.as_mut().unwrap().next.take();
                curr.as_mut().unwrap().next = h1;
                curr = curr.unwrap().next.as_mut();
                h1 = temp;
            } else {
                let temp = h2.as_mut().unwrap().next.take();
                curr.as_mut().unwrap().next = h2;
                curr = curr.unwrap().next.as_mut();
                h2 = temp;
            }
        }
        if h2.is_some() {
            curr.as_mut().unwrap().next = h2;
        }
        if h1.is_some() {
            curr.as_mut().unwrap().next = h1;
        }
        dummy.unwrap().next
    }

    fn split(mut head: Option<Box<ListNode>>) -> (Option<Box<ListNode>>, Option<Box<ListNode>>) {
        let mut curr = head.as_ref();
        let mut len = 0;
        while curr.is_some() {
            len +=1;
            curr = curr.unwrap().next.as_ref();
        }
        let mut curr = head.as_mut();
        for _ in 1..len/2 {
            curr = curr.unwrap().next.as_mut();
        }

        (curr.unwrap().next.take(), head)
    }
}
```