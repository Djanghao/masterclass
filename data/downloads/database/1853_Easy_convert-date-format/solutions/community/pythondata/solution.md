# Pandas Strftime Solution

**Author:** mariabalos16
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-date-format/solutions/5864078/](https://leetcode.com/problems/convert-date-format/solutions/5864078/)

---

# Code
```pythondata []
import pandas as pd
import datetime as dt

def convert_date_format(days: pd.DataFrame) -> pd.DataFrame:

    # Convert the column 'day' to the desired format where:
        # %A = day of the week in format "Monday"
        # %B = month in format "January"
        # %-d = day of the month in format "1", 
                the - in front of the "d" gets rid of the zero-leading
        # %Y = year in format "2024"

    days["day"] = days["day"].dt.strftime('%A, %B %-d, %Y')
    return days
```

Happy to discuss about this in comments! Thanks.