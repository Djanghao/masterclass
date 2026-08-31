# [python]  O(n log n) solution with segment_tree

**Author:** hxu10
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4183368/](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4183368/)

---

# Intuition
The solution with O(n^2) is quite straight forward,  you need to focus on he middle point, and maintain a maxleft and maxright,  and check them one by one all the prices that are smaller or larger than current value and the maximum profit amoung them.  Is there any approach that can make the query faster,  the answer is segment tree

# Approach
First,  since the number of prices is 10^6, which is too large,  we can build a map to map the 1-10^6 value to 1-n,  for example,  in the array [1,2,100,2],  the mapping is [0,1,2,1],  which can save a lot of memory. 

we keep a segleft and segright to store the maximum profit with corresponding price. We use maxleft as example, and initialize the each value to be -1.
First,  we need to check what is the maximum profit for the mapped prices that are below the current mapped prices, -1 means there are no value that smaller than this one.
Then we update the current value in the segment tree

For the maxright,  we can use the similar idea
Finally,  we iterate the array,  if one of the maxleft[i], maxright[i] is -1,  this is invalid index, otherwise we update the ans with maximum of ans and maxleft[i]+maxright[i]+profits[i]



# Complexity
- Time complexity:
O(n lg n)

- Space complexity:
O(n)   


# Code
```
class segment_tree(object):


    # minimum value, change if needed
    def merge(self,num,accu):
        if self.flag: return min(accu,num)
        else:  return max(accu,num)


    def __init__(self,n,initial,flag):

        self.n = n
        self.flag = flag
        if self.flag:  self.inf = float('inf')
        else:  self.inf = -float('inf')
        self.arr = [self.inf]*(2*n)
        for i in range(2*n-1,0,-1):
            if i>=n:  self.arr[i] = initial[i-n]
            else:     self.arr[i] = self.merge(self.arr[2*i],self.arr[2*i+1])




    def update(self,index,target):
        index += self.n
        self.arr[index] = target
        while index > 0:
            if index & 1:
                nexttarget = self.merge( self.arr[index], self.arr[index-1])
            else:
                nexttarget = self.merge( self.arr[index], self.arr[index+1])
            self.arr[index>>1] = nexttarget 
            index = index >> 1


    def addnum(self,index,diff):
        self.update(index, self.arr[index+self.n] + diff)


    def query(self,left,right):
        i,j = self.n+left,  self.n+right+1
        output = self.inf  # initial output should be changed if you want to change the merge function

        while i<j:
            if i&1:
                output = self.merge(self.arr[i],output)
                i += 1
            if j&1:
                j -= 1
                output = self.merge(self.arr[j],output)
            i = i >> 1
            j = j >> 1
        return output





class Solution(object):
    def maxProfit(self, prices, profits):
        """
        :type prices: List[int]
        :type profits: List[int]
        :rtype: int
        """
        n = len(prices)
        nums = sorted(prices)

        # map the prices to a mapping table to save memory
        mapping = {}
        for num in nums:
            if num in mapping:  continue
            mapping[num] = len(mapping)
        m = len(mapping)

        
        # maxleft means maximum left point profit, and maxright is maximum right point profit. 

        maxleft = [-1]*n
        maxright = [-1]*n

        segleft = segment_tree(m,[-1]*m,False)
        segright = segment_tree(m,[-1]*m,False)

        # valueleft and valueright is the current max profit on this point,  if mapping[prices[i]] is no smaller than current profit,  we don't need to update
        valueleft = [-1]*m
        valueright = [-1]*m

        # update the left segment_tree, each operation is O(n lg n)
        for i in range(n):
            index = mapping[prices[i]]
            maxleft[i] = segleft.query(0,index-1)
            if(profits[i] > valueleft[index]):
                valueleft[index] = profits[i]
                segleft.update(index,profits[i])

        # update the right segment_tree,  each operation is O(n lg n)
        for i in range(n-1,-1,-1):
            index = mapping[prices[i]]
            maxright[i] = segright.query(index+1,m-1)
            if(profits[i] > valueright[index]):
                valueright[index] = profits[i]
                segright.update(index,profits[i])

        # check the answer using maxleft and maxrigiht
        ans = -1
        for i in range(n):
            if maxleft[i]<0 or maxright[i]<0: continue
            ans = max(ans, profits[i]+maxleft[i]+maxright[i])
        return ans

        





```