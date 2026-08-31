# Nothing particular special

**Author:** marktyrkba
**Votes:** 0
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/5008786/](https://leetcode.com/problems/simple-bank-system/solutions/5008786/)

---

# Code
```
struct Bank {
    bals: Vec<i64>,
    size: i32
}

impl Bank {
    #[inline]
    fn new(bals: Vec<i64>) -> Bank {
        let size = bals.len() as i32;
        Bank { bals, size }
    }

    #[inline]
    fn check_bounds(&self, acc1: &i32, acc2: &i32) -> bool {
        *acc1 <= self.size && *acc2 <= self.size
    }
    
    #[inline]
    fn get_bal(&mut self, acc: &i32) -> i64 {
        self.bals[*acc as usize - 1]
    }

    #[inline]
    fn get_mut_bal(&mut self, acc: &i32) -> &mut i64 {
        &mut self.bals[*acc as usize - 1]
    }

    fn transfer(&mut self, acc1: i32, acc2: i32, money: i64) -> bool {
        if self.check_bounds(&acc1, &acc2)
        && self.get_bal(&acc1) >= money
        {
            *self.get_mut_bal(&acc1) -= money;
            *self.get_mut_bal(&acc2) += money;
            true
        } else { false }
    }

    fn deposit(&mut self, acc: i32, money: i64) -> bool {
        if self.check_bounds(&acc, &0) {
            *self.get_mut_bal(&acc) += money;
            true
        } else { false }
    }

    fn withdraw(&mut self, acc: i32, money: i64) -> bool {
        if self.check_bounds(&acc, &0)
        && self.get_bal(&acc) >= money
        {
            *self.get_mut_bal(&acc) -= money;
            true
        } else { false }
    }
}
```