# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/2970167/](https://leetcode.com/problems/rle-iterator/solutions/2970167/)

---

# Code
```
struct RLEIterator {
    encoding: Vec<i32>,
    index: usize,
}

impl RLEIterator {
    fn new(encoding: Vec<i32>) -> Self {
        Self { encoding, index: 0 }
    }

    fn next(&mut self, n: i32) -> i32 {
        let mut n = n;
        while self.index < self.encoding.len() {
            if n <= self.encoding[self.index] {
                self.encoding[self.index] -= n;
                return self.encoding[self.index + 1];
            } else {
                n -= self.encoding[self.index];
                self.index += 2;
            }
        }
        -1
    }
}

```