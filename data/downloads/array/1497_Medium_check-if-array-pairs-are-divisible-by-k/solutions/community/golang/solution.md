# 🌟 Step-by-Step Guide to Solving Divisible Array Pairs in Multiple Languages 💯🔥

**Author:** withaarzoo
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5854126/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5854126/)

---

![github Promotion.png](./images/0.png)

Explore a collection of solutions to LeetCode problems in multiple programming languages. Each solution includes a detailed explanation and step-by-step approach to solving the problem efficiently. Whether you're a beginner looking to learn or an experienced coder seeking optimized solutions, this repository aims to provide clear and insightful approaches to tackling challenging LeetCode problems.

### **Access daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![image.png](./images/1.png)

---

# Intuition
The problem requires us to check whether the array can be divided into pairs where the sum of each pair is divisible by `k`. A good observation is that the sum of remainders (when divided by `k`) of two numbers should either be `0` or `k`. This leads us to the strategy of matching numbers based on their remainders when divided by `k`.

---

# Approach
1. Calculate the remainder of each element in the array when divided by `k`.
2. Track how often each remainder appears using a frequency map.
3. For each remainder `r`, there should be a corresponding remainder `k - r` such that they can pair up to form a sum divisible by `k`.
   - If `r = 0`, the count of numbers with remainder `0` must be even, as they can only pair among themselves.
   - For other remainders, their count must match the count of the complement `k - r`.

---

# Complexity

- **Time complexity**:  
  The time complexity is $$O(n)$$, where \\(n\\) is the number of elements in the array. We traverse the array once to compute the remainders and then check the conditions.

- **Space complexity**:  
  The space complexity is $$O(k)$$ due to the frequency array storing counts for remainders.

---

# Code
```C++ []
class Solution {
public:
    bool canArrange(vector<int>& arr, int k) {
        // Frequency array to store the count of remainders
        vector<int> remainderFreq(k, 0);
        
        // Step 1: Calculate the remainder for each element and store the frequency
        for (int num : arr) {
            int remainder = ((num % k) + k) % k; // Ensure non-negative remainder
            remainderFreq[remainder]++;
        }
        
        // Step 2: Check if the pairing condition holds
        for (int i = 0; i <= k / 2; i++) {
            if (i == 0) {
                // Elements with remainder 0 must pair among themselves
                if (remainderFreq[i] % 2 != 0) return false;
            } else {
                // Remainder i must pair with remainder k-i
                if (remainderFreq[i] != remainderFreq[k - i]) return false;
            }
        }
        
        return true;
    }
};

```
```Java []
class Solution {
    public boolean canArrange(int[] arr, int k) {
        // Frequency array to store the count of remainders
        int[] remainderFreq = new int[k];
        
        // Step 1: Calculate the remainder for each element and store the frequency
        for (int num : arr) {
            int remainder = (num % k + k) % k; // Ensure non-negative remainder
            remainderFreq[remainder]++;
        }
        
        // Step 2: Check if the pairing condition holds
        for (int i = 0; i <= k / 2; i++) {
            if (i == 0) {
                // Elements with remainder 0 must pair among themselves
                if (remainderFreq[i] % 2 != 0) return false;
            } else {
                // Remainder i must pair with remainder k-i
                if (remainderFreq[i] != remainderFreq[k - i]) return false;
            }
        }
        
        return true;
    }
}

```
```JavaScript []
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    // Frequency array to store the count of remainders
    let remainderFreq = new Array(k).fill(0);
    
    // Step 1: Calculate the remainder for each element and store the frequency
    for (let num of arr) {
        let remainder = ((num % k) + k) % k; // Ensure non-negative remainder
        remainderFreq[remainder]++;
    }
    
    // Step 2: Check if the pairing condition holds
    for (let i = 0; i <= Math.floor(k / 2); i++) {
        if (i === 0) {
            // Elements with remainder 0 must pair among themselves
            if (remainderFreq[i] % 2 !== 0) return false;
        } else {
            // Remainder i must pair with remainder k-i
            if (remainderFreq[i] !== remainderFreq[k - i]) return false;
        }
    }
    
    return true;
};

```
```Python []
class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        # Frequency array to store the count of remainders
        remainderFreq = [0] * k
        
        # Step 1: Calculate the remainder for each element and store the frequency
        for num in arr:
            remainder = (num % k + k) % k  # Ensure non-negative remainder
            remainderFreq[remainder] += 1
        
        # Step 2: Check if the pairing condition holds
        for i in range(k // 2 + 1):
            if i == 0:
                # Elements with remainder 0 must pair among themselves
                if remainderFreq[i] % 2 != 0:
                    return False
            else:
                # Remainder i must pair with remainder k-i
                if remainderFreq[i] != remainderFreq[k - i]:
                    return False
        
        return True

```
```Go []
func canArrange(arr []int, k int) bool {
    // Frequency array to store the count of remainders
    remainderFreq := make([]int, k)
    
    // Step 1: Calculate the remainder for each element and store the frequency
    for _, num := range arr {
        remainder := ((num % k) + k) % k // Ensure non-negative remainder
        remainderFreq[remainder]++
    }
    
    // Step 2: Check if the pairing condition holds
    for i := 0; i <= k/2; i++ {
        if i == 0 {
            // Elements with remainder 0 must pair among themselves
            if remainderFreq[i] % 2 != 0 {
                return false
            }
        } else {
            // Remainder i must pair with remainder k-i
            if remainderFreq[i] != remainderFreq[k-i] {
                return false
            }
        }
    }
    
    return true
}

```

