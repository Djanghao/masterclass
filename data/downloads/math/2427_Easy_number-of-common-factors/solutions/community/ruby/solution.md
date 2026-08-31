# 🔥 Beats 100% 🔥 | Simple and Easy Solution 💻⚡⚡

**Author:** mayana_fazil_khan
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/6074082/](https://leetcode.com/problems/number-of-common-factors/solutions/6074082/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The task requires finding the common factors (divisors) of two integers, a and b. The key observation is that the common factors cannot exceed the smaller of the two numbers, as a factor of a number must be less than or equal to the number itself. Therefore, we can iterate through all numbers from 1 to the smaller number and check divisibility for both integers.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Identify the smaller of the two numbers using min(a, b). Let this value be temp.
2. Iterate through all integers i from 1 to temp (inclusive).
3. For each i, check if it divides both a and b without a remainder (a % i == 0 and b % i == 0).
4. Maintain a counter count to track the number of common factors found.
5. Return the value of count after the loop ends.
6. This approach is straightforward and leverages a brute-force method to determine the common factors.
# Complexity
- Time complexity:O(min(a,b))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        count=0
        temp=min(a,b)
        for i in range(1,temp+1):
            if a%i==0 and b%i==0:
                count+=1
        return count
        
```

```java []
class Solution {
    public int commonFactors(int a, int b) {
        int count = 0;
        int limit = Math.min(a, b); // Find the smaller number
        
        for (int i = 1; i <= limit; i++) {
            if (a % i == 0 && b % i == 0) { // Check if 'i' is a common factor
                count++;
            }
        }
        return count; // Return the total count of common factors
    }
}

```
```python []
class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        count=0
        temp=min(a,b)
        for i in range(1,temp+1):
            if a%i==0 and b%i==0:
                count+=1
        return count
        
```
```ruby []
class Solution
  def common_factors(a, b)
    count = 0
    limit = [a, b].min # Find the smaller number

    (1..limit).each do |i|
      count += 1 if a % i == 0 && b % i == 0 # Check if 'i' is a common factor
    end

    count # Return the total count of common factors
  end
end

```
```javascript []
class Solution {
  commonFactors(a, b) {
    let count = 0;
    const limit = Math.min(a, b); // Find the smaller number

    for (let i = 1; i <= limit; i++) {
      if (a % i === 0 && b % i === 0) {
        count++; // Increment count if 'i' is a common factor
      }
    }

    return count; // Return the total count of common factors
  }
}

```
```C++ []
#include <algorithm> // For std::min

class Solution {
public:
    int commonFactors(int a, int b) {
        int count = 0;
        int limit = std::min(a, b); // Find the smaller number
        
        for (int i = 1; i <= limit; ++i) {
            if (a % i == 0 && b % i == 0) { // Check if 'i' is a common factor
                ++count; // Increment count
            }
        }
        
        return count; // Return the total count of common factors
    }
};

```
```C# []
using System;

public class Solution {
    public int CommonFactors(int a, int b) {
        int count = 0;
        int limit = Math.Min(a, b); // Find the smaller number
        
        for (int i = 1; i <= limit; i++) {
            if (a % i == 0 && b % i == 0) { // Check if 'i' is a common factor
                count++;
            }
        }
        
        return count; // Return the total count of common factors
    }
}

```
![upvote.png](./images/0.png)

