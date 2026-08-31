# Bitmask - Explained each step in detail

**Author:** itsluminous
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090305/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090305/)

---

If the explaination below is not clear, please look at comments in the code snippet.\r
\r
# Intuition & Approach\r
- Solving with brute force using sliding window times out. So we have to improve time complexity somehow\r
- We keep track of the current state of odd/even in a bitmask of size 10\r
- So, for string `ab`, the bitmask would be `0000000011`, and for string `aba` the bitmask would be `0000000010`\r
- Basically, odd count is represented by `1` and even by `0`\r
- Now, while traversing string, if we encounter a bitmask 2nd time, it means that all chars between 1st occurrence and 2nd occurrence are even. So this gives us a valid wonderful string. So increase count in result.\r
- Now, we are also allowed to have 1 odd count. So for every bitmask, we flip each digit one by one and check if we have seen this mask earlier. If we have seen, then using same logic as earlier, we can add this occurrence to result.\r
\r
# Complexity\r
- Time complexity: O(n*10) = O(n)\r
- Space complexity: O(1024) = O(1)\r
\r
# Code\r
```java []\r
public class Solution {\r
    public long wonderfulSubstrings(String word) {\r
        // create array to keep track of how many times we have seen a given mask\r
        // 2^10 because we can have max 10 chars in a string, so if all chars are odd, then all bits are 1\r
        var freq = new long[1024];\r
        freq[0] = 1;    // 0 will be string with no chars at all\r
        \r
        long result = 0; // 0 wonderful substrings at start\r
        var mask = 0;    // no odd characters at starting\r
        for(var ch : word.toCharArray()){\r
            mask ^= maskOf(ch);  // flip the bit corresponding to current char. If it was odd, it becomes even and so on\r
            \r
            // if we have seen this mask in past, then chars between that posn and current are all even\r
            // so it is a valid wonderful substring, hence we increase result\r
            // freq[mask] will be 0 if we have not seen this mask earlier\r
            result += freq[mask];   \r
\r
            // even count is taken care of. now we need to consider case where one char is odd\r
            // so for each char in current mask, we will flip it one by one, and check if we have seen the mask earlier\r
            // if we have seen it, then it means that the char we flipped will be odd, and others even\r
            for(var curr='a'; curr<='j'; curr++){\r
                var maskToCheck = mask ^ maskOf(curr);\r
                result += freq[maskToCheck];   \r
            }\r
\r
            // now we have to update freq to say that we have seen the current mask\r
            freq[mask]++;\r
        }\r
\r
        return result;\r
    }\r
\r
    private int maskOf(char ch){\r
        // we start with a mask of 10 bits 0000000001\r
        // then we shift "1" as many times as the char position\r
        // so for 'a' we shift 0 times, for b shift once, and so one...\r
        // eg. final mask of "d" should be "0000001000"\r
        var val = ch-'a';\r
        return 1 << val;\r
    }\r
}\r
```\r
```csharp []\r
public class Solution {\r
    public long WonderfulSubstrings(string word) {\r
        // create array to keep track of how many times we have seen a given mask\r
        // 2^10 because we can have max 10 chars in a string, so if all chars are odd, then all bits are 1\r
        var freq = new long[1024];\r
        freq[0] = 1;    // 0 will be string with no chars at all\r
        \r
        long result = 0; // 0 wonderful substrings at start\r
        var mask = 0;    // no odd characters at starting\r
        foreach(var ch in word){\r
            mask ^= MaskOf(ch);  // flip the bit corresponding to current char. If it was odd, it becomes even and so on\r
            \r
            // if we have seen this mask in past, then chars between that posn and current are all even\r
            // so it is a valid wonderful substring, hence we increase result\r
            // freq[mask] will be 0 if we have not seen this mask earlier\r
            result += freq[mask];   \r
\r
            // even count is taken care of. now we need to consider case where one char is odd\r
            // so for each char in current mask, we will flip it one by one, and check if we have seen the mask earlier\r
            // if we have seen it, then it means that the char we flipped will be odd, and others even\r
            for(var curr='a'; curr<='j'; curr++){\r
                var maskToCheck = mask ^ MaskOf(curr);\r
                result += freq[maskToCheck];   \r
            }\r
\r
            // now we have to update freq to say that we have seen the current mask\r
            freq[mask]++;\r
        }\r
\r
        return result;\r
    }\r
\r
    private int MaskOf(char ch){\r
        // we start with a mask of 10 bits 0000000001\r
        // then we shift "1" as many times as the char position\r
        // so for 'a' we shift 0 times, for b shift once, and so one...\r
        // eg. final mask of "d" should be "0000001000"\r
        var val = ch-'a';\r
        return 1 << val;\r
    }\r
}\r
```\r
```python []\r
class Solution:\r
    def wonderfulSubstrings(self, word: str) -> int:\r
        # create array to keep track of how many times we have seen a given mask\r
        # 2^10 because we can have max 10 chars in a string, so if all chars are odd, then all bits are 1\r
        freq = [0] * 1024\r
        freq[0] = 1  # 0 will be string with no chars at all\r
        \r
        result = 0  # 0 wonderful substrings at start\r
        mask = 0    # no odd characters at starting\r
        for ch in word:\r
            mask ^= self.maskOf(ch)  # flip the bit corresponding to current char. If it was odd, it becomes even and so on\r
            \r
            # if we have seen this mask in past, then chars between that posn and current are all even\r
            # so it is a valid wonderful substring, hence we increase result\r
            # freq[mask] will be 0 if we have not seen this mask earlier\r
            result += freq[mask]\r
            \r
            # even count is taken care of. now we need to consider case where one char is odd\r
            # so for each char in current mask, we will flip it one by one, and check if we have seen the mask earlier\r
            # if we have seen it, then it means that the char we flipped will be odd, and others even\r
            for curr in range(ord('a'), ord('j')+1):\r
                maskToCheck = mask ^ self.maskOf(chr(curr))\r
                result += freq[maskToCheck]\r
            \r
            # now we have to update freq to say that we have seen the current mask\r
            freq[mask] += 1\r
        \r
        return result\r
\r
    def maskOf(self, ch: str) -> int:\r
        # we start with a mask of 10 bits 0000000001\r
        # then we shift "1" as many times as the char position\r
        # so for 'a' we shift 0 times, for b shift once, and so on...\r
        # eg. final mask of "d" should be "0000001000"\r
        val = ord(ch) - ord('a')\r
        return 1 << val\r
```\r
\r
# Code without comments\r
```java []\r
public class Solution {\r
    public long wonderfulSubstrings(String word) {\r
        var freq = new long[1024];\r
        freq[0] = 1;\r
        \r
        long result = 0;\r
        var mask = 0;\r
        for(var ch : word.toCharArray()){\r
            mask ^= maskOf(ch);\r
            result += freq[mask];   \r
            for(var curr='a'; curr<='j'; curr++){\r
                var maskToCheck = mask ^ maskOf(curr);\r
                result += freq[maskToCheck];   \r
            }\r
            freq[mask]++;\r
        }\r
        return result;\r
    }\r
\r
    private int maskOf(char ch){\r
        var val = ch-'a';\r
        return 1 << val;\r
    }\r
}\r
```\r
```csharp []\r
public class Solution {\r
    public long WonderfulSubstrings(string word) {\r
        var freq = new long[1024];\r
        freq[0] = 1;\r
        \r
        long result = 0;\r
        var mask = 0;\r
        foreach(var ch in word){\r
            mask ^= MaskOf(ch);\r
            result += freq[mask];   \r
            for(var curr='a'; curr<='j'; curr++){\r
                var maskToCheck = mask ^ MaskOf(curr);\r
                result += freq[maskToCheck];   \r
            }\r
            freq[mask]++;\r
        }\r
        return result;\r
    }\r
\r
    private int MaskOf(char ch){\r
        var val = ch-'a';\r
        return 1 << val;\r
    }\r
}\r
```\r
```python []\r
class Solution:\r
    def wonderfulSubstrings(self, word: str) -> int:\r
        freq = [0] * 1024\r
        freq[0] = 1\r
        \r
        result = 0\r
        mask = 0\r
        for ch in word:\r
            mask ^= self.maskOf(ch)\r
            result += freq[mask]\r
            for curr in range(ord('a'), ord('j')+1):\r
                maskToCheck = mask ^ self.maskOf(chr(curr))\r
                result += freq[maskToCheck]\r
            freq[mask] += 1\r
        \r
        return result\r
\r
    def maskOf(self, ch: str) -> int:\r
        val = ord(ch) - ord('a')\r
        return 1 << val\r
```