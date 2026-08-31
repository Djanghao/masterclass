# Easy Video Solution ✅ || Optimal Solution 🔥 || Sorting 🙋‍♂️

**Author:** ayushnemmaniwar12
**Votes:** 13
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4851173/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4851173/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort the array and dry run few scenarios 


***Easy Video Explanation***

https://youtu.be/eBs4q-zpcLQ


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
    

# Code


```C++ []
class Solution {
public:
    int minimumBoxes(vector<int>& a, vector<int>& c) {
        int ans=0;
        int s=0;
        for(auto i:a)
            s=s+i;
        sort(c.begin(),c.end());
        int i=c.size()-1;
        while(i>=0) {
            s=s-c[i];
            ans++;
            if(s<=0)
                break;
            i--;
        }
        return ans;
    }
};
```
```python []
class Solution:
    def minimumBoxes(self, a, c):
        ans = 0
        s = sum(a)
        c.sort()

        i = len(c) - 1
        while i >= 0:
            s -= c[i]
            ans += 1
            if s <= 0:
                break
            i -= 1

        return ans


```
```Java []
import java.util.Arrays;

public class Solution {
    public int minimumBoxes(int[] a, int[] c) {
        int ans = 0;
        int s = Arrays.stream(a).sum();
        Arrays.sort(c);

        int i = c.length - 1;
        while (i >= 0) {
            s -= c[i];
            ans++;
            if (s <= 0)
                break;
            i--;
        }

        return ans;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00