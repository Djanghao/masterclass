# 🟢🔴🟢  Beats 100.00% 👏 || Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5727629/](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/5727629/)

---

## Intuition
The problem revolves around determining which student will be the one who runs out of chalk after a large number of rounds. The key insight is that instead of simulating the entire process (which could be computationally expensive for large `k`), we can leverage the total chalk consumption in one complete round to simplify the problem.

## Approach
1. **Calculate Total Chalk Consumption**:
   - First, calculate the total amount of chalk consumed in one full round (i.e., one iteration through all the students).

2. **Reduce `k`**:
   - Reduce `k` by taking the remainder when `k` is divided by the total chalk consumption. This step effectively simulates all the full rounds and reduces the problem to a much smaller equivalent problem.

3. **Identify the Student**:
   - Iterate through the chalk array and subtract each student's chalk usage from `k` (now `remainingChalk`) until we find the student who cannot be satisfied with the remaining chalk.

## Complexity
- **Time Complexity**: $$O(n)$$, where `n` is the number of students. This is because we iterate through the `chalk` array twice: once to calculate the total chalk and once to identify the student.
  
- **Space Complexity**: $$O(1)$$, as we only use a few extra variables regardless of the input size.

## Example Walkthrough

### Example 1
- **Input**: `chalk = [5, 1, 5], k = 22`
- **Output**: `0`

#### Step-by-Step Execution:
1. **Calculate Total Chalk Consumption**:
   - Total chalk used in one round = `5 + 1 + 5 = 11`

2. **Reduce `k`**:
   - Remaining chalk after full rounds = `22 % 11 = 0`

3. **Identify the Student**:
   - Start with `remainingChalk = 0`
   - Student 0: Requires `5` chalk, but `remainingChalk = 0`, so the answer is `0`.

### Example 2
- **Input**: `chalk = [3, 4, 1, 2], k = 25`
- **Output**: `1`

#### Step-by-Step Execution:
1. **Calculate Total Chalk Consumption**:
   - Total chalk used in one round = `3 + 4 + 1 + 2 = 10`

2. **Reduce `k`**:
   - Remaining chalk after full rounds = `25 % 10 = 5`

3. **Identify the Student**:
   - Start with `remainingChalk = 5`
   - Student 0: Requires `3` chalk, `remainingChalk = 5 - 3 = 2`
   - Student 1: Requires `4` chalk, but `remainingChalk = 2`, so the answer is `1`.

## Code
```dart
class Solution {
  int chalkReplacer(List<int> chalk, int k) {
    int sum = chalk.fold(0, (total, element) => total + element);
    int remainingChalk = k % sum;
    for (int i = 0; i < chalk.length; i++) {
      if (remainingChalk < chalk[i]) return i;
      remainingChalk -= chalk[i];
    }
    return -1;
  }
}
