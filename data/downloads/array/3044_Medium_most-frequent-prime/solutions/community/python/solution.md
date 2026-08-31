# Straight Iterative Solution | Using Dict | Python

**Author:** pragya_2305
**Votes:** 4
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4744519/](https://leetcode.com/problems/most-frequent-prime/solutions/4744519/)

---

# Code
```
class Solution:
    def mostFrequentPrime(self, mat: List[List[int]]) -> int:
        freq = defaultdict(int)
        ans = [-1,-1]
        m,n = len(mat),len(mat[0])
        dir = [(0,1),(1,0),(0,-1),(-1,0),(1,1),(-1,-1),(1,-1),(-1,1)]
        
        def isPrime(n):
            if (n <= 1):
                return False
            for i in range(2, int(sqrt(n))+1):
                if (n % i == 0):
                    return False
            return True
        
        for i in range(m):
            for j in range(n):
                nums = []
                for dx,dy in dir:
                    x,y = i,j
                    curr = ''
                    while 0<=x<m and 0<=y<n:
                        curr+=str(mat[x][y])
                        if int(curr)>10:
                            nums.append(curr[:])
                        x+=dx
                        y+=dy
                        
                for num in nums:
                    num = int(num)
                    if num in freq or isPrime(num):
                        freq[num]+=1
                        if freq[num]>ans[0] or (freq[num]==ans[0] and num>ans[1]):
                            ans=[freq[num],num]

        return ans[1]
            
                
```