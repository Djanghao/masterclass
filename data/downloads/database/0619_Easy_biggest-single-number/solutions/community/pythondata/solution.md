# One line pandas, self explaining

**Author:** JuanKarim
**Votes:** 32
**Link:** [https://leetcode.com/problems/biggest-single-number/solutions/3943685/](https://leetcode.com/problems/biggest-single-number/solutions/3943685/)

---

# Code
```
import pandas as pd

def biggest_single_number(my_numbers: pd.DataFrame) -> pd.DataFrame:
    return my_numbers.drop_duplicates(keep = False).max().to_frame(name = 'num')
```