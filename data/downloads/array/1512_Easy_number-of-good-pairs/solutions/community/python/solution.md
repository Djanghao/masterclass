# [Python] Simple O(n) Solution

**Author:** Eellaup
**Votes:** 164
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/736565/](https://leetcode.com/problems/number-of-good-pairs/solutions/736565/)

---

**Solution Idea**
The idea is storing the number of repeated elements in a dictionary/hash table and using mathmatics to calculate the number of combinations.

**Fundamental Math Concept (Combinations)**
The "# of pairs" can be calculated by summing each value from range 0 to n-1, where n is the "# of times repeated". So the "# of pairs" for the 5 repeated values, would be 0+1+2+3+4 = 10.

Another way to think about it is:

Notice in the table below how the number of pairs increments by adding the previous "# of times repeated" to the previous "# of pairs."

For example: to get the "# of pairs" for 3 repeated values, you would add the previous "# of times repeated" (which is 2) with the previous "# of pairs" (which is 1). Therefore, the "# of pairs for 3 repeated values is 2+1=3. In this method, you don't peform the same computations multiple times.

Example Table of # of repeated items with their corresponding # of pairs
<table>
	<tr>
    <th># of times repeated</th>
    <th># of pairs</th>
  </tr>
  <tr>
    <td>2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>6</td>
  </tr>
  <tr>
    <td>5</td>
    <td>10</td>
  </tr>
  <tr>
    <td>6</td>
    <td>15</td>
  </tr>
</table>

**My Code Solution**
1. Dictionary/Hash Table to store the number of times an element is repeated
2. Record total number of pairs (num)
3. Iterate through the nums list
4. Check to see if each element has already been seen, if not add it to the Hash Table
5. If it has been seen, but only once, just add 1 to "num"
6. If it has been seen, multiple times. Add the number of repeated times to "num"
7. Increment the number of reapeated times by 1.
7. Move onto next element

```
class Solution:
    
    # search for duplicate numbers
    def numIdenticalPairs(self, nums: List[int]) -> int:
        
        # number of good pairs
        repeat = {}
        num = 0
        
        # for every element in nums
        for v in nums:
            
            # number of repeated digits
            if v in repeat:
                
                # count number of pairs based on duplicate values
                if repeat[v] == 1:
                    num += 1
                else:
                    num += repeat[v]
                
                # increment the number of counts
                repeat[v] += 1
            # number has not been seen before
            else:
                repeat[v] = 1
        # return
        return num
```