# Rust solution avoiding nested match

**Author:** kareninoverseas
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4953881/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4953881/)

---

Ok Rust is definitely unintuitive alright. Stop telling me how great it is this took forever ok

# Code
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
use std::borrow::Borrow;

impl Solution {
    pub fn game_result(head: Option<Box<ListNode>>) -> String {        
        let mut even = &head;
        let mut odd = head.as_ref().and_then(|n| n.next.as_ref());
        let mut odd_score = 0;
        let mut even_score = 0;

        loop {
            match (even, odd) {
                (Some(enode), Some(onode)) => {
                    if onode.val > enode.val {
                    odd_score += 1;
                    } else {
                        even_score += 1;
                    }

                    even = &onode.next;
                    odd = onode.next.as_ref().and_then(|n| n.next.as_ref());                   
                },
                _ => break,
            };
                
        };

        if odd_score > even_score {
            return "Odd".to_string()
        } else if odd_score < even_score {
            return "Even".to_string()
        } else {
            return "Tie".to_string()
        }
            
        
        
    }
}
```