# Concise BinaryHeap imperative & functional style solutions in Rust

**Author:** ustinovas
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2960569/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2960569/)

---

# Intuition
Each time we should take a pile with maximum amount of stones and remove stones from there.

# Approach
We'll use binary heap to maintain pile order while removing stones.

# Complexity
- Time complexity:
$$O(n + k*log(n))$$ as it takes $$O(n)$$ time to build heap and then we have $$k$$ iterations to remove stones each consuming $$log(n)$$ time. Finaly we compute sum of remaining stones over all piles that again has $$O(n)$$ complexity.

- Space complexity:
$$O(1)$$ as we don't use extra space because the `BinaryHeap::from` method consumes input `piles` vector and builds heap in-place with no extra allocations.

# Imperative Style Code
```
use std::collections::BinaryHeap;
impl Solution {
    pub fn min_stone_sum(piles: Vec<i32>, k: i32) -> i32 {
        let mut heap = BinaryHeap::from(piles);
        for _ in 0..k {
            let pile = heap.pop().expect("Heap is never empty.");
            heap.push(pile - (pile >> 1));
        }
        heap.iter().sum()
    }
}
```

# Functional Style Code
```
use std::collections::BinaryHeap;
impl Solution {
    pub fn min_stone_sum(piles: Vec<i32>, k: i32) -> i32 {
        (0..k).fold(BinaryHeap::from(piles), |mut heap, _| heap.pop().map(|pile| { heap.push(pile - (pile >> 1)); heap }).expect("Heap is never empty.")).iter().sum()
    }
}
```
