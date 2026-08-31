# 🚀🚀Beat 100%🚀🚀|| easy solution || optimal solution with C++ ✅✅🔥🔥

**Author:** Youssef_2274
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4947496/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4947496/)

---

![image.png](./images/0.png)
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    Solution()
    {
        ios_base::sync_with_stdio(false); 
        cin.tie(NULL); 
        cout.tie(NULL);
    }

    int minimumLevels(vector<int>& possible) {
        int sum {};
        int n = possible.size();
        for (int& num : possible)
            sum += (num ? 1 : -1);

        cout << sum << '\
';

        int firstPlayer = 0;
        for (int i = 0; i < n-1; ++i)
        {
            firstPlayer += (possible[i] ? 1 : -1);
            if (firstPlayer > sum-firstPlayer)
                return i + 1;
        }
        return -1;
    }
};
```

![image.png](./images/1.png)
