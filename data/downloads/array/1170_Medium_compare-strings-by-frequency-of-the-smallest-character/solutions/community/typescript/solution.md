# Solution Space (Binary Search) in Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/4145796/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/4145796/)

---

# Intuition
For this problem we're going to use **Binary Search** (Solution Space).

Let's briefly explain why:
```
# 1. there are 'words' and 'queries'

# 2. both of them contains only English lowercase letters

# 3. there's a definition F(s), that represents
# frequency of the smallest lexicographical character
# of a particular string

# 4. our goal is to define HOW many words satisfy 
# the next condition for queries
# f(queries[i]) < f(w) for each w in words

```

If we represent each word from `words` with the **frequency** of its characters, we can see a **frequency map**. 

```
# Example
nums = 'abacaba'
map = [4,2,0,0,0....,0]
```

Next step is to **compare** frequency of a particular query with each word to find a count of words, that satisfies the condition above.

But this's not an effective approach.

hat if the input will be **sorted?** 
We could use the **Binary Search** to optimally find a point of insertion etc.

# Approach
1. define `extractFrequency` function, that accepts `w` as word and calculate **frequency of the lexicographically smallest character**
2. sort mapped `words`
3. declare an empty `ans` for storing results of **Binary Search**
4. define `search` function to find `f(queries[i]) < f(w) for each w in words`
5. for each query in `queries` store the result into `ans`
6. return ans

# Complexity
- Time complexity: **O(n log n + m log n)**, this calculates Binary Search for each query and sorting of `words` after mapping with frequency

- Space complexity: **O(n + m)**, where `n` is count of `words`, `m` - count of `queries`

# Code in TypeScript
```
class Solution:
    def numSmallerByFrequency(self, queries: List[str], words: List[str]) -> List[int]:
        def extractFrequency(w):
            min = w[0]

            for char in w:
                if char < min: min = char
            
            return w.count(min)
            
        words = sorted([extractFrequency(w) for w in words])

        def search(k):
            left, right = 0, len(words)

            while left < right:
                mid = (left + right) // 2

                if words[mid] > k: right = mid
                else: left = mid + 1

            return len(words) - left

        return [search(extractFrequency(x)) for x in queries]
```
# Code in TypeScript
```
function numSmallerByFrequency(queries: string[], words: string[]): number[] {
    const extractFrequency = (w) => {
        let min = w[0]

        for (let i = 0; i < w.length; i++) {
            if (min > w[i]) min = w[i]
        }

        return w.split('').reduce((a, c) => a + Number(c === min), 0)
    };

    const mappedWords = words.map(extractFrequency);
    mappedWords.sort((a, b) => a - b);

    const ans: number[] = [];

    const search = (k) => {
        let [left, right] = [0, mappedWords.length];

        while (left < right) {
            const mid = (left + right) >> 1;

            if (mappedWords[mid] > k) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return mappedWords.length - left;
    };

    for (let i = 0; i < queries.length; i++) {
        ans.push(search(extractFrequency(queries[i])));
    }

    return ans;
}
```