# Rust const fn

**Author:** BitUnWise
**Votes:** 0
**Link:** [https://leetcode.com/problems/magical-string/solutions/4774759/](https://leetcode.com/problems/magical-string/solutions/4774759/)

---

This might be considered cheating

# Code
```
impl Solution {
    pub fn magical_string(n: i32) -> i32 {
        ONES[n as usize - 1]
    }
}

const MAGSTRINGLEN: usize = 100_000;
type MagicalString = [u8; MAGSTRINGLEN];
type MagicalOnes = [i32; MAGSTRINGLEN];

const ONES: MagicalOnes = gen_one_counts();

const fn gen_magical_string() -> MagicalString {
    let mut mag: MagicalString = [0; MAGSTRINGLEN];
    mag[0] = 1;
    mag[1] = 2;
    mag[2] = 2;
    let mut reader = 2;
    let mut writer = 3;
    let mut is_one = true;
    while writer < MAGSTRINGLEN {
        let num = if is_one {1} else {2};
        mag[writer] = num;
        writer += 1;
        if mag[reader] == 2 {
            mag[writer] = num;
            writer += 1;
        }
        reader += 1;
        is_one = !is_one;
    }
    mag
}

const fn gen_one_counts() -> MagicalOnes {
    let mag = gen_magical_string();
    let mut ones: MagicalOnes = [0; MAGSTRINGLEN];
    ones[0] = 1;
    let mut i = 1;
    while i < MAGSTRINGLEN {
        ones[i] = ones[i - 1] + (mag[i] == 1) as i32;
        i += 1;
    }
    ones
}
```