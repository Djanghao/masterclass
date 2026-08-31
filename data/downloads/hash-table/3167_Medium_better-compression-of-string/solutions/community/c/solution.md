# c solution

**Author:** nameldi
**Votes:** 0
**Link:** [https://leetcode.com/problems/better-compression-of-string/solutions/5233274/](https://leetcode.com/problems/better-compression-of-string/solutions/5233274/)

---

```
char* betterCompression(char* compressed) {
    int len = strlen(compressed), currCharIdx = compressed[0] - 'a', currCnt = 0;
    int* cnt = (int*)calloc(26, sizeof(int));
	// process the char and number and save it into cnt[]
    for(int i = 1; i < len; i++){
        if(compressed[i] >= 'a'){
            cnt[currCharIdx] += currCnt;
            currCharIdx = compressed[i] - 'a';
            currCnt = 0;
        } else {
            currCnt *= 10;
            currCnt += (compressed[i] - '0');
        }
    }
    cnt[currCharIdx] += currCnt;
	// prepare answer in order
    char* ans = (char*)calloc(256, sizeof(char));
    currCharIdx = 0;
    for(int i = 0; i < 26; i++){
        if(cnt[i]){
            ans[currCharIdx++] = i + 'a';
            sprintf(ans + currCharIdx, "%d", cnt[i]);
			// update currCharIdx
            while(cnt[i]){
                currCharIdx++;
                cnt[i] /= 10;
            }
        }
    }
    ans[currCharIdx] = '\\0';
    return ans;
}
```