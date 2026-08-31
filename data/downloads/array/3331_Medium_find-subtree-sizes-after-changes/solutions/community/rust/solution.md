# faster than 95% | 58ms

**Author:** marktyrkba
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/6072881/](https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/6072881/)

---

# Complexity
- Time complexity:
$$0(n)$$

- Space complexity:
$$0(n)$$

# Code
```rust []
impl Solution {
    pub fn find_subtree_sizes(parents: Vec::<i32>, s: String) -> Vec::<i32> {
        fn dfs(
            mut parent: i32,
            node: i32,

            ret: &mut Vec::<i32>,
            letter_stack: &mut Vec::<Vec<i32>>,
            children: &Vec::<Vec::<i32>>,

            s: &[u8]
        ) {
            let unode = node as usize;
            let ch = (s[unode] - const { b'a' }) as usize;
            if let Some(&ancestor) = letter_stack[ch].last() {
                parent = ancestor
            }
            letter_stack[ch].push(node);
            children[unode].iter().for_each(|&next| {
                dfs(node, next, ret, letter_stack, children, s)
            });
            letter_stack[ch].pop();
            ret[unode] += 1;
            if parent != -1 {
                ret[parent as usize] += ret[unode]
            }
        }

        let n = parents.len();
        let mut children = vec![Vec::new(); n];
        (1..n).for_each(|i| {
            children[parents[i] as usize].push(i as i32)
        });

        let mut ret = vec![0; n];
        dfs(-1, 0, &mut ret, &mut vec![Vec::new(); 26], &children, s.as_bytes());
        ret
    }
}
```

> at first saw this code at submissions section as the fastest solution on leetcode, restyled the code in my way a bit and put it here to make it public of everyone