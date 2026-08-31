# Simplest way to solve Can Place Flowers

**Author:** patel_jaimin
**Votes:** 33
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/6065381/](https://leetcode.com/problems/can-place-flowers/solutions/6065381/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to determine whether it's possible to plant a given number of flowers (denoted by `n`) in an existing flowerbed, subject to the constraint that no two flowers can be planted in adjacent plots. Initially, some plots in the flowerbed are already occupied by flowers (represented by `1`), and others are empty (represented by `0`). To solve this problem, the main idea is to check each position in the flowerbed to see if a flower can be planted there (i.e., the current plot and its adjacent plots are empty). If possible, we plant the flower and continue until either all required flowers are planted or we run out of space.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Iterate through the flowerbed:
    - Traverse each index of the flowerbed.
    - For each index, check whether both adjacent plots (left and right) are empty or whether the current plot is at the boundary (first or last index) and the adjacent plot is empty.
2. Check and plant flowers:
    - If the current plot is empty (`flowerbed[i] == 0`), and both adjacent plots are either empty or out of bounds (i.e., the current plot is at the edges), plant a flower by setting `flowerbed[i] = 1`.
    - After planting a flower, decrement the count of remaining flowers (`n--`).
3. Return result:
    - If `n <= 0`, it means all the flowers have been successfully planted, and we return `true`.
    - If we finish the loop without planting enough flowers, return `false`.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  bool canPlaceFlowers(List<int> flowerbed, int n) {
    int len = flowerbed.length;
    for (int i = 0; i < len; i++) {
      bool left = i == 0 || flowerbed[i - 1] == 0;
      bool right = i == len - 1 || flowerbed[i + 1] == 0;

      if (left && right && flowerbed[i] == 0) {
        flowerbed[i] = 1;
        n--;
      }
    }
    return n <= 0;
  }
}
```
```Go []
func canPlaceFlowers(flowerbed []int, n int) bool {
    len := len(flowerbed)
    for i := 0; i < len; i++ {
        left := i == 0 || flowerbed[i-1] == 0
        right := i == len-1 || flowerbed[i+1] == 0

        if left && right && flowerbed[i] == 0 {
            flowerbed[i] = 1
            n--
        }
    }
    return n <= 0
}
```
```c []
bool canPlaceFlowers(int* flowerbed, int flowerbedSize, int n) {
    for (int i = 0; i < flowerbedSize && n > 0; i++) {
        bool prev = i == 0 || !flowerbed[i - 1];
        bool fut = i == flowerbedSize - 1 || !flowerbed[i + 1];
        if (prev && fut && !flowerbed[i]) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
}
```
```cpp []
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int len = flowerbed.size();
        for (int i = 0; i < len; i++) {
            bool left = i == 0 || flowerbed[i - 1] == 0;
            bool right = i == len - 1 || flowerbed[i + 1] == 0;

            if (left && right && flowerbed[i] == 0) {
                flowerbed[i] = 1;
                n--;
            }
        }
        return n <= 0;
    }
};
```
```csharp []
public class Solution {
    public bool CanPlaceFlowers(int[] flowerbed, int n) {
        int len = flowerbed.Length;
        for (int i = 0; i < len; i++) {
            bool left = i == 0 || flowerbed[i - 1] == 0;
            bool right = i == len - 1 || flowerbed[i + 1] == 0;

            if (left && right && flowerbed[i] == 0) {
                flowerbed[i] = 1;
                n--;
            }
        }
        return n <= 0;
    }
}
```
```java []
class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int flowerbedSize = flowerbed.length;
        for (int i = 0; i < flowerbedSize && n > 0; i++) {
            boolean prev = i == 0 || flowerbed[i - 1] == 0;
            boolean fut = i == flowerbedSize - 1 || flowerbed[i + 1] == 0;
            if (prev && fut && flowerbed[i] == 0) {
                flowerbed[i] = 1;
                n--;
            }
        }
        return n <= 0;
    }
}
```
```javascript []
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let len = flowerbed.length;
    for (let i = 0; i < len; i++) {
        let left = i === 0 || flowerbed[i - 1] === 0;
        let right = i === len - 1 || flowerbed[i + 1] === 0;

        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};
```
```typescript []
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let len = flowerbed.length;
    for (let i = 0; i < len; i++) {
        let left = i === 0 || flowerbed[i - 1] === 0;
        let right = i === len - 1 || flowerbed[i + 1] === 0;

        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
};
```
```python []
class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
        flowerbed_size = len(flowerbed)
        for i in range(flowerbed_size):
            if n <= 0:
                break
            prev = i == 0 or flowerbed[i - 1] == 0
            fut = i == flowerbed_size - 1 or flowerbed[i + 1] == 0
            if prev and fut and flowerbed[i] == 0:
                flowerbed[i] = 1
                n -= 1
        return n <= 0
```
```python3 []
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        flowerbed_size = len(flowerbed)
        for i in range(flowerbed_size):
            if n <= 0:
                break
            prev = i == 0 or flowerbed[i - 1] == 0
            fut = i == flowerbed_size - 1 or flowerbed[i + 1] == 0
            if prev and fut and flowerbed[i] == 0:
                flowerbed[i] = 1
                n -= 1
        return n <= 0
```
![WhatsApp Image 2024-11-20 at 1.42.14 PM.jpeg](./images/0.jpeg)
