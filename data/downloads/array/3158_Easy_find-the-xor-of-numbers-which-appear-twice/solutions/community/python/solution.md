# XOR Explained. Simple Solution w/ hashmap

**Author:** muhammadfarhankt
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5206939/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5206939/)

---

# Intuition
- The problem is asking to find the XOR of all numbers that appear twice in the given array. The XOR operation has a unique property: XORing a number with itself results in 0, and XORing a number with 0 results in the original number. Therefore, we can use this property to filter out numbers that appear only once and then XOR the remaining numbers (those that appear twice).

# Approach
1. Count Occurrences: First, we need to count how many times each number appears in the array. Since each number appears either once or twice, we can use a hash map (or dictionary) to store the counts.
2. Filter and XOR: Next, we iterate over the hash map and XOR the numbers that have a count of 2. Since XORing a number with itself gives 0, we effectively ignore numbers that appear only once.

# Complexity
- Time complexity: O(n) because we need to traverse the array twice (once for counting and once for identifying the numbers).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) for the hash map used to store the counts.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Golang []
func duplicateNumbersXOR(nums []int) int {
    size := len(nums)
    result := 0
    numsMap := make(map[int]int, size)
    for _, num := range nums {
        numsMap[num]++
    }
    for num, count := range numsMap {
        if count == 2 {
            result ^= num
        }
    }
    return result
}
```
```C++ []
class Solution {
public:
    int duplicateNumbersXOR(vector<int>& nums) {
        unordered_map<int, int> countMap;
        for (int num : nums) {
            countMap[num]++;
        }
        int result = 0;
        for (auto& entry : countMap) {
            if (entry.second == 2) {
                result ^= entry.first;
            }
        }
        return result;
    }
};
```
```Java []
class Solution {
    public int duplicateNumbersXOR(int[] nums) {
        HashMap<Integer, Integer> countMap = new HashMap<>();
        for (int num : nums) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }
        int result = 0;
        for (Map.Entry<Integer, Integer> entry : countMap.entrySet()) {
            if (entry.getValue() == 2) {
                result ^= entry.getKey();
            }
        }
        return result;
    }
}
```
```Javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let countMap = new Map();
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    let result = 0;
    for (let [num, count] of countMap.entries()) {
        if (count === 2) {
            result ^= num;
        }
    }
    return result;
};
```
```Python []
class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:
        countMap = {}
        for num in nums:
            countMap[num] = countMap.get(num, 0) + 1
        result = 0
        for num, count in countMap.items():
            if count == 2:
                result ^= num
        return result
```
```Dart []
class Solution {
  int duplicateNumbersXOR(List<int> nums) {
    Map<int, int> countMap = {};
    for (int num in nums) {
      countMap[num] = (countMap[num] ?? 0) + 1;
    }
    int result = 0;
    for (var entry in countMap.entries) {
      if (entry.value == 2) {
        result ^= entry.key;
      }
    }
    return result;
  }
}
```