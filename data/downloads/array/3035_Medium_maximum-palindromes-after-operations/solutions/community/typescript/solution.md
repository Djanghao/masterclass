# 🟡🔵 TS/JS easy solution WITH ch map | sort | pairs distribution ✅ 100% time and memmory 🔥🔥🔥

**Author:** arveske
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4711021/](https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4711021/)

---

![Screenshot 2024-02-11 144400.png](./images/0.png)

# Intuition
We can switch characters as many times as we want. So, the first thought was to count all characters and find out how many pairs we can create. Then, we can sort words in ascending order and distribute pairs among the shortest words to maximize the number of palindromes.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Iterate through each word in the input array and count the frequency of each character using an object `chMap`.
2. Calculate the total number of pairs that can be formed from the counted characters. This is done by summing up the `Math.floor` division of each character count by 2.
3. Sort the `words` in ascending order based on their lengths.
4. Iterate through the sorted words. If a word has only one character, it is automatically a palindrome, so it is counted `res++`. For words longer than one character, calculate the number of pairs needed to form a palindrome. If there are enough pairs available `pairsLeft`, count the word as a palindrome and subtract the used pairs. If there aren't enough pairs, `break` the while loop.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n * log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(c)$$
$$c$$ - characters count store
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxPalindromesAfterOperations(words: string[]): number {
    const chMap: Record<string, number> = {}
    words.forEach(word => {
        for (const ch of word) {
            chMap[ch] = (chMap[ch] || 0) + 1
        }
    })
    let pairsLeft = 0
    Object.values(chMap).forEach(chCount => {
        pairsLeft += Math.floor(chCount / 2)
    })
    let res = 0
    let i = 0
    words.sort((a, b) => a.length - b.length)
    while (i < words.length) {
        const word = words[i]
        if (word.length == 1) {
            res++
            i++
            continue
        }
        const neededPairs = Math.floor(word.length / 2)
        if (pairsLeft >= neededPairs) {
            res++
            pairsLeft -= neededPairs
            i++
        } else {
            break
        }
    }
    return res
};

```