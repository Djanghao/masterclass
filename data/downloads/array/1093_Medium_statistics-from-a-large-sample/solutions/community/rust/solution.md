# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/3038423/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/3038423/)

---

# Code
```
impl Solution {
    pub fn sample_stats(count: Vec<i32>) -> Vec<f64> {
        let mut maximum = i32::MIN;
        let mut minimum = i32::MAX;
        let mut mode = i32::MIN;
        let mut most_freq_value = i32::MIN;
        let mut total_sum = 0;
        let mut total_count = 0;
        for i in 0..256 {
            if count[i as usize] > 0 {
                maximum = maximum.max(i);
                minimum = minimum.min(i);
                total_sum += i as i64 * count[i as usize] as i64;
                total_count += count[i as usize];
                if count[i as usize] > most_freq_value {
                    most_freq_value = count[i as usize];
                    mode = i;
                }
            }
        }
        let mean = total_sum as f64 / total_count as f64;
        let mut median= 0.0;
        if total_count % 2 == 1 {
            let half_index = total_count / 2;
            let mut prefix_count = 0;
            for i in 0..256 {
                prefix_count += count[i as usize];
                if prefix_count > half_index {
                    median = i as f64;
                    break;
                }
            }
        } else {
            let half_index = total_count / 2;
            let mut prefix_count = 0;
            for i in 0..256 {
                prefix_count += count[i as usize];
                if prefix_count >= half_index {
                    if prefix_count > half_index {
                        median = i as f64;
                    } else {
                        for j in (i + 1)..256 {
                            if count[j as usize] > 0 {
                                median = (i + j) as f64 * 0.5;
                                break;
                            }
                        }
                    }
                    break;
                }
            }
        }
        vec![
            minimum as f64,
            maximum as f64,
            mean,
            median,
            mode as f64,
        ]
    }
}
```