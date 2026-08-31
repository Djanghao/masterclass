# Rust Bitset

**Author:** k4g4
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-bitset/solutions/4344356/](https://leetcode.com/problems/design-bitset/solutions/4344356/)

---

# Code
```
use std::fmt::Write as Write_;

struct Bitset {
    bitsets: Vec<u32>,
    last_bitset_mask: u32,
}

impl Bitset {
    fn new(size: i32) -> Self {
        Self {
            bitsets: vec![0; (size as usize + 31) / 32],
            last_bitset_mask: (1 << 32 - size % 32) - 1,
        }
    }
    
    fn fix(&mut self, idx: i32) {
        self.bitsets[idx as usize / 32] |= 1 << 31 - idx % 32;
    }
    
    fn unfix(&mut self, idx: i32) {
        self.bitsets[idx as usize / 32] &= !(1 << 31 - idx % 32);
    }
    
    fn flip(&mut self) {
        for bitset in &mut self.bitsets {
            *bitset = !*bitset;
        }
    }
    
    fn all(&self) -> bool {
        self
            .bitsets[..self.bitsets.len() - 1]
            .iter()
            .all(|&bitset| bitset == u32::MAX)
        && self.bitsets[self.bitsets.len() - 1]
            | self.last_bitset_mask
            == u32::MAX
    }
    
    fn one(&self) -> bool {
        self
            .bitsets[..self.bitsets.len() - 1]
            .iter()
            .any(|&bitset| bitset > 0)
        || self.bitsets[self.bitsets.len() - 1]
            & !(self.last_bitset_mask)
            > 0
    }
    
    fn count(&self) -> i32 {
        self
            .bitsets[..self.bitsets.len() - 1]
            .iter()
            .map(|bitset| bitset.count_ones() as i32)
            .sum::<i32>()
        + (self.bitsets[self.bitsets.len() - 1]
            & !(self.last_bitset_mask)).count_ones() as i32
    }
    
    fn to_string(&self) -> String {
        let mut out = String::with_capacity(self.bitsets.len() * 32);
        for &bitset in &self.bitsets[..self.bitsets.len() - 1] {
            Write_::write_fmt(
                &mut out,
                format_args!("{:032b}", bitset),
            );
        }
        Write_::write_fmt(
            &mut out,
            format_args!("{:032b}", self.bitsets[self.bitsets.len() - 1]),
        );
        out.truncate(out.len() - self.last_bitset_mask.count_ones() as usize);
        out
    }
}
```