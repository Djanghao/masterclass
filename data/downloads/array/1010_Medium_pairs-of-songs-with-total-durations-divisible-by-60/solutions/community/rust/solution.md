# Rust | O(N)

**Author:** priyanpaulraj
**Votes:** 2
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/1661442/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/1661442/)

---

Simple mod operation using frequency array

```
	pub fn num_pairs_divisible_by60(time: Vec<i32>) -> i32 {
        
        let mut freq = [0;61];
        let mut res = 0;
        
        for tim in time {
            let mut t = (tim % 60) as usize;
            res += freq[60 - t];
            if t == 0 {
                t = 60;
            }
            freq[t] += 1;
        }
        
        res
    }
```