# Fast solution using slice and hashmap

**Author:** alacritty
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/3538339/](https://leetcode.com/problems/create-maximum-number/solutions/3538339/)

---

# Intuition

- `nums1.length + nums2.length - k` digits can be dropped.
- Taking largest digit first and drop all digits before it.
- Recursive solve when there is tie, dynamic programming can be of help.

# Approach

- If digits can be dropped,
  Get max digit in each array in first `drop + 1` digits.
    - if one array's max digit is greater than other,
      take that digit, drop all previous before it.
    - if both are equal then check both option using recursion.
- Else add node from larger array to smaller one.

# Code
```rust
impl Solution {
    fn merge(mut nums1: &[i32], mut nums2: &[i32], merged: &mut Vec<i32>) {
        while !nums1.is_empty() || !nums2.is_empty() {
            // pop from bigger vector
            if nums1 > nums2 {
                merged.push(nums1[0]);
                nums1 = &nums1[1..];
            } else {
                merged.push(nums2[0]);
                nums2 = &nums2[1..];
            }
        }
    }

    fn get_max_index(nums: &[i32]) -> Option<usize> {
        nums.iter()
            .enumerate()
            .min_by_key(|(idx, &value)| (-value, *idx))
            .map(|(idx, _)| idx)
    }

    pub fn max_number_dp<'a>(
        mut nums1: &[i32],
        mut nums2: &[i32],
        mut k: usize,
        memory: &'a mut HashMap<(usize, usize, usize), Vec<i32>>,
    ) -> &'a std::vec::Vec<i32> {
        let key = (nums1.len(), nums2.len(), k);
        if memory.contains_key(&key) {
            return memory.get(&key).unwrap();
        } else {
            let mut ans = Vec::with_capacity(k);
            while k > 0 {
                // number of drop allowed
                let drop_allowed = nums1.len() + nums2.len() - k;
                if drop_allowed == 0 {
                    Self::merge(nums1, nums2, &mut ans);
                    break;
                } else {
                    let nums1_idx =
                        Self::get_max_index(&nums1[..(drop_allowed + 1).min(nums1.len())]);
                    let nums2_idx =
                        Self::get_max_index(&nums2[..(drop_allowed + 1).min(nums2.len())]);
                    match nums1_idx
                        .and_then(|x| nums1.get(x))
                        .cmp(&nums2_idx.and_then(|x| nums2.get(x)))
                    {
                        std::cmp::Ordering::Less => {
                            let idx = nums2_idx.unwrap();
                            ans.push(nums2[idx]);
                            nums2 = &nums2[idx + 1..];
                            k -= 1;
                        }
                        std::cmp::Ordering::Greater => {
                            let idx = nums1_idx.unwrap();
                            ans.push(nums1[idx]);
                            nums1 = &nums1[idx + 1..];
                            k -= 1;
                        }
                        std::cmp::Ordering::Equal => {
                            let nums2_ = &nums2[nums2_idx.unwrap() + 1..];
                            let nums1_ = &nums1[nums1_idx.unwrap() + 1..];
                            ans.push(nums1[nums1_idx.unwrap()]);

                            let len = ans.len();
                            k -= 1;
                            ans.extend(Self::max_number_dp(nums1_, nums2, k, memory));
                            let nums = Self::max_number_dp(nums1, nums2_, k, memory);
                            if &ans[len..] < nums {
                                ans.truncate(len);
                                ans.extend(nums);
                            }
                            break;
                        }
                    }
                }
            }
            memory.entry(key).or_insert(ans)
        }
    }

    pub fn max_number(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> Vec<i32> {
        let mut memory = HashMap::new();
        Self::max_number_dp(&nums1, &nums2, k as usize, &mut memory);
        memory
            .remove(&(nums1.len(), nums2.len(), k as usize))
            .unwrap()
    }
}

```
