# Simple Swift Solution with detailed explanation

**Author:** El_Kal_1
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-subsets/solutions/2653905/](https://leetcode.com/problems/word-subsets/solutions/2653905/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea here is to go through the words2 and create a maximum frequency of each character because after that while matching through words in words1 if any character's frequency is lower than the maximum frequency we would know that it can't be a universal word

# Approach
We have created a `count` function to give us the frequency of characters in a word. We're using an array here because it's given that all characters are lowercase alphabets only.

First we'll loop through the words2, count each word's character frequency and feed them into our `maxCount` array which is to keep track of maximum frequency of each character.

Then we'll loop through words1, get each word's character frequency and compare them to our maximum frequency stored in `maxCount`. If we found any frequency lesser than the maximum frequency which means this word can't be a universal word so we'll exit the loop. If we don't find any such condition that'll mean our word can be a universal word so we'll append that into our `ans`.

# Code
```
class Solution {
    func wordSubsets(_ words1: [String], _ words2: [String]) -> [String] {
        var maxCount = [Int](repeating: 0, count: 26)
        var ans = [String]()

        for word in words2 {
            let charCount = count(word)
            for i in 0..<26 {
                maxCount[i] = max(maxCount[i], charCount[i])
            }
        }

        outer: for word in words1 {
            let charCount = count(word)
            for i in 0..<26 {
                if charCount[i] < maxCount[i] {
                    continue outer
                }
            }
            ans.append(word)
        }


        return ans
    }

    func count(_ word: String) -> [Int] {
        var charCount = [Int](repeating: 0, count: 26)

        for char in word {
            let index = Int(char.asciiValue! - Character("a").asciiValue!)
            charCount[index] += 1
        }

        return charCount
    }
}
```