# 🚀 "Mastering Maximum Count of Integers: Map, Binary Search, and Two-Pointer Techniques 🌟

**Author:** lasheenwael9
**Votes:** 28
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6118408/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6118408/)

---

### Select Maximum Integers Following Rules \uD83D\uDE80  

In this article, we\u2019ll explore **three different solutions** to solve the problem of selecting the maximum number of integers from the range **[1, n]** that adhere to the following rules:  

1. **The integers should not appear in the banned list.**  
2. **The sum of chosen integers should not exceed maxSum.**  
3. **Each integer can only be chosen once.**  

We\u2019ll discuss three unique approaches:  
1. **Using a Hash Map for Quick Lookup.**  
2. **Using Binary Search for Optimization.**  
3. **Using a Two-Pointer Technique for Efficient Processing.**

---

# Complexity Overview \u23F3  
| Approach         | Time Complexity | Space Complexity |  
|------------------|----------------|------------------|  
| Hash Map         | $$O(n + b)$$  | $$O(b)$$         |  
| Binary Search    | $$O(b \\cdot \\log(b) + n \\cdot \\log(b))$$ | $$O(1)$$   |  
| Two-Pointer      | $$O(b \\cdot \\log(b) + n)$$ | $$O(1)$$         |  

Where $$n$$ is the size of the range, and $$b$$ is the size of the banned list.  

---
![c1ee5054-dd07-4caa-a7df-e21647cfae9e_1709942227.5165014.png](./images/0.png)

# **Solution 1: Hash Map Approach** \uD83D\uDDC2\uFE0F  

## Idea \uD83D\uDCA1  
1. Use a **hash map** to mark all banned numbers for quick lookup.  
2. Iterate through the range **[1, n]**, and skip any number in the banned list.  
3. Keep a running sum, and stop if adding the current number exceeds **maxSum**.  

# Code \uD83D\uDCBB  
```cpp []
class Solution {
public:
    int maxCount(vector<int>& banned, int n, int maxSum) {
        unordered_map<int, int> mp;
        for (int i : banned) {
            mp[i]++;
        }

        int sum = 0, res = 0;
        for (int i = 1; i <= n; i++) {
            if (!mp[i]) { // If not banned
                sum += i;
                if (sum <= maxSum) {
                    res++;
                } else {
                    return res; // Stop as remaining values will also exceed maxSum
                }
            }
        }
        return res;
    }
};
```
```python []
class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        mp = defaultdict(int)
        for i in banned:
            mp[i] += 1

        sum_ = 0
        res = 0

        for i in range(1, n + 1):
            if not mp[i]:
                sum_ += i
                if sum_ <= maxSum:
                    res += 1
                else:
                    return res

        return res
```
```java []
class Solution {
    public int maxCount(int[] banned, int n, int maxSum) {
        HashMap<Integer, Integer> mp = new HashMap<>();
        for (int i : banned) {
            mp.put(i, 1);
        }
        int sum = 0, res = 0;
        for (int i = 1; i <= n; i++) {
            if (!mp.containsKey(i)) {
                sum += i;
                if (sum <= maxSum) {
                    res++;
                } else {
                    return res;
                }
            }
        }
        return res;
    }
}
```
``` javascript []
var maxCount = function(banned, n, maxSum) {
    let mp = new Map();
    for (let i of banned) {
        mp.set(i, 1);
    }
    let sum = 0, res = 0;
    for (let i = 1; i <= n; i++) {
        if (!mp.has(i)) {
            sum += i;
            if (sum <= maxSum) {
                res++;
            } else {
                return res;
            }
        }
    }
    return res;
};
```

# Complexity \u23F3  
- **Time**: $$O(n + b)$$ (Marking banned numbers + Iterating through range).  
- **Space**: $$O(b)$$ for the hash map.  

---

# **Solution 2: Binary Search Approach** \uD83D\uDD0D  

## Idea \uD83D\uDCA1  
1. **Sort** the banned list for efficient lookups.  
2. Iterate through **[1, n]**, and use **binary search** to skip banned numbers.  
3. Track the running sum and terminate if it exceeds **maxSum**.  

