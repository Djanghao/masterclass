# Finding the k-th Smallest Distance Pair in a Sorted Array Using Binary Search

**Author:** authxth
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5633267/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5633267/)

---

# Intuition
The function finds the k-th smallest distance between any two numbers in a sorted list. It uses binary search to efficiently determine the smallest distance for which there are at least k pairs.


# Approach
1. Sorting: Start by sorting the `nums` array. This ensures that the distances between pairs can be easily managed and compared.
2. Binary Search on Distance: Use binary search to find the smallest possible distance `d` for which there are at least `k` pairs with distance less than or equal to `d`.
    - Lower Bound (`left`): Start from 0.
    - Upper Bound (`right`): Start from the difference between the maximum and minimum values in the sorted array.
    - Midpoint Calculation: Calculate the midpoint distance (`mid`) and count how many pairs have a distance less than or equal to `mid`.
3. Counting Valid Pairs: For each midpoint distance, use a two-pointer approach to count the number of valid pairs:
    - Move the second pointer `j` and adjust the first pointer `i` to maintain the distance constraint.
    - Accumulate the count of valid pairs.
4. Adjust Binary Search Bounds: Based on the count of pairs:
    - If the count is at least `k`, it means `mid` is a valid distance, and we might be able to reduce it. So, adjust the upper bound (`right`).
    - Otherwise, increase the lower bound (`left`).


# Complexity
- Time complexity: \uD835\uDC42(\uD835\uDC5B log)
O(nlog(max\u2212min)), where \uD835\uDC5B is the number of elements and `max - min` is the range of possible distances. Sorting takes $\uD835\uDC42(\uD835\uDC5B log \uD835\uDC5B)$ and binary search involves $\uD835\uDC42(log(max \u2212 min)\xD7 \uD835\uDC5B)$ for counting pairs.
- Space complexity: $\uD835\uDC42(1)$, as the space used is constant outside of the input array.
# Code
```
function smallestDistancePair(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let left = 0,
        right = nums[n - 1] - nums[0];
    while (left < right) {
        let mid = (left + right) >> 1;
        let count = 0,
            i = 0;
        for (let j = 0; j < n; j++) {
            while (nums[j] - nums[i] > mid) {
                i++;
            }
            count += j - i;
        }
        if (count >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
```