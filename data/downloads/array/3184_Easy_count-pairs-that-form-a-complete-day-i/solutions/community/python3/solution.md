# Brute force vs Hashmap Approach detailed explanation

**Author:** muhammadfarhankt
**Votes:** 38
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5319834/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5319834/)

---

# Intuition
- To solve the problem of counting pairs that form a complete day, we can compare two approaches: the brute force method and the hash map (or dictionary) method.

# Approach
## Brute Force Approach
1. Iterate through each pair of elements in the array.
2. For each pair, check if their sum is a multiple of 24.
3. Count the number of valid pairs.
## Hash Map Approach
1. Use a hash map to store the frequency of the remainders when each element is divided by 24.
2. Iterate through the array and for each element, check how many previous elements could pair with it to form a complete day using the stored remainders.
3. Update the hash map with the current element's remainder.

# Complexity
## Brute Force
- Time Complexity: O(n^2) because we check each pair of elements in the array.
- Space Complexity: O(1) since we only use a few extra variables for counting.
## Hash Map
- Time Complexity: O(n) because we iterate through the array once.
- Space Complexity: O(1) as the hash map has at most 24 entries (due to remainders from 0 to 23).

# Code Brute Force approach
```Java []
class Solution {
    public int countCompleteDayPairs(int[] hours) {
        int count = 0;
        int n = hours.length;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if ((hours[i] + hours[j]) % 24 == 0) {
                    ++count;
                }
            }
        }
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int countCompleteDayPairs(vector<int>& hours) {
        int count = 0;
        int n = hours.size();
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if ((hours[i] + hours[j]) % 24 == 0) {
                    ++count;
                }
            }
        }
        return count;
    }
};
```
```Python []
class Solution:
    def countCompleteDayPairs(self, hours: List[int]) -> int:
        count = 0
        n = len(hours)
        for i in range(n):
            for j in range(i + 1, n):
                if (hours[i] + hours[j]) % 24 == 0:
                    count += 1
        return count
```
```Javascript []
/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    let count = 0;
    let n = hours.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((hours[i] + hours[j]) % 24 === 0) {
                count++;
            }
        }
    }
    return count;
};
```
```Golang []
func countCompleteDayPairs(hours []int) int {
    count := 0
    n := len(hours)
    for i := 0; i < n; i++ {
        for j := i + 1; j < n; j++ {
            if (hours[i] + hours[j]) % 24 == 0 {
                count++
            }
        }
    }
    return count
}
```
```Dart []
class Solution {
  int countCompleteDayPairs(List<int> hours) {
    int count = 0;
    int n = hours.length;
    for (int i = 0; i < n; ++i) {
      for (int j = i + 1; j < n; ++j) {
        if ((hours[i] + hours[j]) % 24 == 0) {
          ++count;
        }
      }
    }
    return count;
  }
}
```

# Code Hashmap approach
```Java []
import java.util.HashMap;

class Solution {
    public int countCompleteDayPairs(int[] hours) {
        HashMap<Integer, Integer> remainderCount = new HashMap<>();
        int count = 0;
        for (int hour : hours) {
            int remainder = hour % 24;
            if (remainder == 0) {
                count += remainderCount.getOrDefault(0, 0);
            } else {
                count += remainderCount.getOrDefault(24 - remainder, 0);
            }
            remainderCount.put(remainder, remainderCount.getOrDefault(remainder, 0) + 1);
        }
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int countCompleteDayPairs(vector<int>& hours) {
        unordered_map<int, int> remainder_count;
        int count = 0;
        for (int hour : hours) {
            int remainder = hour % 24;
            if (remainder == 0) {
                count += remainder_count[0];
            } else {
                count += remainder_count[24 - remainder];
            }
            ++remainder_count[remainder];
        }
        return count;
    }
};
```
```Python []
class Solution:
    def countCompleteDayPairs(self, hours: List[int]) -> int:
        from collections import defaultdict
        remainder_count = defaultdict(int)
        count = 0
        for hour in hours:
            remainder = hour % 24
            if remainder == 0:
                count += remainder_count[0]
            else:
                count += remainder_count[24 - remainder]
            remainder_count[remainder] += 1
        return count
```
```Javascript []
/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    let remainderCount = {};
    let count = 0;
    for (let hour of hours) {
        let remainder = hour % 24;
        if (remainder === 0) {
            count += (remainderCount[0] || 0);
        } else {
            count += (remainderCount[24 - remainder] || 0);
        }
        remainderCount[remainder] = (remainderCount[remainder] || 0) + 1;
    }
    return count;
};
```
```Golang []
func countCompleteDayPairs(hours []int) int {
    remainderCount := make(map[int]int)
    count := 0
    for _, hour := range hours {
        remainder := hour % 24
        if remainder == 0 {
            count += remainderCount[0]
        } else {
            count += remainderCount[24 - remainder]
        }
        remainderCount[remainder]++
    }
    return count
}
```
```Dart []
puts 'Hello world!'
```