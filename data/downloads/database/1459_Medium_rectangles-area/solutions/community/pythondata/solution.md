# Pandas - 3 simple lines

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/rectangles-area/solutions/4113502/](https://leetcode.com/problems/rectangles-area/solutions/4113502/)

---

# Approach
1. Cross join and filter so that id from first group is smaller then id from another group - this way we avoid duplicated pairs, and avoid merging with itself. Also rename to final names - P1 and P2 
2. Create column with area of rectangle - abs(x1-x2)*abs(y1-y2) 
3. Filter out areas equal to 0, select relevant columns and sort them 

# Code
```
import pandas as pd

def rectangles_area(points: pd.DataFrame) -> pd.DataFrame:
    df = points.merge(points,"cross").query("id_x<id_y").rename(columns = {"id_x":"P1", "id_y":"P2"})
    df = df.assign(AREA = abs(df.x_value_x - df.x_value_y) * abs(df.y_value_x - df.y_value_y))
    return df.query("AREA > 0")[["P1","P2","AREA"]].sort_values(["AREA","P1","P2"], ascending = [0,1,1])
```