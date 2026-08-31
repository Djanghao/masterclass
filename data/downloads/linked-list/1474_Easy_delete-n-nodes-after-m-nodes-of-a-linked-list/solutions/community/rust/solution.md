# Rust Solution Using Vec & Loop

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/2632629/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/2632629/)

---

~~~
impl Solution {
    pub fn delete_nodes(head: Option<Box<ListNode>>, m: i32, n: i32) -> Option<Box<ListNode>> {
        let mut head = head;
        let mut data = vec![]; 
        
        while head.is_some() {
            let mut cnt = 0;
            while let Some(mut node) = head {
                head = node.next.take();
                node.next = None;
                data.push(node);
                cnt += 1;
                if cnt == m { break }
            }
            
            cnt = 0;
            while let Some(mut node) = head {
                head = node.next.take();
                node.next = None;
                cnt += 1;
                if cnt == n { break }
            }
        }
        
        let mut ret = None;
        let mut tail = &mut ret;
        
        for p in data {
            tail = &mut  tail.insert(p).next;
        }
        
        ret
    }
}
~~~