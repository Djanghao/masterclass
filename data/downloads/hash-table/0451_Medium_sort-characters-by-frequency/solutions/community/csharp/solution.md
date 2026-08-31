# Beats 100%🚀➡️Full In depth explained || [Java/C++/C3Python3/ JavaScript]

**Author:** Shivansu_7
**Votes:** 8
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/4691371/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/4691371/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Frequency Counting using HashMap:**
    - It initializes a HashMap `map` to store character frequencies.
    - It iterates through each character in the input string s using a for-each loop. For each character, it updates its frequency count in the HashMap.
2. **Bucket Sort by Frequency:**
    - It creates an array of Lists named `bucket` to serve as buckets for characters with the same frequency.
    - It iterates through the keys of the `map` (unique characters in the string) and distributes them into appropriate buckets based on their frequencies.
3. **Building the Sorted String:**
    - A `StringBuilder` named `sb` is initialized to construct the sorted string.
    - It traverses the `bucket` array in reverse order, starting from the highest frequency.
    - For each non-null bucket encountered, it iterates through the characters in that bucket and appends each character to the `StringBuilder` as many times as its frequency indicates.
4. **Return Result:**
    - Finally, it returns the sorted string constructed by the `StringBuilder`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public String frequencySort(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        for(char ch : s.toCharArray()) {
            map.put(ch, map.getOrDefault(ch,0)+1);
        }
        List<Character> [] bucket = new List[s.length()+1];
        for(Character key : map.keySet()) {
            int freq = map.get(key);
            if(bucket[freq] == null) {
                bucket[freq]=new ArrayList<>();
            }
            bucket[freq].add(key);
        }

        StringBuilder sb = new StringBuilder();
        for(int i=bucket.length-1; i>=0; i--) {
            if(bucket[i] != null) {
                for(char ch : bucket[i]) {
                    for(int j=0; j<map.get(ch); j++) {
                        sb.append(ch);
                    }
                }
            }
        }
        return sb.toString();
    }
}
```
```C++ []
class Solution {
public:
    string frequencySort(string s) {
        std::unordered_map<char, int> map;
        for(char ch : s) {
            map[ch]++;
        }
        vector<vector<char>> bucket(s.length() + 1);
        for(auto& entry : map) {
            int freq = entry.second;
            bucket[freq].push_back(entry.first);
        }

        string sortedString;
        for(int i = bucket.size() - 1; i >= 0; i--) {
            if(!bucket[i].empty()) {
                for(char ch : bucket[i]) {
                    sortedString.append(i, ch);
                }
            }
        }
        return sortedString;
    }
};
```
```Python3 []
class Solution:
    def frequencySort(self, s: str) -> str:
        char_freq = defaultdict(int)
        for ch in s:
            char_freq[ch] += 1
        
        bucket = [[] for _ in range(len(s) + 1)]
        for char, freq in char_freq.items():
            bucket[freq].append(char)
        
        sorted_string = ""
        for i in range(len(bucket) - 1, -1, -1):
            if bucket[i]:
                for ch in bucket[i]:
                    sorted_string += ch * i
        return sorted_string
```
```C# []
public class Solution {
    public string FrequencySort(string s) {
        Dictionary<char, int> map = new Dictionary<char, int>();
        foreach (char ch in s) {
            if (map.ContainsKey(ch))
                map[ch]++;
            else
                map[ch] = 1;
        }

        List<char>[] bucket = new List<char>[s.Length + 1];
        foreach (var entry in map) {
            char key = entry.Key;
            int freq = entry.Value;
            if (bucket[freq] == null)
                bucket[freq] = new List<char>();
            bucket[freq].Add(key);
        }

        StringBuilder sb = new StringBuilder();
        for (int i = bucket.Length - 1; i >= 0; i--) {
            if (bucket[i] != null) {
                foreach (char ch in bucket[i]) {
                    for (int j = 0; j < i; j++) {
                        sb.Append(ch);
                    }
                }
            }
        }
        return sb.ToString();
    }
}
```
```JavaScript []
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map();
    
    // Count the frequency of each character
    for (const ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    
    const bucket = Array.from({ length: s.length + 1 }, () => []);
    
    // Put characters into the appropriate frequency buckets
    for (const [char, freq] of map.entries()) {
        bucket[freq].push(char);
    }
    
    let sortedString = '';
    
    // Build the sorted string
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            for (const char of bucket[i]) {
                sortedString += char.repeat(i);
            }
        }
    }
    
    return sortedString;
};
```