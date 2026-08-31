# Solution using prefix sum, O(n) compexity

**Author:** jithinKG
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5588638/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/5588638/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are given an array of words. we are asked to find the count of words which start and ends with vowel in a range (inclusive).

words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
ouput for the range [0, 2] => from 0 to 1 there are 2 words that start and end with vowel

# Approach
<!-- Describe your approach to solving the problem. -->
create an array of prefix sum. To calculate the prefix sum of range
prefixSum[i, j] = prefixsum[j] - prefixsum[i-1]
and append this prefixsum of range to the result array and return the array.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
n-> size of the words array
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
/**
 * ["aba", "bcb", "ece", "aa", "e"]
 * [[0, 2], [1, 4], [1, 1]]
 *  index->  0  1  2  3  4
 * sumArr = [1, 1, 2, 3, 4]
**/
func vowelStrings(words []string, queries [][]int) []int {
    presum := make([]int, len(words))
    sum := 0
    for i, word := range words {
        if isStartAndEndWithVowel(word) {
            sum += 1
        }
        presum[i] = sum
    }
    res := []int{}
    for _, intervel := range queries {
        // presum[i, j] = presum[j] - presum[i-1]
        i := interval[0]
        j := interval[1]
        if i == 0 {
            res = append(res, presum[j])
        }else{
            res = append(res, presum[j] - presum[i-1])
        }
    }
    return res
}

func isStartAndEndWithVowel(s string) bool {
    return isVowel(s[0]) && isVowel(s[len(s) - 1])
}
func isVowel(b byte) bool {
    return b == 'a' || b == 'e' || b == 'i' || b == 'o' || b == 'u'
}
```