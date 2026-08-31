# Rust "O(1)" const fn solution

**Author:** BitUnWise
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/5024114/](https://leetcode.com/problems/rotated-digits/solutions/5024114/)

---

# Code
```
impl Solution {
    pub fn rotated_digits(n: i32) -> i32 {
        FLIP_COUNT[n as usize]
    }
}

const FLIP_LIMIT: usize = 10000;

const FLIP_COUNT: [i32; FLIP_LIMIT] = gen_flip_counts();

const fn gen_flip_counts() -> [i32; FLIP_LIMIT] {
    let mut count = 0;
    let mut i = 0;
    let mut arr = [0; FLIP_LIMIT];
    while i < FLIP_LIMIT {
        if is_flip(i) {
            count += 1;
        }
        arr[i] = count;
        i += 1;
    }
    arr
}

const fn is_flip(mut n: usize) -> bool {
    let mut seen_good = false;
    while n > 0 {
        let next = n % 10;
        if matches!(next, 3 | 4 | 7) {
            return false;
        }
        if matches!(next, 2 | 5 | 6 | 9) {
            seen_good = true;
        }
        n /= 10;
    }
    seen_good
}
```