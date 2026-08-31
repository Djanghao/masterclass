# panda

**Author:** btramduong0810
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/4117696/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solutions/4117696/)

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
def count_seniors_and_juniors(candidates: pd.DataFrame) -> pd.DataFrame:
    # Sort candidates by experience and salary in ascending order
    candidates.sort_values(['experience', 'salary'], ascending=[False, True], inplace=True)

    budget = 70000
    senior_accepted = 0
    junior_accepted = 0

    for index, row in candidates.iterrows():
        if row['experience'] == 'Senior' and row['salary'] <= budget:
            senior_accepted += 1
            budget -= row['salary']
        elif row['experience'] == 'Junior' and row['salary'] <= budget:
            junior_accepted += 1
            budget -= row['salary']

    result_df = pd.DataFrame({'experience': ['Senior', 'Junior'],
                              'accepted_candidates': [senior_accepted, junior_accepted]})

    return result_df
```