# Rust iterators

**Author:** grimerssy
**Votes:** 0
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/5118055/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/5118055/)

---

# Code
```
impl Solution {
    pub fn execute_instructions(n: i32, start_pos: Vec<i32>, s: String) -> Vec<i32> {
        (0..s.len())
            .map(|i| s.chars().skip(i))
            .map(|mut chars| {
                std::iter::successors(Some((start_pos[1], start_pos[0])), |&(x, y)| {
                    chars.next().map(|c| match c {
                        'L' => (x - 1, y),
                        'R' => (x + 1, y),
                        'U' => (x, y - 1),
                        'D' => (x, y + 1),
                        _ => unreachable!(),
                    })
                })
                .skip(1)
                .take_while(|&(x, y)| x != -1 && x != n && y != -1 && y != n)
                .count() as i32
            })
            .collect()
    }
}
```