# Fast oneline in rust/scala

**Author:** Fish45
**Votes:** 4
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/665418/](https://leetcode.com/problems/climbing-stairs/solutions/665418/)

---

This should work in any language with tuples and a fold function

Rust:
```rust
if n == 1 { 1 } else { (2..n).fold((1, 2), |(a, b), _| (b, a + b)).1 }
```

Scala:
```scala
object Solution {
    def climbStairs(n: Int): Int = {
        return if (n != 1) (2 until n).foldLeft((1, 2))((t: (Int, Int), _: Int) => (t._2, t._1 + t._2))._2 else 1
    }
}
```

The Rust version with some spacing is a lot clearer:
```rust
pub fn climb_stairs(n: i32) -> i32 {
        if n == 1 {
            1
        } else {
            (2..n).fold((1, 2), |(a, b), _| (b, a + b)).1
        }
}
```

The rust version is 100% faster and memory efficient, the scala version is 100% faster and 80% memory efficient.
Rust uses 0ms and 2MB, Scala uses 388ms and 48.5MB. My C version is 100% faster/memory efficient and uses 0 ms and 5MB, so the Rust version is much better.
