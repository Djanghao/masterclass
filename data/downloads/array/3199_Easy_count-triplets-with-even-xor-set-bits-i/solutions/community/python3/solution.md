# Python 3 || O(n) and more

**Author:** zsq007
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/5373655/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-i/solutions/5373655/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Take `a[i] = 5 = (101)`, `b[j] = 2 = (010)`, `c[k] = 4 = (100)` for example.

The result of whether `a[i]^b[j]^c[k] = 3 = (011)` has an even number of set bits is given by 
`(a[i][0]^b[j][0]^c[k][0]) ^ (a[i][1]^b[j][1]^c[k][1]) ^ (a[i][2]^b[j][2]^c[k][2])` 
(`1` means odd and `0` means even). This is equivalent to 
`(a[i][0]^a[i][1]^a[i][2]) ^ (b[j][0]^b[j][1]^b[j][2]) ^ (c[k][0]^c[k][1]^c[k][2])` .

So we can compute the parity of set bits for each number separately and then `XOR` them together to determine the outcomes.


# Approach
<!-- Describe your approach to solving the problem. -->
Count the number of elements with odd/even set bits in each array.

The result count is either all three numbers with even set bits, or one with even and the other two with odd set bits. 

# Complexity
- Time complexity: $O(n \\cdot \\log M)$, where $n$ is the average length of the arrays and $M$ is the maximal number in the arrays.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3
class Solution:
    def tripletCount(self, a: List[int], b: List[int], c: List[int]) -> int:
        (oddA, evenA), (oddB, evenB), (oddC, evenC) = self.cnts(a), self.cnts(b), self.cnts(c)
        return evenA*evenB*evenC + evenA*oddB*oddC + oddA*evenB*oddC + oddA*oddB*evenC
        
    def cnts(self, arr: List[int]) -> (int, int):
        odd = sum(num.bit_count() & 1 for num in arr)
        even = len(arr) - odd
        return odd, even
```

# Further Question

Let's extend the question from 3 arrays to $k$ arrays, here's a DP solution with complexity of $O(kn\\log M)$.
```python3
class Solution:
    def tripletCount(self, a: List[int], b: List[int], c: List[int]) -> int:
        return self.kpletCount([a,b,c])

    def kpletCount(self, arrs: List[List[int]]) -> int:
        odd, even = 0, 1
        for arr in arrs:
            oddA, evenA = self.cnts(arr)
            odd, even = odd*evenA + even*oddA, odd*oddA + even*evenA
        return even
        
    def cnts(self, arr: List[int]) -> (int, int):
        odd = sum(num.bit_count() & 1 for num in arr)
        even = len(arr) - odd
        return odd, even
```