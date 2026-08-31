# Python BFS & Bit operation

**Author:** happyjane0904
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/1976709/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/1976709/)

---


class Solution:

    def minFlips(self, mat: List[List[int]]) -> int:
        m,n=len(mat),len(mat[0])
        def convert_to_bit(M):
            start=0
            for i in range(m):
                for j in range(n):
                    start|=M[i][j]<<(i*n+j)
            return start
        init=convert_to_bit(mat)
        Q=deque([(0,init)])
        seen={init}
        while Q:
            step,curr=Q.popleft()
            if curr==0:
                return step
            for r in range(m):
                for c in range(n):
                    temp=curr
                    for dr,dc in [(0,0),(1,0),(-1,0),(0,1),(0,-1)]:
                        nr,nc=r+dr,c+dc
                        if 0<=nr<m and 0<=nc<n:
                            temp^=1<<(nr*n+nc)
                    if temp not in seen:
                        
                        Q.append((step+1,temp))
                        seen.add(temp)
                        
        return -1
                    
