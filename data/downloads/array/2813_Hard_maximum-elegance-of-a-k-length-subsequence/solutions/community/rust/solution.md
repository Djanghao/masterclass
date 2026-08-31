# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/4177970/](https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/4177970/)

---


```
impl Solution {
    pub fn find_maximum_elegance(items: Vec<Vec<i32>>, k: i32) -> i64 {
        let mut items = items
            .iter()
            .map(|v| v.iter().map(|&x| x as i64).collect::<Vec<_>>())
            .collect::<Vec<_>>();
        let k = k as usize;
        items.sort_unstable_by(|a, b| b[0].cmp(&a[0]));
        let mut vis = std::collections::HashSet::new();
        let mut heap = std::collections::BinaryHeap::new();
        let mut tot = 0;
        for item in items.iter().take(k) {
            if vis.contains(&item[1]) {
                heap.push(std::cmp::Reverse(item[0]));
            } else {
                vis.insert(item[1]);
            }
            tot += item[0];
        }
        let mut ans = tot + vis.len() as i64 * vis.len() as i64;
        for item in items.iter().skip(k) {
            if !heap.is_empty() && !vis.contains(&item[1]) {
                vis.insert(item[1]);
                tot -= heap.pop().unwrap().0;
                tot += item[0];
                ans = ans.max(tot + vis.len() as i64 * vis.len() as i64);
            }
        }
        ans
    }
}
```