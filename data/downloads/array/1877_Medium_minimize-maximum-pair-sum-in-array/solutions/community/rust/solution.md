# [Rust] Beats 100% with bucket sort

**Author:** tiedyedvortex
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4297105/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4297105/)

---

# Intuition
If you want to minimize the maximum pair sum, then you want to make all of the pair sums as similar as possible. This can be accomplished by pairing up the largest num with the smallest, the second largest with the second smallest, and so on.

This means we need to sort the list, then repeatedly take the largest and smallest elements, and return the max of those pairwise sums.

# Approach
The bottleneck here is sorting. Once we have the sorted list, it's a linear-time scan. 

A comparison sort, even an inplace one like `slice::sort_unstable`, is at best O(n log n). But, we're given that the nums are in the range [1, 100_000]. That means we can create an array that is 100,000 elements long, and count the number of instances in nums.

This means that instead of getting a true sorted array of nums, we're getting a sorted array of counts, which means we have to do a little more manual implementations to be able to pull the largest and smallest elements. 

We could do this inline with a bunch of while-loops, but implementing Iterator, FromIterator, and DoubleEndedIterator makes it look nice.

# Complexity
- Time complexity: O(n) with respect to the length of nums.

- Space complexity: O(m) where m is the maximum range of values for nums.

# Code
```
impl Solution {
    pub fn min_pair_sum(mut nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let nums = nums.into_iter().collect::<BucketSorter>();
        (0..(n>>1))
        .scan(
            nums.into_iter(), 
            |it, _| { 
                it.next()
                .map(|a| it.next_back().map(|b| a+b))
                .flatten()
            }
        ).max().unwrap()
    }
}

struct BucketSorter {
    buckets: [u16; 100000],
}

impl BucketSorter {
    pub fn new() -> Self {
        Self {
            buckets: [0; 100000]
        }
    }

    pub fn add(&mut self, num: i32) {
        self.buckets[(num-1) as usize] += 1;
    }

    pub fn into_iter(self) -> BucketSorterIter {
        BucketSorterIter {
            buckets: self.buckets,
            lo: 0,
            hi: 99999,
        }
    }
}

impl std::iter::FromIterator<i32> for BucketSorter {
    fn from_iter<I: IntoIterator<Item=i32>>(iter: I) -> Self {
        let mut buckets = BucketSorter::new();
        for num in iter {
            buckets.add(num);
        }
        buckets
    }
}

struct BucketSorterIter {
    buckets: [u16; 100000],
    lo: usize,
    hi: usize,
}

impl Iterator for BucketSorterIter {
    type Item = i32;

    fn next(&mut self) -> Option<i32> {
        while self.lo <= self.hi && self.buckets[self.lo] == 0 {
            self.lo += 1;
        }

        if self.buckets[self.lo] > 0 {
            self.buckets[self.lo] -= 1;
            Some((self.lo+1) as i32)
        } else {
            None
        }
    }
}

impl std::iter::DoubleEndedIterator for BucketSorterIter {
    fn next_back(&mut self) -> Option<i32> {
        while self.hi > 0 && self.lo <= self.hi && self.buckets[self.hi] == 0 {
            self.hi -= 1;
        }

        if self.buckets[self.hi] > 0 {
            self.buckets[self.hi] -= 1;
            Some((self.hi+1) as i32)
        } else {
            None
        }
    }
}
```