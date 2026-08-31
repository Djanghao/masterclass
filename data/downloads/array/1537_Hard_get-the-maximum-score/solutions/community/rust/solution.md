# Simple Rust solution, runtime and space beat 100%

**Author:** user4435YF
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-the-maximum-score/solutions/4128442/](https://leetcode.com/problems/get-the-maximum-score/solutions/4128442/)

---

# Approach
We can change the array at every pair of equal numbers in both arrays. Between such pairs, we can only have the sum of elements of one of the arrays. Therefore, we can sum both arrays separately until we reach a pair/the end of the array and then simply choose the larger of the two partial sums. 

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$ additional space

# Code
```
impl Solution {
    pub fn max_sum(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let (mut i1, mut i2): (usize, usize) = (0, 0); //indices for nums1, nums2
        let (mut sum1, mut sum2): (i64, i64) = (0, 0); //partial sums of nums1, nums2
        let mut sum:i64 = 0;                           //total sum

        while i1 < nums1.len() && i2 < nums2.len() {
            if nums1[i1] == nums2[i2] {
                sum += nums1[i1] as i64 + std::cmp::max(sum1, sum2);
                sum1 = 0;
                sum2 = 0;
                i1 += 1;
                i2 += 1;
            }
            else if nums1[i1] < nums2[i2] {
                sum1 += nums1[i1] as i64;
                i1 += 1;
            }
            else if nums1[i1] > nums2[i2] {
                sum2 += nums2[i2] as i64;
                i2 += 1;
            }
        }
        //add the maximum remainder since the last pair
        ((sum + std::cmp::max(
            sum1 + nums1[i1..].iter().fold(0, |acc, x| acc + *x as i64), 
            sum2 + nums2[i2..].iter().fold(0, |acc, x| acc + *x as i64))
            ) % 1000000007 as i64) as i32
    }
}
```