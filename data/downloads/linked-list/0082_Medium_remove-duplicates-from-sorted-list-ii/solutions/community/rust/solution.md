# Rust Simple Solution without Using Dummy

**Author:** xiaoping3418
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/2305328/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/2305328/)

---

~~~
impl Solution {
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut head = head;
        let mut ret = None;
        let mut tail = &mut ret;
        let mut to_remove = 200i32;
        
        while let Some(mut node) = head {
            head = node.next;
            node.next = None;
            
            if (node.val == to_remove) { continue; }
            
            if head.is_some() && node.val == head.as_ref().unwrap().val {
                to_remove = node.val;
                continue;
            } 
            
            tail = &mut tail.insert(node).next;
            to_remove = 200i32;
        }
        
        ret
    }
}
~~~