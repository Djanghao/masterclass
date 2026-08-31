# 🔥SIMPILL💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6085380/](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6085380/)

---

### Intuition
The problem asks us to distribute quantities among `n` stores while minimizing the maximum number of items any store receives. The goal is to find the smallest maximum load a store will have to take if the quantities are optimally distributed.

### Approach
1. **Initial Setup**: 
   - The minimum possible value for the maximum number of items a store can take is `1` (if we distribute optimally), and the maximum possible value is the largest quantity in the list (if all quantities were assigned to one store).
   
2. **Binary Search**:
   - Use binary search to find the smallest possible "maximum load" that can satisfy the condition. 
   - The idea is to check for each mid value (candidate for the max load) whether it is feasible to distribute quantities such that no store exceeds this value. 
   
3. **Feasibility Check**:
   - For a given candidate maximum load (mid), check if the total number of stores needed to distribute all quantities without exceeding this load is less than or equal to `n`.
   - This is done by calculating how many stores are needed for each quantity. For each quantity, the number of stores required is the ceiling of the division of the quantity by the max load.

4. **Binary Search Process**:
   - If it is feasible to distribute the quantities with the current mid value as the max load, then try a smaller value (move left).
   - Otherwise, try a larger value (move right).

### Complexity
- **Time complexity**:
  - Binary search takes \\(O(\\log(\	ext{max quantity}))\\) steps, and for each step, we iterate through the quantities to check feasibility, which takes \\(O(m)\\), where \\(m\\) is the number of quantities. 
  - So, the total time complexity is \\(O(m \\log(\	ext{max quantity}))\\).
  
- **Space complexity**:
  - The space complexity is \\(O(1)\\) as we only use a few extra variables for the binary search and feasibility checks.

### Code

```dart []
class Solution {
  int minimizedMaximum(int n, List<int> quantities) {
    int sol = quantities.reduce(max);
    int start = 1;
    int end = sol;
    while (end >= start) {
      int mid = start + (end - start) ~/ 2;
      if (canDistribute(quantities, mid, n)) {
        end = mid - 1;
        sol = mid;
      } else {
        start = mid + 1;
      }
    }
    return sol;
  }

  bool canDistribute(List<int> q, int k, int max) {
    int count = 0;
    for (int n in q) {
      count += (n / k).ceil();
    }
    return count <= max;
  }
}
```

```java []
import java.util.*;

class Solution {
    public int minimizedMaximum(int n, List<Integer> quantities) {
        int maxQuantity = Collections.max(quantities);
        int start = 1, end = maxQuantity;
        int result = maxQuantity;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (canDistribute(quantities, mid, n)) {
                result = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return result;
    }

    private boolean canDistribute(List<Integer> quantities, int maxLoad, int n) {
        int count = 0;
        for (int quantity : quantities) {
            count += (int) Math.ceil((double) quantity / maxLoad);
        }
        return count <= n;
    }
}
```

```javascript []
var minimizedMaximum = function(n, quantities) {
    let maxQuantity = Math.max(...quantities);
    let start = 1, end = maxQuantity;
    let result = maxQuantity;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (canDistribute(quantities, mid, n)) {
            result = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return result;
};

function canDistribute(quantities, maxLoad, n) {
    let count = 0;
    for (let quantity of quantities) {
        count += Math.ceil(quantity / maxLoad);
    }
    return count <= n;
}
```

```python []
import math

def minimizedMaximum(n, quantities):
    max_quantity = max(quantities)
    start, end = 1, max_quantity
    result = max_quantity

    while start <= end:
        mid = start + (end - start) // 2
        if canDistribute(quantities, mid, n):
            result = mid
            end = mid - 1
        else:
            start = mid + 1

    return result

def canDistribute(quantities, maxLoad, n):
    count = 0
    for quantity in quantities:
        count += math.ceil(quantity / maxLoad)
    return count <= n
```

```cpp []
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

class Solution {
public:
    int minimizedMaximum(int n, vector<int>& quantities) {
        int maxQuantity = *max_element(quantities.begin(), quantities.end());
        int start = 1, end = maxQuantity;
        int result = maxQuantity;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (canDistribute(quantities, mid, n)) {
                result = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return result;
    }

    bool canDistribute(vector<int>& quantities, int maxLoad, int n) {
        int count = 0;
        for (int quantity : quantities) {
            count += ceil((double) quantity / maxLoad);
        }
        return count <= n;
    }
};
```

```go []
import "math"

func minimizedMaximum(n int, quantities []int) int {
    maxQuantity := 0
    for _, quantity := range quantities {
        if quantity > maxQuantity {
            maxQuantity = quantity
        }
    }

    start, end := 1, maxQuantity
    result := maxQuantity

    for start <= end {
        mid := start + (end-start)/2
        if canDistribute(quantities, mid, n) {
            result = mid
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return result
}

func canDistribute(quantities []int, maxLoad, n int) bool {
    count := 0
    for _, quantity := range quantities {
        count += int(math.Ceil(float64(quantity) / float64(maxLoad)))
    }
    return count <= n
}
```

---
![image.png](./images/0.png) {:style='width:250px'}