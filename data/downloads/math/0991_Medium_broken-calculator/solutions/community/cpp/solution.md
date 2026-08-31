# [C++] || iterative || 100% faster || O(1) space

**Author:** 4byx
**Votes:** 30
**Link:** [https://leetcode.com/problems/broken-calculator/solutions/1875138/](https://leetcode.com/problems/broken-calculator/solutions/1875138/)

---

*Upvote if helpful*

**Approach**
```
1. reduce target value as much as possible  because this question can be done by greedy
2. if divisible by 2 divide by 2  
3. else increase by 1
4. if target becomes less than startValue then only option left is to increasse
```



**CODE**
```
class Solution {
public:
    int brokenCalc(int startValue, int target) {
        long long ans = 0;
        long long tar = target;
        while(startValue != tar){
            if(tar%2 == 0 and startValue < tar){
                tar /= 2;
            }
            else if(tar > startValue){
                tar +=1;
            }
            else{
                ans += abs(tar-startValue)-1;
                tar = startValue;
            }
            ans++;
        }
        return ans;
    }
};
```