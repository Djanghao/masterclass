# Concise Rust Solution

**Author:** xiaoping3418
**Votes:** 5
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/2303969/](https://leetcode.com/problems/odd-even-linked-list/solutions/2303969/)

---

~~~
impl Solution {
    pub fn odd_even_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut head = head;
        let (mut ret, mut part_two) = (None, None);
        let (mut tail1, mut tail2) = (&mut ret, &mut part_two);
        let mut flag = 0i32;
        
        while let Some(mut node) = head {
            head = node.next;
            node.next = None;
            flag = 1 - flag;
            if flag == 1 { tail1 = &mut tail1.insert(node).next; }
            else         { tail2 = &mut tail2.insert(node).next; } 
        }
        
        if let Some(node) = part_two { tail1 = &mut tail1.insert(node).next; }
        
        ret
    }
}
~~~