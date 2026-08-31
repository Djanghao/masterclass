# Rust Solution

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/2308801/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/2308801/)

---

~~~
impl Solution {
    pub fn sort_linked_list(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let (mut ascending, mut descending) = (vec![], vec![]);
        let mut head = head;
        
        while let Some(mut node) = head {
            head = node.next.take();
            node.next = None;
            
            if node.val >= 0 { ascending.push(node); }
            else             { descending.push(node); } 
        }
        if descending.is_empty() == false { descending.reverse(); }
        
        let mut ret = None;
        let mut tail = &mut ret;
        for p in descending { tail = &mut tail.insert(p).next; }
        for p in ascending { tail = &mut tail.insert(p).next; }
        
        ret
    }
}
~~~