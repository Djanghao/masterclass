# 2 Approaches || Easy || Beats 100%

**Author:** Garv_Virmani
**Votes:** 20
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5913816/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5913816/)

---

![image.png](./images/1.png)
# Approach 1
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```cpp []
class Solution {
public:
    long long minimumSteps(string s) {
        long long ans=0,c=0;
        for(int i=0;i<s.size();i++){
            if(s[i]=='1') c++;
            else ans+=c;
        }
        return ans;
    }
};
```

# Approach 2
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```cpp []
class Solution {
public:
    long long minimumSteps(string s) {
        long long ans=0,c=0;
        for(int i=s.size()-1;i>=0;i--){
            if(s[i]=='0') c++;
            else ans+=c;
        }
        return ans;
    }
};
```
![image.png](./images/1.png)