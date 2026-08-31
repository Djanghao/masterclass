# C++/Rust solution

**Author:** 6cdh
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/1527947/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/1527947/)

---

We execute 4 simple algorithm on 4 sorted sub matrix to process negative rather than 1 complex algorithm.

Time: O(n * log(10^10))
Space: O(1)

Rust

The space complexity of this rust code is not O(1) since I'm still a newbee on rust and
don't know how to implement it.

```rust
impl Solution {
    pub fn kth_smallest_product(nums1: Vec<i32>, nums2: Vec<i32>, k: i64) -> i64 {
        let (neg1, pos1): (Vec<i32>, Vec<i32>) = nums1.iter().partition(|&&x| x < 0);
        let (neg2, pos2): (Vec<i32>, Vec<i32>) = nums2.iter().partition(|&&x| x < 0);
        let rneg1: Vec<i32> = neg1.iter().cloned().rev().collect();
        let rneg2: Vec<i32> = neg2.iter().cloned().rev().collect();
        let rpos1: Vec<i32> = pos1.iter().cloned().rev().collect();
        let rpos2: Vec<i32> = pos2.iter().cloned().rev().collect();
        let countle = |mid: i64| {
            Solution::countle_in_sorted_matrix(&neg1, &rpos2, mid)
                + Solution::countle_in_sorted_matrix(&rneg1, &rneg2, mid)
                + Solution::countle_in_sorted_matrix(&rpos1, &neg2, mid)
                + Solution::countle_in_sorted_matrix(&pos1, &pos2, mid)
        };

        let limit = 10_i64.pow(10);
        let mut r = (-limit, limit);
        while r.0 != r.1 {
            let mid = r.0 + (r.1 - r.0) / 2;
            if countle(mid) < k {
                r.0 = mid + 1;
            } else {
                r.1 = mid;
            }
        }
        r.0
    }

    fn countle_in_sorted_matrix(nums1: &[i32], nums2: &[i32], k: i64) -> i64 {
        let mut j = nums2.len();
        let mut cnt: i64 = 0;
        for &v in nums1 {
            while j != 0 && (nums2[j - 1] as i64) * (v as i64) > k {
                j -= 1;
            }
            cnt += j as i64;
        }

        cnt
    }
}
```

C++

O(1) space

```cpp
class Solution {
   public:
    long long kthSmallestProduct(vector<int>& nums1,
                                 vector<int>& nums2,
                                 long long k) {
        int64_t l = -1e10;
        int64_t r = 1e10;
        while (l != r) {
            const auto mid = l + (r - l) / 2;
            if (countle(nums1, nums2, mid) < k) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return l;
    }

    int64_t countle(const vector<int>& nums1,
                    const vector<int>& nums2,
                    int64_t k) {
        const auto pos1 = partition_point(nums1.begin(),
                                          nums1.end(),
                                          [](const auto& x) { return x < 0; });
        const auto pos2 = partition_point(nums2.begin(),
                                          nums2.end(),
                                          [](const auto& x) { return x < 0; });
        const auto first1 = nums1.begin();
        const auto last1 = nums1.end();
        const auto first2 = nums2.begin();
        const auto last2 = nums2.end();
        return countle_in_sorted_matrix(pos1, last1, pos2, last2, k) +
               countle_in_sorted_matrix(first1,
                                        pos1,
                                        make_reverse_iterator(last2),
                                        make_reverse_iterator(pos2),
                                        k) +
               countle_in_sorted_matrix(make_reverse_iterator(pos1),
                                        make_reverse_iterator(first1),
                                        make_reverse_iterator(pos2),
                                        make_reverse_iterator(first2),
                                        k) +
               countle_in_sorted_matrix(make_reverse_iterator(last1),
                                        make_reverse_iterator(pos1),
                                        first2,
                                        pos2,
                                        k);
    }

    template <class It1, class It2>
    int64_t countle_in_sorted_matrix(
        It1 first1, It1 last1, It2 first2, It2 last2, int64_t k) {
        int64_t cnt = 0;
        auto j = last2;
        for (auto it = first1; it != last1; ++it) {
            while (j != first2 && j[-1] * int64_t(*it) > k) {
                --j;
            }
            cnt += distance(first2, j);
        }
        return cnt;
    }
};
```