---

# Step-by-Step Detailed Explanation

1. **Remainder Calculation**:  
   - For each number in the array, calculate the remainder when divided by `k`. This remainder will help in pairing numbers.
   - If the remainder is negative (e.g., `-3 % 5 = -3`), we adjust it to be positive by adding `k` (`(-3 + 5) % 5 = 2`).

2. **Frequency Array**:  
   - We maintain an array `remainderFreq[]` to count how many elements have a particular remainder when divided by `k`. This array has size `k`.

3. **Pairing Logic**:  
   - **Remainder 0**: All elements with remainder `0` must pair among themselves. Hence, the count of remainder `0` must be even.
   - **Other Remainders**: For every remainder `i`, it must pair with `k - i`. Therefore, the frequency of remainder `i` must be equal to the frequency of remainder `k - i`. For instance, numbers with remainder `1` pair with numbers having remainder `4` (if `k = 5`).

4. **Return Value**:  
   - If the conditions hold for all remainders, return `true`, meaning it's possible to form pairs such that their sums are divisible by `k`. If any condition fails, return `false`.

---

# Visualization

To better understand the problem, let\u2019s visualize it with an example:

### Example 1:
**Input**: `arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9]`, `k = 5`

### Step 1: Compute Remainders
We first compute the remainder of each element when divided by `k = 5`. This will help us determine which elements can pair with each other.

| Element | Remainder (`element % 5`) |
|---------|---------------------------|
| 1       | 1                         |
| 2       | 2                         |
| 3       | 3                         |
| 4       | 4                         |
| 5       | 0                         |
| 10      | 0                         |
| 6       | 1                         |
| 7       | 2                         |
| 8       | 3                         |
| 9       | 4                         |

### Step 2: Group Elements by Remainder
Now, group elements based on their remainder values:

- Remainder `0`: Elements {5, 10}  
- Remainder `1`: Elements {1, 6}  
- Remainder `2`: Elements {2, 7}  
- Remainder `3`: Elements {3, 8}  
- Remainder `4`: Elements {4, 9}

### Step 3: Pairing Elements
To ensure the sum of every pair is divisible by `k = 5`, we need to pair elements based on their remainders:

- Remainder `0` elements can only pair with other remainder `0` elements. We have {5, 10}, which can form a valid pair.
- Remainder `1` elements must pair with remainder `4` elements. We have {1, 6} and {4, 9}, which can form two valid pairs: `(1, 9)` and `(6, 4)`.
- Remainder `2` elements must pair with remainder `3` elements. We have {2, 7} and {3, 8}, which can form two valid pairs: `(2, 8)` and `(7, 3)`.

### Step 4: Check All Pairs
We have successfully paired all elements:

- `(1, 9)`, `(6, 4)`, `(2, 8)`, `(7, 3)`, and `(5, 10)`  
- All these pairs have a sum divisible by `5`.

Thus, the answer is `true`.

---

### Example 2:
**Input**: `arr = [1, 2, 3, 4, 5, 6]`, `k = 7`

### Step 1: Compute Remainders
| Element | Remainder (`element % 7`) |
|---------|---------------------------|
| 1       | 1                         |
| 2       | 2                         |
| 3       | 3                         |
| 4       | 4                         |
| 5       | 5                         |
| 6       | 6                         |

### Step 2: Group Elements by Remainder

- Remainder `1`: {1}
- Remainder `2`: {2}
- Remainder `3`: {3}
- Remainder `4`: {4}
- Remainder `5`: {5}
- Remainder `6`: {6}

### Step 3: Pairing Elements
To form valid pairs:

- Remainder `1` must pair with remainder `6`. We have {1} and {6}, so we can pair `(1, 6)`.
- Remainder `2` must pair with remainder `5`. We have {2} and {5}, so we can pair `(2, 5)`.
- Remainder `3` must pair with remainder `4`. We have {3} and {4}, so we can pair `(3, 4)`.

### Step 4: Check All Pairs
We have successfully paired all elements:

- `(1, 6)`, `(2, 5)`, and `(3, 4)`  
- All these pairs have a sum divisible by `7`.

Thus, the answer is `true`.

---

### Example 3:
**Input**: `arr = [1, 2, 3, 4, 5, 6]`, `k = 10`

### Step 1: Compute Remainders
| Element | Remainder (`element % 10`) |
|---------|----------------------------|
| 1       | 1                          |
| 2       | 2                          |
| 3       | 3                          |
| 4       | 4                          |
| 5       | 5                          |
| 6       | 6                          |

### Step 2: Group Elements by Remainder

- Remainder `1`: {1}
- Remainder `2`: {2}
- Remainder `3`: {3}
- Remainder `4`: {4}
- Remainder `5`: {5}
- Remainder `6`: {6}

### Step 3: Pairing Elements
To form valid pairs:

- Remainder `1` must pair with remainder `9`, but there are no elements with remainder `9`.
- Remainder `2` must pair with remainder `8`, but there are no elements with remainder `8`.
- Remainder `3` must pair with remainder `7`, but there are no elements with remainder `7`.
- Remainder `4` must pair with remainder `6`, but we only have {4} and {6}, which cannot be paired with others.
- Remainder `5` must pair among itself, but we only have one element with remainder `5`.

### Step 4: Check All Pairs
Since there\u2019s no valid way to pair all elements, the answer is `false`.

---

This visualization helps break down the process step by step and makes it easier to understand how the pairing based on remainders works.

---

![upvote cat.png](./images/2.png)
