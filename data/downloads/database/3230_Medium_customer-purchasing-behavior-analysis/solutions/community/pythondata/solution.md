# pandas ||| 11 lines, one bite at a time ||

**Author:** Spaulding_
**Votes:** 2
**Link:** [https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/5523543/](https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/5523543/)

---

This problem is a hodgepodge of queries, which makes this solution somewhat tedious. I'm posting it only because there's no other pandas solutions posted yet.
```
import pandas as pd

                    # a fix to correct LeetCode's rounding bug in pandas
my_rnd = lambda x: round(x+.00001, 2)


def analyze_customer_behavior(transactions: pd.DataFrame, products: pd.DataFrame) -> pd.DataFrame:

                    # Merge products with transactions
    transactions = transactions.merge(products, on = 'product_id')

                    # (agg_df)  Determine total amount spent, number of transactions, and average amount spent
    agg_df = transactions.groupby('customer_id').agg(
        total_amount =           ('amount', 'sum'),
        transaction_count =      ('transaction_id', 'count'),
        avg_transaction_amount = ('amount', 'mean') ).reset_index()

                    # (uni_df)  Determine number of unique product categories and rename column
    uni_df = transactions.groupby('customer_id')['category'].nunique().reset_index()

                    # (top_df)  Determine the most frequently purchased product category 
    top_df = transactions.groupby(['customer_id', 'category']).agg(
        count =                  ('transaction_id', 'count'),
        last_transaction_date =  ('transaction_date', 'max') ).reset_index()

    top_df['rank'] = top_df.groupby('customer_id')['count'
                          ].rank(method = 'dense', ascending = 0)

    top_df = top_df[top_df['rank'] == 1
                  ].sort_values(by = ['customer_id', 'rank', 'last_transaction_date'], ascending = [1,1,0]
                  ).drop_duplicates(subset = ['customer_id'], keep = 'first')

                    # Merge agg_df, uni_df, top_df into one dataframe df
    df = agg_df.merge(uni_df, on = 'customer_id').merge(top_df, on = 'customer_id')

                    # Calculate and round loyalty score and round two other existing columns
    df['loyalty_score'] = (df.transaction_count * 10) + (df.total_amount / 100).apply(my_rnd)
    df['total_amount'] = df.total_amount.apply(my_rnd)
    df['avg_transaction_amount'] = df.avg_transaction_amount.apply(my_rnd)

                    # Sort rows, rename and reorder columns, and return answer
    return df.sort_values(by = ['loyalty_score', 'customer_id'], ascending = [0,1]
            ).rename(columns = {'category_x': 'unique_categories', 'category_y': 'top_category'}
            ).iloc[:,[0,1,2,4,3,5,9]]
```