# intuitive solution

**Author:** slavastartsev
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/5616034/](https://leetcode.com/problems/design-an-atm-machine/solutions/5616034/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
struct ATM {
  banknotes: [i32; 5]
}

static NOMINALS: [i32; 5] = [20, 50, 100, 200, 500];
/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl ATM {
    fn new() -> Self {
        Self { banknotes: [0, 0, 0, 0, 0] }
    }
    
    fn deposit(&mut self, banknotes_count: Vec<i32>) {
        for (i, banknote_count) in banknotes_count.iter().enumerate() {
          self.banknotes[i] += banknote_count;
        }
    }
    
    fn withdraw(&mut self, mut amount: i32) -> Vec<i32> {
        let mut result = vec![0; 5];
        let mut ptr = self.banknotes.len() - 1;

        while let (0..=4) = ptr {
          if amount == 0 {
            return result;
          }

          if amount < NOMINALS[ptr] || self.banknotes[ptr] == 0 {
            ptr -= 1;
          } else {
            let decrement = self.banknotes[ptr].min(amount / NOMINALS[ptr]);
            amount -= NOMINALS[ptr] * decrement;
            self.banknotes[ptr] -= decrement;
            result[ptr] += decrement;
          }
        }

        // if exit out of loop collect banknotes back
        for (i, banknote_count) in result.iter().enumerate() {
          self.banknotes[i] += banknote_count
        }

        vec![-1]
    }
}

/**
 * Your ATM object will be instantiated and called as such:
 * let obj = ATM::new();
 * obj.deposit(banknotesCount);
 * let ret_2: Vec<i32> = obj.withdraw(amount);
 */
```