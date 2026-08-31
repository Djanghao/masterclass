# For Beginners || Clean & Concise || No Trie

**Author:** gameboey
**Votes:** 76
**Link:** [https://leetcode.com/problems/replace-words/solutions/5272025/](https://leetcode.com/problems/replace-words/solutions/5272025/)

---

# Intuition
We use set for fast lookup and iterating over substrings of increasing lengths until a matcg is found.

# Approach

- Initialize a set `s` by storing all the strings from the `dictionary`.
- Break the string `sentence` into words and store them in a `temp` vector.
- For each word in the `temp` vector, iterate over its characters and create prefix substrings of increasing length. Check if each prefix substring is present in the set s. If a prefix substring is found in s, consider it as the `root` and `break` out of the inner loop.
- At last, remove the `trailing space` and return.

# Complexity
- Time complexity: `O(n * m * m)` where `n` is the number of words in the `sentence` string and `m` is the length of longest word in the `sentence` string.

- Space complexity: `O(n * m)` where `n` is the number of words in the `sentence` string and `m` is the length of longest word in the `sentence` string.

# Code
```C++ []
class Solution {
public:
    string replaceWords(vector<string>& dict, string sentence) {
        unordered_set<string> s(begin(dict), end(dict));
        istringstream iss(sentence);
        vector<string> temp;
        string word, res; 

        while(iss >> word) temp.push_back(word);
        for(string t : temp) {
            int i = 0;
            while(i++ <= t.length()) {
                string curr = t.substr(0, i);
                if(s.find(curr) != s.end()) {
                    res += curr + " ";
                    break;
                }
                
                if(i == t.length()) res += curr + " ";
            }
        }

        res.erase(res.size() - 1);
        return res;
    }
};
```
```java []
class Solution {
    public String replaceWords(List<String> dict, String sentence) {
        Set<String> s = new HashSet<>(dict);
        StringBuilder res = new StringBuilder();
        List<String> temp = new ArrayList<>(
            Arrays.asList(sentence.split(" "))
        );
        
        for (String t : temp) {
            int i = 0;
            while (i <= t.length()) {
                String curr = t.substring(0, i++);
                if (s.contains(curr)) {
                    res.append(curr).append(" ");
                    break;
                }

                if (i == t.length() + 1) res.append(t).append(" ");
            }
        }
        
        res.deleteCharAt(res.length() - 1); 
        return res.toString();
    }
}
```
```python []
class Solution:
    def replaceWords(self, dict: List[str], sentence: str) -> str:
        roots = set(dict)
        words = sentence.split()
        result = []

        for word in words:
            for i in range(len(word) + 1):
                prefix = word[:i]
                if prefix in roots:
                    result.append(prefix)
                    break
            else:
                result.append(word)

        return ' '.join(result)
```
```Go []
func replaceWords(dict []string, sentence string) string {
    roots := make(map[string]bool)
    for _, root := range dict {
        roots[root] = true
    }

    words := strings.Split(sentence, " ")
    var result []string

    for _, word := range words {
        found := false
        for i := 1; i <= len(word); i++ {
            prefix := word[:i]
            if _, exists := roots[prefix]; exists {
                result = append(result, prefix)
                found = true
                break
            }
        }

        if !found {
            result = append(result, word)
        }
    }

    return strings.Join(result, " ")
}
```

---

**Spider-Man**: Hey, Deadpool, how would you replace words in a sentence with their root forms? Like turning 'rattled' into 'rat'?

**Deadpool**: Easy, Spidey. Just chop them down to size! Use the shortest root.

**Spider-Man**: So, if the sentence is 'the cattle was rattled by the battery'?

**Deadpool**: It\u2019s 'the cat was rat by the bat'. Done!

**Spider-Man**: Efficient as always, Wade. Want to grab a burger?

**Deadpool**: Only if you\u2019re buying, Webhead!

![spidy x deadpool.jpg](./images/0.jpeg)


