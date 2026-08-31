# C++ || Bit Manipulation

**Author:** abhay5349singh
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4220610/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4220610/)

---

**Connect with me on LinkedIn**: https://www.linkedin.com/in/abhay5349singh/

**Approach:**
* for all bits, count values in nums which have that particular bit set
* if count is >= k, add that bit to answer

```
class Solution {
public:
    
    int findKOr(vector<int>& nums, int k) {
        int sum=0;
        for(int i=0;i<32;i++){
            int c=0;
            for(int val : nums){
                if(val & (1<<i)) c++;
            }
            if(c >= k) sum += pow(2,i); // or we may write: sum += (1<<i);
        }
        return sum;
    }
};
```

**Do upvote if it helps :)**