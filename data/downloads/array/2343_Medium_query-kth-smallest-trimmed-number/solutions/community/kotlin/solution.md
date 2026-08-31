# General approach | Fastest Kotlin runtime | Without using language's sort function

**Author:** aw_s
**Votes:** 0
**Link:** [https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/5640241/](https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/5640241/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to resolve each query in `queries` array and return a `result` in a form of `Array` (where `result[0]` is the answer for `queries[0]`, `result[1]` for `queries[1]`, etc).

Each query has 2 parameters:
- `query[1]`: How many digits (from the right side) of a number have to be used to perform sorting.
- `query[0]`: Position that will be used to retrieve a number from a sorted array and then retrieved number should be used to look for an index in the original `nums` array.

---

**Example:**
```
nums = ["13", "31", "22"]
queries = [
    [2, 1]
]
```
We only need to resolve a single query `[2, 1]`: use `1` rightmost digit to sort numbers and return an index from original `nums` array where the `2` smallest number (from a sorted array) is located.

Step 1: ignore all digits except the rightmost in `nums`
```
nums = ["\u20223" ("13"), "\u20221" ("31"), "\u20222" ("22")]
```
Step 2: sort `nums` array
```
nums = ["\u20221" ("31"), "\u20222" ("22"), "\u20223" ("13")]
```
Step 3: define the second smallest number (as requested by a query)
- It's `"\u20222" ("22")`.

Step 4: find index of `"22"` in the original array of `nums = ["13", "31", "22"]`.
- The index is `2`.

Step 5: set this index to a `result` array at a `query` position in `queries` array.
- `result = [2]`.

---

The demonstrated sorting approach is called [Radix Sort](https://leetcode.com/explore/learn/card/sorting/695/non-comparison-based-sorts/4438/) (Least Significant Digit variation). The following explanation assumes you're already familiar with the idea of Radix Sort.

This question is a perfect candidate for Radix Sort because:
- it's a stable sort and the question assumes that

  > If two trimmed numbers are equal, the number with the lower index is considered to be smaller.

- in general, in order to sort an array of numbers with length = `N`, Radix Sort will make `N` sorting iterations where the first iteration will use one digit, second iteration is based on the result of a first iteration and will use two digits and so on until all `N` digits are used. If we have a query with big `query[1]` value, then every sorting iteration is making a sort for queries with smaller `query[1]` values.

  **Example:** 
Suppose we have 3 queries: `[1, 20], [2, 4], [3 ,6]`. First query has the largest value, meaning that we should use `20` digits from each number to perform sorting. It means Radix Sort will make `20` sorting iterations to get a result. But two remaining queries (`[2, 4], [3 ,6]`) will also receive benefits as the only additional work we need to do for them is to get the `2`nd smallest number from a result of `4`th sorting iteration for query (`[2, 4]`). Similar for the third query: `3`rd smallest number from a result of `6`th sorting iteration.


# Approach
<!-- Describe your approach to solving the problem. -->
Core of the solution is Radix Sort sorting algorithm which is based on the Counting Sort.

`countingSort` function is implementing Counting Sort idea with the only adjustment: instead of receiving a pure array with elements that should be sorted, `countingSort` receives array of `NumsElement`. `NumsElement` is a wrapper on a number which also allows us to store index of a number in the original `nums` array. We need it to uniquely identify the index of a number in the original array in case of equal numbers.

`radixSort` takes queries as a `queryMap` parameter and count of iterations we expect Radix Sort will perform as `iterationsToPerform` parameter.

- `queryMap`: it's convenient to store queries in a map to avoid passing the whole `queries` after each sorting iteration. Query map with `keys = 1, 3` means that we should update `result` array after the first and third sorting iterations.
- `iterationsToPerform`: allows to decrease amount of sorting iterations in cases when the maximum $trim_i$ value is less that `num` length;

  **Example:**
    ```
    nums = ["1234567890", "2345678901"]
    queries = [
        [1, 1],
        [1, 2],
    ]
    ```
    Numbers length is equal to `10`, but only two sorting iterations should be performed.

# Complexity
- Time complexity: $$O(W * N + K)$$

  We work with digits, which have predefined size = 10. Therefore: 
  1. `countingSort` function has $$O(N)$$;
  2. `radixSort` function has $$O(W*N)$$;

- Space complexity: $$O(N + K)$$

where:
  - $$N = nums.size$$
  - $$W = min(max(trim_i), nums[0].length)$$
  - $$K = queries.size$$

# Code
```
class Solution {
    
    private val DIGITS_COUNT = 10
    
    fun smallestTrimmedNumbers(nums: Array<String>, queries: Array<IntArray>): IntArray {
        val numLen = nums[0].length
        var maxIterations = 0
        
        val queryMap = mutableMapOf<Int, MutableList<QueryParams>>()
        queries.forEachIndexed { queryIdx, query ->
            val iterations = query[1].coerceAtMost(numLen)
            maxIterations = maxOf(maxIterations, iterations)
            if (!queryMap.contains(iterations)) {
                queryMap[iterations] = mutableListOf()
            }
            queryMap.getValue(iterations).add(
                QueryParams(
                    answerIndexToWrite = queryIdx,
                    sortedArrayIndexToRead = query[0] - 1,
                )
            )
        }
        
        return radixSort(
            nums = nums, 
            totalQueries = queries.size, 
            queryMap = queryMap,
            iterationsToPerform = maxIterations,
        )
        
    }
    
    private fun radixSort(
        nums: Array<String>, 
        totalQueries: Int,
        queryMap: Map<Int, MutableList<QueryParams>>,
        iterationsToPerform: Int,
    ): IntArray {
        var sortedNums: Array<NumsElement> = Array(nums.size) { idx ->
            NumsElement(
                value = nums[idx],
                originalIndex = idx 
            )
        }
        val result = IntArray(totalQueries) { 0 }
        
        repeat(iterationsToPerform) { iterationIdx ->
            val charIdxToCompare = nums[0].lastIndex - iterationIdx
            
            sortedNums = countingSort(
                nums = sortedNums, 
                charIdxToCompare = charIdxToCompare,
            )
            
            queryMap[iterationIdx + 1]?.let { paramList ->
                paramList.forEach { params -> 
                    result[params.answerIndexToWrite] =
                        sortedNums[params.sortedArrayIndexToRead].originalIndex
                }
            }
        }
        
        return result
    }
    
    private fun countingSort(
        nums: Array<NumsElement>, 
        charIdxToCompare: Int,
    ): Array<NumsElement> {
        
        val counts = IntArray(DIGITS_COUNT) { 0 }
        
        nums.forEach { element ->
            counts[element.value[charIdxToCompare].digitToInt()]++
        }
        
        var acc = 0
        (0..counts.lastIndex).forEach { idx ->
            val tmp = counts[idx]
            counts[idx] = acc
            acc += tmp
        }
        
        // initializing result array with default values
        val result = Array<NumsElement>(nums.size) { NumsElement("", 0) }
        
        nums.forEach { element ->
            val idxToRead = element.value[charIdxToCompare].digitToInt()
            val numResultIdx = counts[idxToRead]
            result[numResultIdx] = element
            counts[idxToRead] += 1
        }
        
        return result
    }
    
    private data class QueryParams(val answerIndexToWrite: Int, val sortedArrayIndexToRead: Int)
    private data class NumsElement(val value: String, val originalIndex: Int)
}
```