# 0ms || Fastest execution || beats 100% uses with java & C++ || Binary Search ||

**Author:** SanketSawant18
**Votes:** 3
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137569/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137569/)

---

# Approach

- Binary Search
- Sliding Window
- Tracking Maximum Fraction

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Explanation
1. The method kthSmallestPrimeFraction takes an integer array arr and an integer k as input and returns an integer array of size 2.
1. It initializes variables left and right representing the range of possible fractions. left starts from 0 and right starts from 1.
1. The method enters a while loop which continues until left is less than or equal to right.
1. In each iteration of the loop, it calculates the mid value which is the midpoint of the range between left and right.
1. Inside the loop, it iterates over the elements of the array arr. For each element arr[i], it finds the index j such that arr[i] > arr[j] * mid. This is done using a nested while loop.
1. It calculates the total count of fractions less than or equal to mid by subtracting j from the length of the array and accumulating this count in the variable total.
1. It also keeps track of the maximum fraction (maxFrac) found so far, along with the corresponding numerator (num) and denominator (den) indices.
1. After processing all elements of the array, it checks if the total count equals k. If so, it sets the result array res to contain the numerator and denominator corresponding to the maxFrac and breaks out of the loop.
1. If total is greater than k, it adjusts the range by setting right to mid; otherwise, it sets left to mid.
1. Finally, it returns the result array res, which contains the numerator and denominator of the kth smallest fraction. If k is not found exactly, it returns the fraction closest to the kth smallest.

---

```java []
import java.util.*;

class Solution {
    public int[] kthSmallestPrimeFraction(int[] arr, int k) {
        int n = arr.length;
        double left = 0, right = 1;
        int[] res = new int[2];

        while (left <= right) {
            double mid = left + (right - left) / 2;
            int j = 1, total = 0, num = 0, den = 0;
            double maxFrac = 0;
            for (int i = 0; i < n; i++) {
                while (j < n && arr[i] > arr[j] * mid) {
                    j++;
                }
                total += n - j;
                if (j < n && maxFrac < arr[i] * 1.0 / arr[j]) {
                    maxFrac = arr[i] * 1.0 / arr[j];
                    num = i;
                    den = j;
                }
            }
            if (total == k) {
                res[0] = arr[num];
                res[1] = arr[den];
                break;
            }
            if (total > k) {
                right = mid;
            } else {
                left = mid;
            }
        }
        return res;
    }
}

```
```C++ []
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> kthSmallestPrimeFraction(vector<int>& arr, int k) {
        int n = arr.size();
        double left = 0, right = 1;
        vector<int> res(2);

        while (left <= right) {
            double mid = left + (right - left) / 2;
            int j = 1, total = 0, num = 0, den = 0;
            double maxFrac = 0;
            for (int i = 0; i < n; i++) {
                while (j < n && arr[i] > arr[j] * mid) {
                    j++;
                }
                total += n - j;
                if (j < n && maxFrac < arr[i] * 1.0 / arr[j]) {
                    maxFrac = arr[i] * 1.0 / arr[j];
                    num = i;
                    den = j;
                }
            }
            if (total == k) {
                res[0] = arr[num];
                res[1] = arr[den];
                break;
            }
            if (total > k) {
                right = mid;
            } else {
                left = mid;
            }
        }
        return res;
    }
};

```
```python3 []
class Solution:
    def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
        n = len(arr)
        left, right = 0, 1
        res = []

        while left <= right:
            mid = left + (right - left) / 2
            j, total, num, den = 1, 0, 0, 0
            maxFrac = 0
            for i in range(n):
                while j < n and arr[i] > arr[j] * mid:
                    j += 1
                
                total += n - j

                if j < n and maxFrac < arr[i] * 1.0 / arr[j]:
                    maxFrac = arr[i] * 1.0 / arr[j]
                    num, den = i, j

            if total == k:
                res = [arr[num], arr[den]]
                break

            if total > k:
                right = mid
            else:
                left = mid

        return res
```
```typescript []
function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
     let left = 0, right = 1;
        let res: number[] = [];

        while (left <= right) {
            let mid = left + (right - left) / 2;
            let j = 1, total = 0, num = 0, den = 0;
            let maxFrac = 0;
            const n = arr.length;
            for (let i = 0; i < n; i++) {
                while (j < n && arr[i] > arr[j] * mid) {
                    j++;
                }
                total += n - j;
                if (j < n && maxFrac < arr[i] * 1.0 / arr[j]) {
                    maxFrac = arr[i] * 1.0 / arr[j];
                    num = i;
                    den = j;
                }
            }
            if (total === k) {
                res = [arr[num], arr[den]];
                break;
            }
            if (total > k) {
                right = mid;
            } else {
                left = mid;
            }
        }
        return res;
    };

```
