# Easy Video Solution 🔥 || Replace last 'k' elements with '*' ✅

**Author:** ayushnemmaniwar12
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674963/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674963/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Replace last 'k' elements with '*'.


# ***Easy Video Explanation***

https://youtu.be/5yp1vLHfEoY


> Thanks to puneeth_0307 

https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674000/easy-c-solution/



# Approach
<!-- Describe your approach to solving the problem. -->
The code calculates the minimum number of operations to transform a string. It repeatedly shifts a substring of length 'k' to the beginning and replaces the remaining part with '*'

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    

# Code


```C++ []
class Solution {
public:
    bool check(string word, string target){
        int n = word.size();
        for(int i=0;i<n;i++){
            if(target[i]!='*' && word[i]!=target[i]){
                return false;
            }
        }
        return true;
    }
    int minimumTimeToInitialState(string s, int k) {
        int n=s.size();
        int c=0;
        string copy=s;
        do {
            copy=copy.substr(k)+string(k,'*');
            c++;
        } while(!check(s,copy));
        return c;
    }
};
```
```python []
class Solution:
    def check(self, word, target):
        n = len(word)
        for i in range(n):
            if target[i] != '*' and word[i] != target[i]:
                return False
        return True

    def minimumTimeToInitialState(self, s, k):
        n = len(s)
        c = 0
        copy = s

        while not self.check(s, copy):
            copy = copy[k:] + '*' * k
            c += 1

        return c

```
```Java []
public class Solution {
    public boolean check(String word, String target) {
        int n = word.length();
        for (int i = 0; i < n; i++) {
            if (target.charAt(i) != '*' && word.charAt(i) != target.charAt(i)) {
                return false;
            }
        }
        return true;
    }

    public int minimumTimeToInitialState(String s, int k) {
        int n = s.length();
        int c = 0;
        String copy = s;

        do {
            copy = copy.substring(k) + "*".repeat(k);
            c++;
        } while (!check(s, copy));

        return c;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00