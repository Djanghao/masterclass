# Pandas oneliner: repeat and median

**Author:** piocarz
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/3905982/](https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/3905982/)

---

# Intuition
In Pandas there is function exatcly opposite to count -> repeat. It just repeats values of one series by values of another series/list(lengths must be equal).

So it's as simple as repeating, and then using another built-in function that does exactly what we need - median.
# Code
```
import pandas as pd

def median_frequency(numbers: pd.DataFrame) -> pd.DataFrame:
    return numbers['num'].repeat(numbers['frequency']).to_frame().median().to_frame('median')
```

notice that to_frame is used twice - that's becouse this:

`numbers['num'].repeat(numbers['frequency'])`

return series, and aggregate function of series (like median) returns value - thats why we need to_frame. If we median() dataframe instead of series the result will be series, which we can convert again to dataframe. Normally it would be totally unnecessary, but we need to return datafrmae, not value or series.