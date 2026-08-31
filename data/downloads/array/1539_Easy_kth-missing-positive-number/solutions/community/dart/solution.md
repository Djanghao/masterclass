# ✨ SUPER EASY 😂 | BASIC LOOP LIKE LOLLIPOP 🍭| BEATS : 84.62 %  && 100 %🎯|

**Author:** CodeWithSparsh
**Votes:** 3
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/5539931/](https://leetcode.com/problems/kth-missing-positive-number/solutions/5539931/)

---

![image.png](./images/0.png)
To find the k-th missing positive integer from a sorted array of unique positive integers, the problem can be tackled by iterating through the array and keeping track of the number of missing integers up to the current index. Here is a detailed breakdown of the approach:

# Intuition
- The key is to identify the number of integers missing between the elements of the given array.
- By iterating through the array and calculating the difference between the expected and actual values at each position, we can determine how many integers are missing up to that point.
- If we find that the number of missing integers is at least `k`, we can determine the k-th missing integer by considering the position where we would expect the k-th missing integer to be.

# Approach
1. Initialize `missingCount` to 0 and `last` to 0 to keep track of the last observed number.
2. Iterate through the array, calculating the number of missing integers up to each element.
3. If the number of missing integers at the current position is at least `k`, return the position where the k-th missing integer would be.
4. If the end of the array is reached without finding the k-th missing integer, calculate the k-th missing integer based on the last element in the array.

# Complexity
- Time complexity: \\(O(n)\\)
  - We iterate through the array once, where \\(n\\) is the length of the array.
- Space complexity: \\(O(1)\\)
  - We use a constant amount of extra space regardless of the input size.

# Code
```dart
class Solution {
  int findKthPositive(List<int> arr, int k) {
    int missingCount = 0;
    int last = 0;

    for (int i = 0; i < arr.length; i++) {
      int currentMissing = arr[i] - (i + 1);
      if (currentMissing >= k) {
        return i == 0 ? k : last + k - missingCount;
      }
      missingCount = currentMissing;
      last = arr[i];
    }

    return last + k - missingCount;
  }
}
```

This solution iterates through the array and calculates the number of missing integers by comparing the expected and actual values. If the k-th missing integer is found within the array, it returns the appropriate value. If not, it calculates the k-th missing integer based on the last element of the array.


![image.png](./images/1.png)


# Code
```java
class Solution {
    public int findKthPositive(int[] arr, int k) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int missingCount = arr[mid] - (mid + 1);

            if (missingCount < k) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left + k;
    }
}

```
