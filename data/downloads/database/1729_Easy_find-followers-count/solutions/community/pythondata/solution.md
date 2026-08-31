# Easy pandas sol, Beats 100% :)

**Author:** user0490hI
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-followers-count/solutions/6087423/](https://leetcode.com/problems/find-followers-count/solutions/6087423/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```pythondata []
import pandas as pd

def count_followers(f: pd.DataFrame) -> pd.DataFrame:
    dic = {}

    for i in f['user_id']:
        if i not in dic:
            dic[i] = 1
        else:
            dic[i] += 1 

    jvrc = pd.DataFrame()
    
    jvrc['user_id'] = dic.keys()
    jvrc['followers_count'] = dic.values()
    jvrc.sort_values('user_id', inplace=True)
    return jvrc           

    
```