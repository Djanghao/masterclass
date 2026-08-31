# Finding the k-th Factor of a Number: A Beginner's Approach || 0 ms Beats 100.00%

**Author:** karanayron
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/5355014/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/5355014/)

---

# Intuition
To find the k-th factor of a number \uD835\uDC5B, the simplest approach is to check all numbers from 1 to \uD835\uDC5B. Any number that divides \uD835\uDC5B without leaving a remainder is a factor. By collecting these factors, we can then directly access the k-th one if it exists.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Initialize an array arr to store the factors of \uD835\uDC5B, with a fixed size of 100.
2. Initialize a counter m to keep track of the number of factors found.
3. Loop through all numbers from 1 to \uD835\uDC5B and check if each number is a factor of \uD835\uDC5B.
4. If a number is a factor, store it in the array and increment the counter.
5. After the loop, check if the k-th factor exists in the array. If not, return -1.
6. Otherwise, return the k-th factor from the array.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: The time complexity is \uD835\uDC42(\uD835\uDC5B) because the loop runs from 1 to \uD835\uDC5B to check for factors.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is \uD835\uDC42(1) because the array size is fixed at 100, which does not change with the input size. However, this approach is not scalable for large \uD835\uDC5B with more than 100 factors.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Java
```
class Solution {
    public int kthFactor(int n, int k) {
        int[] arr = new int[n]; // Initialize an array to store factors,
        int m = 0; // Counter for number of factors found
        
        // Loop through all numbers from 1 to n
        for(int i = 1; i <= n; i++) {
            if(n % i == 0) { // Check if i is a factor of n
                arr[m] = i; // If yes, store the factor in the array
                m++;  // Increment the counter for factors
            } 
            if(m == k) { // Check if we have found the k-th factor
                return arr[k-1]; // Return the k-th factor (1-based index, hence k-1 for 0-based array)
            }        
        }        
        return -1; // If k factors are not found, return -1   
    }
}


```
C++
```
class Solution {
public:
    int kthFactor(int n, int k) {
        int arr[100]; // Initialize an array to store factors
        int m = 0; // Counter for number of factors found
        
        // Loop through all numbers from 1 to n
        for (int i = 1; i <= n; i++) {
            // Check if i is a factor of n
            if (n % i == 0) {
                // If yes, store the factor in the array
                arr[m] = i;
                // Increment the counter for factors
                m++;
            }
            // Check if we have found the k-th factor
            if (m == k) {
                // Return the k-th factor (1-based index, hence k-1 for 0-based array)
                return arr[k - 1];
            }
        }
        
        // If k factors are not found, return -1
        return -1;
    }
};


```
Python
```
class Solution:
    def kthFactor(self, n: int, k: int) -> int:
        arr = []  # Initialize a list to store factors
        
        # Loop through all numbers from 1 to n
        for i in range(1, n + 1):
            # Check if i is a factor of n
            if n % i == 0:
                # If yes, append the factor to the list
                arr.append(i)
            # Check if we have found the k-th factor
            if len(arr) == k:
                # Return the k-th factor (1-based index, hence k-1 for 0-based array)
                return arr[k - 1]
        
        # If k factors are not found, return -1
        return -1


```
JavaScript
```
class Solution {
    kthFactor(n, k) {
        let arr = []; // Initialize an array to store factors
        
        // Loop through all numbers from 1 to n
        for (let i = 1; i <= n; i++) {
            // Check if i is a factor of n
            if (n % i === 0) {
                // If yes, add the factor to the array
                arr.push(i);
            }
            // Check if we have found the k-th factor
            if (arr.length === k) {
                // Return the k-th factor (1-based index, hence k-1 for 0-based array)
                return arr[k - 1];
            }
        }
        
        // If k factors are not found, return -1
        return -1;
    }
}


```
TypeScript
```
class Solution {
    kthFactor(n: number, k: number): number {
        let arr: number[] = []; // Initialize an array to store factors
        
        // Loop through all numbers from 1 to n
        for (let i = 1; i <= n; i++) {
            // Check if i is a factor of n
            if (n % i === 0) {
                // If yes, add the factor to the array
                arr.push(i);
            }
            // Check if we have found the k-th factor
            if (arr.length === k) {
                // Return the k-th factor (1-based index, hence k-1 for 0-based array)
                return arr[k - 1];
            }
        }
        
        // If k factors are not found, return -1
        return -1;
    }
}

```
Rust
```
impl Solution {
    pub fn kth_factor(n: i32, k: i32) -> i32 {
        let mut arr = vec![]; // Initialize a vector to store factors
        
        // Loop through all numbers from 1 to n
        for i in 1..=n {
            // Check if i is a factor of n
            if n % i == 0 {
                // If yes, add the factor to the vector
                arr.push(i);
            }
            // Check if we have found the k-th factor
            if arr.len() as i32 == k {
                // Return the k-th factor (1-based index, hence k-1 for 0-based array)
                return arr[(k - 1) as usize];
            }
        }
        
        // If k factors are not found, return -1
        -1
    }
}


```

