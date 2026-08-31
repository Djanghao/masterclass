# ✅✅|| Easiest Solution || C++ || JAVA || PYTHON || JAVASCRIPT || Beginner Friendly🔥🔥🔥

**Author:** _HeLL0____
**Votes:** 53
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5260655/](https://leetcode.com/problems/find-common-characters/solutions/5260655/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Count Frequency in All Words:
For each character, count how many times it appears in each word.
Minimum Frequency Across Words:
For each character that appears in all words, take the minimum count across all words. This will ensure that only the common occurrences are considered.
Result Construction:
Use the minimum counts to construct the list of common characters, including duplicates.

# Approach
<!-- Describe your approach to solving the problem. -->
Initialize Frequency Array:
Create a frequency array min_freq to store the minimum frequency of each character across all words. Initialize it to a large number (since we will be looking for the minimum).
Update Frequencies:
For each word, count the frequency of each character and update the min_freq array accordingly.
Build Result:
Traverse the min_freq array and construct the result based on the minimum frequency values.

# Complexity
- Time complexity: O(N x M)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<string> commonChars(vector<string>& words) {
        vector<int> min_freq(26, INT_MAX);
        for (auto& word : words) {
            vector<int> freq(26, 0);
            for (char c : word) {
                freq[c - 'a']++;
            }
            for (int i = 0; i < 26; ++i) {
                min_freq[i] = min(min_freq[i], freq[i]);
            }
        }

        vector<string> result;
        for (int i = 0; i < 26; ++i) {
            while (min_freq[i]-- > 0) {
                result.push_back(string(1, i + 'a'));
            }
        }
        return result;
    }
};
```
``` Java []
class Solution {
    public List<String> commonChars(String[] words) {
        int[] minFreq = new int[26];
        Arrays.fill(minFreq, Integer.MAX_VALUE);
        
        for (String word : words) {
            int[] freq = new int[26];
            for (char c : word.toCharArray()) {
                freq[c - 'a']++;
            }
            for (int i = 0; i < 26; i++) {
                minFreq[i] = Math.min(minFreq[i], freq[i]);
            }
        }
        
        List<String> result = new ArrayList<>();
        for (int i = 0; i < 26; i++) {
            while (minFreq[i]-- > 0) {
                result.add(String.valueOf((char) (i + 'a')));
            }
        }
        return result;
    }
}
```
```python []
class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        min_freq = Counter(words[0])
        for word in words:
            min_freq &= Counter(word)
        return list(min_freq.elements())
```
```javascript []
class Solution {
    commonChars(words) {
        let minFreq = new Array(26).fill(Infinity);
        
        for (let word of words) {
            let freq = new Array(26).fill(0);
            for (let char of word) {
                freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            for (let i = 0; i < 26; i++) {
                minFreq[i] = Math.min(minFreq[i], freq[i]);
            }
        }
        
        let result = [];
        for (let i = 0; i < 26; i++) {
            while (minFreq[i]-- > 0) {
                result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
            }
        }
        return result;
    }
}
```
```Ruby []
class Solution
  def common_chars(words)
    min_freq = Array.new(26, Float::INFINITY)
    
    words.each do |word|
      freq = Array.new(26, 0)
      word.each_char do |char|
        freq[char.ord - 'a'.ord] += 1
      end
      (0...26).each do |i|
        min_freq[i] = [min_freq[i], freq[i]].min
      end
    end
    
    result = []
    (0...26).each do |i|
      while min_freq[i] > 0
        result << (i + 'a'.ord).chr
        min_freq[i] -= 1
      end
    end
    
    result
  end
end
```
![upvote.png](./images/0.png)
