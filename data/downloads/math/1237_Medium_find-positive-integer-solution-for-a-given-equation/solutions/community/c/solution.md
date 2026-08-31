# [C++] O(X*Y) Easy to understand: 0ms solution beats 100%

**Author:** KevalNagda
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/651149/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/651149/)

---

***I'm new here so please comment if you have any suggestions or find anything incorrect.***

**Intuition**

Brute Force approach:

1. Iterate **x** from **1 to 1000**.
2. Iterate **y** from **1 to 1000** for each **x**.
3. Check if **f(x,y) == z** then store the values of **x** and **y**.

A slightly better approach (my approach):

1. Iterate **x** from **1 to 1000**.
2. Iterate **y** from **1 to 1000**.
3. Check if **f(x,y) == z** then store the values of **x** and **y**.
4. Else if **f(x,y) > z** then **break** (Helps in reducing the total number of iterations).

If the function **f(x,y)** has a value greater than **z** for a particular value of **x, y**
Then, since it is an **incremental function** (given in description), **f(x,y)** will always be greater than **z** for all the values of **x ,y <= 1000**. So we can just skip them and move on to other values.

**Complexity**

Time Complexity:
Worst case scenario would be where **f(x,y) == z** for **x:1000** and **y:1000**.
In that case, time complexity would be **O(X * Y)**.

Space Complexity:
Worst case scenario would be where **f(x,y) == z** for every value of **x** and **y**.
In that case, space complexity would be **O(X)** or **O(Y)**.

**Code**

```
class Solution {
public:
    vector<vector<int>> findSolution(CustomFunction& customfunction, int z)
	{
        vector<vector<int>> result;                   // Declare output vector
		
        for(int x=1; x<=1000; x++)                    // Iterate for all of the values of x
		{
            for(int y=1; y<=1000; y++)                // Iterate for all of the values of y
			{
                if(customfunction.f(x, y) == z)       // Check satisfying condition
				{
                    result.push_back({x,y});          // Store the values of x and y
                }
                else if(customfunction.f(x, y) > z)   // Check breaking condition
				{
					break;                            // Stop iterating further for unnecessary values
				}
            }
        }
        return result;                                // Return a list of all the values of x and y
    }
};
```


