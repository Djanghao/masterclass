# C# Solution for K-th Smallest Prime Fraction Problem

**Author:** Aman_Raj_Sinha
**Votes:** 6
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137844/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137844/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to utilize binary search to efficiently narrow down the search space for the kth smallest fraction. By iteratively adjusting the midpoint between 0 and 1, we can determine the count of fractions less than or equal to the current midpoint, allowing us to decide whether to adjust the search space to the left or right.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialize the search space between 0 and 1.
2.	Use binary search to iteratively narrow down the search space.
3.	For each midpoint, count the number of fractions less than or equal to it.
4.	Adjust the search space based on the count until the kth smallest fraction is found.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(n * log(max(arr))) where n is the length of the array arr. Within each binary search iteration, we perform a linear scan of the array, which takes O(n) time. We perform binary search iterations until the difference between the left and right boundaries is less than a certain threshold (1e-9), which typically converges in O(log(max(arr))) iterations.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) because we\u2019re only using a constant amount of additional space to store variables such as left, right, result, etc. We\u2019re not using any additional data structures that scale with the input size.

# Code
```
public class Solution {
    public int[] KthSmallestPrimeFraction(int[] arr, int k) {
        int n = arr.Length;
        double left = 0, right = 1;
        int[] result = new int[2];

        while (right - left > 1e-9) {
            double mid = (left + right) / 2;
            int count = 0;
            double maxFraction = 0;
            int numerator = 0, denominator = 0;

            for (int i = 0, j = 1; i < n - 1; i++) {
                while (j < n && arr[i] > mid * arr[j]) {
                    j++;
                }
                count += n - j;
                if (j < n && maxFraction < (double)arr[i] / arr[j]) {
                    maxFraction = (double)arr[i] / arr[j];
                    numerator = arr[i];
                    denominator = arr[j];
                }
            }

            if (count == k) {
                result[0] = numerator;
                result[1] = denominator;
                break;
            }
            else if (count < k) {
                left = mid;
            }
            else {
                right = mid;
            }
        }

        return result;
    }
}


```