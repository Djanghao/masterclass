# ✅ [Python/Rust/C++] fastest (0 ms) using sums trick (with detailed comments)

**Author:** iablokov
**Votes:** 14
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/2735569/](https://leetcode.com/problems/set-mismatch/solutions/2735569/)

---

**\u2705 IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
****
This solution employs a smart math trick with three sums. Time complexity is linear: **O(N)**. Space complexity is linear: **O(N)**. 

| Language | Runtime | Memory |
|---|---|---|
| [**Python**](https://leetcode.com/submissions/detail/828548647/) | **178 ms (99.89%)** | **15.8 MB  (60.69%)** |
| [**Rust**](https://leetcode.com/submissions/detail/828544033/) | **0 ms (100.00%)** | **2.1 MB (80.00%)** |
| [**C++**](https://leetcode.com/submissions/detail/828547936/) | **13 ms (100.00%)** | **22.4 MB  (37.46%)** |

**Python.**
```python
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        
        # [1] sum of all numbers from 1 to n
        s = len(nums)*(len(nums)+1) // 2
        
        # [2] sum of all numbers in 'nums'
        a = sum(nums)
        
        # [3] sum of unique numbers in 'nums'
        u = sum(set(nums))
        
        # [4] the duplicate and missing numbers are
        return [a-u,s-u]
```

**Rust.**
```rust
impl Solution 
{
    pub fn find_error_nums(nums: Vec<i32>) -> Vec<i32> 
    {
        // [1] sum of all numbers from 1 to n
        let s = (nums.len()*(nums.len()+1) / 2) as i32;
        
        // [2] sum of 'all nums' and 'unique nums'
        let (mut a, mut u) = (0i32, 0i32);
        let mut fl = vec![1;10001];
        nums.into_iter()
            .for_each(|n| { a += n; u += n*fl[n as usize]; fl[n as usize] = 0; });
        
        // [3] the duplicate and missing numbers are
        vec![a-u,s-u]
    }
}
```

**C++.**
```cpp
class Solution 
{
public:
    vector<int> findErrorNums(vector<int>& nums) 
    {
        // [1] sum of all numbers from 1 to n
        int s = nums.size()*(nums.size()+1) / 2;
        
        // [2] sum of 'all nums' and 'unique nums'
        int a = 0, u = 0;
        vector<int> fl(nums.size()+1, 1);
        for (auto n : nums)
        {
            a += n; 
            u += n*(fl[n]--);
        }
        
        // [3] the duplicate and missing numbers are
        return {a-u, s-u};
    }
};
```