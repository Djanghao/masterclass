# [Rust] Three solutions with explanations

**Author:** keep_of_kalessin
**Votes:** 2
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/1455910/](https://leetcode.com/problems/next-greater-element-i/solutions/1455910/)

---

## Brute-force approach
For each element in `nums1` we iterate over all elements of `nums2`:

```rust
impl Solution {
    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        assert!(nums1.len() <= nums2.len());

        let mut result = Vec::with_capacity(nums1.len());
        'next: for idx in 0..nums1.len() {
            let base_num = nums1[idx];

            let mut found = false;
            for &n in nums2.iter() {
                if n == base_num {
                    found = true;
                    continue;
                }

                if found {
                    if n > base_num {
                        result.push(n);
                        continue 'next;
                    }
                }
            }

            result.push(-1);
        }

        result
    }
}
```

## Simple solution based on HashMap and iteration
Here we build a HashMap of <number, index_in_the_array>. Then for each number in `nums1` we iterate over the second aarray and use the HashMap to find out from where to start. It's similar to the bruteforce approach, but allows us to skip over all elements before the one from `nums1[i]` 

```rust
use std::collections::HashMap;

impl Solution {
    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        assert!(nums1.len() <= nums2.len());

        let mut jumps = HashMap::with_capacity(nums2.len() + nums2.len() / 2);
        for (idx, &n) in nums2.iter().enumerate() {
            jumps.insert(n, idx);
        }

        let mut result = Vec::with_capacity(nums1.len());
        'next: for base in nums1 {
            let idx = *jumps.get(&base).unwrap();
            for n in nums2.iter().copied().skip(idx) {
                if n > base {
                    result.push(n);
                    continue 'next;
                }
            }

            result.push(-1);
        }

        result
    }
}
```

## Using a monotonic stack
Here we preprocess  the `nums2` array using a monotonic stack.  While the current stack top is smaller than the current number, we pop() the top and instert it in a HashMap <number, next_greater>. Thus the HashMap at the end will contain the next greater element for each number if there is such. 

Then we itertae over `nums1`. If the number is present in the map, we get its next greater element. If it's missing then it means that there are no greater elements.

```rust
use std::collections::HashMap;

impl Solution {
    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut stack = Vec::with_capacity(nums2.len());
        let mut map = HashMap::with_capacity(nums2.len());

        for n in nums2 {
            while let Some(&top) = stack.last() {
                if n <= top {
                    break;
                }

                map.insert(top, n);
                stack.pop();
            }

            stack.push(n);
        }

        let mut result = Vec::with_capacity(nums1.len());
        for n in nums1 {
            let value = map.get(&n).copied().unwrap_or(-1);
            result.push(value);
        }
        result
    }
}
````