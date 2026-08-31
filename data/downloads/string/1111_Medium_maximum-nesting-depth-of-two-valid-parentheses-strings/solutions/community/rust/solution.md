# Rust 0ms

**Author:** ita93
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/383271/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/383271/)

---

```
impl Solution {
    pub fn max_depth_after_split(seq: String) -> Vec<i32> {
        let mut cur_group = 0;
        let mut setup = vec![];
        let mut stack = vec![]; //para stack
        
        seq.chars().for_each(|ch| {
            match ch {
                '(' =>{
                    if !stack.is_empty() {
                        cur_group = 1 - cur_group;
                    }
                    setup.push(cur_group);
                    stack.push(cur_group);
                }
                ')' =>{
                    setup.push(stack.pop().unwrap());
                    cur_group = 1 - cur_group;
                }
                _ => {/**/}
            }
        });
        setup
    }
}

```