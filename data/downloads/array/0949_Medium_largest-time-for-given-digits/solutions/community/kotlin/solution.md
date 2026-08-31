# [Kotlin] Check all permutations

**Author:** drulabs
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/5156488/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/5156488/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
get all permutations of digits, make sure its a valid permutation and track the max time.

# Approach
<!-- Describe your approach to solving the problem. -->
1. get all permutations of the passed 4 digits
2. validate each permutation for a valid time. e.g 34:21 is not a valid time. for a time to be valie hour must range from 0..23 and minute must range from 0..59.
3. keep track of max time, this solution converts the time into minutes since midnight, you can use a different strategy.
4. return the max time or blank "" is a valid time is not possible. For exa,ple for an input of [5,5,5,5] there cannot be any possible permutation in 24 hour time format range.

# Complexity
- Time complexity: **_O(2^4) = O(16) ~ constant_**: Since there are eactly 4 items in the array
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **_O(2^4) = O(16) ~ constant_**: to store the permutations. you can get rid of it by combining get permuattions and valid time functions.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun largestTimeFromDigits(arr: IntArray): String {
        val allPermutations = mutableSetOf<IntArray>()
        getAllPermutations(arr, allPermutations)
        var max: IntArray = arr.copyOf()
        var maxTime = -1
        for(time in allPermutations) {
            val minutes = isValidTime(time)
            if(minutes >= 0 && minutes > maxTime) {
                maxTime = minutes
                max = time.copyOf()
            }
        }
        return if (maxTime < 0) "" else "${max[0]}${max[1]}:${max[2]}${max[3]}"
    }

    private fun isValidTime(arr: IntArray): Int {
        if (arr[0] !in 0..2 || arr[2] !in 0..5 || (arr[0] == 2 && arr[1] > 3))
            return -1
        return (arr[0] * 10 + arr[1])*60 + (arr[2]*10 + arr[3])
    }

    private fun getAllPermutations(
        arr: IntArray, 
        result: MutableSet<IntArray>,
        visited: BooleanArray = BooleanArray(arr.size),
        current: MutableList<Int> = mutableListOf()
    ) {
        if (current.size == arr.size) {
            result.add(current.toIntArray())
        }

        for (i in 0..arr.lastIndex) {
            if (!visited[i]) {
                visited[i] = true
                current.add(arr[i])
                getAllPermutations(arr, result, visited, current)
                current.removeLast()
                visited[i] = false
            }
        }
    }
}
```