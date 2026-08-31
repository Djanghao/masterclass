# Rust with union find

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334718/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334718/)

---

Just a practice with union find...

Union operations are done between adjacent bloomed flowers. A variable `m1` is maintained to keep track of how many bouquets can be made.

Theoretically the time complexity would be slightly lower ($$O(n*log(n))$$), but it appears to be slower than the [binary search](https://leetcode.com/submissions/detail/1293001359/) approach.

# Code
```
impl Solution {
    pub fn min_days(bloom_day: Vec<i32>, m: i32, k: i32) -> i32 {
        if bloom_day.len() < (m * k) as usize {
            return -1;
        }
        let mut indices: Vec<usize> = (0..bloom_day.len()).collect();
        indices.sort_unstable_by_key(|&i| bloom_day[i]);

        let mut parent = vec![usize::MAX; bloom_day.len()];
        let mut size = vec![0; bloom_day.len()];
        let mut m1 = 0;
        
        for &i in indices.iter() {
            parent[i] = i;
            Self::set_size(i, 1, k, &mut size, &mut m1);
            if i != 0 && parent[i - 1] != usize::MAX {
                Self::union_adj(i - 1, i, k, &mut parent, &mut size, &mut m1);
            }
            if i + 1 < parent.len() && parent[i + 1] != usize::MAX {
                Self::union_adj(i, i + 1, k, &mut parent, &mut size, &mut m1);
            }
            if m1 >= m {
                return bloom_day[i];
            }
        }
        unreachable!()
    }

    fn set_size(i: usize, x: i32, k: i32, size: &mut Vec<i32>, m1: &mut i32) {
        *m1 += x / k - size[i] / k;
        size[i] = x;
    }

    fn find_set(i: usize, parent: &mut Vec<usize>) -> usize {
        if parent[i] != i {
            parent[i] = Self::find_set(parent[i], parent);
        }
        parent[i]
    }

    fn union_adj(i: usize, j: usize, k: i32,
    parent: &mut Vec<usize>, size: &mut Vec<i32>, m1: &mut i32) {
        let i_root = Self::find_set(i, parent);
        parent[j] = i_root;
        Self::set_size(i_root, size[i_root] + size[j], k, size, m1);
        Self::set_size(j, 0, k, size, m1);
    }
}
```