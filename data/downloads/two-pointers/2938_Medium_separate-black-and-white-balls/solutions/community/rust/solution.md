# beats 100% for runtime and memory - Single iterator chain

**Author:** jkoudys
**Votes:** 3
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5913709/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5913709/)

---

# Intuition
The fun thing about binary is everything is or it isn't. You always know what a white is because it's a not-black. This makes counting up easier. We don't need to do anything but see how far the whites are from the front, where they need to be.

# Approach
Two enumerators, oh my! We enumerate and filter all the whites so we know how far they are from the start. Then we enumerate AGAIN so we know how many whites there are in total. From that we know how far they need to move. Simple!

# Complexity
- Time complexity:
$$O(n)$$
One scan.

- Space complexity:
$$O(1)$$
It's just an iterator.

# Code
```rust []
impl Solution {
    pub fn minimum_steps(s: String) -> i64 {
        s.chars().enumerate()
            .filter(|(_, ch)| *ch == '0')
            .enumerate()
            .map(|(whites, (i, _))| i - whites)
            .sum::<usize>() as _
    }
}
```