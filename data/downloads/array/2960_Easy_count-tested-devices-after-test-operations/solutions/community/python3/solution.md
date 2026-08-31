# Easy Video Solution || Brute -> Optimal

**Author:** ayushnemmaniwar12
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4385249/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4385249/)

---

# ***Easy Video Explanation***

https://youtu.be/bZ7qPLwLzUg

# Approach
<!-- Describe your approach to solving the problem. -->
This Python code defines a class Solution with a method count_tested_devices that takes a list of integers and returns the count of tested devices. The logic is similar, incrementing the count if the current element is greater than the current count.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
    

# Code


```C++ []
class Solution {
public:
    int countTestedDevices(vector<int>& v) {
        int n=v.size();
        int c=0;
        for(int i=0;i<n;i++)
        {
            if(v[i]>c)
                c++;
        }
        return c;
    }
};
```
```python []
class Solution:
    def count_tested_devices(self, v):
        n = len(v)
        c = 0
        for i in range(n):
            if v[i] > c:
                c += 1
        return c
```
```Java []
import java.util.*;

public class Solution {
    public int countTestedDevices(ArrayList<Integer> v) {
        int n = v.size();
        int c = 0;
        for (int i = 0; i < n; i++) {
            if (v.get(i) > c)
                c++;
        }
        return c;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00