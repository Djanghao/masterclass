# Two Solutions in Python 3 (beats 100%) (With Detailed Explanation)

**Author:** junaidmansuri
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/387070/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/387070/)

---

_O( R log C ):_

This program works by iterating through every element in the first row of the matrix, checking to see whether it is in all the other rows. This is done by taking the first number in the first row and then doing a binary search for that number in each of the successive rows. This is acceptable since each of the rows are already sorted. If the number is not found in a given row, the inner for loop immediately breaks and we go on to the next number in the first row. If a number in the first row is found to be in every other row, the program returns that number. If the outer for loop iterates through every number in the first row and cannot find a single number that is in all the other rows, the for loop completes and the next command returns -1. The binary search of each row is done by using the bisect function which finds the index of where that element would be inserted. If the value in the row of the matrix at that index is the number from the first row, then a match was successfully found in that row. Otherwise the number does not exist in that row. Each binary search of a row of C elements takes O (log C) time. Since there are R rows to search, the overall time is O (R log C).

```
class Solution:
    def smallestCommonElement(self, A: List[List[int]]) -> int:
    	M = len(A)
    	for i in A[0]:
    		for j in range(1,M):
    			I = bisect.bisect_left(A[j],i)
    			if A[j][I] != i: break
    		if A[j][I] == i: return i
    	return -1
		
		
```
_O( R\xB7C ):_

The program starts by creating a list R which consists of all the elements in the matrix (from the second row to the last row) in a _flattened_ 1D form. Note that the numbers in the first row are not included in list R. The program then loops through each element in the first row and counts how many times it occurs in list R. If an element occurred in every row in the original matrix A then it should occur M - 1 times in list R, where M is the number of rows in matrix A. If the count comes out to M - 1, the number in the first row is returned. If not, the next number in the first row is tested. If none of the numbers in the first row have a count of M - 1, the for loop ends and -1 is returned. Since each count of a row requires C tests and we are also looping through each of the C numbers in the first row and there are R rows in total, the time for this approach is O( R\xB7C ).

```
class Solution:
    def smallestCommonElement(self, A: List[List[int]]) -> int:
    	M, R = len(A), sum(A[1:],[])
    	for i in A[0]:
    		if R.count(i) == M - 1: return i
    	return -1



		
- Junaid Mansuri
(LeetCode ID)@hotmail.com