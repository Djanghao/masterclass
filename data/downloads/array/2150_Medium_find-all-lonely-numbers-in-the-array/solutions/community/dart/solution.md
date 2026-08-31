# 🟢🔴🟢 Most Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5757383/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5757383/)

---

## Intuition
The problem requires identifying "lonely" numbers in a list. A number is considered lonely if it appears exactly once and no adjacent numbers (i.e., `num - 1` and `num + 1`) are present in the array. The key insight is to count the occurrences of each number and then check if the number meets the loneliness condition.

## Approach

1. **Count the Occurrences**:
   - Use a map (or hash table) to store the frequency of each number in the array.

2. **Check for Lonely Numbers**:
   - Iterate through the map. For each key-value pair, if the value is `1` (i.e., the number appears only once), check whether the numbers adjacent to it (i.e., `key - 1` and `key + 1`) are absent from the map.

3. **Return the List of Lonely Numbers**:
   - If a number satisfies both conditions (appears once and has no adjacent numbers), add it to the result list.

## Complexity

- **Time Complexity**: $$O(n)$$, where `n` is the number of elements in the input list. We iterate through the list once to count occurrences and then again to identify lonely numbers.
  
- **Space Complexity**: $$O(n)$$, as we store the frequencies of each element in the map.

## Example Walkthrough

### Example 1
- **Input**: `nums = [10, 6, 5, 8]`
- **Output**: `[10, 8]`

#### Step-by-Step Execution:
1. Count the occurrences:
   - `10`: appears `1` time
   - `6`: appears `1` time
   - `5`: appears `1` time
   - `8`: appears `1` time
2. Check for lonely numbers:
   - `10`: Lonely (no `9` or `11`)
   - `6`: Not lonely (has `5`)
   - `5`: Not lonely (has `6`)
   - `8`: Lonely (no `7` or `9`)
3. Return the lonely numbers: `[10, 8]`.

### Example 2
- **Input**: `nums = [1, 3, 5, 3]`
- **Output**: `[1, 5]`

#### Step-by-Step Execution:
1. Count the occurrences:
   - `1`: appears `1` time
   - `3`: appears `2` times
   - `5`: appears `1` time
2. Check for lonely numbers:
   - `1`: Lonely (no `0` or `2`)
   - `3`: Not lonely (appears twice)
   - `5`: Lonely (no `4` or `6`)
3. Return the lonely numbers: `[1, 5]`.

## Code
```dart
class Solution {
  List<int> findLonely(List<int> nums) {
    Map<int, int> map = {};
    List<int> lonelyNums = [];

    nums.forEach((num) {
      map.update(num, (value) => value + 1, ifAbsent: () => 1);
    });

    map.forEach((key, value) {
      if (value == 1) {
        if (!map.containsKey(key - 1) && !map.containsKey(key + 1)) {
          lonelyNums.add(key);
        }
      }
    });

    return lonelyNums;
  }
}
