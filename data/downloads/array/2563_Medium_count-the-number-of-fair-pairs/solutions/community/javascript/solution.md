# Simple and Easy Solution | ✅Beats 100% | Binary Search| C++| Java | Python | JavaScript

**Author:** BijoySingh7
**Votes:** 53
**Link:** [https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/6039050/](https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/6039050/)

---

# Upvote if it helps  
![image.png](./images/0.png)
{:height="30px" width="30px"} 
### *feel free to connect with   [Bijoy Sing ](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/) On Linkedin*

---
# Code

### C++ Code
```cpp
class Solution {
public:
    long long countFairPairs(vector<int>& v, int lower, int upper) {
        long long ans = 0;
        sort(v.begin(), v.end());

        for (int i = 0; i < v.size() - 1; i++) {
            auto up = upper_bound(v.begin() + i + 1, v.end(), upper - v[i]);
            auto low = lower_bound(v.begin() + i + 1, v.end(), lower - v[i]);
            ans += (up - low);
        }
        return ans;
    }
};
```

### Python Code
```python
from bisect import bisect_left, bisect_right

class Solution:
    def countFairPairs(self, v, lower, upper):
        v.sort()
        ans = 0
        for i in range(len(v) - 1):
            low = bisect_left(v, lower - v[i], i + 1)
            up = bisect_right(v, upper - v[i], i + 1)
            ans += up - low
        return ans
```

### Java Code
```java
import java.util.Arrays;

class Solution {
    public long countFairPairs(int[] v, int lower, int upper) {
        Arrays.sort(v);
        long ans = 0;
        for (int i = 0; i < v.length - 1; i++) {
            int low = lowerBound(v, i + 1, v.length, lower - v[i]);
            int up = upperBound(v, i + 1, v.length, upper - v[i]);
            ans += up - low;
        }
        return ans;
    }
  
    private int lowerBound(int[] v, int start, int end, int target) {
        while (start < end) {
            int mid = start + (end - start) / 2;
            if (v[mid] >= target) end = mid;
            else start = mid + 1;
        }
        return start;
    }

    private int upperBound(int[] v, int start, int end, int target) {
        while (start < end) {
            int mid = start + (end - start) / 2;
            if (v[mid] > target) end = mid;
            else start = mid + 1;
        }
        return start;
    }
}
```

### JavaScript Code
```javascript
var countFairPairs = function(v, lower, upper) {
    v.sort((a, b) => a - b);
    let ans = 0;
  
    for (let i = 0; i < v.length - 1; i++) {
        const low = lowerBound(v, lower - v[i], i + 1);
        const up = upperBound(v, upper - v[i], i + 1);
        ans += up - low;
    }
    return ans;
};

function lowerBound(v, target, start) {
    let end = v.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (v[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return start;
}

function upperBound(v, target, start) {
    let end = v.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (v[mid] > target) end = mid;
        else start = mid + 1;
    }
    return start;
}
```

---

### Explanation (Step-by-Step)
1. **Sort the Array**: Sorting the array allows us to efficiently find ranges of valid pairs.
  
2. **Iterate Through Elements**: We loop through each element, considering it as the first item in a pair.

3. **Binary Search for Bounds**: For each element:
   - Use `lower_bound` or equivalent to find the first position in the sorted array where `v[j]` can create a sum greater than or equal to `lower`.
   - Use `upper_bound` to find where `v[j]` exceeds the `upper` limit.
  
4. **Accumulate the Count**: The count of valid pairs for each `v[i]` is the difference between `upper_bound` and `lower_bound`.

# Complexity
- **Time Complexity**: Sorting the array takes \\(O(n \\log n)\\). Each query to find bounds runs in \\(O(\\log n)\\), and we repeat it for each element in the array, resulting in a total time complexity of \\(O(n \\log n)\\).
- **Space Complexity**: \\(O(1)\\), aside from the input, as we only store the result.

---

### *If you have any questions about this solution, please drop a comment! Feel free to connect on LinkedIn if you'd like to discuss coding concepts further.*