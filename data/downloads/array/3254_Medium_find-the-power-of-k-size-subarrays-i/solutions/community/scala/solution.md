# Scala || Rust

**Author:** tigcho
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6050776/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6050776/)

---


```scala []
object Solution {
    def resultsArray(nums: Array[Int], k: Int): Array[Int] = {
        nums.sliding(k).map { subarr =>
            if (subarr.zip(subarr.tail).forall {
                case (a, b) => b == a + 1
            }) {
                subarr.max
            } else {
                -1
            }
        }.toArray
    }
}
```
```rust []
impl Solution {
    pub fn results_array(nums: Vec<i32>, k: i32) -> Vec<i32> {
        nums.windows(k as usize)
            .map(|subarr| {
                if subarr.windows(2).all(|pair| pair[1] == pair[0] + 1) {
                    *subarr.iter().max().unwrap()
                } else {
                    -1
                }
            })
            .collect()
    }
}
``