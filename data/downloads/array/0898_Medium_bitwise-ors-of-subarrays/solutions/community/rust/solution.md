# Rust. Under 100 ms solution.

**Author:** nickzakirov
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/3557219/](https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/3557219/)

---

# Intuition
Iterate the array. Keep points added at the previous step in a HashSet. Add points at this step as bitwise or with points added at the previous step plus the current point (maximum number of points added at each step is 32). Add all points added at this step to a resulting HashSet.

# Approach
1) Use efficient HashSet (FxHashSet)
2) Preallocate all needed memory and use buffers

The resulting algorithm that does the work is just this code

```
        for cur_point in arr {
            buf.clear();
            for point in prev_points.iter() {
                let new_item = cur_point | point;
                buf.insert(new_item);
                res.insert(new_item);
            }            
            buf.insert(cur_point);
            res.insert(cur_point);
            std::mem::swap(&mut buf, &mut prev_points);
        }
        res.len() as i32
```

# Complexity
- Time complexity:
O(n*size_of(T))

- Space complexity:
O(n*size_of(T))

# Code
```
struct Solution;

use std::collections::HashSet;


use core::convert::TryInto;
use core::default::Default;
use core::hash::BuildHasherDefault;
use core::hash::Hasher;
use core::mem::size_of;
use core::ops::BitXor;


pub type FxHashSet<K> = HashSet<K, BuildHasherDefault<FxHasher>>;
#[derive(Default)]
pub struct FxHasher {
    hash: usize,
}

#[cfg(target_pointer_width = "32")]
const K: usize = 0x9e3779b9;
#[cfg(target_pointer_width = "64")]
const K: usize = 0x517cc1b727220a95;

impl FxHasher {
    #[inline]
    fn add_to_hash(&mut self, i: usize) {
        self.hash = self.hash.rotate_left(5).bitxor(i).wrapping_mul(K);
    }
}

impl Hasher for FxHasher {
    #[inline]
    fn finish(&self) -> u64 {
        self.hash as u64
    }

    #[inline]
    fn write(&mut self, mut bytes: &[u8]) {
        #[cfg(target_pointer_width = "32")]
        let read_usize = |bytes: &[u8]| u32::from_ne_bytes(bytes[..4].try_into().unwrap());
        #[cfg(target_pointer_width = "64")]
        let read_usize = |bytes: &[u8]| u64::from_ne_bytes(bytes[..8].try_into().unwrap());

        let mut hash = FxHasher { hash: self.hash };
        assert!(size_of::<usize>() <= 8);
        while bytes.len() >= size_of::<usize>() {
            hash.add_to_hash(read_usize(bytes) as usize);
            bytes = &bytes[size_of::<usize>()..];
        }
        if (size_of::<usize>() > 4) && (bytes.len() >= 4) {
            hash.add_to_hash(u32::from_ne_bytes(bytes[..4].try_into().unwrap()) as usize);
            bytes = &bytes[4..];
        }
        if (size_of::<usize>() > 2) && bytes.len() >= 2 {
            hash.add_to_hash(u16::from_ne_bytes(bytes[..2].try_into().unwrap()) as usize);
            bytes = &bytes[2..];
        }
        if (size_of::<usize>() > 1) && !bytes.is_empty() {
            hash.add_to_hash(bytes[0] as usize);
        }
        self.hash = hash.hash;
    }

    #[inline]
    fn write_u8(&mut self, i: u8) {
        self.add_to_hash(i as usize);
    }

    #[inline]
    fn write_u16(&mut self, i: u16) {
        self.add_to_hash(i as usize);
    }

    #[inline]
    fn write_u32(&mut self, i: u32) {
        self.add_to_hash(i as usize);
    }

    #[inline]
    fn write_u64(&mut self, i: u64) {
        self.add_to_hash(i as usize);
    }

    #[inline]
    fn write_usize(&mut self, i: usize) {
        self.add_to_hash(i);
    }
}

impl Solution {
    pub fn subarray_bitwise_o_rs(arr: Vec<i32>) -> i32 {        
        let mut res = FxHashSet::with_capacity_and_hasher(
                arr.len()*32,
                BuildHasherDefault::<FxHasher>::default(),
            );
        let mut prev_points = FxHashSet::with_capacity_and_hasher(
                32,
                BuildHasherDefault::<FxHasher>::default(),
            );
        let mut buf = FxHashSet::with_capacity_and_hasher(
                32,
                BuildHasherDefault::<FxHasher>::default(),
            );

        for cur_point in arr {
            buf.clear();
            for point in prev_points.iter() {
                let new_item = cur_point | point;
                buf.insert(new_item);
                res.insert(new_item);
            }            
            buf.insert(cur_point);
            res.insert(cur_point);
            std::mem::swap(&mut buf, &mut prev_points);
        }
        res.len() as i32
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_solution() {
        let mut inputs = Vec::new();
        let mut outputs = Vec::new();

        inputs.push(vec![0]);
        outputs.push(1);
        inputs.push(vec![1, 1, 2]);
        outputs.push(3);
        inputs.push(vec![1, 2, 4]);
        outputs.push(6);


        for (input, output) in inputs.iter().zip(outputs.iter()) {
            println!("input: {input:?}, output: {output:?}");
            assert_eq!(
                Solution::subarray_bitwise_o_rs(input.clone()),
                *output,
                "failed at {input:?}"
            );
        }
    }
}
```