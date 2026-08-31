# Incorrect implementation of rand7() in Rust

**Author:** petostr
**Votes:** 4
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/816392/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/816392/)

---

It seems that rand7() in Rust returns a number from 1 to 6 inclusive. To fix this just create your own rand7() function, for example like the following code:
```
// call mrand7() instead of rand7() in your solution
fn mrand7() -> i32 {
    use rand::{thread_rng, Rng};
    let mut rng = thread_rng();
    rng.gen_range(1, 8)
}

impl Solution {
    pub fn rand10() -> i32 {
		...
	}
}
```