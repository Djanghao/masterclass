# ✅Hash Map || Simple Solution || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5262269/](https://leetcode.com/problems/find-common-characters/solutions/5262269/)

---

# Intuition
The idea is to find the characters that appear in all the strings and their minimum frequency across all strings. These common characters, repeated based on their minimum frequency, will form the resulting vector.

# Approach
- Initialize an unordered **map** freq to store the frequency of characters in the first word.
- Iterate through the remaining words:
    - For each word, create a new unordered **map** map to store the frequency of characters in the current word.
    - Iterate through the **freq** map and update the frequencies based on the current word:
        - If a character is not present in the current word, remove it from the freq **map**.
        - If a character is present in the current word, update its **frequency** in the freq **map** to be the minimum of its current **frequency** and its frequency in the current word.
- After processing all words, the freq **map** contains the common characters and their minimum frequencies across all words.
- Create a vector **res** to store the common characters, repeating each character based on its minimum frequency.
- Return the **res** vector.

# Complexity
- Time complexity: **O(n * m)**
Where n is the number of words, and m is the maximum length of a word. 

- Space complexity: **O(k)**
Where k is the number of unique characters across all words.


```Java []
class Solution {
    public List<String> commonChars(String[] words) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : words[0].toCharArray())
            freq.put(c, freq.getOrDefault(c, 0) + 1);

        for (int i = 1; i < words.length; i++) {
            Map<Character, Integer> map = new HashMap<>();
            for (char c : words[i].toCharArray())
                map.put(c, map.getOrDefault(c, 0) + 1);

            Map<Character, Integer> newFreq = new HashMap<>();
            for (char c : freq.keySet())
                if (map.containsKey(c))
                    newFreq.put(c, Math.min(freq.get(c), map.get(c)));
            freq = newFreq;
        }

        List<String> res = new ArrayList<>();
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
            char v = entry.getKey();
            int count = entry.getValue();
            for (int j = 0; j < count; j++)
                res.add(String.valueOf(v));
        }
        return res;
    }
}
```
```C++ []
class Solution {
public:
    vector<string> commonChars(vector<string>& words) {
        std::unordered_map<char, int> freq;
        for (char c : words[0]) freq[c]++;

        for (size_t i = 1; i < words.size(); ++i) {
            std::unordered_map<char, int> map;
            for (char c : words[i]) map[c]++;
            
            for (auto it = freq.begin(); it != freq.end();) {
                if (map.find(it->first) == map.end())
                    it = freq.erase(it);
                else {
                    it->second = std::min(it->second, map[it->first]);
                    ++it;
                }
            }
        }
        std::vector<std::string> res;
        for (const auto& kvp : freq)
            for (int j = 0; j < kvp.second; ++j)
                res.push_back(std::string(1, kvp.first));
        return res;
    }
};
```
```C# []
public class Solution {
    public IList<string> CommonChars(string[] words) {
        var freq = new Dictionary<char, int>();

        foreach (var c in words[0])
            if(!freq.TryAdd(c, 1)) freq[c]++;

        for (var i = 1; i < words.Length; i++) {
            var map = new Dictionary<char, int>();
            foreach (var c in words[i])
                if(!map.TryAdd(c, 1)) map[c]++;

            foreach (var v in freq) {
                if(!map.ContainsKey(v.Key)) {
                    freq.Remove(v.Key);
                    continue;
                }
                freq[v.Key] = Math.Min(map[v.Key], v.Value);
            }
        }
        var res = new List<string>();
        foreach (var v in freq)
            for (int j = 0; j < v.Value; j++)
                res.Add(v.Key.ToString());
        return res;
    }
}
```
![image.png](./images/0.png)
