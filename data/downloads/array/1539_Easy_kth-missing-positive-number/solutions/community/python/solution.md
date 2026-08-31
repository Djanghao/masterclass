# 🔥Easy Solutions in Java 📝, Python 🐍, and C++ 🖥️🧐Look at once 💻

**Author:** Vikas-Pathak-123
**Votes:** 200
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/3262096/](https://leetcode.com/problems/kth-missing-positive-number/solutions/3262096/)

---

# Intuition:
The problem is asking to find the kth missing positive integer in a strictly increasing array of positive integers. We can use binary search to find the index of the kth missing positive
integer in the array.

# Approach:
- We can use binary search to find the index `i` such that the number of missing positive integers before index `i` is equal to `k`. If the number of missing positive integers before index `i` is less than `k`, we need to search the right half of the array. If the number of missing positive integers before index `i` is greater than or equal to `k`, we need to search the left half of the array.

- To find the number of missing positive integers before index `i`, we can use the formula `arr[i] - i - 1`, which represents the difference between the actual value of the element at index `i` and the expected value of the element at index `i` in a complete array of all positive integers.

- Once we find the index i, we can return the kth missing positive integer, which is equal to `arr[i] + k - (arr[i] - i - 1)`.

# Complexity:
- Time complexity: $$O(log n)$$, where n is the length of the input array. We are using binary search to find the index of the kth missing positive integer, which takes logarithmic time.
- Space complexity: $$O(1)$$. We are using constant extra space to store the left and right pointers in binary search.

Overall, the time complexity is optimal, and the space complexity is minimal.


![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
```java []
class Solution {
    public int findKthPositive(int[] arr, int k) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] - mid - 1 < k) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left + k;
    }
}

```
```python []
class Solution(object):
    def findKthPositive(self, arr, k):
        """
        :type arr: List[int]
        :type k: int
        :rtype: int
        """
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] - mid - 1 < k:
                left = mid + 1
            else:
                right = mid - 1
        return left + k


```
```C++ []
class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        int left = 0, right = arr.size() - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] - mid - 1 < k) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left + k;
    }
};

```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```