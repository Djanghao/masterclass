# Rust/Python sort boxes and linear scan of boxes/warehouses. Explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/3611530/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/3611530/)

---

# Intuition

It is pretty straing forward that the best solution should require moving smallest boxes first. So lets sort the boxes. 

Now lets look at the warehouses. Notice that because the boxes are moving from left to right there is a bottleneck. If you see that at position $i$ the hight is $h_i$, then height on the $i + 1$ position can't be bigger than $h_i$. So we can change the values in the warehouse to take into acoount the bottleneck. See first loop with `bottleneck`.

Now we need to take from the beginning of boxes and from the end of the warehouse. We do this until we have values in any of them. And once we take those elements we can compare them. If  box height is <= popped warehouse height, then we increase the result and pop from both side, otherwise we just pop from warehouses.

Instead of remove those elements we can just maintain the indeces. 

# Complexity

Let $n$ be the number of boxes and $m$ the the number of warehouses.

- Time complexity: $O(n \\log n + m)$
- Space complexity: $O(1)$ if the sort is in place

# Code
```
impl Solution {
  pub fn max_boxes_in_warehouse(mut boxes: Vec<i32>, mut warehouse: Vec<i32>) -> i32 {
    boxes.sort_unstable();

    let mut bottleneck = warehouse[0];
    for i in 1 .. warehouse.len() {
      bottleneck = bottleneck.min(warehouse[i]);
      warehouse[i] = bottleneck;
    }

    let (mut p_b, mut p_w, mut res) = (0, warehouse.len() - 1, 0);
    while p_b < boxes.len() && p_w >= 0 && p_w < warehouse.len() {
      if boxes[p_b] <= warehouse[p_w] {
        res += 1;
        p_b += 1;
      }
      p_w -= 1;
    }

    return res;
  }
}
```