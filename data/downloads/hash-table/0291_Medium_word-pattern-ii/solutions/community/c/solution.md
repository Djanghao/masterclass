# hash + backtracking c solution

**Author:** nameldi
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/5195014/](https://leetcode.com/problems/word-pattern-ii/solutions/5195014/)

---

```
bool bijectiveCheck(char** s, int* h, int idx){
    for(int i = 0; i < 26; i++){
        if(i != idx && h[i] == h[idx] && !strcmp(s[i], s[idx]))
            return true;
    }
    return false;
}

bool backtracking(char* p, int pIdx, int pLen, char* s, int sIdx, int sLen, int* hLen, char** hString){
    if(pIdx == pLen && sIdx == sLen){
        return true;
    } else if(pIdx == pLen || sIdx == sLen){
        return false;
    }
    int idx = p[pIdx] - 'a';
    if(hLen[idx]){
        if(!strncmp(hString[idx], s + sIdx, hLen[idx])){
            return backtracking(p, pIdx+1, pLen, s, sIdx + hLen[idx], sLen, hLen, hString);
        } else {
            return false;
        }
    } else {
        // we get to find out a new pattern
        for(int i = sIdx; i < sLen; i++){
            hLen[idx] = i - sIdx + 1;
            memcpy(hString[idx], s + sIdx, sizeof(char) * hLen[idx]);
            hString[idx][hLen[idx]] = '\\0';
            /* A bijective mapping means that no two characters map to the same string */
            /* case :"ab" and "aa" */
            if(bijectiveCheck(hString, hLen, idx)){
                hLen[idx] = 0; // clear it
                continue;
            }
            if(backtracking(p, pIdx+1, pLen, s, sIdx + hLen[idx], sLen, hLen, hString))
                return true;
            hLen[idx] = 0;
        }
    }
    return false;
}

bool wordPatternMatch(char* pattern, char* s) {
    // hashLen use to record is mapping or not and length at the same time
    // 1 <= pattern.length, s.length <= 20
    int* hashLen = (int*)calloc(26, sizeof(int));
    char** hashString = (char**)calloc(26, sizeof(char*));
    for(int i = 0; i < 26; i++)
        hashString[i] = (char*)calloc(21, sizeof(char));
    return backtracking(pattern, 0, strlen(pattern), s, 0, strlen(s), hashLen, hashString);
}
```