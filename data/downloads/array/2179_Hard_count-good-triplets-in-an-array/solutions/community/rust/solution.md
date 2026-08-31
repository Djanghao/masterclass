# Rust with Fenwick tree

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/5127981/](https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/5127981/)

---

# Complexity
- Time complexity: $$O(n*log(n))$$

- Space complexity: $$O(n)$$

# Code
```
struct Fenwick {
    v: Vec<i32>,
}

impl Fenwick {
    pub fn new(len: usize) -> Self {
        Self { v: vec![0; len] }
    }

    pub fn update(&mut self, mut i: usize, val: i32) {
        while i < self.v.len() {
            self.v[i] += val;
            i = i | (i + 1);
        }
    }

    fn get_sum(&self, mut i: usize) -> i32 {
        let mut ans = 0;
        while i < self.v.len() {
            ans += self.v[i];
            i = (i & (i + 1)).wrapping_sub(1);
        }
        ans
    }

    pub fn range_sum(&self, lo: usize, hi: usize) -> i32 {
        self.get_sum(hi)
        - self.get_sum(lo.wrapping_sub(1))
    }
}

impl Solution {
    pub fn good_triplets(nums1: Vec<i32>, nums2: Vec<i32>) -> i64 {
        let n = nums1.len();
        let mut pos1 = vec![0usize; n];
        for (i, &x) in nums1.iter().enumerate() {
            pos1[x as usize] = i; // save the position of x in nums1
        }

        let mut l_fenwick = Fenwick::new(n);
        let mut r_fenwick = Fenwick::new(n);
        for i in 1..n {
            r_fenwick.update(pos1[nums2[i] as usize], 1);
        }
        
        let mut ans = 0;
        let mut prev = pos1[nums2[0] as usize];
        for i in 1..n - 1 {
            let j = pos1[nums2[i] as usize]; // get the position of nums2[i] in nums1
            l_fenwick.update(prev, 1);
            r_fenwick.update(j, -1);
            let l_count = l_fenwick.range_sum(0, j - 1);
            let r_count = r_fenwick.range_sum(j + 1, n - 1);
            ans += l_count as i64 * r_count as i64;
            prev = j;
        }
        ans
    }
}
```