# Python Sol | Properties of Absolute Values

**Author:** Rathsam
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/1779482/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/1779482/)

---

# 1131. Maximum of Absolute Value Expression

**Property of absolute value: f(i, j) = |A[i] \u2013 A[j]| + |i \u2013 j|**

|A-B| can be written in 4 possible ways
 ```
		   A + B
        -A + B
        -A - B
         A - B
```
         
|i - j | can be written in 4 ways
 ```
        i - j 
        - i + j
        - i - j
        i + j
```
since arr1 and arr2 are of equal size
We can combine **|A-B| + |i|**
```
i + A + B
i -A + B
i -A - B
i + A - B
```

Using the above formula
```
# time and space = O(n)

class Solution:
    def maxAbsValExpr(self, arr1: List[int], arr2: List[int]) -> int:
	# store the value of each 4 combination
        l1, l2, l3, l4 = [] , [], [], []
       
	   # use formula
        for i in range(len(arr1)):
            l1.append(i + arr1[i] + arr2[i])
            l2.append(i - arr1[i] + arr2[i])
            l3.append(i - arr1[i] - arr2[i])
            l4.append(i + arr1[i] - arr2[i])
            
        maximum_absolute_difference = 0
		# required maximum absolute difference is maximum-minimum of 4 combinations 
        maximum_absolute_difference = max(maximum_absolute_difference, max(l1) - min(l1))
        maximum_absolute_difference= max(maximum_absolute_difference, max(l2) - min(l2))
        maximum_absolute_difference= max(maximum_absolute_difference, max(l3) - min(l3))
        maximum_absolute_difference= max(maximum_absolute_difference, max(l4) - min(l4))
        
        
        return maximum_absolute_difference



```
