# Binary watch time combinations using TypeScript and Rust

**Author:** alihaideralsawad
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-watch/solutions/3642923/](https://leetcode.com/problems/binary-watch/solutions/3642923/)

---

# TypeScript
```
function readBinaryWatch(turnedOn: number): string[] {
    const times = []

    const countOnes = (num: number) => num.toString(2).split('1').length - 1

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if (countOnes(h) + countOnes(m) === turnedOn) {
                times.push(`${h}:${String(m).padStart(2, '0')}`)
            }
        }
    }

    return times
};
```

# Rust
```
impl Solution {
    pub fn read_binary_watch(turned_on: i32) -> Vec<String> {
        let num = turned_on as u32;
        let mut res = Vec::new();

        for h in 0i32..12 {
            for m in 0i32..60 {
                if h.count_ones() + m.count_ones() == num {
                    res.push(format!("{h}:{m:0>2}"));
                }
            }
        }

        res
    }
}
```