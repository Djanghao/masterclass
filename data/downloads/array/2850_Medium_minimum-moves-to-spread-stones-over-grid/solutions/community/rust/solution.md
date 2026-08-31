# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4181479/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4181479/)

---

```
struct Helper {
    from: Vec<(i32, i32)>,
    to: Vec<(i32, i32)>,
}

impl Helper {
    fn new(from: Vec<(i32, i32)>, to: Vec<(i32, i32)>) -> Self {
        Self { from, to }
    }

    fn backtracking(&self, ret: &mut i32, i: usize, val: i32, flag: usize) {
        if i == self.from.len() {
            *ret = val.min(*ret);
            return;
        }

        for k in 0..self.from.len() {
            if (flag & (1 << k)) > 0 {
                continue;
            }
            let d = i32::abs(self.from[k].0 - self.to[i].0) + i32::abs(self.from[k].1 - self.to[i].1);
            self.backtracking(ret, i + 1, val + d, flag | 1 << k);
        }
    }
}

impl Solution {
    pub fn minimum_moves(grid: Vec<Vec<i32>>) -> i32 {
        let (mut from, mut to) = (vec![], vec![]);

        for (i, item) in grid.iter().enumerate().take(3) {
            for (j, &item_j) in item.iter().enumerate().take(3) {
                if item_j == 0 {
                    to.push((i as i32, j as i32));
                }
                for _ in 0..item_j - 1 {
                    from.push((i as i32, j as i32));
                }
            }
        }

        let h = Helper::new(from, to);
        let mut ret = i32::MAX;
        h.backtracking(&mut ret, 0, 0, 0);

        ret
    }
}
```