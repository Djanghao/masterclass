# rust 100% without stack/queue

**Author:** bamontan
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/2310182/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/2310182/)

---

The main idea of this code is to avoid the use of a stack or a queue, so no new allocation is done.
What we want to get to the result is transform the list from [1, 2, 3, 4] to [1, 2]/[4, 3].
This code actually does it the other way around, we get [2, 1]/[3, 4].
we split the list in two and reverse the top part.
```
// get the size of the list
fn len(mut head: Option<&Box<ListNode>>) -> usize {
    let mut count = 0;
    while let Some(next) = head.take() {
        count += 1;
        head = next.next.as_ref()
    }
    count
}

// split the list in two, and reverse the top part
fn split(mut head: Option<Box<ListNode>>) -> (Option<Box<ListNode>>, Option<Box<ListNode>>) {
    let mid = len(head.as_ref()) / 2;
    let mut top = None;
	// we get mid elements and push them to the top list in reverse order.
    for _ in 0..mid {
        let mut node = head.take().unwrap();
        head = std::mem::replace(&mut node.next, top.take());
        top = Some(node);
    }
	// head is now our bottom list
    (top, head)
}

impl Solution {
    pub fn pair_sum(head: Option<Box<ListNode>>) -> i32 {
        let (mut top, mut bottom) = split(head); // we now get the top part in reverse order, and the bottom part
        let mut max = i32::MIN;
		// just iterate through the them and find the max
        while let (Some(mut top_node), Some(mut bottom_node)) = (top.take(), bottom.take()) {
            top = top_node.next.take();
            bottom = bottom_node.next.take();
            let sum = top_node.val + bottom_node.val;
            if sum > max {
                max = sum;
            }
        }
        max
    }
}
```