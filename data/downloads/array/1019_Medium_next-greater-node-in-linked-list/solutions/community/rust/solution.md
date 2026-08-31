# rust 24-28 ms, 2.9-3 Mb

**Author:** zxcq544
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/1064137/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/1064137/)

---

```
impl Solution {
    pub fn next_larger_nodes(head: Option<Box<ListNode>>) -> Vec<i32> {
        let mut res = vec![];
        let mut stack: Vec<[i32; 2]> = vec![];
        let mut counter = 0;
        let mut cur = &head;
        while cur.is_some() {
            let val = cur.as_ref().unwrap().val;
            while !stack.is_empty() && (stack.last().unwrap()[1] < val) {
                res[stack.last().unwrap()[0] as usize] = val;
                stack.pop();
            }
            cur = &cur.as_ref().unwrap().next;
            stack.push([counter, val]);
            res.push(0);
            counter += 1;
        }
        return res;
    }
}
```