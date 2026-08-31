# C++ | | Python | | Easy-Understanding

**Author:** ak_ydv
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/3810846/](https://leetcode.com/problems/check-if-array-is-good/solutions/3810846/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Find max element
- Check whether every element occur atleast one once 
- Check for count of max elemnt.(i.e should be 2) 

# Complexity
  **Time complexity:** O(n*log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

**Space complexity:** O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# C++
```
class Solution {
public:
    bool isGood(vector<int>& v) {
        
        int n = v.size();
        int mx = *max_element(v.begin(),v.end());
        
        set<int> s(v.begin(),v.end());
        bool flag = 1;
        int k = 1;
        
        for(auto x : s){
            if(x == k) k++;
            else{
                flag = 0;
                break;
            }
        }
        
        int ct = count(v.begin(),v.end(),mx);
        if(n == mx + 1 && ct == 2 && flag) return 1;
        else return 0;
    }
};
```
# Python

```
class Solution:
    def isGood(self, v):
        n = len(v)
        mx = max(v)
        s = set(v)
        flag = True
        k = 1
        for x in s:
            if x == k:
                k += 1
            else:
                flag = False
                break
        ct = v.count(mx)
        if n == mx + 1 and ct == 2 and flag:
            return True
        else:
            return False

```

# Me Waiting for Upvote :\\

![Upvote.gif](./images/0.gif)
