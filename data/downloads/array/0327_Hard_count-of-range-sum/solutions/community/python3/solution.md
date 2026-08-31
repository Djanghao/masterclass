# Python different concise solutions

**Author:** gyh75520
**Votes:** 70
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/407655/](https://leetcode.com/problems/count-of-range-sum/solutions/407655/)

---

The problem is similiar to [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/), yoc can click **[here](https://leetcode.com/problems/count-of-smaller-numbers-after-self/discuss/408322/Python-Different-Concise-Solutions)** to check how to slolve it.
The difference between two probles is that you need compute the **prefix sums**, cumsum[i] means nums[:i]'s prefix sums : 
 >nums    =     [1,3,4]
 cumsum = [0,1,4,8]
 cumcum[1] means nums[:1]'s prefix sums
 
We just need to count those where cumsum[j] - cumsum[i] is in [lower,upper].
**Approach 1 : Prefix-sum + Hashmap**
Naturally, utilize hashmap to reduce time  time complexity
```python
    # prefix-sum + hashmap | time complexity: O(n+(upper-lower+1)*n)
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        cumsum = [0]
        for n in nums:
            cumsum.append(cumsum[-1]+n)
        
        import collections
        record = collections.defaultdict(int)
        
        res = 0
        for csum in cumsum:
            for target in range(lower,upper+1):
                if csum - target in record:
                    res += record[csum - target]
            record[csum] +=1
        return res
```

------------------------
**Approach 2 : Prefix-sum + SegmentTree**
Inspired by [Java SegmentTree Solution, 36ms](https://leetcode.com/problems/count-of-range-sum/discuss/77987/Java-SegmentTree-Solution-36ms)
You can see, it was vsery similay to approach 1, SegmentTree is very useful for processing range queries, utilize SegmentTree to make query time from O(upper-lower+1) to O(logn)
```python
class SegmentTreeNode:
	def __init__(self,low,high):
		self.low = low
		self.high = high
		self.left = None
		self.right = None
		self.cnt = 0        
        
class Solution: 
    def _bulid(self, left, right): 
        root = SegmentTreeNode(self.cumsum[left],self.cumsum[right])
        if left == right:
            return root
        
        mid = (left+right)//2
        root.left = self._bulid(left, mid)
        root.right = self._bulid(mid+1, right)
        return root
    
    def _update(self, root, val):
        if not root:
            return 
        if root.low<=val<=root.high:
            root.cnt += 1
            self._update(root.left, val)
            self._update(root.right, val)
                  
    def _query(self, root, lower, upper):
        if lower <= root.low and root.high <= upper:
            return root.cnt
        if upper < root.low or root.high < lower:
            return 0
        return self._query(root.left, lower, upper) + self._query(root.right, lower, upper)
        
    # prefix-sum + SegmentTree | O(nlogn)      
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        cumsum = [0]
        for n in nums:
            cumsum.append(cumsum[-1]+n)
            
        self.cumsum = sorted(list(set(cumsum))) # need sorted
        root = self._bulid(0,len(self.cumsum)-1)
        
        res = 0
        for csum in cumsum:
            res += self._query(root, csum-upper, csum-lower)
            self._update(root, csum)        
        return res
```

------------------
**Approach 3 : Prefix-sum + Merge-sort:**
Compute the prefix sums
Use mergesort for counting


```python
    # prefix-sum + merge-sort | time complexity: O(nlogn)
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        cumsum = [0]
        for n in nums:
            cumsum.append(cumsum[-1]+n)
            
		# inclusive
        def mergesort(l,r):
            if l == r:
                return 0
            mid = (l+r)//2
            cnt = mergesort(l,mid) + mergesort(mid+1,r)
			
            i = j = mid+1
            # O(n)
            for left in cumsum[l:mid+1]:
                while i <= r and cumsum[i] - left < lower:
                    i+=1
                while j <= r and cumsum[j] - left <= upper:
                    j+=1
                cnt += j-i
                
            cumsum[l:r+1] = sorted(cumsum[l:r+1])
            return cnt
			
        return mergesort(0,len(cumsum)-1)
```

Note\uFF1A it's O(n), because O(2n) = O(n).
```python
int j = 0;
for (int i = 0; i < n; i++)
    while (j < n)
        j++;
```