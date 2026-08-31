# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 4
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6138423/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6138423/)

---

![image.png](./images/0.png)


---

# Intuition
The problem involves repeatedly reducing the largest gift's value by replacing it with its square root, up to \\(k\\) times. After all operations, the total sum of the modified gifts needs to be calculated. The idea is to prioritize reducing the largest gift repeatedly, which can be efficiently managed with sorting or a max-heap.

---

# Approach
1. **Sort the gifts**: Initially, sort the list to easily access the largest gift.
2. **Iterate for \\(k\\) operations**: Replace the largest value with its integer square root and then re-sort the list to maintain access to the new largest value.
3. **Sum the remaining values**: After completing the \\(k\\) operations, calculate the sum of the modified array.

---

# Complexity
- **Time Complexity**:  
  Sorting the array after every operation costs \\(O(k \\cdot n \\log n)\\). Thus, the total complexity is \\(O(k \\cdot n \\log n)\\).

- **Space Complexity**:  
  The space complexity is \\(O(1)\\) for in-place sorting and operations, assuming no additional data structures are used.

---


```dart []
import 'dart:math';

class Solution {
  int pickGifts(List<int> gifts, int k) {
    gifts.sort();
    int n = gifts.length;
    int ans = 0;

    for (int i = 0; i < k; i++) {
      gifts[n - 1] = sqrt(gifts[n - 1]).toInt();
      gifts.sort();
    }

    for (int gift in gifts) {
      ans += gift;
    }
    return ans;
  }
}
```


```python []
import math

class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        gifts.sort()
        n = len(gifts)

        for _ in range(k):
            gifts[-1] = int(math.sqrt(gifts[-1]))
            gifts.sort()

        return sum(gifts)
```


```cpp []
#include <vector>
#include <cmath>
#include <algorithm>

class Solution {
public:
    int pickGifts(std::vector<int>& gifts, int k) {
        std::sort(gifts.begin(), gifts.end());
        int n = gifts.size();

        for (int i = 0; i < k; i++) {
            gifts[n - 1] = std::sqrt(gifts[n - 1]);
            std::sort(gifts.begin(), gifts.end());
        }

        int ans = 0;
        for (int gift : gifts) {
            ans += gift;
        }
        return ans;
    }
};
```


```java []
import java.util.Arrays;

class Solution {
    public int pickGifts(int[] gifts, int k) {
        Arrays.sort(gifts);
        int n = gifts.length;

        for (int i = 0; i < k; i++) {
            gifts[n - 1] = (int) Math.sqrt(gifts[n - 1]);
            Arrays.sort(gifts);
        }

        int ans = 0;
        for (int gift : gifts) {
            ans += gift;
        }
        return ans;
    }
}
```


```javascript []
var pickGifts = function(gifts, k) {
    gifts.sort((a, b) => a - b);

    for (let i = 0; i < k; i++) {
        gifts[gifts.length - 1] = Math.floor(Math.sqrt(gifts[gifts.length - 1]));
        gifts.sort((a, b) => a - b);
    }

    return gifts.reduce((sum, gift) => sum + gift, 0);
};
```


```go []
import (
	"math"
	"sort"
)

func pickGifts(gifts []int, k int) int {
	sort.Ints(gifts)
	n := len(gifts)

	for i := 0; i < k; i++ {
		gifts[n-1] = int(math.Sqrt(float64(gifts[n-1])))
		sort.Ints(gifts)
	}

	ans := 0
	for _, gift := range gifts {
		ans += gift
	}
	return ans
}
```

---

![image.png](./images/1.png) {:style='width:250px'}