# Python O(n) by prefix/postfix table [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 7
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/1649945/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/1649945/)

---

**Hint**:

When it comes to **accumulation on history data in the same direction**, think of **prefix sum** / **postfix sum** technique,
like what we did in [#2100 Find good days to rob](https://leetcode.com/problems/find-good-days-to-rob-the-bank/discuss/1646354/python-on-by-prefixpostfix-table-w-example) as well as [#303 Range sum query - immutable](https://leetcode.com/problems/range-sum-query-immutable/)

We can define Presum and Postsum as following:

**Presum**( i ) = 0 if we have no identical elements **on the lefthand side** of i.
**Presum**( i ) = Presum( j ) + ( **i - j** ) * **count of equal elements so far**, where **j < i**, and j is the nearest index to i

Similarly,

**Postsum**( i ) = 0 if we have no identical elements **on the righthand side** of i.
**Postsum**( i ) = Postsum( k ) + ( **k - i** ) * **count of equal elements so far**, where **k > i**, and k is the nearest index to i

Finally, we have summation of distance to all identical elements for i 
= summation of distance to all identical elements for i on the **lefthand side** + summation of distance to all identical elements for i on the **righthand side**
= Presum( i ) + Postsum( i )




---

```

# helper data structure Scout
class Scout:
    
    def __init__(self, prev_idx=-1, count_of_equal=0):
        
        # record of index of last identical element
        self.prev_idx = prev_idx
        
        # count of identical elements so far
        self.count_of_equal = count_of_equal
    
    def __iter__(self):
		# ouput previous index, and count of equal in order
        return iter( (self.prev_idx, self.count_of_equal) )
    
    
        
class Solution:
    def getDistances(self, arr: List[int]) -> List[int]:
        
        size = len(arr)
        
        pre_scout = defaultdict( Scout )
        pre_dist_sum = [0 for _ in range(size)]
        
        post_scout = defaultdict( Scout )
        post_dist_sum = [0 for _ in range(size)]
        
        
        ## Step_1:
        # update for pre_dist_sum table, direction is from left to right
        for i, element in enumerate(arr):
            
            prev_equal_idx, prev_count_of_equal = pre_scout[element]
            
            # update pre_dist_sum table if we have identical elements before index i
            if prev_count_of_equal:
                pre_dist_sum[i] += pre_dist_sum[ prev_equal_idx ] + (i - prev_equal_idx) * prev_count_of_equal
            
            # update Scout information for current element
            pre_scout[element] = i, prev_count_of_equal+1
            
        # --------------------------------------------------------------
        
        ## Step_2:
        # update for pos_dist_sum table, direction is from right to left
        for i, element in reversed( [*enumerate(arr)] ):
            
            post_equal_idx, post_count_of_equal = post_scout[element]

            # update post_dist_sum table if we have identical elements after index i
            if post_count_of_equal:
                post_dist_sum[i] += post_dist_sum[ post_equal_idx ] + (post_equal_idx - i) * post_count_of_equal
            
            # update Scout information for current element
            post_scout[element] = i, post_count_of_equal+1
            
            
        ## Step_3:
        # Generate final output by definition
        return [ pre_dist_sum[i] + post_dist_sum[i] for i in range(size) ]
        
        
```

---

Related leetcode challenge:

 [Leetcode #2100 Find good days to rob](https://leetcode.com/problems/find-good-days-to-rob-the-bank/) 
 
 [Leetcode #303 Range sum query - immutable](https://leetcode.com/problems/range-sum-query-immutable/)