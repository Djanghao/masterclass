# [C++ / Go] Bit Manipulation - O(n) time + O(2 ^ c) space

**Author:** mikazuki4712
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090059/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090059/)

---

# Intuition\r
- We are concerned with whether each letter in the substring has an odd or even count.\r
- Consider the example `acabc`:\r
    - Here `a` appears even times, `b` appears odd times, and `c` appears even times => We can represent this state as `010`.\r
    - To get an **all even appearances substring** with current end, we can remove any prefix string with the same state `010`\r
        - odd - odd = even\r
        - even - even = even\r
    - To get **exactly one odd appearance substring** with current end, we try considering each letter as the odd one and flip its bit in the state while keeping the other bits intact.\r
        - Let try to find substring with `a` is the odd one, flip the `a` bit then we get state `110`, so we can remove any prefix string that have state `110` to get a suitable substring.\r
            - odd - even = odd\r
            - even - odd = odd\r
- With only 10 letters (`a` to `j`), our states have a length of 10, resulting in 1024 possible states. \r
=> We can manage the count of each state using an array of 1024 integers and perform bit manipulation to update these counts.\r
    - Assign `a` -> `j` = `2^0` -> `2^9` = `1 << 0` -> `1 << 9`\r
    - To flip / toggle the odd or even status of a letter within a state, we perform bitwise XOR operations with the corresponding value of the letter.\r
\r
# Approach\r
- We maintain an array of 1024 integers to count the number of prefix strings with each state. \r
- Initially, all letters have zero appearances, represented by the state 0000000000 or simply 0, with a count of 1.\r
- Iterate through each letter in `word`:\r
    - Update the current state accordingly.\r
    - Increment the result by the count of all even appearance substrings `count[currentState]`.\r
    - Iterate over all letters from `a` to `j` and update the result by considering each letter as the only one with an odd appearance:\r
        - Compute the `oddState` by flipping the bit of the current letter.\r
        - Add the count of substrings with this odd state to the result `count[oddState]`.\r
\r
# Complexity\r
- Time complexity: $O(n)$\r
- Space complexity: $O(2 ^ c)$, `c` is number of letters from 'a' to 'j'\r
\r
# Code\r
```C++ []\r
class Solution {\r
public:\r
    int get(char c) {\r
        return c - 'a';\r
    }\r
\r
    long long wonderfulSubstrings(string word) {\r
        vector<long long> cnt(1024, 0);\r
        cnt[0] = 1;\r
\r
        int curState = 0;\r
        long long res = 0;\r
\r
        for (char c : word) {\r
            curState ^= 1 << get(c);\r
\r
            res += cnt[curState];\r
            for (char odd = 'a'; odd <= 'j'; odd++) {\r
                int oddState = curState ^ (1 << get(odd));\r
                res += cnt[oddState];\r
            }\r
\r
            cnt[curState]++;\r
        }\r
\r
        return res;\r
    }\r
};\r
```\r
```Go []\r
func get(c rune) int {\r
    return int(c - 'a')\r
}\r
\r
func wonderfulSubstrings(word string) int64 {\r
    cnt := make([]int64, 1024)\r
    cnt[0] = 1\r
\r
    curState := 0\r
    res := int64(0)\r
\r
    for _, c := range word {\r
        curState ^= 1 << get(c)\r
\r
        res += cnt[curState]\r
        for odd := 'a'; odd <= 'j'; odd++ {\r
            oddState := curState ^ (1 << get(odd))\r
            res += cnt[oddState]\r
        }\r
\r
        cnt[curState]++\r
    }\r
\r
    return res\r
}\r
```