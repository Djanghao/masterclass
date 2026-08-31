# [C++/Python3/JavaScript] Stack, one pass

**Author:** rh137
**Votes:** 10
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1823645/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1823645/)

---

## idea
- we process the numbers from left to right, when processing a number, merge it to the left (with the already processed elements) until we can't.
- maintain the processed elements by a stack.
## code
- C++
```
class Solution {
public:
    vector<int> replaceNonCoprimes(vector<int>& nums) {
        vector<int> res;
        for (auto num : nums) {
            while (!res.empty() && gcd(res.back(), num) > 1) {
                num = lcm(res.back(), num);
                res.pop_back();
            }
            res.push_back(num);
        }
        return res;
    }
};
```
- Python3
```
class Solution:
    def replaceNonCoprimes(self, nums: List[int]) -> List[int]:
        res = []
        for num in nums:
            while res and gcd(res[-1], num) > 1:
                num = lcm(res[-1], num)
                res.pop()
            res.append(num)
        return res
```
- JavaScript (is there any built-in `gcd` or `lcm` in js?)
```
function gcd(a, b) {
    while (b > 0) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}
function lcm(a, b) {
    return a / gcd(a, b) * b;
}

var replaceNonCoprimes = function(nums) {
    let res = new Array();
    for (let num of nums) {
        while (res.length > 0 && gcd(res.at(-1), num) > 1) {
            num = lcm(res.at(-1), num);
            res.pop();
        }
        res.push(num);
    }
    return res;
};
```
- Time Complexity
	- `O(n * log(1e8))` as we process each element once, and the complexity of both `gcd(a, b)` and `lcm(a, b)` are known to be `O(log(max(a, b)))`
- Space Complexity
	- `O(n)` used by `res`.
## Similar Problems
- Although the concepts are not exactly the same, the code of this problem looks like those related to **monotonic stacks**
- [LC 496 - Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) (solve it in linear time)
- [LC 503 - Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)
- [LC 739 - Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
- [LC 402 - Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
- [LC 1944 - Number of Visible People in a Queue](https://leetcode.com/problems/number-of-visible-people-in-a-queue/)
- [LC 84 - Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
- [LC 85 - Maximum Rectangle](https://leetcode.com/problems/maximal-rectangle/)
- [LC 1340 - Jump Game V](https://leetcode.com/problems/jump-game-v/)