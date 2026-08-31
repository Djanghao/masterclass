# beats 100% of leetcode | 59ms in the fastest language of the universe

**Author:** marktyrkba
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/6075487/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/6075487/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```rust []
impl Solution {
    pub fn count_good_nodes(edges: Vec::<Vec::<i32>>) -> i32 {
        fn dfs(node: i32, parent: i32, adjs: &[Vec::<i32>], good_nodes_count: &mut i32) -> i32 {
            let (mut subtree_size, mut child_size, mut ok) = (1, 0, true);
            for &neighbor in adjs[node as usize].iter() {
                if neighbor == parent { continue }
                let child_subtree_size = dfs(neighbor, node, adjs, good_nodes_count);
                if child_size == 0 {
                    child_size = child_subtree_size
                } else if child_size != child_subtree_size {
                    ok = false
                } subtree_size += child_subtree_size
            }

            if ok {
                *good_nodes_count += 1
            } subtree_size
        }

        let mut adjs = vec![Vec::new(); edges.len() + 1];
        for e in edges {
            let (a, b) = (e[0], e[1]);
            adjs[a as usize].push(b);
            adjs[b as usize].push(a);
        }

        let mut ret = 0;
        dfs(0, -1, &adjs, &mut ret);
        ret
    }
}
```

![image.png](./images/0.png)


> at first saw this code at submissions section as the fastest solution on leetcode, restyled the code a bit, renamed some variables and put it here to make it public of everyone. By the way if you're the person that came up with this solution, become my sensei, please