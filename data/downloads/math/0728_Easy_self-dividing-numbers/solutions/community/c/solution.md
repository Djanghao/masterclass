# C++ Solution: 100% faster, easy and clean code

**Author:** problem_solver09
**Votes:** 27
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/713070/](https://leetcode.com/problems/self-dividing-numbers/solutions/713070/)

---

Please upvote if this helped :)
```
class Solution {
public:
    vector<int> selfDividingNumbers(int left, int right) {
        
        vector<int> result;
        for(int i=left; i<=right; i++){
            
            int temp = i;
            while(temp > 0){
                int digit = temp%10;
                if(digit==0 || i%digit!=0){
                    break;
                }
                temp /= 10;
            }
            if(temp==0){
                result.push_back(i);
            }
        }
        return result;
    }
};
```