# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-integers/solutions/4171014/](https://leetcode.com/problems/count-of-integers/solutions/4171014/)

---


```
impl Solution {
    pub fn count(num1: String, num2: String, min_sum: i32, max_sum: i32) -> i32 {
        use std::collections::BTreeMap;
        let mut _num1 = String::from("");
        let mut leading_zeros = num2.len() - num1.len();
        while leading_zeros > 0 {
            _num1.push('0');
            leading_zeros -= 1;
        }
        _num1.push_str(num1.as_str());
        let num1 = _num1;

        let mut cache: BTreeMap<(usize, bool, bool, i16), i64> = BTreeMap::new();

        let num1 = num1.chars().map(|c| (c.to_digit(10).unwrap() as i16)).collect::<Vec<i16>>();
        let num2 = num2.chars().map(|c| (c.to_digit(10).unwrap() as i16)).collect::<Vec<i16>>();

        Self::solve(0, false, false, 0, &num1, &num2, min_sum as i16, max_sum as i16, &mut cache) as i32
    }

    #[allow(clippy::too_many_arguments)]
    fn solve(
        pos: usize,
        lower: bool,
        higher: bool,
        dig_sum: i16,
        num1: &Vec<i16>,
        num2: &Vec<i16>,
        min_sum: i16,
        max_sum: i16,
        cache: &mut std::collections::BTreeMap<(usize, bool, bool, i16), i64>,
    ) -> i64 {
        const MOD: i64 = 1000000007;
        if pos == num1.len() {
            if dig_sum >= min_sum && dig_sum <= max_sum {
                return 1;
            } else {
                return 0;
            }
        }

        if cache.contains_key(&(pos, lower, higher, dig_sum)) {
            return *cache.get(&(pos, lower, higher, dig_sum)).unwrap();
        }

        let lo = if !lower { num1[pos] } else { 0 };
        let hi = if !higher { num2[pos] } else { 9 };
        let mut count: i64 = 0;

        for idx in lo..=hi {
            if dig_sum + idx <= max_sum {
                count = (count
                    + Self::solve(
                        pos + 1,
                        lower || (idx > lo),
                        higher || (idx < hi),
                        dig_sum + idx,
                        num1,
                        num2,
                        min_sum,
                        max_sum,
                        cache,
                    ))
                    % MOD;
            }
        }

        cache.entry((pos, lower, higher, dig_sum)).or_insert(count);
        count
    }
}
```