# 🔥💯 [Pandas] Simple 2 Step Approach || Additional Knowledge at the end 🤩

**Author:** sriganesh777
**Votes:** 168
**Link:** [https://leetcode.com/problems/rank-scores/solutions/3861595/](https://leetcode.com/problems/rank-scores/solutions/3861595/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
1. Use the rank method with method='dense' to assign ranks to the scores in descending order while handling ties. Add a new column 'rank' to the scores DataFrame to store the ranks.
2. Sort the DataFrame by score in descending order. This can be achieved using the sort_values method.


# Code
```
import pandas as pd

def order_scores(scores: pd.DataFrame) -> pd.DataFrame:
    # Use the rank method to assign ranks to the scores in descending order with no gaps
    scores['rank'] = scores['score'].rank(method='dense', ascending=False)
    
    # Drop id column & Sort the DataFrame by score in descending order
    result_df = scores.drop('id',axis=1).sort_values(by='score', ascending=False)
    
    return result_df
```

# Additional Knowledge \uD83E\uDD29
The Approach is super simple if we know about the rank method and method = 'dense', but we should not stop here for this question let's explore and increase our knowledge.

what are other available options like dense? \uD83E\uDD14
In Pandas' rank method, there are several options available for the method parameter to handle ties when assigning ranks. Here are the available options:

**'average' (default):** This method assigns the average rank to tied elements. For example, if two elements tie for the second rank, they both get the rank of 2.5, and the next rank will be 4.

**'min':** This method assigns the minimum rank to tied elements. For example, if two elements tie for the second rank, they both get the rank of 2, and the next rank will be 4.

**'max':** This method assigns the maximum rank to tied elements. For example, if two elements tie for the second rank, they both get the rank of 3, and the next rank will be 4.

**'first':** This method assigns ranks in the order they appear in the input data, without using any average or other calculations for ties. For example, if two elements tie for the second rank, the first element gets the rank of 2, and the next rank will be 4.

**'dense':** This method assigns dense ranks to tied elements, meaning there are no gaps in the ranks. For example, if two elements tie for the second rank, they both get the rank of 2, and the next rank will be 3.

**'ordinal':** This method is similar to 'dense', but it considers the order of appearance in the data for assigning ranks to tied elements. For example, if two elements tie for the second rank, the first element gets the rank of 2, and the next rank will be 3.

These methods allow you to choose how ties in the data should be handled while assigning ranks. You can select the appropriate method based on your specific requirements. By default, 'average' is used when the method parameter is not provided.

## Please upvote the solution which gives me motivation to share high quality solutions like this. Thank You.


