# O(n) Solution | HashTable | Java Python Kotlin JavaScrypt C++

**Author:** wjftu
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/3631293/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/3631293/)

---

# Intuition

If we have count1 number1, count2 number2, count3 number3 ...

The answer is all combinations of (count_a * count_b * count_c)

# Approach

Use a hashtable to count each number

Traversal numbers, each of current number can combinate with all previous number and all numbers that have not traversed.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code


```java []
class Solution {
    public int unequalTriplets(int[] nums) {
        var map = new HashMap<Integer,Integer>();
        for(int i : nums) {
            map.put(i, map.getOrDefault(i, 0) + 1);
        }
        int ans = 0;
        int left = 0;
        int right = nums.length;
        for(int i : map.values()) {
            right -= i;
            ans += left * i * right;
            left += i;
        }
        return ans;
    }
}
```
```kotlin []
class Solution {
    fun unequalTriplets(nums: IntArray): Int {
        var map = mutableMapOf<Int,Int>()
        for(i in nums) {
            map[i] = map.getOrDefault(i, 0) + 1
        }
        var ans = 0
        var left = 0
        var right = nums.size
        map.forEach{(_ , count) -> 
            right -= count
            ans += left * count * right 
            left += count 
        }
        return ans
    }
}
```
```python []
class Solution:
    def unequalTriplets(self, nums: List[int]) -> int:
        count = Counter(nums)
        left = 0
        right = len(nums)
        ans = 0
        for i,cnt in count.items():
            right -= cnt
            ans += left * cnt * right
            left += cnt
        return ans
```
```js []
var unequalTriplets = function(nums) {
    debugger;
    let map = new Map();
    for(let i of nums) {
        map.set(i, (map.get(i) || 0) + 1);
    }
    let right = nums.length;
    let left = 0;
    let ans = 0;
    for(let cnt of map.values()) {
        right -= cnt;
        ans += left * cnt * right;
        left += cnt;
    }
    return ans;
};
```
```cpp []
class Solution {
public:
    int unequalTriplets(vector<int>& nums) {
        unordered_map<int,int> map;
        for(auto i: nums) {
            map[i]++;
        }
        int left = 0;
        int right = nums.size();
        int ans = 0;
        for(auto [_,cnt] : map) {
            right -= cnt;
            ans += left * cnt * right;
            left += cnt;
        }
        return ans;
    }
};
```




