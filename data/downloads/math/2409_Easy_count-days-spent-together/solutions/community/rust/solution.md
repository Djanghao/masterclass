# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/2589286/](https://leetcode.com/problems/count-days-spent-together/solutions/2589286/)

---

```
const MONTHS: [i32; 12] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

impl Solution {
    pub fn count_days_together(
        arrive_alice: String,
        leave_alice: String,
        arrive_bob: String,
        leave_bob: String,
    ) -> i32 {
        let parse_num_date = |s: String| -> i32 {
            let mut it = s.split('-').map(|mds| mds.parse::<i32>().unwrap());
            let (month, day) = (it.next().unwrap(), it.next().unwrap());
            MONTHS[..(month - 1) as usize].iter().sum::<i32>() + day
        };

        let arrive_alice_day = parse_num_date(arrive_alice);
        let leave_alice_day = parse_num_date(leave_alice);
        let arrive_bob_day = parse_num_date(arrive_bob);
        let leave_bob_day = parse_num_date(leave_bob);

        let min_day = arrive_alice_day.max(arrive_bob_day);
        let max_day = leave_alice_day.min(leave_bob_day);
        0.max(max_day - min_day + 1)
    }
}
```