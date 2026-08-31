# Rust solutions

**Author:** BigMih
**Votes:** 14
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1317383/](https://leetcode.com/problems/build-array-from-permutation/solutions/1317383/)

---

Thanks for ideas to @vishnuSReddy [solution](https://leetcode.com/problems/build-array-from-permutation/discuss/1315705/Python-and-C%2B%2B-Solution-for-both-O(n)-and-O(1)-space-complexity) and @EOAndersson [solution](https://leetcode.com/problems/build-array-from-permutation/discuss/1314616/Java-streams-one-line.-What's-the-point-of-this-question/997757) in comments.

1. Simple one-liner. Memory - O(N). Runtime - 4ms
```
impl Solution {
    pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
        (0..nums.len()).map(|i| nums[nums[i] as usize]).collect()
    }
}
```
2. Solution with modulo (store two values in one element). Memory - O(1). Runtime - 4ms
```
impl Solution {
    pub fn build_array(mut nums: Vec<i32>) -> Vec<i32> {
        let l = nums.len() as i32;
        (0..l as usize).for_each(|i| nums[i] += (nums[nums[i] as usize] % l) * l);
        (0..l as usize).for_each(|i| nums[i] /= l);
        nums
    }
}
```
3. Fast solution with bit operations (same idea like previous with modulo but with bit-shifting and mask). Memory - O(1). Runtime - 0ms
```
impl Solution {
    pub fn build_array(mut nums: Vec<i32>) -> Vec<i32> {
        let mask = 1023;
        (0..nums.len()).for_each(|i| nums[i] |= (nums[nums[i] as usize] & mask) << 10);
        (0..nums.len()).for_each(|i| nums[i] >>= 10);
        nums
    }
}
```

