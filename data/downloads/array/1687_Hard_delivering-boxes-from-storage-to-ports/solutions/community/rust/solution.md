# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/3189455/](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/3189455/)

---

# Code
```
impl Solution {
    pub fn box_delivering(boxes: Vec<Vec<i32>>, ports_count: i32, max_boxes: i32, max_weight: i32) -> i32 {
        let n = boxes.len();
        let (mut need, mut j, mut lastj) = (0, 0, 0);
        let (mut max_boxes, mut max_weight) = (max_boxes, max_weight);
        let mut dp = vec![200000; n + 1];
        dp[0] = 0;
        for i in 0..n {
            while j < n && max_boxes > 0 && max_weight >= boxes[j][1] {
                max_boxes -= 1;
                max_weight -= boxes[j][1];
                if j == 0 || boxes[j][0] != boxes[j - 1][0] {
                    lastj = j;
                    need += 1;
                }
                j += 1;
            }
            dp[j] = dp[j].min(dp[i] + need + 1);
            dp[lastj] = dp[lastj].min(dp[i] + need);
            max_boxes += 1;
            max_weight += boxes[i][1];
            if i == n - 1 || boxes[i][0] != boxes[i + 1][0] {
                need -= 1;
            }
        }
        dp[n]
    }
}
```