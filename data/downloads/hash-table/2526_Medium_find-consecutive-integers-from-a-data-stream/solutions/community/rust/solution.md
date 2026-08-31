# Rust, Python. If you see correct number, increase the counter

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3482828/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3482828/)

---

# Intuition
If you see a number you are searching for, increase the counter. Otherwise mark it as 0. Then check how big is the counter.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
struct DataStream {
  cnt: i32,
  val: i32,
  k: i32,
}

impl DataStream {

  fn new(value: i32, k: i32) -> Self {
    return DataStream {cnt: 0, val: value, k: k};
  }
  
  fn consec(&mut self, num: i32) -> bool {
    if self.val == num {
      self.cnt += 1;
    } else {
      self.cnt = 0;
    }
    return self.cnt >= self.k;
  }
}
```
```python []
class DataStream:

    def __init__(self, value: int, k: int):
      self.cnt = 0
      self.val = value
      self.k = k
        

    def consec(self, num: int) -> bool:
      if num == self.val:
        self.cnt += 1
      else:
        self.cnt = 0

      return self.cnt >= self.k
```
