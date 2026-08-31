# 🟢🔴🟢 Beats 100.00% 👏 || Best Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5661892/](https://leetcode.com/problems/2-keys-keyboard/solutions/5661892/)

---

# Intuition
To minimize the number of steps required to get exactly `n` 'A's on a notepad using only two operations (Copy All and Paste), we need to find a way to break down the problem into smaller manageable steps. The idea is to identify the prime factors of `n`, as each factor represents the minimum number of operations needed to achieve a certain number of 'A's.

# Approach
1. **Prime Factorization**: 
   - Start by considering the smallest prime factor, `i`, starting from 2. 
   - If `n` is divisible by `i`, it means that `i` is a factor of `n`, and to achieve `n` 'A's, we would need `i` operations (e.g., 2 operations for multiplying by 2, 3 operations for multiplying by 3).
   - Keep dividing `n` by `i` until it is no longer divisible by `i`. This simulates the repeated paste operation that follows the initial copy.
   - Add the value of `i` to the result every time you divide `n` by `i`.

2. **Iterate Over Factors**: 
   - Continue this process for every `i` from 2 up to `n`. 
   - The result accumulates the minimum number of steps needed to reach exactly `n` 'A's.

3. **Return the Result**:
   - The accumulated result represents the minimum steps needed to obtain `n` 'A's.

### Example:
- **Input**: `n = 18`
- **Steps**:
  - Start with `i = 2`. Since `18` is divisible by `2`, divide `18` by `2` and add `2` to the result. Now, `n = 9` and `res = 2`.
  - Next, consider `i = 3`. Since `9` is divisible by `3`, divide `9` by `3` and add `3` to the result. Now, `n = 3` and `res = 5`.
  - `9` is still divisible by `3`, so divide `3` by `3` and add `3` to the result. Now, `n = 1` and `res = 8`.
- **Output**: The minimum number of steps required is `8`.

# Complexity
- **Time complexity**: $$O(\\sqrt{n})$$
  - This is because we only iterate up to `\u221An` to find the factors of `n`.

- **Space complexity**: $$O(1)$$
  - Only a constant amount of extra space is used for variables.

# Code
```dart
class Solution {
  int minSteps(int n) {
    if(n == 1) return 0;
    int res = 0;
    for(int i = 2; i <= n; i++){
        while(n % i == 0){
            res += i;
            n ~/= i;
        }
    }
    return res;
  }
}
