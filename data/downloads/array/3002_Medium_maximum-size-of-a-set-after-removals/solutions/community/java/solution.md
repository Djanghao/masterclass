# Easy Video Explanation with Proofs 🔥 || Set Intersection 🔥

**Author:** ayushnemmaniwar12
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4521393/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4521393/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to use set and basic of math is required. Try to dry run few scenarios for better understanding

# ***Easy Video Explanation***

https://youtu.be/crNIGc4zb8s



# Approach
<!-- Describe your approach to solving the problem. -->
Basic
The code determines the maximum size of a set formed by merging two sets. It considers the size of the first set, and then iterates through the second set, incrementing the size based on elements not present in the first set, up to half the size of the second set.



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
    

# Code


```C++ []
class Solution {
public:
    int maximumSetSize(vector<int>& v1, vector<int>& v2) {
        set<int>s1;
        set<int>s2;
        for(auto i:v1)
            s1.insert(i);
        for(auto i:v2)
            s2.insert(i);
        int n=v1.size(),m=v2.size();
        int x=s1.size(),y=s2.size();
        int ans=min(n/2,x);
        int rem=x-ans;
        int c=0;
        for(auto i:s2) {
            if(s1.find(i)==s1.end()) {
                c++;
            } else if(rem>0) {
                c++;
                rem--;
            }
            if(c>=m/2)
                break;
        }
        return ans+c;
    }
};
```
```python []
class Solution:
    def maximumSetSize(self, v1, v2):
        s1 = set(v1)
        s2 = set(v2)
        n, m = len(v1), len(v2)
        x, y = len(s1), len(s2)
        ans = min(n // 2, x)
        rem = x - ans
        c = 0
        for i in s2:
            if i not in s1:
                c += 1
            elif rem > 0:
                c += 1
                rem -= 1
            if c >= m // 2:
                break
        return ans + c

```
```Java []
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int maximumSetSize(int[] v1, int[] v2) {
        Set<Integer> s1 = new HashSet<>();
        Set<Integer> s2 = new HashSet<>();
        for (int i : v1)
            s1.add(i);
        for (int i : v2)
            s2.add(i);
        int n = v1.length, m = v2.length;
        int x = s1.size(), y = s2.size();
        int ans = Math.min(n / 2, x);
        int rem = x - ans;
        int c = 0;
        for (int i : s2) {
            if (!s1.contains(i)) {
                c++;
            } else if (rem > 0) {
                c++;
                rem--;
            }
            if (c >= m / 2)
                break;
        }
        return ans + c;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00