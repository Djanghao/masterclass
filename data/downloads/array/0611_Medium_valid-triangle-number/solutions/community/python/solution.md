# Python O( n^2 ) sol. based on sliding window and sorting. 85%+ [ With explanation ]

**Author:** brianchiang_tw
**Votes:** 22
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/487683/](https://leetcode.com/problems/valid-triangle-number/solutions/487683/)

---

Python O( n^2 ) sol. based on sliding window and sorting.

Main idea:
1. [ Pre-processing ] Use in-place nums.**sort()** to **keep numbers in ascending order**

2. First **fix third edge with current largest one**, then **maintain a sliding window** to **compute all valid pairs** of **first edge** and **second edge**

3. Catch valid edges with **triangle's basic property**: **a + b > c must be True** for **any two edges a, b**

4. This algorithm is making triplets with the rule: **smallest edge A + medium edge B> largest edge C**, 
and also guarantees that other two cases must be True, 
i.e., 
smallest edge A + largest edge C > medium edge B, and 
medium edge B+ largest edge C > smallest edge A

---

```

class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        
        # sort in-place
        # keep numbers in ascending order
        nums.sort()
        
        # counter for valid triplet to make triangle
        valid_triplet = 0
        
        for index_i in range( len(nums)-1, 1, -1):
            
            third_edge = nums[index_i]
            
            index_of_first_edge, index_of_second_edge = 0, index_i - 1
            
            while index_of_first_edge < index_of_second_edge:
                
                first_edge = nums[index_of_first_edge]
                second_edge = nums[index_of_second_edge]
                
                if first_edge + second_edge > third_edge:
                    
                    # valid triplets
                    # first_edge    : from nums[index_of_first_edge] to nums[(index_of_second_edge-1)]
                    # second edge   : nums[index_of_second_edge]
                    # third edge    : nums[index_i]
                    valid_triplet += ( index_of_second_edge - index_of_first_edge )
        
                    # second edge large enough
                    # make it smaller and try next run
                    index_of_second_edge -= 1
                else:
                    # first edge is too small
                    # make it larger and try next run
                    index_of_first_edge += 1
        
        
        
        return valid_triplet
        
            
```