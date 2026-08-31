# Check if Array Can Be Arranged in Pairs Divisible by K

**Author:** patel_jaimin
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5855748/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5855748/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires checking if an array can be paired such that the sum of each pair is divisible by a given integer `\uD835\uDC58`. The key insight is that for a number `\uD835\uDC4E` in the array, if it leaves a remainder `\uD835\uDC5F` when divided by `\uD835\uDC58`, there must be another number in the array that leaves a remainder `\uD835\uDC58 \u2212 \uD835\uDC5F`. Special care must be taken for numbers that give a remainder of 0 and the case where `\uD835\uDC58` is even.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Frequency Array: Create a frequency array to count how many times each remainder (from 0 to `\uD835\uDC58 \u2212 1`) occurs when elements of the array are divided by `\uD835\uDC58`.
2. Handle Remainders:
Check the count of numbers that leave a remainder of 0. It must be even, as they can only pair among themselves.
For each remainder `\uD835\uDC5F` from 1 to `\uD835\uDC58/2`, check that the count of numbers leaving remainder `\uD835\uDC5F` is equal to the count of numbers leaving remainder `\uD835\uDC58 \u2212 \uD835\uDC5F`.
3. Return Result: If all conditions are satisfied, return true; otherwise, return false.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
bool canArrange(int* arr, int arrSize, int k) {
    int freq[k];
    for (int i = 0; i < k; i++) {
        freq[i] = 0;
    }
    
    for (int i = 0; i < arrSize; i++) {
        int rem = arr[i] % k;
        if (rem < 0) {
            rem += k;
        }
        freq[rem]++;
    }
    
    if (freq[0] % 2 != 0) {
        return false;
    }
    
    for (int i = 1; i <= k / 2; i++) {
        if (freq[i] != freq[k - i]) {
            return false;
        }
    }
    return true;
}
```
```java []
class Solution {
    public boolean canArrange(int[] arr, int k) {
        int[] freq = new int[k];
        for (int num : arr) {
            int rem = num % k;
            if (rem < 0) {
                rem += k;
            }
            freq[rem]++;
        }
        if (freq[0] % 2 != 0) {
            return false;
        }
        for (int i = 1; i <= k / 2; i++) {
            if (freq[i] != freq[k - i]) {
                return false;
            }
        }
        return true;
    }
}
```
```javascript []
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    const freq = new Array(k).fill(0);
    for (const num of arr) {
        let rem = num % k;
        if (rem < 0) {
            rem += k;
        }
        freq[rem]++;
    }
    if (freq[0] % 2 !== 0) {
        return false;
    }
    for (let i = 1; i <= k / 2; i++) {
        if (freq[i] !== freq[k - i]) {
            return false;
        }
    }
    return true;
};
```
```typescript []
function canArrange(arr: number[], k: number): boolean {
    const freq = new Array(k).fill(0);
    for (const num of arr) {
        let rem = num % k;
        if (rem < 0) {
            rem += k;
        }
        freq[rem]++;
    }
    if (freq[0] % 2 !== 0) {
        return false;
    }
    for (let i = 1; i <= k / 2; i++) {
        if (freq[i] !== freq[k - i]) {
            return false;
        }
    }
    return true;
};
```
```golang []
func canArrange(arr []int, k int) bool {
    freq := make([]int, k)
    for _, num := range arr {
        rem := num % k
        if rem < 0 {
            rem += k
        }
        freq[rem]++
    }
    if freq[0]%2 != 0 {
        return false
    }
    for i := 1; i <= k/2; i++ {
        if freq[i] != freq[k-i] {
            return false
        }
    }
    return true
}
```
```csharp []
public class Solution {
    public bool CanArrange(int[] arr, int k) {
        int[] freq = new int[k];
        foreach (int num in arr) {
            int rem = num % k;
            if (rem < 0) {
                rem += k;
            }
            freq[rem]++;
        }
        if (freq[0] % 2 != 0) {
            return false;
        }
        for (int i = 1; i <= k / 2; i++) {
            if (freq[i] != freq[k - i]) {
                return false;
            }
        }
        return true;
    }
}
```
```cpp []
class Solution {
public:
    bool canArrange(vector<int>& arr, int k) {
        vector<int> freq(k);
        for(int num: arr){
            int rem = num % k;
            if(rem < 0){
                rem = rem + k;
            }
            freq[rem]++;
        }
        if(freq[0] % 2 != 0){
            return false;
        }
        for(int i = 1;i <= k / 2;i++){
            if(freq[i] != freq[k-i]) {
                return false;
            }
        }
        return true;
    }
};
```
```python []
class Solution(object):
    def canArrange(self, arr, k):
        """
        :type arr: List[int]
        :type k: int
        :rtype: bool
        """
        freq = [0] * k
        for num in arr:
            rem = num % k
            if rem < 0:
                rem += k
            freq[rem] += 1
        if freq[0] % 2 != 0:
            return False
        for i in range(1, k // 2 + 1):
            if freq[i] != freq[k - i]:
                return False
        return True
```
```python3 []
class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        freq = [0] * k
        for num in arr:
            rem = num % k
            if rem < 0:
                rem += k
            freq[rem] += 1
        if freq[0] % 2 != 0:
            return False
        for i in range(1, k // 2 + 1):
            if freq[i] != freq[k - i]:
                return False
        return True
```
```Dart []
class Solution {
  bool canArrange(List<int> arr, int k) {
    List<int> freq = List.filled(k, 0);
    for (int num in arr) {
      int rem = num % k;
      if (rem < 0) {
        rem += k;
      }
      freq[rem]++;
    }
    if (freq[0] % 2 != 0) {
      return false;
    }
    for (int i = 1; i <= k ~/ 2; i++) {
      if (freq[i] != freq[k - i]) {
        return false;
      }
    }
    return true;
  }
}
```

![WhatsApp Image 2024-10-01 at 4.28.29 PM.jpeg](./images/0.jpeg)
