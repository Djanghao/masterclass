# Beats 100% time and space both with constant

**Author:** anshu492
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5551243/](https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5551243/)

---

# Intuition
To solve the problem of finding the most expensive item that Alice cannot buy using denominations of two distinct prime numbers (primeOne and primeTwo), we can leverage the concept of the Frobenius number. The Frobenius number for two coprime integers g(a,b)=ab\u2212a\u2212b. This number represents the largest integer that cannot be expressed as a non-negative integer combination of a and b.

# Approach
Ensure primeOne is less than or equal to primeTwo for consistency.
Calculate the Frobenius number using the formula 
result=primeOne\xD7primeTwo\u2212primeOne\u2212primeTwo.
Print or return the Frobenius number, as it represents the most expensive item that cannot be bought using the given denominations.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
class Solution(object):
    def mostExpensiveItem(self, primeOne, primeTwo):
        # Ensure that primeOne is smaller or equal to primeTwo
        if primeOne > primeTwo:
            primeOne, primeTwo = primeTwo, primeOne
        
        # Calculate the Frobenius number
        result = primeOne * primeTwo - primeOne - primeTwo
        
        # Print unreachable numbers and result
        unreachable_numbers = list(range(1, result + 1))
        # print("Unreachable numbers:", unreachable_numbers)
        # print("Frobenius number:", result)
        
        return result
        
```