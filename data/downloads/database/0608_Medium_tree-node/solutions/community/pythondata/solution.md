# Pandas 4 methods to deal with conditions.

**Author:** piocarz
**Votes:** 19
**Link:** [https://leetcode.com/problems/tree-node/solutions/4069661/](https://leetcode.com/problems/tree-node/solutions/4069661/)

---

# Intuition
Create 3 conditions that will match the specified requirements:
- no children => Leaf
- no parent => Root
- rest => Inner

# Approach
Conditions are very simple, so it is the best possibility to test 4 approaches:
- pandas apply
- nested numpy where
- numpy select
- preffered "Pandas Cookbook" vectorization 

# Complexity
- Time complexity: All expect apply are very fast, becouse they rely on vectorization, apply is going row by row

# Code
1. First is least preferable, quite long and slow but WORKING .apply() method ( to be honest im not very good in using apply() becouse I use vectorization whenever possible ) but here it is:
```
import pandas as pd

def tree_node(tree: pd.DataFrame) -> pd.DataFrame:

    parents = [x for x in tree.p_id.to_list() if type(x) == int]
    
    def category_assign(row):
        if str(row["p_id"]) == "<NA>":
            return "Root"
        elif row["id"] in parents:
            return "Inner"
        else:
            return "Leaf"

    tree["type"] = tree.apply(category_assign, axis = 1)
    return tree[["id","type"]] 
```
2. Second method - numpy select is first vectorized solution way faster, and very clean when we have many many coditions,here are only 2 (3rd is default):
```
import pandas as pd
import numpy as np

def tree_node(tree: pd.DataFrame) -> pd.DataFrame:

    conditions = [  tree["p_id"].isna() , 
                    ~tree["id"].isin(tree.p_id).astype(bool)]
    choices =   [   "Root",
                    "Leaf"]
    tree["type"] = np.select(conditions, choices, default = "Inner")
    return tree[["id","type"]]
```
3. Third is my favourite, nested numpy where method , it's really  perfect if we have only two conditions, but even when there are multiple, if you format it in right way, in my opinion it is the cleanest solution:
```
import pandas as pd
import numpy as np

def tree_node(tree: pd.DataFrame) -> pd.DataFrame:
    tree["type"] =  np.where( tree.p_id.isna(),         "Root",     #//1st condition -> result
                    np.where(~tree.id.isin(tree.p_id),  "Leaf",     #//2nd condition -> result
                                                        "Inner" ))  #//last one -> default result
    return tree[["id","type"]] 
```
4. Finally probably fastest and preffered as a default by pandas creators (check [pandas cookbook](https://pandas.pydata.org/docs/user_guide/cookbook.html) first few examples)
```
import pandas as pd

def tree_node(tree: pd.DataFrame) -> pd.DataFrame:
    tree["type"] = "Inner"
    tree.loc[~tree["id"].isin(tree["p_id"]), "type"] = "Leaf"
    tree.loc[tree["p_id"].isnull(), "type"] = "Root"
    return tree[["id","type"]] 
```