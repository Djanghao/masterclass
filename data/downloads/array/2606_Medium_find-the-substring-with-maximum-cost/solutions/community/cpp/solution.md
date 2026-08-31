# C++🚀| Easy to understand | Beats 100%🔥

**Author:** abhi_9v
**Votes:** 57
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3366677/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3366677/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are making a vector `v` in which values of all the alphabets are assigned as default (which is equal to their index number).
Secondly, if an aphabet is present in `chars`string the replace the it value as present in `vals` array. Now, read the approach.

# Approach
<!-- Describe your approach to solving the problem. -->
- You need to make a new vector `vt` which is corresponding to the string `s`. It contains the respective value of corresponding alphabets in string `s`.
- Now, run a for loop and take two variables `ans` and `temp`.
- After every iteration assign ans with `max(ans, temp)` and continuously add the element in temp.
- If temp becomes negative then reset it to zero as we wants the maximum possible sum.



# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int maximumCostSubstring(string s, string chars, vector<int>& vals) {
        // vector v containing values of all the alphabets.
        vector<int> v(26);
        for(int i=0; i<26; i++) v[i]=i+1;
        for(int i=0; i<chars.size(); i++){
            v[chars[i]-'a'] = vals[i];
        }
        int n = s.size();
        // vector corresponding to string s
        vector<int> vt(n);
        for(int i=0; i<s.size(); i++){
            vt[i] = v[s[i]-'a'];
        }
        int ans=0, temp=0;
        for(int i=0; i<n; i++){
            temp += vt[i];
            if(temp<0) temp=0;
            // assign maximum value to ans
            ans = max(ans, temp);
        }
        return ans;
    }
};
// PLEASE UPVOTE IF YOU LIKE THE SOLUTION.\uD83D\uDE42
```
![0a95fea4-64f4-4502-82aa-41db6d77c05c_1676054939.8270252.jpeg](./images/0.jpeg)
