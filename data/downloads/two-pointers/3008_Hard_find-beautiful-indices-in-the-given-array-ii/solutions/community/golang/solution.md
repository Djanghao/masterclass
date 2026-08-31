# Golang solution using Knuth-Morris-Pratt (KMP) algorithm for string pattern matching

**Author:** user1250VX
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4563811/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4563811/)

---

# Intuition
Upon encountering this problem, my initial thought was to efficiently find all occurrences of two substrings a and b within a given string s, and then determine if these occurrences are within a specified distance k from each other. The key challenge was to perform these tasks in a manner that is not only accurate but also time-efficient, given the potentially large size of the input string s.
# Approach
To address this problem, I decided to use the Knuth-Morris-Pratt (KMP) algorithm, renowned for its efficiency in pattern searching. The KMP algorithm significantly reduces the time required to search for substring occurrences by avoiding unnecessary comparisons. Here's a breakdown of the steps:

Finding Occurrences: Utilize the KMP algorithm to identify all positions where substrings a and b appear in s.
Checking Distances: Implement a two-pointer technique to iterate through the found indices of a and b. For each index of a, use a sliding window approach to check if there exists an index of b within the k distance constraint.
Result Compilation: Collect all indices of a that meet the criteria of being within k distance of an index of b, and return these indices as the result.

# Complexity
- The time complexity is 
O(n+m), where n is the length of the string s and m is the total length of the occurrences of substrings a and b within s. This complexity arises because the KMP algorithm processes the text (string s) in O(n) time, and the two-pointer approach for checking distances operates in O(m) time.

- Space complexity:
The space complexity is 
O(m), which is required for storing the indices of occurrences of substrings a and b. The additional space needed for the LPS (Longest Prefix Suffix) array in the KMP algorithm is proportional to the length of the substrings, which is considerably smaller than m and does not significantly impact the overall space complexity.


# Code
```
func beautifulIndices(s string, a string, b string, k int) []int {
    indicesA := kmpSearch(s, a)
    indicesB := kmpSearch(s, b)
    var result []int
    j := 0

    for _, indexA := range indicesA {
        // Adjust the start of the window (j) for indices of 'b'
        for j < len(indicesB) && indicesB[j] < indexA-k {
            j++
        }

        // Check if there's any index of 'b' within the window that satisfies the condition
        if j < len(indicesB) && indicesB[j] <= indexA+k {
            result = append(result, indexA)
        }
    }

    return result
}

// kmpSearch finds all occurrences of the pattern in the text
func kmpSearch(text string, pattern string) []int {
    lps := computeLPSArray(pattern)
    var indices []int
    i, j := 0, 0 // index for text and pattern

    for i < len(text) {
        if pattern[j] == text[i] {
            j++
            i++
        }
        if j == len(pattern) {
            indices = append(indices, i-j)
            j = lps[j-1]
        } else if i < len(text) && pattern[j] != text[i] {
            if j != 0 {
                j = lps[j-1]
            } else {
                i = i + 1
            }
        }
    }

    return indices
}

// computeLPSArray computes the Longest Prefix Suffix array for KMP algorithm
func computeLPSArray(pattern string) []int {
    length := 0 // length of the previous longest prefix suffix
    lps := make([]int, len(pattern))
    lps[0] = 0 // lps[0] is always 0
    i := 1

    for i < len(pattern) {
        if pattern[i] == pattern[length] {
            length++
            lps[i] = length
            i++
        } else {
            if length != 0 {
                length = lps[length-1]
            } else {
                lps[i] = 0
                i++
            }
        }
    }

    return lps
}

```