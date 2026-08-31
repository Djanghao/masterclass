# 📌📌 Easy-to-Understand || 98% faster || Well-Explained 🐍

**Author:** abhi9Rai
**Votes:** 18
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/1498733/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/1498733/)

---

## IDEA:
**Take this [ 2, 1, 7, 6, 3, 5, 4, 9, 8 ] as an example and once try yourself to split it into maximum chunks using stack.**

You will come to following conclusions : 
* The max number in the left chunk must always be <= the max number in the right chunk. 

* We only need to maintain the max number of each chunk in the stack. This is because if num[i] >= stack[-1], then num[i] must be bigger than all other elements in that chunk. 
* Otherwise if num[i] < stack[-1], then it must belong to the previous chunk regardless of whether num[i] is bigger than the other elements or not. Hence, only the max num in each chunk is relevant.

**Implementation:**

* So, we can loop through the array and maintain a stack. Each element in the stack represents a chunk.

* Each time we encounter a num[i] that is bigger than or equal to the previous chunk max, we push it to the stack. If we encounter a smaller number, we must combine this number with the previous chunks. We do this by comparing with the top chunk in the stack and popping them off until we encounter a chunk with max number that is smaller than num[i]. 
* Then, we update the new combined chunk with the new max by pushing it back onto the stack. The number of elements in this stack at the end is the number of chunks.

### CODE:
'''

	class Solution:
    def maxChunksToSorted(self, nums: List[int]) -> int:
        
        st = []
        for n in nums:
            if len(st)==0 or st[-1]<=n:
                st.append(n)
            else:
                ma = st[-1]
                while st and st[-1]>n:
                    ma = max(ma,st.pop())
                st.append(ma)
        
        return len(st)

**Thanks and *Upvote* if you like the idea!!\uD83E\uDD1E**