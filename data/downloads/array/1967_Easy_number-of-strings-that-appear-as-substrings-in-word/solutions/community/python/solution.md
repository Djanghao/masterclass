# C++ / Python (1 line) simple solution

**Author:** TovAm
**Votes:** 16
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1520913/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1520913/)

---

**C++ :**

```
int numOfStrings(vector<string>& patterns, string word) {
        int counter = 0;
        
        for(auto p: patterns)
            if(word.find(p) != std::string::npos)
                ++counter;
        
        return counter;
    }
```

**Python :**

```
def numOfStrings(self, patterns: List[str], word: str) -> int:
	return len([p for p in patterns if p in word])
```

**Like it ? please upvote !**