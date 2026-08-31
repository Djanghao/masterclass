# Pandas solution, fast and easy.

**Author:** xl3040
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-occurrences-in-text/solutions/4066664/](https://leetcode.com/problems/count-occurrences-in-text/solutions/4066664/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is nature to use regex for precise pattern matching with word boundary '\\b' on both sides of the word "bull" or "bear". However, it will count the sentences whose first or last word is exactly "bull" or "bear", whereas the question ask us to disregard this case. Thus, instead of using '\\b', one should use '\\s' on both sides. 

Another thing needs to notice is that a file may contains multiple "bull" or "bear". We don't want to count the total number, instead, we want to check if there exists one or not. 

# Approach
<!-- Describe your approach to solving the problem. -->
Use `pandas.Series.str.contains` to check whether a row contains certain regex expression and use `sum` function to count the number of `True` returned. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Linear in the total length of contents in all files. 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Constant. 
# Code
```
import pandas as pd

def count_occurrences(files: pd.DataFrame) -> pd.DataFrame:
    bullcnt = files['content'].str.contains(r'\\sbull\\s').sum()
    bearcnt = files['content'].str.contains(r'\\sbear\\s').sum()
    return pd.DataFrame({'word':['bull', 'bear'], 'count' : [bullcnt, bearcnt]})

```