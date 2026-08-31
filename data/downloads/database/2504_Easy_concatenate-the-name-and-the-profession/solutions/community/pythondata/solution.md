# Simple code

**Author:** bodyziakm
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/4834288/](https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/4834288/)

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
```
import pandas as pd

def concatenate_info(person: pd.DataFrame) -> pd.DataFrame:
    person['name'] = person.apply(lambda x: x['name'] + '(' + x['profession'][0].upper() + ')', axis=1 )
    return person[['person_id', 'name']].sort_values(by='person_id',ascending = False)

```