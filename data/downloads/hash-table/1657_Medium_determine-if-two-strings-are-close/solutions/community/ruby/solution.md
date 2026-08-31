# 🚀🚀🚀 NO SORTiNG && NO HASHTABLE -> TC -> 🔥 O(N) 🔥 FRiENDLY EXPLAINED ✅ 🚀🚀🚀

**Author:** prodonik
**Votes:** 3
**Link:** [https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4566261/](https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/4566261/)

---

# Intuition
The code appears to be solving a problem related to comparing two strings, `word1` and `word2`, for certain properties. The goal seems to be determining if the two words can be made equivalent by performing specific operations on them.

# Approach
The solution defines a class named `Solution` with a method `closeStrings` that takes two strings as input and returns a boolean indicating whether the two strings can be made equivalent. The main steps in the approach are as follows:
1. Check if the lengths of the two words are equal. If not, return false.
2. Initialize arrays to store character frequencies (`chars1` and `chars2`) and cumulative character frequencies (`values1` and `values2`).
3. Use the `process` method to update the character and cumulative frequency arrays for both words.
4. Compare the character frequencies and cumulative frequencies to determine if the two words can be made equivalent.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the input words.
- Space complexity: $$O(n)$$, as additional arrays are created to store character frequencies and cumulative frequencies.

