# Rust - Counting the number by HashMap

**Author:** zoo868e
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4507272/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4507272/)

---

# Intuition
The key insight is to recognize that for each element, we can delete pairs of elements or triples of elements. Therefore, to make the array empty, we need to ensure that the count of each element is either 0 (already deleted), a multiple of 2, or a multiple of 3. If any element has a count of 1, it is impossible to perform the operations to make the array empty.

# Approach
1. Count the occurrences of each number in the array using a HashMap.
2. Iterate through the counts, and if any count is 1, return -1.
3. Otherwise, for every count, add count / 3 to the total operations. The remainder, count % 3, indicates the remaining elements that necessitate additional operations. If count % 3 is 1, we must replace the last operation with the one involving two elements and carry out an extra operation with the remaining two elements. If count % 3 is 2, we need to execute one additional operation with the last two elements. Thus, we can simply check for a remainder and add 1 if it exists.

# Complexity
- Time complexity: $$O(n)$$, where n is the size of the input array. We iterate through the array once to count occurrences.
- Space complexity: $$O(n)$$, where n is the size of the input array. We use a HashMap to store the counts of each element.

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn min_operations(nums: Vec<i32>) -> i32 {
        let mut ret = 0;
        nums.iter()
        .fold(HashMap::new(), |mut map, num| {
            *map.entry(num).or_insert(0) += 1;
            map
        })
        .values()
        .for_each(|&count| {
            if count == 1 { ret = i32::MIN; }
            else { ret += count / 3 + (count % 3 > 0) as i32; }
        });
        ret.max(-1)
    }
}
```