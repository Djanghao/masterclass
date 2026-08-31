# Rust/Python Divide and Conquer with Binary Index Tree

**Author:** davidp918
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/1400758/](https://leetcode.com/problems/reverse-pairs/solutions/1400758/)

---

```
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        # If the original problem is denoted as T(i, j),
        # by using divide and conquer -> T(i, j) = T(i, j-1) + C,
        # where C is the number of reverse pairs (j, n),
        # and the j is the cutted value, n is the numbers that satisfies nums[j] > 2 * nums[n]
        
        # In order to efficiently compute the value of C,
        # we need to pre-compute the numbers of n beforehand by using prefix sum array,
        # where prefix[i] means the number of n that satisfies (j, n).
        # Therefore, for each j, prefix[rank of nums[j]:] is incremented
        
        # For example, if the abandoned nums[j] value is 2, 
        # then the left hand side numbers that is > 2 * 2 will be a valid reverse pair,
        # so we need to know the rank of number 4, 
        # where let's say the rank is 3(the third smallest among all values),
        # prefix[3:] is all incremented, meaning that for numbers that have a higher rank than number 4,
        # they will have a valid reverse pair.
        
        # To speed up the computation of getting valid pairs and update the prefix array,
        # a binary index tree is preferred as both querying and updating take log(n) time.
        
        new_nums = nums + [num * 2 for num in nums]
        sorted_set = sorted(list(set(new_nums)))
        tree = BIT(len(sorted_set))
        res = 0
        ranks = {} # rank[n] = i, means number n is the i th smallest in new_nums
        
        for i, n in enumerate(sorted_set, 1):
            ranks[n] = i # ranks count from one
        
        for n in nums[::-1]: # backwards
            # minus 1 since ranks that is lower than ranks[n] satisfies
            res += tree.query(ranks[n] - 1)
            tree.update(ranks[n * 2], 1)
        
        return res

class BIT:
    def __init__(self, n):
        self.n = n + 1
        self.nums = [0] * self.n
        
    def update(self, i, delta):
        while i < self.n:
            self.nums[i] += delta
            # i += i & (-i)
            i = (i | (i - 1)) + 1
    
    def query(self, i):
        res = 0
        while i > 0:
            res += self.nums[i]
            # i -= i & (-i)
            i &= i - 1
        return res
```
Rust
```
use std::collections::{BTreeSet, HashMap};

impl Solution {
    pub fn reverse_pairs(nums: Vec<i32>) -> i32 {
        // If the original problem is denoted as T(i, j),
        // by using divide and conquer -> T(i, j) = T(i, j-1) + C,
        // where C is the number of reverse pairs (j, n),
        // and the j is the cutted value, n is the numbers that satisfies nums[j] > 2 * nums[n]

        // In order to efficiently compute the value of C,
        // we need to pre-compute the numbers of n beforehand by using prefix sum array,
        // where prefix[i] means the number of n that satisfies (j, n).
        // Therefore, for each j, prefix[rank of nums[j]:] is incremented

        // For example, if the abandoned nums[j] value is 2,
        // then the left hand side numbers that is > 2 * 2 will be a valid reverse pair,
        // so we need to know the rank of number 4,
        // where let's say the rank is 3(the third smallest among all values),
        // prefix[3:] is all incremented, meaning that for numbers that have a higher rank than number 4,
        // they will have a valid reverse pair.

        // To speed up the computation of getting valid pairs and update the prefix array,
        // a binary index tree is preferred as both querying and updating take log(n) time.

        let rank: HashMap<i64, usize> = {
            let mut sorted = Vec::new();
            for &x in &nums {
                sorted.push(x as i64);
                sorted.push(2 * x as i64);
            }
            sorted.sort();
            sorted.dedup();
            sorted
        }
        .into_iter()
        .enumerate()
        .map(|(i, num)| (num, i + 1)) // ranks count from one
        .collect(); // rank[n] = i, means number n is the i th smallest in new_nums

        let mut tree = BinaryIndexTree::new(rank.keys().len());
        let mut res = 0;

        for &n in nums.iter().rev() {
            let num = n as i64;
            // minus 1 since only ranks that are lower than ranks[n] satisfies
            res += tree.query(rank[&num] - 1);
            tree.update(rank[&(num * 2)], 1);
        }

        res
    }
}

pub struct BinaryIndexTree {
    n: usize,
    nums: Vec<i32>,
}

impl BinaryIndexTree {
    pub fn new(length: usize) -> BinaryIndexTree {
        BinaryIndexTree {
            n: length + 1,
            nums: vec![0; length + 1],
        }
    }

    pub fn update(&mut self, mut index: usize, delta: i32) {
        while index < self.n {
            self.nums[index] += delta;
            index = (index | (index - 1)) + 1;
        }
    }

    pub fn query(&self, mut index: usize) -> i32 {
        let mut sum: i32 = 0;
        while index > 0 {
            sum += self.nums[index];
            index &= index - 1;
        }
        sum
    }
}
```