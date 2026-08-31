# [Rust] First thought: Iterator hell

**Author:** discreaminant2809
**Votes:** 2
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5758582/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5758582/)

---

# Complexity
- Time complexity:
$$O(m \	imes n)$$

- Space complexity:
$$O(1)$$

# Code
```rust []
impl Solution {
    pub fn spiral_matrix(m: i32, n: i32, head: Option<Box<ListNode>>) -> Vec<Vec<i32>> {
        let mut ans = vec![vec![-1; n as _]; m as _];

        let mut directions = [(0_isize, 1_isize), (1, 0), (0, -1), (-1, 0)]
            .into_iter()
            .cycle();
        std::iter::successors(head.as_ref(), |node| node.next.as_ref())
            .map(|node| node.val)
            .fold(
                (0_usize, 0_usize, directions.next().unwrap()),
                |(i, j, mut direction), val| {
                    ans[i][j] = val;
                    if !(|| {
                        ans.get(i.checked_add_signed(direction.0)?)?
                            .get(j.checked_add_signed(direction.1)?)
                            .copied()
                    })()
                    .is_some_and(|entry| entry == -1)
                    {
                        direction = directions.next().unwrap();
                    }

                    (
                        i.wrapping_add_signed(direction.0),
                        j.wrapping_add_signed(direction.1),
                        direction,
                    )
                },
            );

        ans
    }
}
```