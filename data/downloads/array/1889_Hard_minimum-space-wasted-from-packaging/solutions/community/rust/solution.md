# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/3227144/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/3227144/)

---

# Code
```
impl Solution {
    pub fn min_wasted_space(packages: Vec<i32>, boxes: Vec<Vec<i32>>) -> i32 {
        let mut packages = packages.iter().map(|&x| x as i64).collect::<Vec<_>>();
        packages.sort();
        let f = |x: &Vec<i32>| x.iter().map(|&y| y as i64).collect::<Vec<_>>();
        let mut boxes = boxes.iter().map(f).collect::<Vec<_>>();
        let mut res = i64::MAX;
        let sum_a = packages.iter().sum::<i64>();
        for box_ in boxes.iter_mut() {
            box_.sort();
            if box_[box_.len() - 1] < packages[packages.len() - 1] {
                continue;
            }
            let mut cur = 0;
            let mut i = 0;
            for &b in box_.iter() {
                let j = upper_bound(&packages[i..], &b).unwrap_or_else(|x| x) + i;
                cur += b * (j - i) as i64;
                i = j;
            }
            res = res.min(cur);
        }
        if res < i64::MAX {
            ((res - sum_a) % 1_000_000_007) as _
        } else {
            -1
        }
    }
}

pub fn upper_bound<T: Ord>(deque: &[T], x: &T) -> Result<usize, usize> {
    let len = deque.len();
    let position = deque.iter().position(|e| e > x);
    let idx = deque.binary_search_by(|e| e.cmp(x));
    match position {
        Some(index) => Ok(index),
        None => match idx {
            Ok(_) => Err(len),
            Err(idx) => {
                if idx == len {
                    Err(len)
                } else {
                    Ok(idx)
                }
            }
        },
    }
}
```