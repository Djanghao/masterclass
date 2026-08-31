# Easy Explanation for Noobs + Python code with comments

**Author:** sumit686215
**Votes:** 90
**Link:** [https://leetcode.com/problems/find-array-given-subset-sums/solutions/1431457/](https://leetcode.com/problems/find-array-given-subset-sums/solutions/1431457/)

---

**Some key principles of a set that we will use to construct our solution**
1. If the size of a set is `n` then its superset has a size of `2^n`. Hence, any superset is always divisible in two equal parts.
2. Any superset must have an empty set. The sum of elements of any empty set is `0`, hence any set containing all subset sums must contain `0` as an element.
3. Any superset can be divided into two parts with equal size, such that one part has all the subsets `excluding` an element `x` and the other one has all the subsets `including` the element `x`. In such a case, the `excluding` set corresponds to the superset of the original set after removing the element `x` from it.  For example, let the original set be `set={x, y, z}`, then
	* its superset is `superset={ {}, {x}, {y}, {z}, {x, y}, {x, z}, {y, z}, {x, y, z} }`. 
	* the superset can be divided into two equal parts based on the element `x` like `excluding={ {}, {y}, {z}, {y, z}}` and `including={ {x}, {x, y}, {x, z}, {x, y, z} }`. 
	* the `excluding` set corresponds to the superset of the set `{y, z}`. Now since `excluding` is a superset too, it must have a size of `2^(n-1)` (using principle 1). This should give us an idea on how to approach the solution. 
4. The `excluding` set must contain the empty set `{}`  as an element.
5. Multiple sets can result in the same superset i.e. given a superset there can be multiple solution sets that are valid. For example, `{2, 3, -5}` and `{-2, -3, 5}` both have same superset. 

**Intuition**
From the pt 3 above, it looks like given a superset, if we can somehow get one element of the original set, and if somehow we can figure out the `excluding` set then we can re-apply the same steps repeatedly (on the `excluding` set this time) till we have figured out all the elements. 

The questions that need to be answered are: 
1. How to find an element of the original set (since we are given subset **sum** instead of subsets) ?
2. How to find the `excluding` set ?

 **How to find an element of the original set ?**
Please note that if we take the maximum and the second maximum elements of the subset sums (say `max` and `secondMax`), then `secondMax` can be obtained from `max` by doing one of the following:
1. remove the least non-negative element from the `max`.
2. add the largest (least if absolute value is considered) negative element to the `max`. 
For example, for the set `{-1, -2, 3, 4}` the `max` element in the superset is `7` (corresponding to subset `{3, 4}`) and the `secondMax` element in the superset is `6` (corresponding to subset `{3, 4, -1}`). Here `-1` is the largest negative number (least if absolute value is considered). 
Hence, if `diff = max - secondMax` then, either `diff` or `-1*diff` is a member of the original set.  Now here we can choose either `diff` or `-1*diff` based on which one is a plausible value. In many cases any of the both `diff` or `-1*diff` can be chosen (using principle 5 of key principles). We can check for the plausiblity based on the empty set being a part of the `excuding` set (using principle 4 of key principles). If the `excluding` set does not contain the value `0` (corresponding to the empty set), then we would include `-1*diff` in our solution set (as the `including` set would become the true `excluding` set in this case). 

**How to find the `excluding` set ?**
To find the `excluding` set we start with the assumption that `diff` (from above) is a valid member of the solution set. Please note that `diff` is always non-negative. Hence, the least element of subset sum must belong to `excluding` set and the max element must belong to the `including` set. Hence, we can sort the subset sum in increasing order, pick the least element and add it to the `excluding` set and add the least + `diff` element to the `including` set. Please note that a least + `diff` element must exist (using principle 3 of key principles). We can keep adding elements to `excluding` and `including` sets like this by iterating over the sorted subset sums.
Once we have the `excluding` set with us, we can check its validity by checking if `0` is a part of it (using principle 4 of key principles). If not, then `including` set must have it (since any subset sum must have a `0` (using principle 2 of key principles)). This implies that `including` set is the actual `excluding` set and that `secondMax` was actually obtained by adding a negative number to `max` and not by removing a postive number. Hence, we add `-1*diff` to our result set instead. 

**Code**
```
class Solution:
    def recoverArray(self, n: int, sums: List[int]) -> List[int]:
        res = []  # Result set
        sums.sort()
        
        while len(sums) > 1:
            num = sums[-1] - sums[-2] # max - secondMax
            countMap = Counter(sums) # Get count of each elements
            excluding = [] # Subset sums that do NOT contain num
            including = [] # Subset sums that contain num
            
            for x in sums:
                if countMap.get(x) > 0:
                    excluding.append(x)
                    including.append(x+num)
                    countMap[x] -= 1
                    countMap[x+num] -= 1
                    
			# Check validity of excluding set	
            if 0 in excluding:
                sums = excluding
                res.append(num)
            else:
                sums = including
                res.append(-1*num)
        
        return res
```
