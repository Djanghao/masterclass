# [C++/Python] Simple simulation and 2-lines

**Author:** codedayday
**Votes:** 19
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/648548/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/648548/)

---

Version 1: simple logic 
```
class Solution {
public:
    //int isPrefixOfWord(string& sentence, string& searchWord) { // also ok
    int isPrefixOfWord(string sentence, string_view searchWord) {
        stringstream ss(sentence);
        string word;
        int i=1;
        while(ss>>word){
            if(word.find(searchWord) == 0 ) return i;
            i++;
        }
        return -1;
    }
};
```

Version 2: fewer lines but harder to read
```
class Solution {
public:
    int isPrefixOfWord(string sentence, string_view searchWord) {
        stringstream ss(sentence);
        string word;
        int i=0;
        while(ss>>word) 
		    if(++i && word.find(searchWord) == 0 ) return i;
        return -1;
    }
};
```

Version 3: bonus solution. Only for fun
```
class Solution {
public:
    int isPrefixOfWord(string sentence, string searchWord) {                        
        auto it = (' ' + sentence).find(' ' + searchWord);        
        return it ==string::npos ? -1: count(begin(sentence), begin(sentence) + it, ' ') + 1; 
    }
};
```

Python: Solution 1
```
class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:        
        it = (' ' + sentence).find(' ' + searchWord);        
        return -1 if it == -1 else sentence[:it].count(' ') + 1;
```

Python: Solution 2
https://stackoverflow.com/questions/3862010/is-there-a-generator-version-of-string-split-in-python
With re.finditer, we cau use minimal memory overhead.
```
class Solution:
    def split_iter(self, sentence: str):
        return (x.group(0) for x in re.finditer(r"[a-z]+", sentence))

    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:        
        for i,w in enumerate(self.split_iter(sentence)):
            if w.startswith(searchWord):
                return i + 1
        return -1
```
Credit: Thanks for sharing from @zhanghuimeng: 
https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/discuss/648361/Python3-Split-and-check