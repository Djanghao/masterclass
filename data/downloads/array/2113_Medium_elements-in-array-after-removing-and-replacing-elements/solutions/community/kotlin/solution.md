# Simple O(n) solution with clear explanation (beats 100%)

**Author:** ali-ahsan
**Votes:** 0
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/1663205/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/1663205/)

---

Below is how an array changes over time:
[0,1,2]->[1,2]->[2]->[ ]->[0]->[0,1]->[0,1,2]
t=0  -> t=1 -> t=2 -> t=3  -> t=4  -> t=5  ->  t=6

Lets say `length` is the original size of nums array.

There are two cases:
* The array is empty or increasing in size if `time_i / length` is odd :

	1. Array is empty if reminder is `0` meaning replacing process is not started yet.
	
	2. `index` is out of bound if `index >= reminder` as `reminder` is current size of the array which is less than original size.
	
* The array is shrinking or at same size if `time_i / length` is even :

	1. Array is of same size as original if reminder is `0` meaning shrinking is not started yet.


	2. `index` is out of bound if `(index + reminder) >= length` as we're removing elements from front and each index is getting shifted by `reminder`.


# Java Solution 

```
class Solution {
    public int[] elementInNums(int[] nums, int[][] queries) {
        int size = nums.length;
        int[] ansArray = new int[queries.length];

        for (int index = 0; index < queries.length; index++) {
            int[] query = queries[index];
            int time = query[0];
            int queryIndex = query[1];
            int divisor = time / size;
            int reminder = time % size;
            int val;

            // Odd Case
            if ((divisor & 1) == 1) {
                // We'll insert -1 if array size is 0 or index is out of bound
                if (reminder == 0 || queryIndex >= reminder)
                    val = -1;
                    // Otherwise, we'll insert the element at given index
                else val = nums[queryIndex];
                // Even case,
                // If shifted index i.e. `queryIndex + reminder` is valid,
                // we'll insert the element at shifted index
            } else if ((queryIndex + reminder) < size)
                val = nums[queryIndex + reminder];
                // Otherwise, we'll insert -1
            else val = -1;

            ansArray[index] = val;
        }

        return ansArray;
    }
}
```


# Kotlin Solution 

```
class Solution {
    fun elementInNums(nums: IntArray, queries: Array<IntArray>): IntArray {
        val size = nums.size
        val ansArray = IntArray(queries.size)

        for ((index, query) in queries.withIndex()) {
            val time = query.first()
            val queryIndex = query.last()
            val divisor = time / size
            val reminder = time % size

            // Odd Case
            ansArray[index] = if (divisor and 1 == 1) {
			    // We'll insert -1 if array size is 0 or index is out of bound
                if (reminder == 0 || queryIndex >= reminder) -1
				// Otherwise, we'll insert the element at given index
                else nums[queryIndex]
				// Even case, 
				// If shifted index i.e. `queryIndex + reminder` is valid,
				// we'll insert the element at shifted index
            } else if ((queryIndex + reminder) < size) 
                   nums[queryIndex + reminder]
			// Otherwise, we'll insert -1
            else -1
        }

        return ansArray
    }
}
```