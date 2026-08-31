# 0ms

**Author:** budianpaowonanshou
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/6072414/](https://leetcode.com/problems/convert-to-base-2/solutions/6072414/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
struct ReduceIter<T, F>
where
    F: FnMut(T) -> Result<(T, T), ()>,
    T: Clone + Copy,
{
    current: Option<T>,
    operation: F,
}

impl<T, F> ReduceIter<T, F>
where
    F: FnMut(T) -> Result<(T, T), ()>,
    T: Clone + Copy,
{
    pub fn new(initial: T, operation: F) -> Self {
        ReduceIter {
            current: Some(initial),
            operation,
        }
    }
}

impl<T, F> Iterator for ReduceIter<T, F>
where
    F: FnMut(T) -> Result<(T, T), ()>,
    T: Clone + Copy,
{
    type Item = T;

    fn next(&mut self) -> Option<Self::Item> {
        let current = self.current.take()?;

        match (self.operation)(current) {
            Ok((next_value, return_value)) => {
                self.current = Some(next_value);
                Some(return_value)
            }
            Err(()) => {
                self.current = None;
                None
            }
        }
    }
}

impl Solution {
    pub fn base_neg2(n: i32) -> String {
        match n {
            0 => "0".to_string(),
            n => ReduceIter::new(n, |a: i32| {
                if a == 0 {
                    Err(())
                } else {
                    Ok((a / 4 + if (a % 4> 1) { 1 } else { 0 }, a % 4))
                }
            })
            .map(|a| match a {
                0 => "00",
                1 => "01",
                2 => "10",
                3 => "11",
                _ => unreachable!(),
            })
            .collect::<Vec<_>>()
            .into_iter()
            .rev()
            .collect::<String>()
            .trim_start_matches('0')
            .to_string(),
        }
    }
}

```