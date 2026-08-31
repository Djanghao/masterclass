# cross join and merge

**Author:** zhangmanyuzmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-experiments/solutions/4657166/](https://leetcode.com/problems/count-the-number-of-experiments/solutions/4657166/)

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

def count_experiments(experiments: pd.DataFrame) -> pd.DataFrame:
    # 1. cross join to create all possible pairs
    # platforms = pd.DataFrame(data = set(experiments['platform'].tolist()), columns = ['platform'])
    platforms = pd.DataFrame(data = ['Android', 'IOS', 'Web'], columns = ['platform'])
    # experiment_names = pd.DataFrame(data = set(experiments['experiment_name'].tolist()), columns = ['experiment_name'])
    experiment_names = pd.DataFrame(data = ['Reading', 'Sports', 'Programming'], columns = ['experiment_name'])
    df = platforms.merge(experiment_names, how = 'cross')
    # 2. count experiment pairs
    experiments = experiments.groupby(['platform', 'experiment_name'])['experiment_id'].size().reset_index(name = 'num_experiments')
    # 3. merge df with experiments and fillna
    df = df.merge(experiments, how = 'left', on = ['platform', 'experiment_name']).fillna(0)
    return df
```