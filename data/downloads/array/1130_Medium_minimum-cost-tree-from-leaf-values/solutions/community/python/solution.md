# 📌📌 Greedy-Approach || 97% faster || Well-Explained 🐍

**Author:** abhi9Rai
**Votes:** 26
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/1510611/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/1510611/)

---

## IDEA :
**The key idea is to choose the minimum value leaf node and combine it with its neighbour which gives minimum product.**

Example Taken from https://leetcode.com/swapnilsingh421
arr = [5,2,3,4]
'''

		  ( ) p1 		 					         (  ) p1
		 /   \\           						    /    \\
		5     ( ) p2						p2    ( )     ( )  p3
			  /  \\ 							     /   \\	  /  \\
		 p3 ( )   4 						    5     2  3    4	
		   /   \\
		  2     3

* Consider node 2 which has minimum value , it has 2 options.

* Combine with 3 as in first diagram or combine with 5 as in second diagram. So it will go for that option which gives minimum product that is 2*3 < 2*5.

* So it choose 1st diagram and p3 = 6 . Now we remove the node 2 from array as to compute value for node p2 only node 3 is required because 3>2 and we want max of left leaf node and max of right leaf node So only greater node proceeds.
* Array becomes [5,3,4] . Again we find minimum and repeat the process.

**Implementation :**
'''

	class Solution:
    def mctFromLeafValues(self, arr: List[int]) -> int:
        
        arr = [float('inf')] + arr + [float('inf')]
        n, res = len(arr), 0
        
        while n>3:
            mi = min(arr)
            ind = arr.index(mi)
            
            if arr[ind-1]<arr[ind+1]:
                res+=arr[ind-1]*arr[ind]
            else:
                res+=arr[ind+1]*arr[ind]
            
            arr.remove(mi)
            n = len(arr)
        
        return res

**Thanks & Upvote If you like the Idea!!** \uD83E\uDD1E