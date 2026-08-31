# 💥[EXPLAINED] Memory beats 100.00%, Runtime beats 33.33%

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/5677150/](https://leetcode.com/problems/sort-transformed-array/solutions/5677150/)

---

# Intuition
By leveraging the sorted nature of nums, the two-pointer technique ensures that we fill the result array in linear time.

# Approach
Quadratic Function: Compute f(x)=ax 2+bx+c for each element in nums.

Two-Pointer Technique: Given that the transformed values are either convex or concave based on a, use two pointers to efficiently merge the values into a sorted array.

# Complexity
- Time complexity:

Transformation: O(n), where n is the length of the input array. Each element is transformed using a quadratic function, which takes constant time per element.

Two-Pointer Merge: O(n). Each element is processed once using the two-pointer technique to place elements in the result array.

Overall, the time complexity is O(n).

- Space complexity:

Result Array: O(n). 

An additional array of the same size as the input is used to store the transformed and sorted values.

Overall, the space complexity is O(n).

# Code
```typescript []
function sortTransformedArray(nums: number[], a: number, b: number, c: number): number[] {
    const n = nums.length;
    const result: number[] = new Array(n);
    let left = 0;
    let right = n - 1;
    let index = a >= 0 ? n - 1 : 0; // Determine direction for filling the result array

    // Helper function to apply the quadratic function
    const transform = (x: number) => a * x * x + b * x + c;

    while (left <= right) {
        const leftValue = transform(nums[left]);
        const rightValue = transform(nums[right]);

        if (a >= 0) {
            // If a >= 0, fill from the end of the result array
            if (leftValue >= rightValue) {
                result[index--] = leftValue;
                left++;
            } else {
                result[index--] = rightValue;
                right--;
            }
        } else {
            // If a < 0, fill from the start of the result array
            if (leftValue <= rightValue) {
                result[index++] = leftValue;
                left++;
            } else {
                result[index++] = rightValue;
                right--;
            }
        }
    }

    return result;
}

```