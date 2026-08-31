# [C++/Java] Binary Search + Math w/ Detailed Explanation

**Author:** Xiangcan
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3614589/](https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3614589/)

---

#### Intuition:
For each number in the array, the number of times `y` can be subtracted from it (with an integer result) gives a good approximation for the number of operations required to bring it to zero or less. However, because each operation decreases one number by `x` and all others by `y`, the actual number of operations may be less than this initial approximation. The goal is to find a sequence of operations that maximizes the use of the larger decrease `x` while still ensuring that all numbers become zero or less.

#### Algorithm
* Calculate the difference between `x` and `y` and store it in `diffXY`. Initialize the binary search range between 1 and the maximum number of `y`-subtractions required for any number in the array.
* Perform a binary search within this range to find the minimum number of operations required. For each midpoint in the search range:
    - Check if that number of operations is sufficient to bring all numbers in the array to zero or less. This is done in the `check` method.
    - If it is, update the result and decrease the right boundary of the search range.
    - If not, increase the left boundary of the search range.

The `check` method checks whether the total number of operations `steps` is sufficient to bring all numbers in the array to zero or less. Here's what happens in the method:

* `countX` is initialized as `steps`. `countX` represents the maximum number of operations where the `x` decrease can be applied.
* Iterate through each number in the array. For each number:
    - `curSteps` is calculated as the number of times `y` can be subtracted from the current number with an integer result. This is essentially a measure of how many `y` decreases are needed to make this number zero or less.
    - If `curSteps` is greater than `steps`, this means the current number can't be reduced to zero or less with `y` decreases only in `steps` number of operations. Hence, we need to subtract `x` from this number.
        - Calculate how many `x` decreases are needed in addition to the `y` decreases already accounted for in `steps`: `ax + by >= num, ax + (steps - a)y >= num, a(x - y) >= num - steps * y, a >= (num - steps * y) / (x - y)`. This is subtracted from `countX`.
        - If `countX` becomes negative, this means you need more `x` decreases than the number of operations available, so you return `false`.
* If we're able to iterate through all numbers without returning `false`, this means `step` number of operations is enough to reduce all numbers to zero or less, so you return `true`.

Note: I have employed a neat little trick: `(num + x - 1) / x` achieves the same result as `num / x + (num % x == 0 ? 0 : 1)`. 

#### Complexity Analysis

* Time Complexity: `O(n log n)` - The binary search takes `O(log n)` operations and is performed `n` times (once for each number in the array), where `n` is the maximum number of `y`-subtractions required for any number in the array.
* Space Complexity: `O(1)` - The space used does not increase with the size of the input array.

C++:
```
class Solution {
public:
    int diffXY;
    int minOperations(vector<int>& nums, int x, int y) {
        this->diffXY = x - y;
        int left = 1, right = 0;
        for (int num : nums)
            right = max(right, (num + y - 1) / y);
        int res = right;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (check(nums, x, y, mid)) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
    bool check(vector<int>& nums, int x, int y, int steps) {
        int countX = steps;
        for (int num : nums) {
            int curSteps = (num + y - 1) / y;
            if (curSteps > steps) {
                countX -= (num - steps * y + diffXY - 1) / diffXY;
                if (countX < 0) return false;
            }
        }
        return true;
    }
};
```

Java:
```
class Solution {
    int diffXY;
    public int minOperations(int[] nums, int x, int y) {
        this.diffXY = x - y;
        int left = 1, right = 0;
        for (int num : nums)
            right = Math.max(right, (num + y - 1) / y);
        int res = right;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (check(nums, x, y, mid)) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
    public boolean check(int[] nums, int x, int y, int steps) {
        int countX = steps;
        for (int num : nums) {
            int curSteps = (num + y - 1) / y;
            if (curSteps > steps) {
                countX -= (num - steps * y + diffXY - 1) / diffXY;
                if (countX < 0) return false;
            }
        }
        return true;
    }
}
```