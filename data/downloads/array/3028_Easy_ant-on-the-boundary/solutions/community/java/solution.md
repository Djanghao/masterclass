# Easy Video Solution for Beginners 🔥 || Prefix sum ✅

**Author:** ayushnemmaniwar12
**Votes:** 8
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/4674614/](https://leetcode.com/problems/ant-on-the-boundary/solutions/4674614/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry-run on few inputs and see how can store the answer


# ***Easy Video Explanation***

https://youtu.be/u7xqSMdGMQA


# Approach
<!-- Describe your approach to solving the problem. -->
The code counts the number of times the cumulative sum of elements in a vector becomes zero. It uses a loop to iterate through the vector, updating the sum, and increments a counter when the sum becomes zero. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
    

# Code


```C++ []
class Solution {
public:
    int returnToBoundaryCount(vector<int>& v) {
        int s=0,c=0;
        for(auto i:v) {
            s=s+i;
            if(s==0)
                c++;
        }
        return c;
    }
};
```
```python []
class Solution:
    def returnToBoundaryCount(self, v):
        s, c = 0, 0
        for i in v:
            s += i
            if s == 0:
                c += 1
        return c

```
```Java []
import java.util.*;

public class Solution {
    public int returnToBoundaryCount(ArrayList<Integer> v) {
        int s = 0, c = 0;
        for (int i : v) {
            s += i;
            if (s == 0)
                c++;
        }
        return c;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00