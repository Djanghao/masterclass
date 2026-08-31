# Rust 7ms 🔥 3.45Mb ☄️ One Liner Solutions 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5311853/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5311853/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code - 7ms 3.45Mb
```
impl Solution {
    pub fn find_winning_player(skills: Vec<i32>, k: i32) -> i32 {
        (1..skills.len())
        .fold((0usize, 0i32), 
        |(win, cnt), i| match cnt >= k {
            true => (win, cnt),
            false if skills[win] > skills[i] => (win, cnt+1),
            false => (i, 1),
        }).0 as i32
    }
}
```
# Complexity
- Time complexity: $$O(n*k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code - 13ms 3.47Mb
```
use std::collections::VecDeque;
impl Solution {
    pub fn find_winning_player(skills: Vec<i32>, k: i32) -> i32 {
        match k as usize >= skills.len() {
            true => {
                skills.iter().enumerate()
                .max_by_key(|(_, &val)| val)
                .unwrap_or((0, &0)).0 as i32
            },
            false => {
                let mut v = VecDeque::from(skills.clone());
                let (mut win, mut cnt) = (-1, 0);
                while cnt < k {
                    let x = v.pop_front().unwrap_or(-1);
                    let y = v.pop_front().unwrap_or(-1);
                    v.push_front(x.max(y));
                    v.push_back(x.min(y));
                    if win == x.max(y) {cnt += 1;}
                    else {win = x.max(y); cnt = 1;}
                }
                skills.iter().position(|&x| x == win).unwrap_or(0) as i32
            }
        }
    }
}
```