# 🌟 Solve K-th Smallest Lexicographically with Ease in 5 Languages 🔥💯

**Author:** withaarzoo
**Votes:** 16
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5818119/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5818119/)

---

![Screenshot 2024-07-02 113653.png](./images/0.png)

Explore a collection of solutions to LeetCode problems in multiple programming languages. Each solution includes a detailed explanation and step-by-step approach to solving the problem efficiently. Whether you're a beginner looking to learn or an experienced coder seeking optimized solutions, this repository aims to provide clear and insightful approaches to tackling challenging LeetCode problems.

### **Access daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![image.png](./images/1.png)

---

# Intuition
The problem is about finding the `k-th` smallest number in lexicographical order from a range `[1, n]`. The brute force approach of generating and sorting numbers lexicographically is inefficient for large `n` (up to \\(10^9\\)). A more efficient way is to treat the numbers as nodes in a prefix tree and navigate through them based on how many numbers fall under each prefix.

---

# Approach
1. **Lexicographical Tree**: Visualize the numbers as forming a tree where each node represents a number, and each branch represents adding digits to this number.
   
2. **Counting Steps**: For a given prefix, count how many numbers exist under that prefix. This helps to determine whether the `k-th` number lies in the current branch or a subsequent one.

3. **Binary Search on Tree**: Starting from the root (i.e., `1`), repeatedly calculate how many numbers exist under the current prefix. If the count is less than `k`, move to the next branch. If the count is more than or equal to `k`, dive deeper into the current branch by adding digits.

---

# Complexity

- **Time Complexity**:  
  The time complexity is **O(log(n))** because we only explore numbers by prefix rather than generating all numbers.

- **Space Complexity**:  
  The space complexity is **O(1)** as we use only a few variables to store current prefix and counts.

---

# Code
```C++ []
class Solution {
public:
    // Function to count how many numbers are there with the current prefix.
    long countSteps(long curr, long n) {
        long steps = 0, first = curr, last = curr;
        while (first <= n) {
            steps += min(n + 1, last + 1) - first;
            first *= 10;
            last = last * 10 + 9;
        }
        return steps;
    }

    int findKthNumber(int n, int k) {
        long curr = 1;  // Start from the first prefix (1)
        k--;  // Decrease k by 1 because we are starting from 1
        
        while (k > 0) {
            long steps = countSteps(curr, n);
            if (steps <= k) {
                curr++;  // Move to the next sibling (prefix)
                k -= steps;
            } else {
                curr *= 10;  // Move to the first child
                k--;  // We have covered the current number
            }
        }
        
        return curr;
    }
};

```
```Java []
class Solution {
    // Helper function to count the steps within the range [curr, n].
    private long countSteps(long curr, long n) {
        long steps = 0, first = curr, last = curr;
        while (first <= n) {
            steps += Math.min(n + 1, last + 1) - first;
            first *= 10;
            last = last * 10 + 9;
        }
        return steps;
    }

    public int findKthNumber(int n, int k) {
        long curr = 1;  // Start from the prefix 1
        k--;  // We start counting from 1, so decrement k
        
        while (k > 0) {
            long steps = countSteps(curr, n);
            if (steps <= k) {
                curr++;  // Move to the next prefix
                k -= steps;
            } else {
                curr *= 10;  // Dive deeper into the current prefix
                k--;
            }
        }
        
        return (int) curr;
    }
}

```
```JavaScript []
/**
 * Helper function to count the steps from current prefix within range.
 * @param {number} curr
 * @param {number} n
 * @return {number}
 */
function countSteps(curr, n) {
    let steps = 0, first = curr, last = curr;
    while (first <= n) {
        steps += Math.min(n + 1, last + 1) - first;
        first *= 10;
        last = last * 10 + 9;
    }
    return steps;
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let curr = 1;  // Start from the first prefix
    k--;  // Decrement k to make it zero-indexed
    
    while (k > 0) {
        let steps = countSteps(curr, n);
        if (steps <= k) {
            curr++;  // Move to the next prefix
            k -= steps;
        } else {
            curr *= 10;  // Move to the first child
            k--;
        }
    }
    
    return curr;
};

```
```Python []
class Solution:
    # Helper function to count the steps from current prefix within range.
    def countSteps(self, curr: int, n: int) -> int:
        steps = 0
        first, last = curr, curr
        while first <= n:
            steps += min(n + 1, last + 1) - first
            first *= 10
            last = last * 10 + 9
        return steps
    
    def findKthNumber(self, n: int, k: int) -> int:
        curr = 1  # Start from the first prefix
        k -= 1  # Decrement k to make it zero-indexed
        
        while k > 0:
            steps = self.countSteps(curr, n)
            if steps <= k:
                curr += 1  # Move to the next prefix
                k -= steps
            else:
                curr *= 10  # Dive deeper into the current prefix
                k -= 1
        
        return curr

```
```Go []
func countSteps(curr, n int) int {
    steps := 0
    first, last := curr, curr
    for first <= n {
        steps += min(n+1, last+1) - first
        first *= 10
        last = last*10 + 9
    }
    return steps
}

func findKthNumber(n int, k int) int {
    curr := 1
    k--  // Decrement k to make it zero-indexed
    
    for k > 0 {
        steps := countSteps(curr, n)
        if steps <= k {
            curr++  // Move to the next prefix
            k -= steps
        } else {
            curr *= 10  // Dive into the child
            k--
        }
    }
    
    return curr
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

```

---

# Step-by-Step Detailed Explanation

1. **Counting Steps**:  
   For each prefix, we calculate how many numbers exist with this prefix. For example, for prefix `1`, we would count numbers `1, 10, 11, 12, 13`, etc.

2. **Binary Search on Prefixes**:  
   Using the calculated steps, we can decide whether to move to the next prefix (if `k` is larger than the steps) or to dive deeper (if `k` is smaller).

3. **Example**:  
   For `n = 13` and `k = 2`:
   - Start with prefix `1` and count how many numbers exist: `1, 10, 11, 12, 13` (5 numbers). Since `k = 2` is less than 5, the 2nd number must lie in this subtree.
   - Dive into the prefix `10`. Now we found the `k-th` number which is `10`.

This approach efficiently finds the `k-th` smallest number without explicitly generating all numbers, making it feasible for large inputs.

---

![upvote cat.png](./images/2.png)
