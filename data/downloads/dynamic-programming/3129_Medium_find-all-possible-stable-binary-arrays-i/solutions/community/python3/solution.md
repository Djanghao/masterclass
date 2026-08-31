# Easy Code with Detailed Explanation || Python-3

**Author:** sraj09
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5080216/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5080216/)

---

**Time Complexity:-** *O(one * zero * limit)*
**Space Complexity:-** *O(one * zero * 2)*

**Explaination:-**

**1->** *The method numberOfStableArrays takes three parameters: zero, one, and limit, and returns the number of stable arrays modulo 10^9 + 7.*

**2->** *The code initializes a constant M as 10^9 + 7*

**3->** *It creates a 3D array a of dimensions (one + 1) x (zero + 1) x 2 and initializes it with zeros.*

**4->** *It sets a[0][0][0] and a[0][0][1] to 1, as the base case.*

**5->** *It then iterates over m in the range one + 1, n in the range zero + 1, and o in the range 1 to limit + 1.*

**6->** *For each combination of m, n, and o, it updates the values in the array a based on certain conditions.*

**7->** *Finally, it returns the sum of a[one][zero][0] and a[one][zero][1] modulo M.*


```
class Solution:
    def numberOfStableArrays(self, zero: int, one: int, limit: int) -> int:
        M = 10**9 + 7
        a = [[[0] * 2 for _ in range(zero + 1)] for _ in range(one + 1)]
        a[0][0][0] = a[0][0][1] = 1
        for m in range(one + 1):
            for n in range(zero + 1):
                for o in range(1, limit + 1):
                    if m - o >= 0:
                        a[m][n][1] = (a[m][n][1] + a[m - o][n][0]) % M
                    if n - o >= 0:
                        a[m][n][0] = (a[m][n][0] + a[m][n - o][1]) % M
        return (a[one][zero][0] + a[one][zero][1]) % M
		
```