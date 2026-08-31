# Rust: naïve solution

**Author:** natekot
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/4315405/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/4315405/)

---


```
struct ProductOfNumbers {
  nums: Vec<i32>,
}

impl ProductOfNumbers {
  fn new() -> Self {
    Self {
      nums: Vec::new(),
    }
  }
  
  fn add(&mut self, num: i32) {
    self.nums.push(num);
  }
  
  fn get_product(&self, k: i32) -> i32 {
    self.nums[self.nums.len() - k as usize..].iter().fold(1, |acc, x| acc * x)
  }
}

```