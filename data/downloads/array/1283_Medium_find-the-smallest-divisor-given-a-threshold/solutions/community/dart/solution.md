# 🟢🔴🟢 Beats 100.00% 👏 Binary Search 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/5848994/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/5848994/)

---

# Intuition
We need to find the smallest divisor that, when dividing each element of the `nums` array and summing up the results (rounded up), the total sum remains within the given `threshold`. The problem can be solved by performing a binary search on possible divisors. The idea is to minimize the divisor while keeping the sum of divided elements under the threshold.

# Approach
1. **Binary Search**:
   - Set the lower bound (`low`) to 1 and the upper bound (`high`) to the maximum number in the array. This is because the smallest possible divisor is 1, and the largest possible divisor is the maximum number in the array.
   - For each middle value (`mid`), calculate the sum of the array elements when divided by `mid`, rounding each result up.
   - If the sum is greater than the threshold, increase the lower bound (`low = mid + 1`) to search for a larger divisor.
   - If the sum is within the threshold, decrease the upper bound (`high = mid - 1`) to search for a smaller divisor.
2. The smallest valid divisor will be found when the binary search concludes.

### Example Walkthrough
**Example Input**:  
`nums = [1, 2, 5, 9]`, `threshold = 6`

1. Initialize `low = 1` and `high = 9`.
2. Perform binary search:
   - Check `mid = (1 + 9) / 2 = 5`. 
     - Sum = `ceil(1/5) + ceil(2/5) + ceil(5/5) + ceil(9/5)` = 1 + 1 + 1 + 2 = 5 (within threshold).
     - Search for a smaller divisor: `high = 4`.
   - Check `mid = (1 + 4) / 2 = 2`.
     - Sum = `ceil(1/2) + ceil(2/2) + ceil(5/2) + ceil(9/2)` = 1 + 1 + 3 + 5 = 10 (greater than threshold).
     - Search for a larger divisor: `low = 3`.
   - Check `mid = (3 + 4) / 2 = 3`.
     - Sum = `ceil(1/3) + ceil(2/3) + ceil(5/3) + ceil(9/3)` = 1 + 1 + 2 + 3 = 7 (greater than threshold).
     - Search for a larger divisor: `low = 4`.
   - Check `mid = 4`.
     - Sum = `ceil(1/4) + ceil(2/4) + ceil(5/4) + ceil(9/4)` = 1 + 1 + 2 + 3 = 7 (greater than threshold).
     - Search for a larger divisor: `low = 5`.

3. The smallest divisor is `low = 5`.

**Output**:  
`5`

# Complexity
- **Time complexity**:  
  The time complexity is $$O(n \\log{m})$$ where `n` is the length of `nums` and `m` is the maximum number in the array. This is because binary search runs in $$O(\\log{m})$$ and each calculation of the sum takes $$O(n)$$.

- **Space complexity**:  
  The space complexity is $$O(n)$$ for storing the results of the division in the map step.

# Code
```dart
class Solution {
  int smallestDivisor(List<int> nums, int threshold) {
    int low = 1;
    int high = nums.reduce((a, b) => a > b ? a : b);
    
    while(low <= high){
        int mid = (high + low) ~/ 2; 
        int sum = nums.map((e) => (e / mid).ceil()).fold(0, (a, b) => a + b);
        
        if(sum > threshold){
          low = mid + 1;
        } else {
          high = mid - 1;
        }
    }
    return low;
  }
}
