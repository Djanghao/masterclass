# [ C++ | Java | Kotlin ] Simple binary search solution, detailed explanation, 0 ms, beats 100% 🚀

**Author:** DmitryNekrasov
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6047431/](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6047431/)

---

# Intuition
The key insight is that after removing a subarray to make the remaining elements non-decreasing, the result will consist of two parts:
1. A non-decreasing prefix from the left
2. A non-decreasing suffix from the right

The optimal solution must use some (or all) elements from either/both of these parts. We can find these parts and then use binary search to find the shortest subarray to remove that connects them properly.

# Approach
The solution works in three main steps:

1. **Find the longest non-decreasing prefix:**
```kotlin
var increaseLeftIndex = 0
while (increaseLeftIndex + 1 < arr.size && arr[increaseLeftIndex] <= arr[increaseLeftIndex + 1]) {
    increaseLeftIndex++
}
```
This finds the longest sequence from the left that's already in non-decreasing order.

2. **Find the longest non-decreasing suffix:**
```kotlin
var decreaseRightIndex = n - 1
while (decreaseRightIndex - 1 >= 0 && arr[decreaseRightIndex - 1] <= arr[decreaseRightIndex]) {
    decreaseRightIndex--
}
```
This finds the longest sequence from the right that's already in non-decreasing order.

3. **Binary search for the shortest removable subarray:**
- The `check(value)` function verifies if we can make the array non-decreasing by removing a subarray of length `value`
- For each possible starting position `i`, it checks if removing `value` elements starting at position `i` creates a valid solution
- A valid solution must:
  - Start within the left non-decreasing sequence (`i - 1 <= increaseLeftIndex`)
  - End within the right non-decreasing sequence (`i + value >= decreaseRightIndex`)
  - Maintain non-decreasing order at the connection point (`arr[i - 1] <= arr[i + value]`)

The binary search efficiently finds the minimum length of the subarray we need to remove to satisfy these conditions.

# Complexity
Time Complexity: $$O(n * log(n))$$, where `n` is the length of the array
Space Complexity: $$O(log(n))$$ for stack in binary search

# Code
```cpp []
class Solution {
public:
    int findLengthOfShortestSubarray(vector<int>& arr) {
        int n = arr.size();
        int increaseLeftIndex = 0;
        while (increaseLeftIndex + 1 < arr.size() && arr[increaseLeftIndex] <= arr[increaseLeftIndex + 1]) {
            increaseLeftIndex++;
        }
        
        int decreaseRightIndex = n - 1;
        while (decreaseRightIndex - 1 >= 0 && arr[decreaseRightIndex - 1] <= arr[decreaseRightIndex]) {
            decreaseRightIndex--;
        }
        
        return binSearch(0, n, increaseLeftIndex, decreaseRightIndex, arr);
    }
    
private:
    bool check(int value, int increaseLeftIndex, int decreaseRightIndex, const vector<int>& arr) {
        int n = arr.size();
        for (int i = 0; i <= n - value; i++) {
            if (i - 1 <= increaseLeftIndex && i + value >= decreaseRightIndex &&
                (i == 0 || i + value == n || arr[i - 1] <= arr[i + value])
            ) {
                return true;
            }
        }
        return false;
    }
    
    int binSearch(int left, int right, int increaseLeftIndex, int decreaseRightIndex, const vector<int>& arr) {
        if (left >= right) return right;
        int mid = left + (right - left) / 2;
        return check(mid, increaseLeftIndex, decreaseRightIndex, arr) ?
                    binSearch(left, mid, increaseLeftIndex, decreaseRightIndex, arr) :
                    binSearch(mid + 1, right, increaseLeftIndex, decreaseRightIndex, arr);
    }
};
```
```java []
class Solution {
    public int findLengthOfShortestSubarray(int[] arr) {
        int n = arr.length;
        int increaseLeftIndex = 0;
        while (increaseLeftIndex + 1 < arr.length && arr[increaseLeftIndex] <= arr[increaseLeftIndex + 1]) {
            increaseLeftIndex++;
        }
        
        int decreaseRightIndex = n - 1;
        while (decreaseRightIndex - 1 >= 0 && arr[decreaseRightIndex - 1] <= arr[decreaseRightIndex]) {
            decreaseRightIndex--;
        }
        
        return binSearch(0, n, increaseLeftIndex, decreaseRightIndex, arr);
    }
    
    private boolean check(int value, int increaseLeftIndex, int decreaseRightIndex, int[] arr) {
        int n = arr.length;
        for (int i = 0; i <= n - value; i++) {
            if (i - 1 <= increaseLeftIndex && i + value >= decreaseRightIndex &&
                (i == 0 || i + value == n || arr[i - 1] <= arr[i + value])
            ) {
                return true;
            }
        }
        return false;
    }
    
    private int binSearch(int left, int right, int increaseLeftIndex, int decreaseRightIndex, int[] arr) {
        if (left >= right) return right;
        int mid = left + (right - left) / 2;
        return check(mid, increaseLeftIndex, decreaseRightIndex, arr) ?
                    binSearch(left, mid, increaseLeftIndex, decreaseRightIndex, arr) :
                    binSearch(mid + 1, right, increaseLeftIndex, decreaseRightIndex, arr);
    }
}
```
```kotlin []
class Solution {
    fun findLengthOfShortestSubarray(arr: IntArray): Int {
        var increaseLeftIndex = 0
        while (increaseLeftIndex + 1 < arr.size && arr[increaseLeftIndex] <= arr[increaseLeftIndex + 1]) {
            increaseLeftIndex++
        }
        val n = arr.size
        var decreaseRightIndex = n - 1
        while (decreaseRightIndex - 1 >= 0 && arr[decreaseRightIndex - 1] <= arr[decreaseRightIndex]) {
            decreaseRightIndex--
        }

        fun check(value: Int): Boolean {
            for (i in 0..(n - value)) {
                if (i - 1 <= increaseLeftIndex && i + value >= decreaseRightIndex &&
                    (i == 0 || i + value == n || arr[i - 1] <= arr[i + value])
                ) {
                    return true
                }
            }
            return false
        }

        fun binSearch(left: Int = 0, right: Int = n): Int {
            if (left >= right) return right
            val mid = left + (right - left) / 2
            return if (check(mid)) binSearch(left, mid) else binSearch(mid + 1, right)
        }

        return binSearch()
    }
}
```
![image.png](./images/0.png)
