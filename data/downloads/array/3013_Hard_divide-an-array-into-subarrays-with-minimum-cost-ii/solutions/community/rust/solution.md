# Sliding Window

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4607983/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4607983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In the range $[i..i + dist]$, where $i$ is the index of the $nums$ array, we need to find $k - 1$ minimum values. In order to do this we can use $2$ BTreeMaps:

1) In the first BTreeMap we store $m \\le k - 1$ minimum values
2) In the second we store remains

# Approach
<!-- Describe your approach to solving the problem. -->
Sliding Window + BTreeMap

# Complexity
- Time complexity: $O(n*logn)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the length of the $nums$ array

# Code
```
use std::collections::BTreeMap;
use std::cmp::min;

impl Solution {
    pub fn minimum_cost(nums: Vec<i32>, k: i32, dist: i32) -> i64 {
        let n = nums.len();
        let k = k as usize;
        let d = dist as usize;
    
        let mut s = 0;
        let mut m = 0;
        
        let mut hl = BTreeMap::new();
        let mut hr = BTreeMap::new();

        let mut r = i64::MAX;

        for i in 1..=d + 1 {
            if m < k - 1 {
                *hl.entry(nums[i]).or_insert(0) += 1;
                s += nums[i] as i64;
                m += 1;
            } else {
                let (&v, &c) = hl.iter().next_back().unwrap();

                if v > nums[i] {
                    s -= v as i64;
                    s += nums[i] as i64;

                    if c > 1 {
                        hl.insert(v, c - 1);
                    } else {
                        hl.remove(&v);
                    }

                    *hl.entry(nums[i]).or_insert(0) += 1;
                    *hr.entry(v).or_insert(0) += 1;
                } else {
                    *hr.entry(nums[i]).or_insert(0) += 1;
                }
            }

            if m == k - 1 {
                r = min(r, s);
            }
        }        

        for i in d + 2..n {
            let j = i - d - 1;

            if hr.contains_key(&nums[j]) {
                let c = hr[&nums[j]];

                if c > 1 {
                    hr.insert(nums[j], c - 1);
                } else {
                    hr.remove(&nums[j]);
                }
            } else {
                let c = hl[&nums[j]];

                if c > 1 {
                    hl.insert(nums[j], c - 1);
                } else {
                    hl.remove(&nums[j]);
                }

                m -= 1;
                s -= nums[j] as i64;
            }

            *hr.entry(nums[i]).or_insert(0) += 1;

            let (&v, &c) = hr.iter().next().unwrap();

            if m < k - 1 {
                if c > 1 {
                    hr.insert(v, c - 1);
                } else {
                    hr.remove(&v);
                }

                *hl.entry(v).or_insert(0) += 1;

                m += 1;
                s += v as i64;
            } else {
                let (&pv, &pc) = hl.iter().next_back().unwrap();

                if v < pv {
                    if pc > 1 {
                        hl.insert(pv, pc - 1);
                    } else {
                        hl.remove(&pv);
                    }

                    if c > 1 {
                        hr.insert(v, c - 1);
                    } else {
                        hr.remove(&v);
                    }

                    *hl.entry(v).or_insert(0) += 1;
                    *hr.entry(pv).or_insert(0) += 1;

                    s -= pv as i64;
                    s += v as i64;
                }
            }

            if m == k - 1 {
                r = min(r, s);
            }
        }

        r + nums[0] as i64
    }    
}
```