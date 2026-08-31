# Easiest Solution | ✅ 100% Beats | Brute Force Approach | C++ | Python | Java | JavaScript

**Author:** BijoySingh7
**Votes:** 34
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6028459/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6028459/)

---

# Upvote if it helps  
![image.png](./images/0.png)
{:height="30px" width="30px"} 


### Feel free to connect with me on LinkedIn: [Bijoy Sing ](https://www.linkedin.com/in/bijoy-sing-236a5a1b2/)

---

### C++ Code:
```cpp
class Solution {
public:
    int minimumSubarrayLength(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> bitCount(32, 0);
        int currentOR = 0;
        int left = 0;
        int minLength = INT_MAX;
        
        for (int right = 0; right < n; right++) {
            currentOR |= nums[right];
            
            for (int bit = 0; bit < 32; bit++) {
                if (nums[right] & (1 << bit)) {
                    bitCount[bit]++;
                }
            }
            
            while (left <= right && currentOR >= k) {
                minLength = min(minLength, right - left + 1);
                
                int updatedOR = 0;
                for (int bit = 0; bit < 32; bit++) {
                    if (nums[left] & (1 << bit)) {
                        bitCount[bit]--;
                    }
                    if (bitCount[bit] > 0) {
                        updatedOR |= (1 << bit);
                    }
                }
                currentOR = updatedOR;
                left++;
            }
        }
        
        return minLength == INT_MAX ? -1 : minLength;
    }
};
```

---

### Python Code:
```python
class Solution:
    def minimumSubarrayLength(self, nums, k):
        n = len(nums)
        bitCount = [0] * 32
        currentOR = 0
        left = 0
        minLength = float('inf')
        
        for right in range(n):
            currentOR |= nums[right]
            
            for bit in range(32):
                if nums[right] & (1 << bit):
                    bitCount[bit] += 1
            
            while left <= right and currentOR >= k:
                minLength = min(minLength, right - left + 1)
                
                updatedOR = 0
                for bit in range(32):
                    if nums[left] & (1 << bit):
                        bitCount[bit] -= 1
                    if bitCount[bit] > 0:
                        updatedOR |= (1 << bit)
                
                currentOR = updatedOR
                left += 1
        
        return minLength if minLength != float('inf') else -1
```

---

### Java Code:
```java
class Solution {
    public int minimumSubarrayLength(int[] nums, int k) {
        int n = nums.length;
        int[] bitCount = new int[32];
        int currentOR = 0;
        int left = 0;
        int minLength = Integer.MAX_VALUE;
        
        for (int right = 0; right < n; right++) {
            currentOR |= nums[right];
            
            for (int bit = 0; bit < 32; bit++) {
                if ((nums[right] & (1 << bit)) != 0) {
                    bitCount[bit]++;
                }
            }
            
            while (left <= right && currentOR >= k) {
                minLength = Math.min(minLength, right - left + 1);
                
                int updatedOR = 0;
                for (int bit = 0; bit < 32; bit++) {
                    if ((nums[left] & (1 << bit)) != 0) {
                        bitCount[bit]--;
                    }
                    if (bitCount[bit] > 0) {
                        updatedOR |= (1 << bit);
                    }
                }
                currentOR = updatedOR;
                left++;
            }
        }
        
        return minLength == Integer.MAX_VALUE ? -1 : minLength;
    }
}
```

---

### JavaScript Code:
```javascript
class Solution {
    minimumSubarrayLength(nums, k) {
        let n = nums.length;
        let bitCount = new Array(32).fill(0);
        let currentOR = 0;
        let left = 0;
        let minLength = Infinity;
        
        for (let right = 0; right < n; right++) {
            currentOR |= nums[right];
            
            for (let bit = 0; bit < 32; bit++) {
                if (nums[right] & (1 << bit)) {
                    bitCount[bit]++;
                }
            }
            
            while (left <= right && currentOR >= k) {
                minLength = Math.min(minLength, right - left + 1);
                
                let updatedOR = 0;
                for (let bit = 0; bit < 32; bit++) {
                    if (nums[left] & (1 << bit)) {
                        bitCount[bit]--;
                    }
                    if (bitCount[bit] > 0) {
                        updatedOR |= (1 << bit);
                    }
                }
                currentOR = updatedOR;
                left++;
            }
        }
        
        return minLength === Infinity ? -1 : minLength;
    }
}
```
### Intuition
We are tasked with finding the shortest subarray whose bitwise OR is greater than or equal to a given value `k`. We can use a sliding window approach to explore each subarray while maintaining the bitwise OR of the elements in the window. If the OR value satisfies the condition, we try to minimize the window's length.

### Approach
1. We use two pointers (`left` and `right`) to represent a sliding window over the array.
2. We maintain a `bitCount` array to keep track of the count of set bits at each position.
3. For each new element in the window, we update the bitwise OR.
4. Whenever the bitwise OR of the window meets or exceeds `k`, we try to shrink the window from the left to find the shortest possible valid subarray.
5. Return the length of the shortest valid subarray, or `-1` if no such subarray exists.

### Complexity
- **Time complexity:** \\(O(n \\cdot 32)\\), where \\(n\\) is the length of the array, and 32 is the number of bits in the integer (since the maximum number is \\(10^9\\), which fits in 32 bits).
- **Space complexity:** \\(O(32)\\) for the bitCount array, which stores the count of bits for 32 positions.

---
