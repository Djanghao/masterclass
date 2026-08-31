# 🔥💯[Pandas] 2 Liner (Easy to understand)💯🔥

**Author:** sriganesh777
**Votes:** 40
**Link:** [https://leetcode.com/problems/classes-with-at-least-5-students/solutions/3899196/](https://leetcode.com/problems/classes-with-at-least-5-students/solutions/3899196/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
- Group the DataFrame by class using the groupby function.
- Count the number of students in each class by using the count function on the grouped DataFrame and resetting the index.
- Filter the class_counts DataFrame to include only the rows where the student count is greater than or equal to five.
- Return the resulting DataFrame containing the classes with at least five students.
# Code
```
import pandas as pd

def find_classes(courses: pd.DataFrame) -> pd.DataFrame:
    # Group by class and count the number of students in each class
    class_counts = courses.groupby('class')['student'].count().reset_index()
    
    # Filter classes with at least five students
    result = class_counts[class_counts['student'] >= 5][["class"]]
    
    return result
```
![upvote img.jpg](./images/0.jpeg)
