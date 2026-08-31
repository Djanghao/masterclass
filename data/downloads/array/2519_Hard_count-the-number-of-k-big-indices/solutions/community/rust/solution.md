# Rust  Segment Tree & Binary Index Tree Solutions

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/2979807/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/2979807/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
// Segment Tree
impl Solution {
    pub fn k_big_indices(nums: Vec<i32>, k: i32) -> i32 {
        let left = Self::calculate(&nums);
        //for a in &left { print!["{},", a  ]; } 

        let mut nums = nums;
        nums.reverse();
        let mut right = Self::calculate(&nums);
        right.reverse();

        let mut count = 0;
        for i in 0 .. left.len() {
            if left[i] >= k && right[i] >= k { count += 1; }
        }

        count
    }

    fn calculate(nums: &Vec<i32>) -> Vec<i32> {
        let n = (1 + *nums.iter().max().unwrap()) as usize;
        let mut tree = vec![0; 4 * n];

        let m = nums.len();
        let mut ret = vec![0; m];
        for i in 0 .. m {
            ret[i] = Self::get(1, 0, n - 1, nums[i] as usize - 1, &mut tree);
            Self::add(1, 0, n - 1, nums[i] as usize, &mut tree);
        } 
        
        ret
    }

    fn add(u: usize, left: usize, right: usize, i: usize, tree: &mut Vec<i32>) {
        if left == right {
            tree[u] += 1;
            return
         }

         let mid = left + (right - left) / 2;
         
         if i <= mid { Self::add(2 * u, left, mid, i, tree); }
         else        { Self::add(2 * u + 1, mid + 1, right, i, tree); }

         tree[u] = tree[2 * u] + tree[2 * u + 1];
    }

    fn get(u: usize, left: usize, right: usize, i: usize, tree: &Vec<i32>) -> i32 {
        if right <= i { return tree[u] } 

        let mid = left + (right - left) / 2;
        
        if i > mid { return tree[2 * u] + Self::get(2 * u + 1, mid + 1, right, i, tree) } 
        
        Self::get(2 * u, left, mid, i, tree)
    }
}
```

~~~
// Binary Indexed Tree

impl Solution {
    pub fn k_big_indices(nums: Vec<i32>, k: i32) -> i32 {
        let left = Self::cal(&nums);
        let mut nums = nums;
        nums.reverse();
        let mut right = Self::cal(&nums);
        right.reverse();

        let mut count = 0;
        for i in 0 .. nums.len() {
            if left[i] >= k && right[i] >= k { count += 1; }
        }

        count
    }

    fn cal(nums: &Vec<i32>) -> Vec<i32> {
        let (m, n) = (nums.len(), 1 + *nums.iter().max().unwrap() as usize);
        let (mut tree, mut ret) = (vec![0; n + 1], vec![0; m]);

        for i in 0 .. m {
            Self::update(nums[i] as usize + 1, &mut tree);
            ret[i] = Self::get(nums[i] as usize, &mut tree);
        }

        ret
    }

    fn update(i: usize, tree: &mut Vec<i32>) {
        let (mut i, n) = (i, tree.len());
        while i < n  {
            tree[i] += 1;
            i += (i as i32 & -(i as i32)) as usize; 
        }
    }

    fn get(i: usize, tree: &mut Vec<i32>) -> i32 {
        let (mut i, mut sum) = (i, 0);
        while i > 0 {
            sum += tree[i];
            i -= (i as i32 & -(i as i32)) as usize; 
        } 

        sum
    } 
} 
~~~
