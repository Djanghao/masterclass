# C++ || Java || 7 lines code | Easy Solution With detailed Explaination

**Author:** 2018eeb1137
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5114551/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5114551/)

---

### Let's understand the algorithm with examples.

**Example 1: word = "leetcodeleet", k = 4**

word = "leet" + "code" + "leet"
totalSubstrings = 3

Following is the map of substrings with their corresponding frequencies
Substring --> Frequency
leet                 2
code               1  

maxOfAllFrequencies = 2
Answer = totalSubstrings - maxOfAllFrequencies = 3 - 2 = 1

**Example 2:  word = "leetcoleet", k = 2**

word ="le" + "et" + "co" + "le" + "et"
totalSubstrings = 5

Following is the map of substrings with their corresponding frequencies
Substring --> Frequency
le                     2
et                     2
co                    1

maxOfAllFrequencies = 2
Answer = totalSubstrings - maxOfAllFrequencies = 5 - 2 = 3

### Intuition

*The idea is to leave the substring with the maximum frequency unchanged and modify the remaining substrings to match it. In the first example, we decided to keep \u2018leet\u2019 as it is and change the other substrings to \u2018leet,\u2019 requiring only one operation. In the second example, we can select either \u2018le\u2019 or \u2018et,\u2019 and regardless of our choice, we must change all other substrings to match the selected one.*

### Algorithm

1.  Map all the consequtive substrings of length k with their frequencies.
2.  Iterate over the map to find the maximum value of frequency.
3.  Return totalSubstrings - maxOfAllFrequencies = word.length() / k -  maxOfAllFrequencies


#### C++ Code
```
int minimumOperationsToMakeKPeriodic(string word, int k) {
        int maxOfAllFrequencies = 0;
        unordered_map<string, int> m;
        for(int i = 0; i < word.length(); i += k){
            string sub = word.substr(i, k);
            m[sub]++;
        }
        for(auto p : m)maxOfAllFrequencies = max(maxOfAllFrequencies, p.second);
        return word.length() / k - maxOfAllFrequencies;
    }
```

### Java Code

```
public int minimumOperationsToMakeKPeriodic(String word, int k) {
        int maxOfAllFrequencies = 0;
        Map<String, Integer> m = new HashMap<>();

        for (int i = 0; i < word.length(); i += k) {
            String sub = word.substring(i, Math.min(i + k, word.length()));
            m.put(sub, m.getOrDefault(sub, 0) + 1);
        }
        for (int freq : m.values()) 
            maxOfAllFrequencies = Math.max(maxOfAllFrequencies, freq);
        
        return word.length() / k - maxOfAllFrequencies;
    }
```

