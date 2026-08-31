# Rust | Bucket Sort | With Comments

**Author:** wallicent
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2579841/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2579841/)

---

The algorithm - We start by doing a histogram/bucket sort of the numbers in `changed`. Then, iterating in reverse over the histogram, we check, for even numbers, if there are enough numbers with half the value. If so, we tick off as many of the "half" numbers as there are in the current histogram entry, and add as many "half" number copies to the result as we have ticked off. If there are not enough "half" numbers, or if we encounter a non-zero histogram value for an odd number (for a valid input these should be ticked off before we reach them), we have an invalid input, and we do an early return.

Implementation notes:
* We keep track of the minimum and maximum number in `changed`, to minimize the number of histogram entries that we have to iterate over.
* If `changed` has an odd number of entries, it is of course impossible to match the numbers up in pairs, so we use that for an early return.
* We use `Vec::<i32>::with_capacity(n/2)` to avoid vector reallocations since we know the number of elements that the vector will hold if the input is valid.
* We use `rez.extend(...)` instead of doing our own loop for adding the required number of numbers to the result.
* The number zero is a special case since 0/2 == 0 (`rez.extend(std::iter::repeat(0).take(hist[0]/2));`)

```
impl Solution {
    pub fn find_original_array(changed: Vec<i32>) -> Vec<i32> {
        let n = changed.len();
        if n % 2 != 0 { return vec![] }
        let mut hist = [0; 100001];
        let (mut min, mut max) = (usize::MAX, 0);
        for i in changed.into_iter().map(|i| i as usize) {
            hist[i] += 1;
            min = min.min(i);
            max = max.max(i);
        }
        let mut rez = Vec::<i32>::with_capacity(n/2);
        for i in (1.max(min)..=max).rev() {
            if hist[i] != 0 {
                if i % 2 == 0 && hist[i/2] >= hist[i] {
                    rez.extend(std::iter::repeat((i/2) as i32).take(hist[i]));
                    hist[i/2] -= hist[i];
                } else {
                    return vec![]
                }
            }
        }
        rez.extend(std::iter::repeat(0).take(hist[0]/2));
        rez
    }
}
```