# Code Explanation
```java []
class Solution {
    public boolean closeStrings(String word1, String word2) {
        // Check if the lengths are equal
        int length = word1.length();
        if (length != word2.length()) return false;

        // Initialize arrays for character frequencies and cumulative frequencies
        int [] chars1 = new int [26], chars2 = new int [26];
        int [] values1 = new int [length + 1], values2 = new int [length + 1];

        // Process word1 and word2 to update the frequency arrays
        process(chars1, values1, word1);
        process(chars2, values2, word2);

        // Check if characters present in word1 are also present in word2
        for (int i = 0; i < chars1.length; i++) {
            if (chars1[i] > 0 && chars2[i] == 0) return false;
        }

        // Check if cumulative frequencies are equal for both words
        for (int i = 0; i < length; i++) {
            if (values1[i] != values2[i]) return false;
        }

        // If all checks pass, the words can be made equivalent
        return true;
    }

    // Helper method to update character and cumulative frequencies
    private void process(int[] chars, int[] values, String word) {
        for (int i = 0; i < word.length(); i++) {
            chars[word.charAt(i) - 'a']++;
            values[chars[word.charAt(i) - 'a']]++;
        }
    }
}
```
```C++ []
class Solution {
public:
    bool closeStrings(std::string word1, std::string word2) {
        // Check if the lengths are equal
        int length = word1.length();
        if (length != word2.length()) return false;

        // Initialize arrays for character frequencies and cumulative frequencies
        std::vector<int> chars1(26, 0), chars2(26, 0);
        std::vector<int> values1(length + 1, 0), values2(length + 1, 0);

        // Process word1 and word2 to update the frequency arrays
        process(chars1, values1, word1);
        process(chars2, values2, word2);

        // Check if characters present in word1 are also present in word2
        for (int i = 0; i < chars1.size(); i++) {
            if (chars1[i] > 0 && chars2[i] == 0) return false;
        }

        // Check if cumulative frequencies are equal for both words
        for (int i = 0; i < length; i++) {
            if (values1[i] != values2[i]) return false;
        }

        // If all checks pass, the words can be made equivalent
        return true;
    }

private:
    // Helper method to update character and cumulative frequencies
    void process(std::vector<int>& chars, std::vector<int>& values, const std::string& word) {
        for (char c : word) {
            chars[c - 'a']++;
            values[chars[c - 'a']]++;
        }
    }
};
```
```Python []
class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        # Check if the lengths are equal
        length = len(word1)
        if length != len(word2):
            return False

        # Initialize arrays for character frequencies and cumulative frequencies
        chars1 = [0] * 26
        chars2 = [0] * 26
        values1 = [0] * (length + 1)
        values2 = [0] * (length + 1)

        # Process word1 and word2 to update the frequency arrays
        self.process(chars1, values1, word1)
        self.process(chars2, values2, word2)

        # Check if characters present in word1 are also present in word2
        for i in range(26):
            if chars1[i] > 0 and chars2[i] == 0:
                return False

        # Check if cumulative frequencies are equal for both words
        for i in range(length):
            if values1[i] != values2[i]:
                return False

        # If all checks pass, the words can be made equivalent
        return True

    # Helper method to update character and cumulative frequencies
    def process(self, chars, values, word):
        for c in word:
            chars[ord(c) - ord('a')] += 1
            values[chars[ord(c) - ord('a')]] += 1

```
```C# []
public class Solution {
    public bool CloseStrings(string word1, string word2) {
        // Check if the lengths are equal
        int length = word1.Length;
        if (length != word2.Length) return false;

        // Initialize arrays for character frequencies and cumulative frequencies
        int[] chars1 = new int[26];
        int[] chars2 = new int[26];
        int[] values1 = new int[length + 1];
        int[] values2 = new int[length + 1];

        // Process word1 and word2 to update the frequency arrays
        Process(chars1, values1, word1);
        Process(chars2, values2, word2);

        // Check if characters present in word1 are also present in word2
        for (int i = 0; i < 26; i++) {
            if (chars1[i] > 0 && chars2[i] == 0) return false;
        }

        // Check if cumulative frequencies are equal for both words
        for (int i = 0; i < length; i++) {
            if (values1[i] != values2[i]) return false;
        }

        // If all checks pass, the words can be made equivalent
        return true;
    }

    // Helper method to update character and cumulative frequencies
    private void Process(int[] chars, int[] values, string word) {
        foreach (char c in word) {
            chars[c - 'a']++;
            values[chars[c - 'a']]++;
        }
    }
}

```
```Go []
package main

import "fmt"

type Solution struct{}

func (s *Solution) CloseStrings(word1 string, word2 string) bool {
	// Check if the lengths are equal
	length := len(word1)
	if length != len(word2) {
		return false
	}

	// Initialize arrays for character frequencies and cumulative frequencies
	chars1 := make([]int, 26)
	chars2 := make([]int, 26)
	values1 := make([]int, length+1)
	values2 := make([]int, length+1)

	// Process word1 and word2 to update the frequency arrays
	s.process(chars1, values1, word1)
	s.process(chars2, values2, word2)

	// Check if characters present in word1 are also present in word2
	for i := 0; i < 26; i++ {
		if chars1[i] > 0 && chars2[i] == 0 {
			return false
		}
	}

	// Check if cumulative frequencies are equal for both words
	for i := 0; i < length; i++ {
		if values1[i] != values2[i] {
			return false
		}
	}

	// If all checks pass, the words can be made equivalent
	return true
}

// Helper method to update character and cumulative frequencies
func (s *Solution) process(chars []int, values []int, word string) {
	for _, c := range word {
		chars[c-'a']++
		values[chars[c-'a']]++
	}
}

```
```JavaScript []
class Solution {
    closeStrings(word1, word2) {
        // Check if the lengths are equal
        const length = word1.length;
        if (length !== word2.length) return false;

        // Initialize arrays for character frequencies and cumulative frequencies
        const chars1 = new Array(26).fill(0);
        const chars2 = new Array(26).fill(0);
        const values1 = new Array(length + 1).fill(0);
        const values2 = new Array(length + 1).fill(0);

        // Process word1 and word2 to update the frequency arrays
        this.process(chars1, values1, word1);
        this.process(chars2, values2, word2);

        // Check if characters present in word1 are also present in word2
        for (let i = 0; i < 26; i++) {
            if (chars1[i] > 0 && chars2[i] === 0) return false;
        }

        // Check if cumulative frequencies are equal for both words
        for (let i = 0; i < length; i++) {
            if (values1[i] !== values2[i]) return false;
        }

        // If all checks pass, the words can be made equivalent
        return true;
    }

    // Helper method to update character and cumulative frequencies
    process(chars, values, word) {
        for (const c of word) {
            chars[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            values[chars[c.charCodeAt(0) - 'a'.charCodeAt(0)]]++;
        }
    }
}

```
```Ruby []
class Solution
  def close_strings(word1, word2)
    # Check if the lengths are equal
    length = word1.length
    return false if length != word2.length

    # Initialize arrays for character frequencies and cumulative frequencies
    chars1 = Array.new(26, 0)
    chars2 = Array.new(26, 0)
    values1 = Array.new(length + 1, 0)
    values2 = Array.new(length + 1, 0)

    # Process word1 and word2 to update the frequency arrays
    process(chars1, values1, word1)
    process(chars2, values2, word2)

    # Check if characters present in word1 are also present in word2
    (0..25).each do |i|
      return false if chars1[i] > 0 && chars2[i] == 0
    end

    # Check if cumulative frequencies are equal for both words
    (0..length - 1).each do |i|
      return false if values1[i] != values2[i]
    end

    # If all checks pass, the words can be made equivalent
    true
  end

  private

  # Helper method to update character and cumulative frequencies
  def process(chars, values, word)
    word.each_char do |c|
      chars[c.ord - 'a'.ord] += 1
      values[chars[c.ord - 'a'.ord]] += 1
    end
  end
end
```
