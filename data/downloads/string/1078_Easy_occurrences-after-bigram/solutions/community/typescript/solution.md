# Intuitive solution in ALL LANGUAGES | O(n) ^ O(m)

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/5904579/](https://leetcode.com/problems/occurrences-after-bigram/solutions/5904579/)

---

# Intuition
The task is to find occurrences of a specific word pattern within a string. Specifically, given two words $$("first" and "second")$$, we need to find all words that come immediately after a sequence of "first second" in the text. We can achieve this by iterating through the words in the text and checking for this pattern.
# Approach
1. **Split the text:** The input text is a single string. First, we split it into individual words using split(), which gives us a list of words.
2. **Iterate through the words:** We loop through the list of words to check each possible "first second third" pattern:
    - We check if the current word is first and the next word is second.
    - If both conditions are true, we append the word that comes after second (i.e., the third word) to the result list.
3. **Return the result:** After checking all the patterns, we return the result list containing all the occurrences of the third word.
# Complexity
- **Time complexity:** O(n)
    - **Splitting the text:** The `split()` function takes $$O(n)$$, where 
**n** is the length of the text, since it has to scan the entire string.
    - **Iteration:** We then iterate through the list of words, and for each word, we check the current and the next two words (if available). This iteration takes 
$$O(m)$$, where **m** is the number of words in the list *(which is generally smaller than n)*.

Hence, the overall time complexity is $$O(n)$$, as splitting the string dominates the iteration.
- **Space complexity:** $$O(m)$$
    - We use an array `res` to store the results and another list `words` to store the words from the split operation.
The space required is $$O(m)$$, where **m** is the number of words in the text, because we store all the words in a list.
So, the space complexity is $$O(m)$$. 

# Code
```python3 []
class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
        words = text.split(" ")
        res = []
        i = 0
        while i < len(words) - 2:
            if words[i] == first and words[i + 1] == second:
                res.append(words[i + 2])
            i += 1
        return res

```
```cpp []
class Solution {
public:
    vector<string> findOcurrences(string text, string first, string second) {
        vector<string> res;
        istringstream iss(text);
        vector<string> words;
        string word;
        
        while (iss >> word) {
            words.push_back(word);
        }

        for (int i = 0; i < words.size() - 2; ++i) {
            if (words[i] == first && words[i + 1] == second) {
                res.push_back(words[i + 2]);
            }
        }

        return res;
    }
};
```
```Java []
import java.util.*;

class Solution {
    public List<String> findOcurrences(String text, String first, String second) {
        String[] words = text.split(" ");
        List<String> res = new ArrayList<>();
        
        for (int i = 0; i < words.length - 2; i++) {
            if (words[i].equals(first) && words[i + 1].equals(second)) {
                res.add(words[i + 2]);
            }
        }

        return res;
    }
}
```
```JavaScript []
const findOcurrences = (text, first, second) => {
    const words = text.split(" ");
    const res = [];
    
    for (let i = 0; i < words.length - 2; i++) {
        if (words[i] === first && words[i + 1] === second) {
            res.push(words[i + 2]);
        }
    }

    return res;
};
```
```TypeScript []
function findOccurences(test: string, first: string, second: string): string[] {
    const words: string[] = text.split(" ");
    const res: string[] = [];
    
    for (let i = 0; i < words.length - 2; i++) {
        if (words[i] === first && words[i + 1] === second) {
            res.push(words[i + 2]);
        }
    }

    return res;
}
```

---
```C# []
using System;
using System.Collections.Generic;

public class Solution {
    public IList<string> FindOcurrences(string text, string first, string second) {
        string[] words = text.Split(' ');
        List<string> res = new List<string>();
        
        for (int i = 0; i < words.Length - 2; i++) {
            if (words[i] == first && words[i + 1] == second) {
                res.Add(words[i + 2]);
            }
        }

        return res;
    }
}
```
```Go []
package main

import (
	"strings"
)

func findOcurrences(text string, first string, second string) []string {
	words := strings.Split(text, " ")
	var res []string

	for i := 0; i < len(words)-2; i++ {
		if words[i] == first && words[i+1] == second {
			res = append(res, words[i+2])
		}
	}

	return res
}
```
```Ruby []
def find_ocurrences(text, first, second)
  words = text.split(" ")
  res = []

  (0...words.length - 2).each do |i|
    if words[i] == first && words[i + 1] == second
      res << words[i + 2]
    end
  end

  res
end
```
```Kotlin []
class Solution {
    fun findOcurrences(text: String, first: String, second: String): List<String> {
        val words = text.split(" ")
        val res = mutableListOf<String>()
        
        for (i in 0 until words.size - 2) {
            if (words[i] == first && words[i + 1] == second) {
                res.add(words[i + 2])
            }
        }

        return res
    }
}
```
```Swift []
swift
Copy code
class Solution {
    func findOcurrences(_ text: String, _ first: String, _ second: String) -> [String] {
        let words = text.split(separator: " ").map { String($0) }
        var res: [String] = []

        for i in 0..<words.count - 2 {
            if words[i] == first && words[i + 1] == second {
                res.append(words[i + 2])
            }
        }

        return res
    }
}
```
