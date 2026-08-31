# scala: 10 lines dp solution with step-by-step explanation

**Author:** ccd9
**Votes:** 3
**Link:** [https://leetcode.com/problems/triangle/solutions/942401/](https://leetcode.com/problems/triangle/solutions/942401/)

---

**Thought**
* Dynamic Programming
	* We calculate minimum path summation of the input triangle in  bottom up manner
	*  state definition
		* one dimension dp[j]
        * dp[j]  represents minimum path summation at position triangle[i][j] during bottom up
        * ex:
			* input triangle:
      [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
			* dp[j] at i-th layer
				* iter 4:     11
				* iter 3:   9, 10
				* iter 2:  7, 6, 10
				* iter 1:  4, 1, 8, 3

	* state transition
		* dp[j] at triangle i-th layer:
			* dp[j] = triangle[i][j]  +  min( previous dp[j], previous dp[j - 1])
			* ex:
				* input triangle:
					1:     [2],
					2:    [3,4],
					3:   [6,5,7],
					4:  [4,1,8,3]

                * bottom up step by step  :
                    * iter 1: dp:   [4, 1, 8, 3]
                    * iter 2:
                        * current array
                            * 3-th array in triangle: [6, 5, 7]
                        * previous dp  [4, 1, 8, 3]
                        * update dp:
                            * [6 + min(4, 1),  5 + min(1, 8),  7 + min(8, 3) ] = [7, 6, 10]
                    * iter 3:
                        * current array
                            * second array in triangle: [3, 4]
                        * previous dp [7, 6, 10]
                        * update dp: 
                            * [3 + min(7, 6), 4 + min(6, 10)] = [9, 10]
                    * iter 4:
                        * current array
                            * first array in triangle [2]
                        * previous dp [9, 10]
                        * update dp:
                            * [2 + min(9, 10) ] = [11]

					* **finally, we got the minimum path sum: 11**
 

**Code**
		
```
object Solution {
    def minimumTotal(triangle: List[List[Int]]): Int = {
        val depth = triangle.size
        val dp = triangle.last.toArray
        for(i <- (depth - 2) to 0 by -1; j <- triangle(i).indices)
            dp(j) = triangle(i)(j) + (dp(j) min dp(j + 1)) 
        dp(0)
    }
}
```
* time complexity: O(N)
	* N is the height of triangle
	*  all element are visited once
* space complexity: O(N)
	*  N is the height of triangle
	*  We only create dp array which dimesnion is equals to the last row in triangle