# BEATS 100% DART Solution

**Author:** Mohamed_Sadeck
**Votes:** 0
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/4823536/](https://leetcode.com/problems/bag-of-tokens/solutions/4823536/)

---


# Code
```
class Solution {
  int bagOfTokensScore(List<int> tokens, int power) {
    int score=0;
    int ans=0;
    int left=0;
    int right=tokens.length-1;
    tokens.sort();
    while(left<=right){
        if(power>=tokens[left]){
            power-=tokens[left];
            left++;
            score++;
            if(score>ans) ans=score;
        }else if(score>0){
            power+=tokens[right];
            score--;
            right--;
        }else return 0;
    }
    if(power<0) return 0;
    return ans;
  }
}
```