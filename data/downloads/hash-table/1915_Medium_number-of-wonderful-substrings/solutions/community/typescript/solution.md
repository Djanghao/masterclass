# Typescript Approach

**Author:** kyratzakos
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5092464/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5092464/)

---

# Intuition\r
To solve the problem of counting the number of "wonderful" non-empty substrings in a string using the first ten lowercase English letters ('a' to 'j'), we need to efficiently track the frequency of each letter in every possible substring. A direct approach involving checking each substring individually would be too slow, so we'll use bit manipulation and prefix sums to optimize.\r
\r
# Approach\r
1. Bit Masking: Use a bit mask of size 10 (since there are only 10 different characters) to represent the even/odd state of each character's count in the substring. For example, if the bit at position `i` is `1`, then the character corresponding to `a + i` appears an odd number of times.\r
2. Prefix Sum with Bit Masking: As you iterate through the string, update the bitmask based on the current character. Calculate the "wonderfulness" of all substrings ending at the current character by:\r
    - Checking the current bitmask (currentMask).\r
    - Checking all bitmasks that differ from the currentMask by exactly one bit (since a wonderful substring can have at most one character that appears an odd number of times).\r
    - Using a hashmap to keep track of all previously seen bitmasks and their frequencies.\r
3. Count Substrings: For each position in the string, calculate how many substrings ending at that position are wonderful by looking up in the hashmap.\r
\r
# Complexity\r
- Time complexity:\r
$O(n\xD7k)$, where $n$ is the length of the string and $k$ is the number of bits (10 in this case). The loop runs for each character, and for each character, we check up to 10 different bit toggles\r
\r
- Space complexity:\r
$O(2^k)$, where $k$ is 10 because we might end up storing each possible bitmask in the worst case. This is about 1024 entries in the hashmap.\r
\r
# Code\r
```\r
function wonderfulSubstrings(word: string): number {\r
    const countByMask: { [key: number]: number } = { 0: 1 }\r
    let currentMask = 0\r
    let totalCount = 0\r
\r
    for (const char of word) {\r
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0)\r
        \r
        currentMask ^= (1 << index)\r
        \r
        if (countByMask[currentMask]) {\r
            totalCount += countByMask[currentMask]\r
        }\r
        \r
        for (let i = 0; i < 10; i++) {\r
            const toggledMask = currentMask ^ (1 << i)\r
            if (countByMask[toggledMask]) {\r
                totalCount += countByMask[toggledMask]\r
            }\r
        }\r
        \r
        if (countByMask[currentMask]) {\r
            countByMask[currentMask]++\r
        } else {\r
            countByMask[currentMask] = 1\r
        }\r
    }\r
\r
    return totalCount\r
};\r
```