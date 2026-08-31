# c solution

**Author:** nameldi
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/3410887/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/3410887/)

---

```
int MIN(int a, int b){ return (a<b?a:b);}
int shortestWordDistance(char ** wordsDict, int wordsDictSize, char * word1, char * word2){
    int wlen1 = strlen(word1), wlen2 = strlen(word2), ans = INT_MAX, pingPongFlag = 0;
    bool sameWord = !strcmp(word1, word2)? true : false;
    int* wordIdx = (int*)calloc(2, sizeof(int));
    for(int i = 0; i < wordsDictSize; i++){
        if(sameWord){
            if(!strcmp(wordsDict[i], word1)){
                wordIdx[pingPongFlag] = i+1;
                if(wordIdx[pingPongFlag ^ 1])
                    ans = MIN(ans, abs(wordIdx[0] - wordIdx[1]));                
                pingPongFlag ^= 1;
            }
        }
        else {
            if(!strcmp(wordsDict[i], word1)){
                wordIdx[0] = i+1;
                if(wordIdx[1])
                    ans = MIN(ans, abs(wordIdx[0] - wordIdx[1]));
            }
            else if(!strcmp(wordsDict[i], word2)){
                wordIdx[1] = i+1;
                if(wordIdx[0])
                    ans = MIN(ans, abs(wordIdx[0] - wordIdx[1]));                    
            }
        }
    }
    return ans;
}
```