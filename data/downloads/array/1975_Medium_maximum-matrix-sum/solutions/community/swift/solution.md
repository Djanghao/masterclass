# [Swift, C++, Python] Very simple with explanation. 0ms 100%

**Author:** evkobak
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-matrix-sum/solutions/6078986/](https://leetcode.com/problems/maximum-matrix-sum/solutions/6078986/)

---

# Intuition
Can we convert all numbers from negative to positive? Yes, but only if there are an even number of negative numbers. If there are an odd number of negatives, then one number must remain negative. However, if we have a positive number with absolute value is less than that of a negative number, we can swap them. 

*For example:*
The smallest negative value is -5, and the smallest positive value is 1. They will become 5 and -1 respectively.

# Approach
Simply convert all values to positive and calculate their sum. We need to keep track of whether there are an odd or even number of initial negative values. Additionally, we need to identify the smallest value in our array, as if there were an odd count of negative values, this smallest value needs to be subtracted from the total sum. (Two times, because we added it before, and now its negative)

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

![Screenshot 2024-11-24 153341.png](./images/0.png)

# Code Swift
```swift []
class Solution {
    func maxMatrixSum(_ matrix: [[Int]]) -> Int {
        var m = Int.max
        var even = true
        var sum = 0

        for y in 0 ..< matrix.count {
            for x in 0 ..< matrix.count {
                if matrix[y][x] < 0 {
                    even = !even
                }
                var n = matrix[y][x] < 0 ? -1 * matrix[y][x] : matrix[y][x]
                m = min(m,n)
                sum += n
            }
        }

        if !even {
            sum -= m * 2
        }

        return sum
    }
}
```

# Code C++
```cpp []
class Solution {
public:
    long long maxMatrixSum(vector<vector<int>>& matrix) {
        int m = INT32_MAX;
        int even = true;
        long long sum = 0;

        for (int y = 0; y < matrix.size(); y++)
        {
            for (int x = 0; x < matrix.size(); x++)
            {
                if (matrix[y][x] < 0)
                    even = !even;
                int n = matrix[y][x] < 0 ? -1 * matrix[y][x] : matrix[y][x];
                m = min(m,n);
                sum += n;
            }
        }

        if (!even)
            sum -= m * 2;

        return sum;
    }
};
```

# Code Python3
```python3 []
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        m = 100000
        even = True
        sum = 0

        for y in range(len(matrix)):
            for x in range(len(matrix)):
                if matrix[y][x] < 0:
                    even = not even
                n = abs(matrix[y][x])
                m = min(m,n)
                sum += n

        if not even:
            sum -= m * 2

        return sum
```



