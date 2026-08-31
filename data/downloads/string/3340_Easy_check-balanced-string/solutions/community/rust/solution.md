# Linear solution with constant space

**Author:** gomezdavid89
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6003133/](https://leetcode.com/problems/check-balanced-string/solutions/6003133/)

---

# Approach
The solution is very straightforward, we calculate the sum of digits in even indices and the sum of digits in odd indices. We can optimize things a little bit by computing a single sum like: $$num[0] - num[1] + num[2] - num[3] + ...$$, where the final sum should be equal to $$0$$.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```rust []
impl Solution {
    pub fn is_balanced(num: String) -> bool {
        num.as_bytes().iter().fold((0, 1), |(sum, b), &e| (sum + (e - b'0') as i32 * b, b * -1)).0 == 0
    }
}
```

```c++ []
class Solution {
public:
    bool isBalanced(string_view num) {
        int sum = 0;
        for (int i = 0; i < num.size(); i++) {
            sum += (i % 2 == 0) ? num[i] - '0' : -num[i] + '0';
        }
        return sum == 0;
    }
};
```