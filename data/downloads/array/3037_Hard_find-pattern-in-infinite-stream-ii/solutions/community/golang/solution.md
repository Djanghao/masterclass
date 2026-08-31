# Simple KMP Solution

**Author:** neilnaveen
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/4727866/](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii/solutions/4727866/)

---

# Intuition
The immediate thought on encountering a pattern matching problem within an infinite stream is to leverage a technique that allows efficient search without needing to backtrack the stream. The KMP algorithm stands out because it preprocesses the pattern to identify matching segments within the pattern itself. This preprocessing helps in skipping parts of the stream that are guaranteed not to match, thus avoiding redundant checks.
# Approach
The solution employs the KMP algorithm in two main steps:

1. Preprocess the Pattern: Compute the Longest Proper Prefix which is also Suffix (LPS) array for the pattern. This array will help in determining the next positions to consider for matching after a mismatch, effectively allowing us to skip sections of the pattern and stream that don't need re-examination.
1. Stream Iteration and Matching: Iterate through the infinite stream, maintaining a current window of comparison. Use the LPS array to adjust the position within the pattern after a mismatch, minimizing the number of comparisons. Extend the current window by fetching more elements from the stream as needed. If the end of the pattern is reached, a match is found, and its starting index in the current window is returned.

# Complexity
- Time complexity: The time complexity is `O(n+m)`, where `n` is the length of the stream processed until a match is found (or decided that no match exists in the processed part) and `m` is the length of the pattern. This accounts for the linear time taken to preprocess the pattern and the linear search time through the stream.

- Space complexity:
The space complexity is `O(m)`, where `m` is the length of the pattern. This space is used to store the LPS array. The space used for the current window of the stream is not counted towards the total space complexity since it's external to the algorithm's memory usage.

# Code
```
func findPattern(stream InfiniteStream, pattern []int) int {
    // Preprocess the pattern to create the LPS (Longest Proper Prefix which is also Suffix) array.
    lps := preprocessPattern(pattern)

    j := 0 // Index for pattern
    cur := []int{stream.Next()} // Current window of stream data

    // Iterate through the stream
    for i := 0; ; {
        // Extend the current window if necessary
        if len(cur) <= i {
            cur = append(cur, stream.Next())
        }

        // Pattern matching logic
        if pattern[j] == cur[i] {
            j++ // Move to the next character in the pattern
            if j == len(pattern) {
                // Pattern found
                return i - len(pattern) + 1
            }
            i++ // Move to the next character in the stream
        } else if j > 0 {
            j = lps[j-1] // Use LPS array to skip characters
        } else {
            i++ // No match, move to the next character in the stream
        }
    }
}


func preprocessPattern(pattern []int) []int {
    lps := make([]int, len(pattern))
    for i, j := 1, 0; i < len(pattern); {
        if pattern[i] == pattern[j] {
            j++
            lps[i] = j
            i++
        } else if j > 0 {
            j = lps[j-1]
        } else {
            lps[i] = 0
            i++
        }
    }
    return lps
}
```