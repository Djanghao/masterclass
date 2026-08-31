# Easy Rust Solution | Detailed Explanation

**Author:** vibhushit
**Votes:** 3
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5859574/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5859574/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires replacing each element in the array with its rank, where the rank of an element is determined by how large the element is compared to others. If two elements are equal, they must have the same rank, and the ranks should start from 1 and increase by 1 for each unique element. We need to ensure the ranks are as small as possible while maintaining the relative ordering of the elements.


# Approach
<!-- Describe your approach to solving the problem. -->
1. **Sort and Deduplicate**: Start by creating a sorted version of the input array, which helps in identifying the relative order of elements. Additionally, deduplicate the sorted array to handle equal elements efficiently.
  
2. **HashMap for Rank**: Once we have the sorted unique elements, assign each element its rank (starting from 1). This can be achieved by storing the rank of each unique element in a hash map. The key is the element itself, and the value is the rank.

3. **Transform the Original Array**: After creating the hash map of ranks, we iterate over the original array and replace each element with its corresponding rank from the hash map.

# Complexity
### Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- **Sorting**: Sorting the array takes O(n log n) where n is the number of elements in the input array.
- **Deduplication**: Removing duplicates from the sorted array takes O(n).
- **Creating the HashMap**: Iterating through the sorted unique elements to store ranks in a hash map takes O(n).
- **Transforming the Original Array**: Mapping the original array to its ranks using the hash map also takes O(n).

Thus, the overall time complexity is **O(n log n)**, dominated by the sorting step.

### Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

- **HashMap**: We use a hash map to store the ranks of unique elements, which requires O(u) space, where u is the number of unique elements.
- **Auxiliary Arrays**: We also create an auxiliary array (sorted version of the input array), which takes O(n) space.
  
The overall space complexity is **O(n)**.

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn array_rank_transform(arr: Vec<i32>) -> Vec<i32> {
        // Create a sorted version of the input array and remove duplicates
        let mut sorted_arr = arr.clone();
        sorted_arr.sort();
        sorted_arr.dedup();

        // Create a hash map to store the rank of each unique element
        let mut rank_map = HashMap::new();
        for (rank, &val) in sorted_arr.iter().enumerate() {
            rank_map.insert(val, (rank + 1) as i32);
        }

        // Transform the original array into the ranked array
        arr.into_iter().map(|x| rank_map[&x]).collect()
    }
}
```