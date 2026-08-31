# Swift Solution - using Valid Palindrome II approach

**Author:** Gupta5610
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/4244058/](https://leetcode.com/problems/valid-palindrome-iii/solutions/4244058/)

---

# Intuition
We're extending the concept of allowing a single character removal to now permit up to `maxDeletions` removals to achieve a palindrome.  Essentially, we're exploring different paths where we strategically skip characters to see if we can eventually reach a palindromic state.

# Approach

The approach mirrors the one used in "Valid Palindrome II" but with added flexibility. We start comparing characters from both ends of the string, just like before.  However, when a mismatch occurs, we now have two choices:

 1. **Skip the left character:**  We recursively check if the remaining substring (excluding the left character, i.e., from `leftIndex + 1` to `rightIndex`) can become a palindrome with `remainingDeletions - 1` skips remaining.

 2. **Skip the right character:**  Similarly, we recursively explore if skipping the right character (i.e., from `leftIndex` to `rightIndex - 1`) leads to a palindromic substring with `remainingDeletions - 1` skips left.

The crucial insight is that we might encounter the same substring multiple times during these recursive explorations. To avoid redundant computations, we introduce memoization using a hashmap called `memo`. The key to this hashmap is a combination of the starting index (`leftIndex`), ending index (`rightIndex`), and the remaining number of allowed skips (`remainingDeletions`).  This ensures each unique substring and its corresponding 'skip allowance' is evaluated only once, with the result stored for future reference.

**Example:**

Input: s = "abca", k = 1
Output: true

Now instead of k = 1 it can be any number integral value greater than equal to 0

Input: s = "acbcbea", k = 2
Output: true

we use the same approach like we did in Valid Palindrome II, 
we will have something like this 

$$skip 1$$ 
```
acbcbea -> acbcba , abcbea
```

$$skip 2$$
```
acbcba -> abcba, acbca
abcbea -> abcba, acbea
```

By memoizing intermediate results, we optimize the algorithm's time complexity and avoid redundant computations, making it more efficient for handling larger inputs.

`var key = "\\(leftIndex)\\(rightIndex)\\(remainingDeletions)"`

# Time complexity

Memoization dramatically improves the time complexity. By storing and reusing the results of previously computed substrings and remaining deletion counts, we avoid redundant computations. In the worst case, the function will be called for every possible combination of `leftIndex`, `rightIndex`, and `remainingDeletions`.

  - The range of `leftIndex`and `rightIndex` is 0 to n (length of the string).
  - The range of `remainingDeletions` is 0 to k.

Therefore, the maximum number of unique combinations for the memoization key is n * n * k.  For each of these combinations, the function does a constant amount of work (comparing characters, making recursive calls).  Hence, the overall time complexity with memoization is O(n^2 * k)


# Space complexity:
- Memoization Table: The `memo` dictionary stores the results for different combinations of `leftIndex`, `rightIndex`, and `remainingDeletions`. As discussed above, the maximum number of entries in this table is n * n * k.
- Recursion Stack: In the worst case, the recursion depth can be 'k' (the maximum number of deletions allowed). Each recursive call stores a few variables on the stack. So, the space used by the recursion stack is O(k).

Therefore, the overall space complexity is dominated by the memoization table, resulting in O(n^2 * k).

***
**_Memoization is crucial in optimizing this solution from an exponential time complexity to a much more manageable polynomial time complexity._**
# Code
```
class Solution {
    // Memoization to store results for substrings and remaining deletions
    var memo: [String: Bool] = [:]

    func isValidPalindrome(_ s: String, _ k: Int) -> Bool {
        let characters = Array(s)
        return isPalindromePossible(characters, 0, characters.count - 1, k)
    }

    func isPalindromePossible(_ characters: [Character], _ start: Int, _ end: Int, _ remainingDeletions: Int) -> Bool {
        var leftIndex = start // left pointer
        var rightIndex = end // right pointer

        // Create a unique key for memoization
        let key = "\\(leftIndex),\\(rightIndex),\\(remainingDeletions)," // Use leftIndex and rightIndex

        // Check if the result is already memoized
        if let result = memo[key] {
            return result
        }

        // Compare characters from both ends towards the center
        while leftIndex < rightIndex {
            if characters[leftIndex] != characters[rightIndex] {
                // If no deletions are left, it's not a valid palindrome
                if remainingDeletions == 0 {
                    memo[key] = false
                    return false
                }

                // Try deleting the left character
                if (isPalindromePossible(characters, leftIndex + 1, rightIndex, remainingDeletions - 1)) {
                    memo[key] = true
                    return true
                }
                // Try deleting the right character
                if (isPalindromePossible(characters, leftIndex, rightIndex - 1, remainingDeletions - 1)) {
                    memo[key] = true
                    return true
                }

                // Neither deletion worked, store and return false
                memo[key] = false
                return false
            }

            leftIndex += 1
            rightIndex -= 1
        }

        // If the loop completes, it's a palindrome, store and return true
        memo[key] = true
        return true
    }
}
```