# Rust - 4ms, 100% Runtime

**Author:** seandewar
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-circular-queue/solutions/1142094/](https://leetcode.com/problems/design-circular-queue/solutions/1142094/)

---

There's quite a few ways to solve this problem. Here's a straightforward approach that:

- Doesn't use `VecDeque`; allocates a `buf: Vec<i32>` of length `k` instead,
- Keeps track of the front element via a `front` index,
- Keeps track of the queue's size via a `len` value (can offset `front` to get the back element),
- Uses the modulo operator (`%`) to implement the circular indexing of `buf`.
- `en_queue()`, `de_queue()`, `front()`, `rear()`, `is_empty()` and `is_full()` have `O(1)` runtime complexity.

```
#[derive(Default)]
struct MyCircularQueue {
    buf: Vec<i32>,
    front: usize,
    len: usize,
}

impl MyCircularQueue {
    fn new(k: i32) -> Self {
        Self {
            buf: vec![0; k as _],
            ..Default::default()
        }
    }

    fn en_queue(&mut self, value: i32) -> bool {
        if self.is_full() {
            false
        } else {
            let cap = self.buf.len();
            self.len += 1;
            self.buf[(self.front + self.len - 1) % cap] = value;
            true
        }
    }

    fn de_queue(&mut self) -> bool {
        if self.is_empty() {
            false
        } else {
            self.len -= 1;
            self.front = (self.front + 1) % self.buf.len();
            true
        }
    }

    fn front(&self) -> i32 {
        if self.is_empty() {
            -1
        } else {
            self.buf[self.front]
        }
    }

    fn rear(&self) -> i32 {
        if self.is_empty() {
            -1
        } else {
            self.buf[(self.front + self.len - 1) % self.buf.len()]
        }
    }

    fn is_empty(&self) -> bool {
        self.len == 0
    }

    fn is_full(&self) -> bool {
        self.len == self.buf.len()
    }
}
```