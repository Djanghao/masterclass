# 💯Faster✅💯Lesser✅Detailed Approach🎯Prefix XOR🔥Bitmask🧠Step-by-Step Explanation🔥Python🐍Java☕C++

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 98
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090170/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090170/)

---

<!-- # \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 3 ways to solve this question with detailed explanation of each approach: -->
# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
You are given a string `word` consisting of lowercase English letters. A substring is a contiguous sequence of characters within a string. You need to find the number of wonderful substrings in the given string.

A substring is wonderful if it satisfies the following condition:
- There is at most one character in the substring whose frequency is odd.

Return the number of wonderful substrings.
### \uD83D\uDCE5Input:
- A string `word` consisting of lowercase English letters.
### \uD83D\uDCE4Output:
- An integer representing the number of wonderful substrings in the given string `word`.
<!-- # \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering three different methods to solve this problem:
1. Prefix XOR Technique
2. Frequency Array
3. Bitmask Technique -->


# Prefix XOR Technique\uD83E\uDD13: 
- This approach involves using a prefix XOR technique combined with a bitmask.
- For each character in the string, calculate the prefix XOR up to that character.
- For each prefix XOR value encountered, store the count of its occurrences.
- For each prefix XOR value, count the substrings where there is at most one character whose frequency is odd.

**Detailed Steps:**
1. **Initialize Data Structures**: 
   - Initialize an array `count` of size 1024 (2^10) to store the count of each prefix XOR value encountered.
   - Initialize `result` to 0 to store the final count of wonderful substrings.
   - Initialize `prefix_xor` to 0 to store the prefix XOR value.

2. **Iterate Through Characters**:
   - Iterate through each character `char` in the input `word`.
   - Calculate the index of the character using `char_index = ord(char) - ord('a')`.
   - Update the `prefix_xor` by XOR-ing it with the bit representing the current character.
   - Increment `result` by the count of the current `prefix_xor` value stored in the `count` array.
   - For each possible position of flipping a bit in the `prefix_xor`, increment `result` by the count of that prefix XOR value stored in the `count` array.
   - Increment the count of the current `prefix_xor` value in the `count` array.

3. **Return Result**: 
   - Return the final `result`, which represents the number of wonderful substrings.

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution(object):
    def wonderfulSubstrings(self, word):
        count = [0] * 1024  # 2^10 to store XOR values
        result = 0
        prefix_xor = 0
        count[prefix_xor] = 1
        
        for char in word:
            char_index = ord(char) - ord('a')
            prefix_xor ^= 1 << char_index
            result += count[prefix_xor]
            for i in range(10):
                result += count[prefix_xor ^ (1 << i)]
            count[prefix_xor] += 1
        
        return result
```
```Java []
class Solution {
    public long wonderfulSubstrings(String word) {
        long[] count = new long[1024]; // 2^10 to store XOR values
        long result = 0;
        int prefixXor = 0;
        count[prefixXor] = 1;

        for (char ch : word.toCharArray()) {
            int charIndex = ch - 'a';
            prefixXor ^= 1 << charIndex;
            result += count[prefixXor];
            for (int i = 0; i < 10; i++) {
                result += count[prefixXor ^ (1 << i)];
            }
            count[prefixXor]++;
        }

        return result;
    }
}

```
```C++ []
class Solution {
public:
    long long wonderfulSubstrings(string word) {
        vector<long long> count(1024, 0); // 2^10 to store XOR values
        long long result = 0;
        int prefixXor = 0;
        count[prefixXor] = 1;

        for (char ch : word) {
            int charIndex = ch - 'a';
            prefixXor ^= 1 << charIndex;
            result += count[prefixXor];
            for (int i = 0; i < 10; i++) {
                result += count[prefixXor ^ (1 << i)];
            }
            count[prefixXor]++;
        }

        return result;
    }
};

