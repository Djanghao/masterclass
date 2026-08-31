# Pandas, annoying dtypes

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-boolean-expression/solutions/4110830/](https://leetcode.com/problems/evaluate-boolean-expression/solutions/4110830/)

---

# Intuition
Problem itself is easy, just put conditions in np.where or np.select accordingly.
What was much more frustraiting, was when everything was correct, identical outcome, but still `Wrong Anwser`.

I knew that problem was somewhere in dtypes, but even as I did:

`.astype(object)` as it should be, still wrong.

Finally I tried:

 `.astype(str).replace({"True":"true","False":"false"})`

Problem is, you cannot simply convert to object. You have to convert to str, which will be later internally evaluated to object. 

Returning value should be "true"/"false" as `str`, normally if you convert `bool` to `str` "false"(bool) will become "False"(str), so you have to map it back to "false"(str) ...... <facepalm>
# Approach
As I said, code itself is straghtforward:
1. merge to get left_operand value (value_x as its merged first)
2. merge to get right_operand value (value_y as its merged second)
3. treat it all with numpy.where
4. select columns and return **(and convert dtypes....)**

# Code
```
import pandas as pd

def eval_expression(variables: pd.DataFrame, expressions: pd.DataFrame) -> pd.DataFrame:
    df = expressions.merge(variables, left_on = "left_operand",right_on = "name")
    df = df.merge(variables, left_on = "right_operand", right_on = "name")
    df = df.assign(value =  np.where( df.operator == "=", df.value_x == df.value_y,
                            np.where( df.operator == ">", df.value_x > df.value_y,
                                                          df.value_x < df.value_y)))
    return df.iloc[:,[0,1,2,7]].astype(str).replace({"True":"true","False":"false"})
```