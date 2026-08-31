# 🚀✅ Precise explanation [Java / C++ / Python3]

**Author:** aeroabrar_31
**Votes:** 18
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3995043/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3995043/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
`A number is divisible by 25 if and only if the two rightmost digits (the last two digits) of the number are either 00, 25, 50, or 75.`

So, here our main intention is to find the pairs `[00, 25, 50, 75]` in the input string.

Since, the constraints are low i.e, `len(str)<=100` we can try bruteforce.

Also, we can't convert into (int) or (long long) since the length of the string is beyond the ranges of the primitive data types.

---


# Approach
<!-- Describe your approach to solving the problem. -->
`Steps : `
1. **Initialization** : initialize min result as Integer.MAX_VALUE (we can also initialize with 101 as well).
2. **Iteration to right to left :**  Iterate through the characters of the string from right to left (i.e., from the least significant digit to the most significant digit).
3. **Handling '5' Digit :** If the current character is '5', search for a previous character that is either '2' or '7'.
4. if a '2' or '7' is found, calculate the number of characters between the current '5' and the found '2' or '7' (variable first) and the number of characters from the current '5' to the end of the string (variable last).
5. Update min with the minimum of its current value and first + last, representing the minimum operations required to make the string special by deleting characters.
6. **Handling '0' Digit:** If the current character is '0', search for a previous character that is either '0' or '5'.
7. if a '0' or '5' is found, calculate the number of characters between the current '0' and the found '0' or '5' (variable first) and the number of characters from the current '0' to the end of the string (variable last).
8. Update min with the minimum of its current value and first + last, representing the minimum operations required to make the string special by deleting characters.
9. **Check for Special String:** There might be some cases like (10), (11), (220), (1055) etc., So After the loop, check if min remains equal to INT_MAX, which means no valid pairs of '5' or '0' were found. If this is the case, check if the string contains '0'. If it does, return the length of the string minus 1 (since you need to delete all characters except one to make it divisible by 25), otherwise return the length of the string.
 

---


# Complexity
- Time complexity: $$O(N^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

---


- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---
Connect with me on LinkedIn : [aeroabrar_31](https://www.linkedin.com/in/aeroabrar-31-a20a27224/)
---


# Code
```c++ []
class Solution 
{
public:
    int minimumOperations(string s) 
    {
        int min = INT_MAX; // Initialize a variable to store the minimum operations.

        vector<char> c(s.begin(), s.end()); // Convert the input string to a character vector for easier traversal.

        for (int i = c.size() - 1; i >= 0; i--) 
        {
            if (c[i] == '5') 
            {
                for (int j = i - 1; j >= 0; j--) 
                {
                    if (c[j] == '2' || c[j] == '7') 
                    {
                        int f = i - j - 1; // Calculate the number of characters between i and j exclusive.
                        int l = c.size() - 1 - i; // Calculate the number of characters from i to the end of the string.

                        min = std::min(f + l, min); // Update the minimum operations with the minimum of the current value and f + l.
                        break; // Exit the inner loop since we found a valid pair.
                    }
                }
            }

            if (c[i] == '0') 
            {
                for (int j = i - 1; j >= 0; j--) 
                {
                    if (c[j] == '0' || c[j] == '5') 
                    {
                        int f = i - j - 1; // Calculate the number of characters between i and j exclusive.
                        int l = c.size() - 1 - i; // Calculate the number of characters from i to the end of the string.

                        min = std::min(f + l, min); // Update the minimum operations with the minimum of the current value and f + l.
                        break; // Exit the inner loop since we found a valid pair.
                    }
                }

```
```java []
class Solution 
{
    public int minimumOperations(String s) 
    {
        int min = Integer.MAX_VALUE; // Initialize a variable to store the minimum operations.

        char c[] = s.toCharArray(); // Convert the input string to a character array for easier traversal.

        for (int i = c.length - 1; i >= 0; i--) 
        {
            if (c[i] == '5') 
            {
                for (int j = i - 1; j >= 0; j--) 
                {
                    if (c[j] == '2' || c[j] == '7') 
                    {
                        int f = i - j - 1; // Calculate the number of characters between i and j exclusive.
                        int l = c.length - 1 - i; // Calculate the number of characters from i to the end of the string.

                        min = Math.min(f + l, min); // Update the minimum operations with the minimum of the current value and f + l.
                        break; // Exit the inner loop since we found a valid pair.
                    }
                }
            }

            if (c[i] == '0') 
            {
                for (int j = i - 1; j >= 0; j--) 
                {
                    if (c[j] == '0' || c[j] == '5') 
                    {
                        int f = i - j - 1; // Calculate the number of characters between i and j exclusive.
                        int l = c.length - 1 - i; // Calculate the number of characters from i to the end of the string.

                        min = Math.min(f + l, min); // Update the minimum operations with the minimum of the current value and f + l.
                        break; // Exit the inner loop since we found a valid pair.
                    }
                }
            }
        }

        if (min == Integer.MAX_VALUE) 
        {
            // If no valid pairs of '5' or '0' are found, check if the string contains '0'.
            // If it does, return the length of the string minus 1, otherwise, return the length of the string.
            if (s.contains("0"))
                return s.length() - 1;
            else
                return s.length();
        }

        return min; // Return the minimum operations.
    }
}

```
```python []
class Solution:
    def minimumOperations(self, s: str) -> int:
        min_operations = float('inf') # Initialize a variable to store the minimum operations.
        
        c = list(s) # Convert the input string to a list of characters for easier traversal.

        for i in range(len(c) - 1, -1, -1):
            if c[i] == '5':
                for j in range(i - 1, -1, -1):
                    if c[j] == '2' or c[j] == '7':
                        f = i - j - 1 # Calculate the number of characters between i and j exclusive.
                        l = len(c) - 1 - i # Calculate the number of characters from i to the end of the string.

                        min_operations = min(f + l, min_operations) # Update the minimum operations with the minimum of the current value and f + l.
                        break # Exit the inner loop since we found a valid pair.

            if c[i] == '0':
                for j in range(i - 1, -1, -1):
                    if c[j] == '0' or c[j] == '5':
                        f = i - j - 1 # Calculate the number of characters between i and j exclusive.
                        l = len(c) - 1 - i # Calculate the number of characters from i to the end of the string.

                        min_operations = min(f + l, min_operations) # Update the minimum operations with the minimum of the current value and f + l.
                        break # Exit the inner loop since we found a valid pair.

        if min_operations == float('inf'):
            # If no valid pairs of '5' or '0' are found, check if the string contains '0'.
            # If it does, return the length of the string minus 1, otherwise, return the length of the string.
            if '0' in s:
                return len(s) - 1
            else:
                return len(s)

        return min_operations # Return the minimum operations.

```

---

![upvote cat.jpeg](./images/0.jpeg)

