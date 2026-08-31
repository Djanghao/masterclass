# ✅☑️ BEATS 100% || Easy to Understand || 5 Line code || Beginner Friendly

**Author:** sumit4199
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5115123/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5115123/)

---

# Intuition
**for i in range(0,len(word) , k):**
This loop iterates over the indices of the string word with a step size of k. This means it considers substrings of length k starting from index 0, then index k, 2*k, and so on.

**sub = word[i:i+k]:**
This extracts a substring of length k from the string word, starting from index i.

**if sub in dic:**
This checks if the substring sub is already present in the dictionary dic.

**dic[sub] +=1:** 
If the substring sub is already present in the dictionary, its count is incremented by 1 else become 1

**max_occ = max([i for i in dic.values()]):** 
This line finds the maximum occurrence of any substring in the dictionary dic. It creates a list of values from the dictionary (dic.values()) and finds the maximum value using the max() function.

***IMPORTANT :***

**return len(word)//k - max_occ:** 
This calculates and returns the minimum number of operations needed to make the string word k-periodic. It divides the length of the word by k to find out how many substrings of length k should ideally occur in the word, then subtracts the maximum occurrence of any substring found in the word. The result represents the minimum number of additional operations required to make the string k-periodic.

# Complexity
- Time complexity: O(n/k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n/k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# PYTHON 3
```
class Solution:
    def minimumOperationsToMakeKPeriodic(self, word: str, k: int) -> int:
        dic = {}
        
        for i in range(0,len(word) , k):
            sub = word[i:i+k]
            if sub in dic:
                dic[sub] +=1
            else:
                dic[sub] = 1

        max_occ = max([i for i in dic.values()])
        return len(word)//k - max_occ
        
```

# CPP
```

class Solution {
public:
    int minimumOperationsToMakeKPeriodic(string word, int k) {
        unordered_map<std::string, int> dic;

        for (int i = 0; i < word.length(); i += k) {
            string sub = word.substr(i, k);
            if (dic.find(sub) != dic.end()) {
                dic[sub] += 1;
            } else {
                dic[sub] = 1;
            }
        }

        int max_occ = 0;
        for (const auto& entry : dic) {
            max_occ = max(max_occ, entry.second);
        }

        return word.length() / k - max_occ;
    }
};
```

# JAVA
```
import java.util.HashMap;

class Solution {
    public int minimumOperationsToMakeKPeriodic(String word, int k) {
        HashMap<String, Integer> dic = new HashMap<>();

        for (int i = 0; i < word.length(); i += k) {
            String sub = word.substring(i, Math.min(i + k, word.length()));
            dic.put(sub, dic.getOrDefault(sub, 0) + 1);
        }

        int max_occ = 0;
        for (int count : dic.values()) {
            max_occ = Math.max(max_occ, count);
        }

        return word.length() / k - max_occ;
    }
}

