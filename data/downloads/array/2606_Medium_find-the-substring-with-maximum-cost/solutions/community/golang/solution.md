# Go Maximum Cost Substring in 9ms and 6.4MB memory used

**Author:** favourO
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3944558/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3944558/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This approach drew inspiration from Algorithm casts on YouTube, where it was initially solved in Python, resulting in an execution time of 170ms and memory usage of 17MB. Applying the same concept in Go yielded a slightly quicker performance outcome.

# Approach
<!-- Describe your approach to solving the problem. -->
This code defines a function maximumCostSubstring that calculates the maximum cost substring based on given characters and values. It initializes an array values with indices 1 to 26. Then, it updates these values according to provided characters and corresponding values. The code employs Kandane's Algorithm to find the maximum contiguous sum of values in the string s. It iterates through the string, updating maxSumEndingHere as it adds values corresponding to characters. If maxSumEndingHere becomes negative, it resets to 0. The final result is stored in maxSumSoFar, representing the maximum cost substring. The function returns this maximum cost.

# Complexity
- Time complexity: O(n + m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

Initializing values array: This takes constant time O(26) or simply O(1), as the array length is constant.
Loop to update values array: This loop iterates through the characters in the chars string and updates the values array. Since there are n characters in the chars string, this loop has a time complexity of O(n).
Kandane's Algorithm loop: This loop iterates through the characters in the s string. Since there are m characters in the s string, this loop has a time complexity of O(m).
Combining these complexities, the overall time complexity of the function is O(1) + O(n) + O(m), which simplifies to O(n + m), where n is the length of the chars string and m is the length of the s string.

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
values array: This array has a constant length of 26, regardless of the input size. Thus, the space complexity of this array is O(26), which simplifies to O(1).

Integer variables: The algorithm uses a few integer variables to store indices, sums, and maximum values. These variables occupy a constant amount of memory, so their space complexity is O(1).

Overall, the space complexity of the algorithm is dominated by the values array and the integer variables, both of which have constant space requirements. Therefore, the space complexity of the entire algorithm is O(1).

# Code
```
func maximumCostSubstring(s string, chars string, vals []int) int {
    //  initializes the values slice and The loop sets values from 1 to 26 for each index
    values := make([]int, 26)

    // The loop sets values from 1 to 26 for each index
    for i := range values {
        values[i] = i + 1
    }

    // This loop updates the values in the values slice based on the characters provided in the chars string and the corresponding values in the vals slice
    for i := 0; i < len(chars); i++ {
        values[chars[i] - 'a'] = vals[i]
    }

    // Using Kandane's Algorithm
    maxSumEndingHere, maxSumSoFar := 0, 0
    for i := 0; i < len(s); i++ {
        maxSumEndingHere += values[s[i]-'a']
        if (maxSumEndingHere < 0) {
            maxSumEndingHere = 0
        }

        if (maxSumEndingHere > maxSumSoFar) {
            maxSumSoFar = maxSumEndingHere
        }
    }

    return maxSumSoFar
}
```