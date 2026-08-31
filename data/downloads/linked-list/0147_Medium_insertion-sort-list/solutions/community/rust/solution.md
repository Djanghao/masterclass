# Insertion Sort List | Rust Solution

**Author:** DavidHuntMateo
**Votes:** 2
**Link:** [https://leetcode.com/problems/insertion-sort-list/solutions/921240/](https://leetcode.com/problems/insertion-sort-list/solutions/921240/)

---

```
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn insertion_sort_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {     
        match head {
            None => return None,
            Some(node) => {
                // Move node into unsorted
                let mut unsorted = Some(node);
                // Create dummy node to act as start of sorted list
                let mut sorted = ListNode::new(std::i32::MIN);
                // Iterate over unsorted nodes
                while let Some(mut node_to_insert) = unsorted {
                    // Move node_to_insert.next into unsorted and replace it with None
                    unsorted = node_to_insert.next.take();
                    // Borrow the first sorted node
                    let mut sorted_ref = &mut sorted;
                    // Iterate over sorted nodes. Check if sorted.val < node_to_insert.val
                    while sorted_ref.next.is_some() && sorted_ref.next.as_ref().unwrap().val < node_to_insert.val {
                        // Move the sorted_ref to the next sorted node
                        sorted_ref = sorted_ref.next.as_mut().unwrap()
                    }
                    // Insert node_to_insert by:
                    //  1. Move sorted_ref.next to node_to_insert.next and replace it with None
                    node_to_insert.next = sorted_ref.next.take();
                    //  2. Move node_to_insert to sorted_ref.next
                    sorted_ref.next = Some(node_to_insert);
                }
                return sorted.next
            },
        }  
    }
}
```