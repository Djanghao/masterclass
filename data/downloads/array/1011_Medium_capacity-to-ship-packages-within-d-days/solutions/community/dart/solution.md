# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/5860101/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/5860101/)

---

![image.png](./images/0.png)

---

# Intuition
We need to find the minimum possible capacity of a ship such that we can ship all packages within a given number of days. The brute-force solution of trying every capacity is inefficient, so we use binary search to optimize this process.

---

# Approach
- **Step 1**: Binary search over the capacity of the ship. The minimum capacity is the maximum weight in the array (as the ship needs to carry at least the heaviest package), and the maximum capacity is the sum of all weights (carrying all packages in one day).
- **Step 2**: For each mid-point in the binary search, check if it's feasible to ship the packages within the given number of days using that capacity (`canShip` function).
- **Step 3**: Adjust the binary search bounds based on whether the current mid-point capacity is feasible.

---

# Complexity
- **Time Complexity**: \\(O(n \\log S)\\), where \\(n\\) is the number of weights and \\(S\\) is the difference between the maximum weight and the total sum of weights.
- **Space Complexity**: \\(O(1)\\), as we only use a few extra variables.

---

```dart []
class Solution {
  int shipWithinDays(List<int> weights, int days) {
    int left = weights.reduce((a, b) => a > b ? a : b); // max weight
    int right = weights.reduce((a, b) => a + b); // sum of all weights
    int sol = right;

    while (right > left) {
      int mid = left + ((right - left) / 2).toInt();
      if (canShip(weights, mid, days)) {
        right = mid;
        sol = mid;
      } else {
        left = mid + 1;
      }
    }

    return sol;
  }

  bool canShip(List<int> weights, int capacity, int days) {
    int currentLoad = 0;
    int requiredDays = 1;

    for (int weight in weights) {
      if (currentLoad + weight > capacity) {
        requiredDays++;
        currentLoad = 0;
      }
      currentLoad += weight;
    }

    return requiredDays <= days;
  }
}
```

```c []
#include <stdio.h>
#include <stdbool.h>

int max(int a, int b) {
    return a > b ? a : b;
}

int sum(int* arr, int n) {
    int total = 0;
    for (int i = 0; i < n; i++) {
        total += arr[i];
    }
    return total;
}

bool canShip(int* weights, int n, int capacity, int days) {
    int currentLoad = 0, requiredDays = 1;
    for (int i = 0; i < n; i++) {
        if (currentLoad + weights[i] > capacity) {
            requiredDays++;
            currentLoad = 0;
        }
        currentLoad += weights[i];
    }
    return requiredDays <= days;
}

int shipWithinDays(int* weights, int n, int days) {
    int left = 0, right = sum(weights, n), sol = right;

    for (int i = 0; i < n; i++) {
        left = max(left, weights[i]);
    }

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (canShip(weights, n, mid, days)) {
            right = mid;
            sol = mid;
        } else {
            left = mid + 1;
        }
    }

    return sol;
}
```

```cpp []
#include <vector>
#include <numeric>
#include <algorithm>

class Solution {
public:
    int shipWithinDays(std::vector<int>& weights, int days) {
        int left = *std::max_element(weights.begin(), weights.end());
        int right = std::accumulate(weights.begin(), weights.end(), 0);
        int sol = right;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (canShip(weights, mid, days)) {
                right = mid;
                sol = mid;
            } else {
                left = mid + 1;
            }
        }

        return sol;
    }

    bool canShip(std::vector<int>& weights, int capacity, int days) {
        int currentLoad = 0, requiredDays = 1;
        for (int weight : weights) {
            if (currentLoad + weight > capacity) {
                requiredDays++;
                currentLoad = 0;
            }
            currentLoad += weight;
        }
        return requiredDays <= days;
    }
};
```

```java []
class Solution {
    public int shipWithinDays(int[] weights, int days) {
        int left = 0, right = 0;
        for (int weight : weights) {
            left = Math.max(left, weight);
            right += weight;
        }

        int sol = right;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (canShip(weights, mid, days)) {
                right = mid;
                sol = mid;
            } else {
                left = mid + 1;
            }
        }

        return sol;
    }

    private boolean canShip(int[] weights, int capacity, int days) {
        int currentLoad = 0, requiredDays = 1;
        for (int weight : weights) {
            if (currentLoad + weight > capacity) {
                requiredDays++;
                currentLoad = 0;
            }
            currentLoad += weight;
        }
        return requiredDays <= days;
    }
}
```

```javascript []
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);
    let sol = right;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (canShip(weights, mid, days)) {
            right = mid;
            sol = mid;
        } else {
            left = mid + 1;
        }
    }

    return sol;
};

function canShip(weights, capacity, days) {
    let currentLoad = 0;
    let requiredDays = 1;
    
    for (const weight of weights) {
        if (currentLoad + weight > capacity) {
            requiredDays++;
            currentLoad = 0;
        }
        currentLoad += weight;
    }
    
    return requiredDays <= days;
}
```

```python []
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        left, right = max(weights), sum(weights)
        sol = right

        while left < right:
            mid = (left + right) // 2
            if self.canShip(weights, mid, days):
                right = mid
                sol = mid
            else:
                left = mid + 1
        
        return sol

    def canShip(self, weights: List[int], capacity: int, days: int) -> bool:
        currentLoad, requiredDays = 0, 1
        for weight in weights:
            if currentLoad + weight > capacity:
                requiredDays += 1
                currentLoad = 0
            currentLoad += weight
        return requiredDays <= days
```

```go []
func shipWithinDays(weights []int, days int) int {
    left, right := max(weights), sum(weights)
    sol := right

    for left < right {
        mid := left + (right-left)/2
        if canShip(weights, mid, days) {
            right = mid
            sol = mid
        } else {
            left = mid + 1
        }
    }

    return sol
}

func max(weights []int) int {
    maxWeight := weights[0]
    for _, weight := range weights {
        if weight > maxWeight {
            maxWeight = weight
        }
    }
    return maxWeight
}

func sum(weights []int) int {
    total := 0
    for _, weight := range weights {
        total += weight
    }
    return total
}

func canShip(weights []int, capacity int, days int) bool {
    currentLoad, requiredDays := 0, 1
    for _, weight := range weights {
        if currentLoad+weight > capacity {
            requiredDays++
            currentLoad = 0
        }
        currentLoad += weight
    }
    return requiredDays <= days
}
```

![image.png](./images/1.png) {:style='width:250px'}ible to ship within the specified days using the current capacity.