# 🐍 {python} || 100% faster || well-explained || Simple approach

**Author:** abhi9Rai
**Votes:** 6
**Link:** [https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/1239929/](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/1239929/)

---

Don't leave the idea of question and if you want more explaination or any example please feel free to ask !!
## IDEA :
\uD83D\uDC49 Firstly we will  determine all the four vertices of rhombus.
\uD83D\uDC49 Then we will pass that rhombus to calc function to calculate the score(perimeter).
\uD83D\uDC49 "expand" flag is used to determine upto what time rhombus will expand then again it will get shrink.
\uD83D\uDC49 Store that perimeter in heap
\uD83D\uDC49 length of heap will always be three
\uD83D\uDC49 Return heap after sorting in reverse order.

'''
	
	class Solution:
    def getBiggestThree(self, grid: List[List[int]]) -> List[int]:
        
        def calc(l,r,u,d):
            sc=0
            c1=c2=(l+r)//2
            expand=True
            for row in range(u,d+1):
                if c1==c2:
                    sc+=grid[row][c1]
                else:
                    sc+=grid[row][c1]+grid[row][c2]
                
                if c1==l:
                    expand=False
                
                if expand:
                    c1-=1
                    c2+=1
                else:
                    c1+=1
                    c2-=1
            return sc
            
        
        m=len(grid)
        n=len(grid[0])
        heap=[]
        for i in range(m):
            for j in range(n):
                l=r=j
                d=i
                while l>=0 and r<=n-1 and d<=m-1:
                    sc=calc(l,r,i,d)
                    l-=1
                    r+=1
                    d+=2
                    if len(heap)<3:
                        if sc not in heap:
                            heapq.heappush(heap,sc)
                    else:
                        if sc not in heap and sc>heap[0]:
                            heapq.heappop(heap)
                            heapq.heappush(heap,sc)
        
        heap.sort(reverse=True)
        return heap

Thank You
if you liked please **Upvote** !!