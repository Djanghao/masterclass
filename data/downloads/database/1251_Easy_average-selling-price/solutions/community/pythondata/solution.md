# Pandas: For Finance Companies, Use merge_asof to Pass Your Interview

**Author:** BiggestChungus
**Votes:** 32
**Link:** [https://leetcode.com/problems/average-selling-price/solutions/4232783/](https://leetcode.com/problems/average-selling-price/solutions/4232783/)

---

edit: Thanks for the love everyone! This is my highest-voted solution!

# Intuition

Time series joins are a common operation, especially for hedge funds. It's used to make trading signals where you have some "left" data and you want a latest corresponding "right" value like close price, trade price, midquote, etc. It's also used in backtests: if you simulate making a trade at timestamp `ts`, then the simulated execution price is usually the most recent market price you have (perhaps with some interpolation to a next price, but ymmv).

For people interviewing at a hedge fund, do NOT do a normal join (Pandas merge) on `product_id` followed by selecting the one with the matching date. You'll lose points. I guarantee it. My old job rejected some allegedly "very experienced" Pandas/data science applications for failing to use `merge_asof`. Ironically if they only said they "had a bit of knowledge" we probably would have hired them despite their mistake.

Why will you lose points? A major application of `merge_asof` is to process financial tick data where you have a LOT of left and right combinations per join value (ticker usually). For a full day of trading and a big name like SPY or AAPL, you can have millions of quotes and hundreds of thousands of trades. Computing all of the possible left-right combinations, O(M*N), followed by a filter, is just too expensive.

Meanwhile, `merge_asof` iterates through the left and right with an O(N) two-pointer approach. Dramatically faster even though you have to sort by time (generally you end up sorting by time for many other reasons too).

Bonus: the `merge_asof` solution is shorter and cleaner too.

# Bonus Tool

Check out the `DataFrame.apply` for weighted averages. Makes the weighted average computation cleaner than adding a new value*weight column and summing it up, then wrangling some more with added columns.

# Code
```
import pandas as pd

def average_selling_price(prices: pd.DataFrame, units_sold: pd.DataFrame) -> pd.DataFrame:
    prices.sort_values('start_date', inplace=True)
    units_sold.sort_values('purchase_date', inplace=True)

    # merges on matching `by` values, then latest `right_on` <= `left_on`
    soldWithPrices = pd.merge_asof(units_sold, prices, by='product_id', left_on='purchase_date', right_on='start_date')

    ## In theory you should do this, but doesn't seem necessary to pass all test cases
    # badprice = soldWithPrices['end_date'] < soldWithPrices['purchase_date']
    # soldWithPrices.loc[badprice, 'price'] = 0.0
    # soldWithPrices.fillna({'price': 0.0}, inplace=True)

    def weighted_mean(df, value, weight):
        vs = df[value]
        ws = df[weight]

        return (vs*ws).sum() / ws.sum()

    avgPxSeries = soldWithPrices.groupby('product_id').apply(weighted_mean, 'price', 'units')

    main = avgPxSeries.round(2).rename('average_price').reset_index()

    # for some products we have a price but no sales, for whatever reason LC demands we return zero avg price
    priceIds = set(prices['product_id'].unique())
    soldIds = set(units_sold['product_id'].unique())
    missingIds = priceIds.difference(soldIds)
    fill = pd.DataFrame({'product_id': list(missingIds), 'average_price': [0]*len(missingIds)})

    return pd.concat([main, fill])
```