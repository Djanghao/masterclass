# Easy to understand || Pseudo code diagram || Have fun!

**Author:** Cosmic_Phantom
**Votes:** 43
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289180/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289180/)

---

#### Intuition/Flow chart
The first element of the sorted array is set to 1, satisfying the first condition of our question.

For the remaining elements, beginning with the second one, ensure that each next element is at least one more than the previous element. This will ensure that the absolute difference between consecutive elements is at most 1.

Finally, return the last element in this modified array, representing the maximum possible value.

```CSS
+------------------+
| Sort array       |
| in ascending     |
| order            |
+------------------+
          |
          v
+------------------+
| Set first        |
| element to 1     |
+------------------+
          |
          v
+------------------+
| For each element |
| from the second  |
| one to the end:  |
|  +--------------+|
|  |  Check if    ||
|  |  |abs diff|  ||
|  |  | > 1    |  ||
|  +--------------+|
|        |         |
|        v         |
|  +--------------+|
|  | Adjust       ||
|  | current elem ||
|  | to be at     ||
|  | least one    ||
|  | more than    ||
|  | previous     ||
|  | element      ||
|  +--------------+|
|        |         |
|        v         |
+------------------+
| Return last elem |
| of modified array|
+------------------+
```

### CPP

```cpp
class Solution {
public:
    int maximumElementAfterDecrementingAndRearranging(vector<int>& arr) {
        sort(arr.begin(),arr.end());
        arr[0] = 1; // first condition

        for (int i = 1; i < arr.size(); ++i) {
            if (abs(arr[i] - arr[i - 1]) <= 1) continue; // purposely wrote for understanding
            else arr[i] = arr[i - 1] + 1; // second condition   
        }

        return arr.back(); // returns a reference to the last element
    }
};
```

### Java

```java
class Solution {
    public int maximumElementAfterDecrementingAndRearranging(int[] arr) {
        Arrays.sort(arr);
        arr[0] = 1; // first condition

        for (int i = 1; i < arr.length; ++i) {
            if (Math.abs(arr[i] - arr[i - 1]) <= 1) {
                continue; // purposely wrote for understanding
            } else {
                arr[i] = arr[i - 1] + 1; // second condition
            }
        }

        return arr[arr.length - 1]; 
    }
}
```

### Python

```py
class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr):
        arr.sort()
        arr[0] = 1  # first condition

        for i in range(1, len(arr)):
            if abs(arr[i] - arr[i - 1]) <= 1:
                continue  # purposely wrote for understanding
            else:
                arr[i] = arr[i - 1] + 1  # second condition

        return arr[-1]  
```
