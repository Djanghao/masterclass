# [Rust / C++ / Python] Solution using Bitmask to avoid HashSet or Counting - O(1) space -

**Author:** talalshafei
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5911130/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5911130/)

---

# Intuition
*I saw this approach in the code sample when I was looking at solutions that beats 100%*

Using the constraints of the question, we can use a bitmask to cover the space of the possible input numbers instead of creating a set or a boolean array
if number `i` is present in `nums`, then set the `ith` bit in the the `seen` variable.

Choose `seen` to be 64 bit integer because `nums[i] <= 50`

Constraints:
- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`
- `Each number in nums appears either once or twice.`

# Approach
Loop over the array if the number is present in the bitmask, then xor it with `ans` else set its bit in the bitmask.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$


# Code
```cpp []
class Solution {
public:
    int duplicateNumbersXOR(vector<int>& nums) {
        int ans=0;
        long long seen=0;
        for(int n: nums)
            if(seen & (1LL<<n)) ans ^= n;
            else seen |= 1LL<<n;
        return ans;
    }
};
```
```python3 []
class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:
        ans = seen = 0
        for n in nums:
            if seen & (1<<n): ans ^= n
            else: seen |= 1<<n
        return ans
```
```rust []
impl Solution {
    pub fn duplicate_numbers_xor(nums: Vec<i32>) -> i32 {
        let (mut ans, mut seen) = (0, 0i64);
        for n in nums {
            if seen & (1<<n) != 0 { ans ^= n; }
            else { seen |= 1<<n; }
        }
        return ans;
    }
}
```

