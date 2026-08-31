# Easy Explanation | | Basic Math | | Beats 100 % | | C++ | | Java | | Python3 | |✅✅✅💯

**Author:** Hunter_0718
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/4866557/](https://leetcode.com/problems/find-the-pivot-integer/solutions/4866557/)

---

![image.png](./images/0.png)

**Intuition:**
To find the pivot integer, we need to check for which value of x, the sum of elements from 1 to x equals the sum of elements from x to n. We can iterate through all possible values of x and check this condition.

**Approach:**
1. We iterate from 1 to n, inclusive.
2. For each value of i, we calculate the sum of elements from 1 to i and from i to n.
3. If the sums are equal, we return i as the pivot integer.
4. If no such integer exists, we return -1.

**Complexity:**
- **Time complexity:** O(n) because we iterate through all possible values of x.
- **Space complexity:** O(1) as we use only a constant amount of extra space.

**Code :**
```C++ []
class Solution {
public:
    int pivotInteger(int n) {
        int leftSum = 0; // Initialize the sum of elements from 1 to x
        int rightSum = 0; // Initialize the sum of elements from x to n
        
        // Iterate through all possible values of x
        for(int i = 1; i <= n; i++) {
            leftSum = i * (i + 1) / 2; // Calculate the sum of elements from 1 to i using arithmetic progression formula
            rightSum = n * (n + 1) / 2 - i * (i - 1) / 2; // Calculate the sum of elements from i to n using arithmetic progression formula
            
            // Check if the sums are equal
            if(leftSum == rightSum)
                return i; // Return i as the pivot integer
        }
        
        return -1; // If no such integer exists, return -1
    }
};

```

```C []

int pivotInteger(int n) {
    int leftSum = 0;
    int rightSum = 0;
    
    // Iterate through all possible values of x
    for(int i = 1; i <= n; i++) {
        // Calculate the sum of elements from 1 to i using arithmetic progression formula
        leftSum = i * (i + 1) / 2;
        
        // Calculate the sum of elements from i to n using arithmetic progression formula
        rightSum = n * (n + 1) / 2 - i * (i - 1) / 2;
        
        // Check if the sums are equal
        if(leftSum == rightSum)
            return i; // Return i as the pivot integer
    }
    
    return -1; // If no such integer exists, return -1
}



```
```Java []
class Solution {
    public int pivotInteger(int n) {
        int leftSum = 0; // Initialize the sum of elements from 1 to x
        int rightSum = 0; // Initialize the sum of elements from x to n
        
        // Iterate through all possible values of x
        for (int i = 1; i <= n; i++) {
            leftSum = i * (i + 1) / 2; // Calculate the sum of elements from 1 to i using arithmetic progression formula
            rightSum = n * (n + 1) / 2 - i * (i - 1) / 2; // Calculate the sum of elements from i to n using arithmetic progression formula
            
            // Check if the sums are equal
            if (leftSum == rightSum)
                return i; // Return i as the pivot integer
        }
        
        return -1; // If no such integer exists, return -1
    }
}

```
```Python3 []
class Solution:
    def pivotInteger(self, n: int) -> int:
        for i in range(1, n + 1):
            left_sum = i * (i + 1) // 2  # Calculate the sum of elements from 1 to i using arithmetic progression formula
            right_sum = n * (n + 1) // 2 - i * (i - 1) // 2  # Calculate the sum of elements from i to n using arithmetic progression formula
            if left_sum == right_sum:
                return i  # Return i as the pivot integer
        return -1  # If no such integer exists, return -1

```

```Kotlin []
class Solution {
    fun pivotInteger(n: Int): Int {
        var leftSum = 0 // Initialize the sum of elements from 1 to x
        var rightSum = 0 // Initialize the sum of elements from x to n
        
        // Iterate through all possible values of x
        for (i in 1..n) {
            leftSum = i * (i + 1) / 2 // Calculate the sum of elements from 1 to i using arithmetic progression formula
            rightSum = n * (n + 1) / 2 - i * (i - 1) / 2 // Calculate the sum of elements from i to n using arithmetic progression formula
            
            // Check if the sums are equal
            if (leftSum == rightSum)
                return i // Return i as the pivot integer
        }
        
        return -1 // If no such integer exists, return -1
    }
}

```
```JavaScript []
/**
 * @param {number} n - Positive integer
 * @return {number} - The pivot integer x or -1 if no such integer exists
 */
var pivotInteger = function(n) {
    // Iterate through all possible values of x
    for (let i = 1; i <= n; i++) {
        let leftSum = (i * (i + 1)) / 2; // Calculate the sum of elements from 1 to i using arithmetic progression formula
        let rightSum = (n * (n + 1)) / 2 - (i * (i - 1)) / 2; // Calculate the sum of elements from i to n using arithmetic progression formula
        
        // Check if the sums are equal
        if (leftSum === rightSum)
            return i; // Return i as the pivot integer
    }
    
    return -1; // If no such integer exists, return -1
};

```


**Dry Run:**
Let's dry run the code for the example input n = 8:

- For i = 1:
  - leftSum = 1 * (1 + 1) / 2 = 1
  - rightSum = 8 * (8 + 1) / 2 - 1 * (1 - 1) / 2 = 36 - 0 = 36
  - Since leftSum != rightSum, move to the next iteration.

- For i = 2:
  - leftSum = 2 * (2 + 1) / 2 = 3
  - rightSum = 8 * (8 + 1) / 2 - 2 * (2 - 1) / 2 = 36 - 1 = 35
  - Since leftSum != rightSum, move to the next iteration.

- For i = 3:
  - leftSum = 3 * (3 + 1) / 2 = 6
  - rightSum = 8 * (8 + 1) / 2 - 3 * (3 - 1) / 2 = 36 - 3 = 33
  - Since leftSum != rightSum, move to the next iteration.

- For i = 4:
  - leftSum = 4 * (4 + 1) / 2 = 10
  - rightSum = 8 * (8 + 1) / 2 - 4 * (4 - 1) / 2 = 36 - 6 = 30
  - Since leftSum != rightSum, move to the next iteration.

- For i = 5:
  - leftSum = 5 * (5 + 1) / 2 = 15
  - rightSum = 8 * (8 + 1) / 2 - 5 * (5 - 1) / 2 = 36 - 10 = 26
  - Since leftSum != rightSum, move to the next iteration.

- For i = 6:
  - leftSum = 6 * (6 + 1) / 2 = 21
  - rightSum = 8 * (8 + 1) / 2 - 6 * (6 - 1) / 2 = 36 - 15 = 21
  - Since leftSum == rightSum, return i = 6 as the pivot integer.