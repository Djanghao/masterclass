# Python 3   ||   6 lines, dct and bisect, w/ example   ||   T/S: 91% / 41%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/3120300/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/3120300/)

---


```
class Solution:
    def minOperations(self, target: List[int], arr: List[int]) -> int:
                                                                #   Example: target = [6,4,8,1,3,2]
        dct, lst = {t: i for i,t in enumerate(target)}, [-1]    #               arr = [4,7,6,2,3,8,6,1]
                                                                #   
        for a in arr:                                           #    dct: {6:0, 4:1, 8:2, 1:3, 3:4, 2:5}        
            if a in dct:                                        #  
                                                                #     a     dct[a]  lst  
                if      dct[a] > lst[-1]: lst.append(dct[a])    #   \u2013\u2013\u2013\u2013\u2013   \u2013\u2013\u2013\u2013\u2013   \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013
                                                                #     4        1     [-1, 1]
                else: lst[bisect_left(lst, dct[a])] = dct[a]    #     7              [-1, 1]
                                                                #     6        0     [-1, 0]
        return 1+len(target)-len(lst)                           #     2        5     [-1, 0, 5]
                                                                #     3              [-1, 0, 4]
                                                                #     8        2     [-1, 0, 2]
                                                                #     6              [-1, 0, 2]
                                                                #     1        3     [-1, 0, 2, 3]

                                                                #  return 1+(6)-(4) = 3

```
[https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/submissions/1279991983/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/submissions/1279991983/)


I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(arr)`.