# Code \uD83D\uDCBB  
```cpp []
class Solution {
public:
    int maxCount(vector<int>& banned, int n, int maxSum) {
        sort(banned.begin(), banned.end());
        int sum = 0, res = 0;

        for (int i = 1; i <= n; i++) {
            if (!binary_search(banned.begin(), banned.end(), i)) { // Check banned
                sum += i;
                if (sum <= maxSum) {
                    res++;
                } else {
                    return res; // Stop as all further sums will exceed maxSum
                }
            }
        }
        return res;
    }
};
```
```python []
class Solution:
    def maxCount(self, banned: list[int], n: int, maxSum: int) -> int:
        banned.sort()
        total = 0
        count = 0
        for i in range(1, n + 1):
            if not self.binary_search(banned, i):
                total += i
                if total <= maxSum:
                    count += 1
                else:
                    break
        return count

    def binary_search(self, arr, target):
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return True
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return False
```
```java []
class Solution {
    public int maxCount(int[] banned, int n, int maxSum) {
        Arrays.sort(banned);
        int total = 0, count = 0;
        for (int i = 1; i <= n; i++) {
            if (!binarySearch(banned, i)) {
                total += i;
                if (total <= maxSum) count++;
                else break;
            }
        }
        return count;
    }

    private boolean binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return true;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    }
}

```
```javascript []
// Solution 2: Using Binary Search
var maxCount = function(banned, n, maxSum) {
    banned.sort((a, b) => a - b);
    let total = 0, count = 0;
    for (let i = 1; i <= n; i++) {
        if (!binarySearch(banned, i)) {
            total += i;
            if (total <= maxSum) count++;
            else break;
        }
    }
    return count;
};

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}
```

# Complexity \u23F3  
- **Time**: $$O(b \\cdot \\log(b) + n \\cdot \\log(b))$$ (Sorting + Binary searching for every number).  
- **Space**: $$O(1)$$ (No extra space required).  

---

# **Solution 3: Two-Pointer Approach** \uD83D\uDD04  

## Idea \uD83D\uDCA1  
1. **Sort** the banned list and use a pointer to track the banned elements.  
2. Iterate through **[1, n]** and compare each number to the current banned number.  
3. Skip numbers in the banned list using the pointer, and add other numbers to the sum.  


# Code \uD83D\uDCBB  
```cpp []
class Solution {
public:
    int maxCount(vector<int>& banned, int n, int maxSum) {
        sort(banned.begin(), banned.end());
        int sum = 0, res = 0, it = 0, len = banned.size();

        for (int i = 1; i <= n; i++) {
            if (it < len && banned[it] == i) {
                while (it < len && banned[it] == i) {
                    it++; // Skip banned numbers
                }
            } else {
                sum += i;
                if (sum <= maxSum) {
                    res++;
                } else {
                    return res; // Stop as further numbers will exceed maxSum
                }
            }
        }
        return res;
    }
};
```
```python []
class Solution:
    def maxCount(self, banned: list[int], n: int, maxSum: int) -> int:
        banned.sort()
        total = 0
        count = 0
        it = 0
        for i in range(1, n + 1):
            if it < len(banned) and banned[it] == i:
                while it < len(banned) and banned[it] == i:
                    it += 1
            else:
                total += i
                if total <= maxSum:
                    count += 1
                else:
                    break
        return count
```
```java []
class Solution {
    public int maxCount(int[] banned, int n, int maxSum) {
        Arrays.sort(banned);
        int total = 0, count = 0, it = 0;
        for (int i = 1; i <= n; i++) {
            if(it < banned.length && banned[it] == i){
                while (it < banned.length && banned[it] == i){
                    it++;
                }
            }
            else{
                total += i;
                if (total <= maxSum) count++;
                else break;
            }
        }
        return count;
    }
}
```
```javascript []
var maxCount = function(banned, n, maxSum) {
    banned.sort((a, b) => a - b);
    let total = 0, count = 0, it = 0;
    for (let i = 1; i <= n; i++) {
        if(it < banned.length && banned[it] === i){
            while(it < banned.length && banned[it] === i){
                it++;   
            }
        }
        else{
            total += i;
            if (total <= maxSum) count++;
            else break;
        }
    }
    return count;
};

```

# Complexity \u23F3  
- **Time**: $$O(b \\cdot \\log(b) + n)$$ (Sorting + Iterating through range).  
- **Space**: $$O(1)$$ (No extra space required).  

---

# Comparison \u2696\uFE0F  

| Approach         | Advantages                        | Disadvantages                    |  
|------------------|-----------------------------------|-----------------------------------|  
| **Hash Map**     | Quick lookups for banned numbers. | Extra space for the hash map.    |  
| **Binary Search**| Efficient for large ranges.       | Slower than two-pointer.         |  
| **Two-Pointer**  | Minimal space and faster runtime. | Requires sorted banned list.     |  

---

# Example Walkthrough \uD83D\uDCDD  

## Input  
```plaintext
banned = [2, 3, 4]  
n = 10  
maxSum = 15  
```

## Output  
```plaintext
5  
```

## Explanation  
The numbers selected are **[1, 5, 6, 7, 8]**, whose sum is 15.  

---

# Final Thoughts \uD83D\uDCAD  

Each of the three solutions has its strengths depending on the problem constraints:  
- Use **Hash Map** for quick checks when space isn't a concern.  
- Use **Binary Search** if the banned list is already sorted.  
- Use **Two-Pointer** for the most optimized runtime and minimal memory usage.  

**Which approach is your favorite? Let me know in the comments and don\u2019t forget to upvote if this helped! \uD83D\uDE80**

![1HBC0324_COV.jpg](./images/1.jpeg)