```
<!-- #  2\uFE0F\u20E3Frequency Array:
- Maintain a frequency array for each character in the string.
- Iterate through the string and for each substring, check if there is at most one character whose frequency is odd.
- Keep track of the count of such substrings.
**Detailed Steps:**
1. **Initialize Data Structures**:
   - Initialize an array `count` of size 1024 (2^10) to store the count of each bitmask value encountered.
   - Initialize `result` to 0 to store the final count of wonderful substrings.
   - Initialize `bitmask` to 0 to represent the bitmask.

2. **Iterate Through Characters**:
   - Iterate through each character `char` in the input `word`.
   - Calculate the index of the character using `char_index = ord(char) - ord('a')`.
   - Update the `bitmask` by XOR-ing it with the bit representing the current character.
   - Increment `result` by the count of the current `bitmask` value stored in the `count` array.
   - For each possible position of flipping a bit in the `bitmask`, increment `result` by the count of that bitmask value stored in the `count` array.
   - Increment the count of the current `bitmask` value in the `count` array.

3. **Return Result**:
   - Return the final `result`, which represents the number of wonderful substrings.
# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution(object):
    def wonderfulSubstrings(self, word):
        count = [0] * 1024  # 2^10 to store bitmask frequencies
        count[0] = 1
        result = 0
        bitmask = 0
        
        for char in word:
            char_index = ord(char) - ord('a')
            bitmask ^= 1 << char_index
            result += count[bitmask]
            for i in range(10):
                result += count[bitmask ^ (1 << i)]
            count[bitmask] += 1
        
        return result
```
```Java []
class Solution {
    public long wonderfulSubstrings(String word) {
        int[] count = new int[1024]; // 2^10 to store bitmask frequencies
        count[0] = 1;
        long result = 0;
        int bitmask = 0;

        for (char ch : word.toCharArray()) {
            int charIndex = ch - 'a';
            bitmask ^= 1 << charIndex;
            result += count[bitmask];
            for (int i = 0; i < 10; i++) {
                result += count[bitmask ^ (1 << i)];
            }
            count[bitmask]++;
        }

        return result;
    }
}
```
```C++ []
class Solution {
public:
    long long wonderfulSubstrings(string word) {
        vector<int> count(1024, 0); // 2^10 to store bitmask frequencies
        count[0] = 1;
        long long result = 0;
        int bitmask = 0;

        for (char ch : word) {
            int charIndex = ch - 'a';
            bitmask ^= 1 << charIndex;
            result += count[bitmask];
            for (int i = 0; i < 10; i++) {
                result += count[bitmask ^ (1 << i)];
            }
            count[bitmask]++;
        }

        return result;
    }
};
```
# 3\uFE0F\u20E3Bitmask Technique\uD83D\uDE0E:
- Use a bitmask to represent the parity of each character's frequency.
- Iterate through the string, updating the bitmask accordingly.
- For each substring, check if the number of odd frequencies is at most one.

**Detailed Steps:**
1. **Initialize Data Structures**:
   - Initialize a `defaultdict` named `count` to store the count of each bitmask value encountered.
   - Initialize `result` to 0 to store the final count of wonderful substrings.
   - Initialize `bitmask` to 0 to represent the bitmask.

2. **Iterate Through Characters**:
   - Iterate through each character `char` in the input `word`.
   - Calculate the index of the character using `char_index = ord(char) - ord('a')`.
   - Update the `bitmask` by XOR-ing it with the bit representing the current character.
   - Increment `result` by the count of the current `bitmask` value stored in the `count` dictionary.
   - For each possible position of flipping a bit in the `bitmask`, increment `result` by the count of that bitmask value stored in the `count` dictionary.
   - Increment the count of the current `bitmask` value in the `count` dictionary.

3. **Return Result**:
   - Return the final `result`, which represents the number of wonderful substrings.

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution(object):
    def wonderfulSubstrings(self, word):
        count = defaultdict(int)
        count[0] = 1
        result = 0
        bitmask = 0
        
        for char in word:
            char_index = ord(char) - ord('a')
            bitmask ^= 1 << char_index
            result += count[bitmask]
            for i in range(10):
                result += count[bitmask ^ (1 << i)]
            count[bitmask] += 1
        
        return result
```
```Java []
class Solution {
    public long wonderfulSubstrings(String word) {
        Map<Integer, Integer> count = new HashMap<>();
        count.put(0, 1);
        long result = 0;
        int bitmask = 0;

        for (char ch : word.toCharArray()) {
            int charIndex = ch - 'a';
            bitmask ^= 1 << charIndex;
            result += count.getOrDefault(bitmask, 0);
            for (int i = 0; i < 10; i++) {
                result += count.getOrDefault(bitmask ^ (1 << i), 0);
            }
            count.put(bitmask, count.getOrDefault(bitmask, 0) + 1);
        }

        return result;
    }
}
```
```C++ []
class Solution {
public:
    long long wonderfulSubstrings(string word) {
        unordered_map<int, int> count;
        count[0] = 1;
        long long result = 0;
        int bitmask = 0;

        for (char ch : word) {
            int charIndex = ch - 'a';
            bitmask ^= 1 << charIndex;
            result += count[bitmask];
            for (int i = 0; i < 10; i++) {
                result += count[bitmask ^ (1 << i)];
            }
            count[bitmask]++;
        }

        return result;
    }
};

``` -->
# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA