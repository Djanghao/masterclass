# Simple C code

**Author:** P_More
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3971517/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3971517/)

---

# Code
```
bool isAcronym(char ** words, int wordsSize, char * s){
    for(int i = 0 ; i < wordsSize ; i++)
    {
        if(!*s)
            return false;
        if(words[i][0] == *s)
            *s++;
    }
    return !*s;
}
```