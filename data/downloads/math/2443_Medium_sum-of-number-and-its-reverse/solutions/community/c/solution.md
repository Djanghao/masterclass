# Brute force || c++ || got tricked😂

**Author:** nova_404
**Votes:** 33
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2708265/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2708265/)

---

I thought of starting the comparing from the num/2 value, since the smaller values may not give the answer needed and if there exist a smaller one we can always find it using the reversing the number tech.

Remember i used some inbuilt functions to reverse the number , but this could give wrong answers if the constraints were too high.

```
class Solution {
public:
    bool sumOfNumberAndReverse(int num) {
        
        for(int i =num/2;i<=num;i++)
        {
            int mid = i;
            string s = to_string(mid);
            reverse(s.begin(),s.end());
            int n = stoi(s);
            if((i+n)==num)
            {
                //cout<<i<<" ";
                return true;
            }
                
        }
        return false;
        
    }
};
```

**upvote if you got tricked and wasted time on this question maybe**