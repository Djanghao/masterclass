# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6118916/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6118916/)

---

![image.png](./images/0.png)


---

# Intuition
The problem requires us to maximize the count of numbers chosen from \\(1\\) to \\(n\\) without exceeding a given maximum sum (\\(maxSum\\)), while also avoiding a set of banned numbers. The key is to iteratively pick numbers in ascending order (starting from \\(1\\)), skipping banned numbers, and stopping when adding the next number exceeds \\(maxSum\\).

---

# Approach
1. **Use a Set for Banned Numbers:**  
   Convert the list of banned numbers into a set for efficient lookups (\\(O(1)\\) average time complexity for checking membership).

2. **Iterate Through Numbers:**  
   Start iterating from \\(1\\) to \\(n\\). For each number:
   - Skip the number if it is in the banned set.
   - Check if adding the current number to the running sum exceeds \\(maxSum\\). If yes, stop the process.
   - Otherwise, add the number to the sum and increment the count of numbers selected.

3. **Return the Count:**  
   Once the iteration ends (either because the sum limit is reached or \\(n\\) is exceeded), return the count of valid numbers.

---

# Complexity
- **Time complexity:**  
  $$O(n)$$ \u2014 We iterate through numbers from \\(1\\) to \\(n\\), and checking membership in the set takes \\(O(1)\\) for each number.

- **Space complexity:**  
  $$O(b)$$ \u2014 Space required to store the banned numbers in a set, where \\(b\\) is the size of the banned list.

---


```dart []
class Solution {
  int maxCount(List<int> banned, int n, int maxSum) {
    // Use a set for efficient lookups
    Set<int> bannedSet = banned.toSet();

    // Iterate through numbers 1 to n
    int sum = 0, count = 0;
    for (int i = 1; i <= n; i++) {
      // Skip banned numbers
      if (bannedSet.contains(i)) continue;

      // Check if adding the current number exceeds maxSum
      if (sum + i > maxSum) break;

      sum += i;
      count++;
    }

    return count;
  }
}
```


```python []
class Solution:
    def maxCount(self, banned, n, maxSum):
        banned_set = set(banned)  # Use a set for efficient lookups
        total_sum, count = 0, 0

        for i in range(1, n + 1):
            if i in banned_set:  # Skip banned numbers
                continue
            if total_sum + i > maxSum:  # Stop if maxSum is exceeded
                break
            total_sum += i
            count += 1

        return count
```


```javascript []
var maxCount = function(banned, n, maxSum) {
    const bannedSet = new Set(banned); // Use a set for efficient lookups
    let sum = 0, count = 0;

    for (let i = 1; i <= n; i++) {
        if (bannedSet.has(i)) continue; // Skip banned numbers
        if (sum + i > maxSum) break; // Stop if maxSum is exceeded
        sum += i;
        count++;
    }

    return count;
};
```


```java []
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int maxCount(int[] banned, int n, int maxSum) {
        Set<Integer> bannedSet = new HashSet<>();
        for (int num : banned) bannedSet.add(num);

        int sum = 0, count = 0;
        for (int i = 1; i <= n; i++) {
            if (bannedSet.contains(i)) continue; // Skip banned numbers
            if (sum + i > maxSum) break; // Stop if maxSum is exceeded
            sum += i;
            count++;
        }

        return count;
    }
}
```


```cpp []
#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
    int maxCount(vector<int>& banned, int n, int maxSum) {
        unordered_set<int> bannedSet(banned.begin(), banned.end());
        int sum = 0, count = 0;

        for (int i = 1; i <= n; i++) {
            if (bannedSet.count(i)) continue; // Skip banned numbers
            if (sum + i > maxSum) break; // Stop if maxSum is exceeded
            sum += i;
            count++;
        }

        return count;
    }
};
```


```go []
func maxCount(banned []int, n int, maxSum int) int {
    bannedSet := make(map[int]bool)
    for _, num := range banned {
        bannedSet[num] = true
    }

    sum, count := 0, 0
    for i := 1; i <= n; i++ {
        if bannedSet[i] { // Skip banned numbers
            continue
        }
        if sum+i > maxSum { // Stop if maxSum is exceeded
            break
        }
        sum += i
        count++
    }

    return count
}
```
---

![image.png](./images/1.png) {:style='width:250px'}