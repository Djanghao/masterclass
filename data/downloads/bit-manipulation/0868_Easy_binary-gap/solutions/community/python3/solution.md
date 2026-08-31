# [Python3]Beats 96% time & 100% memory

**Author:** LenaH
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-gap/solutions/508760/](https://leetcode.com/problems/binary-gap/solutions/508760/)

---

'''


    class Solution:
	def binaryGap(self, N: int) -> int:
        
		l = bin(N)
        p1, p2 = 0, 0
        dtc = 0
    
        for i in range(2, len(l)):
            if l[i] == '1':
                if p1 == 0:
                    p1 = i
                else:
                    p2 = i
                    dtc = max((p2-p1), dtc)
                    p1 = p2
                
        return dtc
		