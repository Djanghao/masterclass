# Map(Dictionary) remainder method explained in detail O(n) & O(1)

**Author:** muhammadfarhankt
**Votes:** 24
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5319980/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/solutions/5319980/)

---

# Intuition
- To solve this problem efficiently, we can use modular arithmetic. The key observation is that for two numbers to sum to a multiple of 24, their remainders when divided by 24 must also sum to 24 (or 0 in case of exact multiples of 24). This allows us to use a hash map to track the frequency of remainders and find pairs efficiently.

# Approach
1. **Calculate Remainders:** For each element in the array, compute its remainder when divided by 24. This remainder represents how much this element needs to complete a multiple of 24 with another element.
2. **Use a Hash Map:** Use a hash map to store the frequency of each remainder. The key will be the remainder, and the value will be the count of how many times this remainder has been seen.
3. **Find Complementary Pairs:** For each element, determine the complement remainder that, when added to the current remainder, sums to 24. Check if this complement exists in the hash map and count how many such pairs can be formed.
4. **Update the Hash Map:** After checking for pairs, update the hash map to include the current remainder.

## The % 24 is used to handle the case where rem is 0. When rem is 0, we want the complement to also be 0 because 24 - 0 equals 24, and 24 % 24 gives 0. Without the % 24, we would get 24 instead of 0. Since remainders and complements are always between 0 and 23, using % 24 ensures the complement is always within the correct range.

# Complexity
- Time complexity: O(n), We iterate through the array once, and hash map operations (insert and lookup) are average O(1).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1), The hash map will have at most 24 entries, as remainders range from 0 to 23.

# Code Hashmap approach
```Java []
class Solution {
    public long countCompleteDayPairs(int[] hours) {
        HashMap<Integer, Integer> seenMap = new HashMap<>();
        long count = 0;

        for (int hour : hours) {
            int rem = hour % 24;
            int complement = (24 - rem) % 24;
            if (seenMap.containsKey(complement)) {
                count += seenMap.get(complement);
            }
            seenMap.put(rem, seenMap.getOrDefault(rem, 0) + 1);
        }

        return count;
    }
}
```
```C++ []
class Solution {
public:
    long long countCompleteDayPairs(vector<int>& hours) {
        unordered_map<int, int> seenMap;
        long long count = 0;

        for (int hour : hours) {
            int rem = hour % 24;
            int complement = (24 - rem) % 24;
            if (seenMap.find(complement) != seenMap.end()) {
                count += seenMap[complement];
            }
            seenMap[rem]++;
        }

        return count;
    }
};
```
```Python []
class Solution:
    def countCompleteDayPairs(self, hours: List[int]) -> int:
        seen_map = {}
        count = 0

        for hour in hours:
            rem = hour % 24
            complement = (24 - rem) % 24
            if complement in seen_map:
                count += seen_map[complement]
            seen_map[rem] = seen_map.get(rem, 0) + 1

        return count
```
```Javascript []
/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    const seenMap = new Map();
    let count = 0;

    hours.forEach(hour => {
        const rem = hour % 24;
        const complement = (24 - rem) % 24;

        if (seenMap.has(complement)) {
            count += seenMap.get(complement);
        }
        seenMap.set(rem, (seenMap.get(rem) || 0) + 1);
    });

    return count;
};
```
```Golang []
func countCompleteDayPairs(hours []int) int64 {
    seenMap := make(map[int]int)
    var count int64

    for _, hour := range hours {
        rem := hour % 24
        complement := (24 - rem) % 24

        if complementCount, found := seenMap[complement]; found {
            count += int64(complementCount)
        }
        seenMap[rem]++
    }

    return count
}
```
```Dart []
class Solution {
  int countCompleteDayPairs(List<int> hours) {
    Map<int, int> seenMap = {};
    int count = 0;

    for (int hour in hours) {
      int rem = hour % 24;
      int complement = (24 - rem) % 24;

      if (seenMap.containsKey(complement)) {
        count += seenMap[complement]!;
      }
      seenMap[rem] = (seenMap[rem] ?? 0) + 1;
    }

    return count;
  }
}
```