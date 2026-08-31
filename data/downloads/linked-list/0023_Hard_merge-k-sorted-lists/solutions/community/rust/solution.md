# ✅ [Rust] 0 ms, BinaryHeap + functions for debugging (with detailed comments)

**Author:** iablokov
**Votes:** 12
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/2459834/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/2459834/)

---

This [solution](https://leetcode.com/submissions/detail/779533796/) employs *BINARY (MIN) HEAP* data structure. It demonstrated **0 ms runtime (100%)** and used **3.1 MB memory (96.02%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**

```
// 1. to implement a PRIORITY QUEUE, the BINARY HEAP data structure is chosen
use std::collections::BinaryHeap;

// 2. entire Box<ListNode> is stored in the BINARY HEAP, not just ListNode.val;
//    this requires implementation of Ord and PartialOrd for ListNode
use std::cmp::Ordering;

impl PartialOrd<ListNode> for ListNode 
{
    fn partial_cmp(&self, other: &ListNode) -> Option<Ordering> 
    {
        other.val.partial_cmp(&self.val)     // - for MIN HEAP
        //self.val.partial_cmp(&other.val)   // - for MAX HEAP
    }
}

impl Ord for ListNode 
{
    fn cmp(&self, other: &Self) -> Ordering 
    {
        other.val.cmp(&self.val)             // - for MIN HEAP
        //self.val.cmp(&other.val)           // - for MAX HEAP
    }
}

impl Solution
{
    pub fn merge_k_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> 
    {
        // 3. maximum heap capacity is known in advance
        let mut heap: BinaryHeap<Box<ListNode>> = BinaryHeap::with_capacity(lists.len());

        // 4. initialize heap with first nodes from each ListNode
        for list in lists
        {
            match list
            {
                Some (node) => heap.push(node),
                None => {}
            }
        }
            
        // 5. initialize dummy node to reduce computations
        let mut dummy_node = Box::new(ListNode::new(0));

        // 6. to further build a list of nodes, we keep track of the current node
        let mut curr_node = &mut dummy_node;
    
        // 7. interaction with BINARY HEAP
        while let Some(node) = heap.pop() 
        {
            // 8. get min value from the heap
            let mut new_node = Box::new(ListNode::new(node.val));
            curr_node.next = Some(new_node);
            curr_node = curr_node.next.as_mut().unwrap();

            // 9. push min.next value to heap
            if node.next.is_some()
            {
                heap.push(node.next.unwrap());
            }
        }

        return dummy_node.next;
    }
}
```

Useful debugging functions are also supplied.
```
fn listnode_from_vec(vec: &Vec<i32>) -> Option<Box<ListNode>>
{
    let mut dummy_node = ListNode::new(0);
    let mut curr = &mut dummy_node;
    
    for &v in vec
    {
        let node = ListNode::new(v);
        curr.next = Some(Box::new(node));
        curr = curr.next.as_mut().unwrap();
    }

    return dummy_node.next;
}

fn listnode_to_vec(listnode: &Option<Box<ListNode>>) -> Vec<i32>
{
    let mut vec: Vec<i32> = Vec::new();
    let mut curr = listnode;
    loop 
    {
        match curr
        {
            Some(ref node) => vec.push(node.val),
            None => break
        }
        curr = &(curr.as_ref().unwrap().next);
    }
    return vec;
}

fn print_listnode(listnode: &Option<Box<ListNode>>)
{
    let mut curr = listnode;
    loop 
    {
        match curr
        {
            Some(ref node) => print!("{} ", node.val),
            None => break
        }
        curr = &(curr.as_ref().unwrap().next);
    }
    println!("\
");
}
```
Usage example:
```
fn main() 
{
    let vec_1: Vec<i32> = Vec::from([1,2,6]);
    let vec_2: Vec<i32> = Vec::from([2,4]);
    let vec_3: Vec<i32> = Vec::from([-10,5,20]);

    let l1: Option<Box<ListNode>> = listnode_from_vec(&vec_1);
    let l2: Option<Box<ListNode>> = listnode_from_vec(&vec_2);
    let l3: Option<Box<ListNode>> = listnode_from_vec(&vec_3);

    let mut lists: Vec<Option<Box<ListNode>>> = Vec::new();
    lists.push(l1);
    lists.push(l2);
    lists.push(l3);

    let sorted = Solution::merge_k_lists(lists);
    print_listnode(&sorted);
}
```