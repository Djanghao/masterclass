# ✅98.33%🔥Easy solution🔥With explanation🔥

**Author:** MrAke
**Votes:** 89
**Link:** [https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5228488/](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5228488/)

---

# Intuition
#### The problem asks for triplets (i, j, k) such that the XOR of elements from index i to j-1 is equal to the XOR of elements from index j to k. Leveraging the properties of the XOR operation, we can transform this condition into a simpler one: the XOR of the entire segment from i to k must be zero. Using cumulative XOR, we can efficiently compute and check this condition for all valid triplets.

---

# Approach
### 1. Cumulative XOR Array:
 - ##### Construct a cumulative XOR array `prefix` where `prefix[i]` represents the XOR of all elements from `arr[0]` to `arr[i-1]`. This allows us to compute the XOR of any subarray `arr[l]` to `arr[r]` as `prefix[r+1] ^ prefix[l]`.

### 2. Finding Valid Triplets:
 - ##### Iterate over all pairs of indices `(i, k)` where $$0<i<k<n$$.
 - ##### Check if `prefix[i]` is equal to `prefix[k+1]`. If they are equal, the XOR of the elements from `i` to `k` is zero.
 - ##### For each pair `(i, k)` where this condition holds, every `j` in the range `[i+1, k]` will satisfy the triplet condition.
 - ##### Count all such valid `j` values by adding `(k - i)` to the result for each valid pair `(i, k)`.
---

# Complexity
- ## Time complexity:
- - #### Constructing the cumulative XOR array takes $$O(n)$$.


- ## Space complexity:
- - #### The cumulative XOR array requires $$O(n)$$ additional space.

---
# Code
```python []
class Solution:
    def countTriplets(self, arr: List[int]) -> int:
        n = len(arr)
        prefix = [0] * (n + 1)
        
        for i in range(n):
            prefix[i + 1] = prefix[i] ^ arr[i]
        
        count = 0
        for i in range(n):
            for k in range(i + 1, n):
                if prefix[i] == prefix[k + 1]:
                    count += (k - i)
        
        return count
```
```C++ []
class Solution {
public:
    int countTriplets(std::vector<int>& arr) {
        int n = arr.size();
        std::vector<int> prefix(n + 1, 0);

        for (int i = 0; i < n; ++i) {
            prefix[i + 1] = prefix[i] ^ arr[i];
        }

        int count = 0;
        for (int i = 0; i < n; ++i) {
            for (int k = i + 1; k < n; ++k) {
                if (prefix[i] == prefix[k + 1]) {
                    count += (k - i);
                }
            }
        }

        return count;
    }
};

```
```java []
class Solution {
    public int countTriplets(int[] arr) {
        int n = arr.length;
        int[] prefix = new int[n + 1];
        
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] ^ arr[i];
        }
        
        int count = 0;
        for (int i = 0; i < n; i++) {
            for (int k = i + 1; k < n; k++) {
                if (prefix[i] == prefix[k + 1]) {
                    count += (k - i);
                }
            }
        }
        
        return count;
    }
}

```
```javascript []
var countTriplets = function(arr) {
    let n = arr.length;
    let prefix = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] ^ arr[i];
    }
    
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let k = i + 1; k < n; k++) {
            if (prefix[i] === prefix[k + 1]) {
                count += (k - i);
            }
        }
    }
    
    return count;
};

```
```C# []
public class Solution {
    public int CountTriplets(int[] arr) {
        int n = arr.Length;
        int[] prefix = new int[n + 1];

        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] ^ arr[i];
        }

        int count = 0;
        for (int i = 0; i < n; i++) {
            for (int k = i + 1; k < n; k++) {
                if (prefix[i] == prefix[k + 1]) {
                    count += (k - i);
                }
            }
        }

        return count;
    }
}

```
---

![Screenshot 2023-08-20 065922.png](./images/0.png)

