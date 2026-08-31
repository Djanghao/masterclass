# pandas ||| boolean arithmetic || T/S: 95% / 30%

**Author:** Spaulding_
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-nodes/solutions/4782439/](https://leetcode.com/problems/binary-tree-nodes/solutions/4782439/)

---

Note: The reason `root` shows up twice in `df` is because at least one of the testcases is a single-node tree.
```
import pandas as pd

def binary_tree_nodes(tree: pd.DataFrame) -> pd.DataFrame:

    df = pd.DataFrame({'sm'  :[  0,     1   ,    2   ,   3  ],
                       'Type':['Leaf','Root', 'Inner','Root'] })

    tree['sm'] = 2*tree.N.isin(tree.P) + tree.P.isna()

    return tree.merge(df).sort_values('N').iloc[:,[0,3]]
```
[https://leetcode.com/problems/binary-tree-nodes/submissions/1186182164/](https://leetcode.com/problems/binary-tree-nodes/submissions/1186182164/)

I could be wrong, but I think that time complexity is (*N*log*N*)  and space complexity is *O*(*N*log*N*), in which *N* ~ `len(tree)`.