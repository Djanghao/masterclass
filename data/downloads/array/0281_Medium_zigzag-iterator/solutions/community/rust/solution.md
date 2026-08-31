# Rust solution

**Author:** ibrohimkhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/2751203/](https://leetcode.com/problems/zigzag-iterator/solutions/2751203/)

---

```
struct ZigzagIterator {
    data: Vec<i32>,
    current: usize,
}

impl ZigzagIterator {
    fn new(v1: Vec<i32>, v2: Vec<i32>) -> Self {
        let mut data = vec![];
        let mut count = 0usize;
		
        while count < v1.len() || count < v2.len() {
            if !v1.is_empty() && count < v1.len() {
                data.push(v1[count]);
            }

            if !v2.is_empty() && count < v2.len() {
                data.push(v2[count]);
            }

            count += 1;
        }

        Self { data, current: 0 }
    }

    fn next(&mut self) -> i32 {
        let item = self.data[self.current];
        self.current += 1;
        item
    }

    fn has_next(&self) -> bool {
        self.data.len() > self.current
    }
}
```