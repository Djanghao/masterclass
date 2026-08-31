# Official Solution

**Link:** [https://leetcode.com/problems/customer-order-frequency/solution/](https://leetcode.com/problems/customer-order-frequency/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach: Group by `customer_id` and filter by spending sum

This approach involves consolidating and analyzing customer order data to identify specific customer behaviors. Initially, data from different sources (`customers`, `orders`, and `products`) is merged into a single comprehensive dataset. This merged dataset is then filtered to focus only on transactions from the year 2020, narrowing the scope to a specific time frame. The key step involves grouping this data by customer and month, enabling the calculation of total monthly expenditure for each customer. This grouping allows for the identification of customers who consistently spend above a certain threshold in both June and July. The final step is to filter out and present only those customers who meet these spending criteria. 

#### Intuition

Let's review the intuition behind each step given the following input DataFrames:

Customers DataFrame (`customers`):

<table>
  <tr>
    <th>customer_id</th>
    <th>name</th>
    <th>country</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Winston</td>
    <td>USA</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jonathan</td>
    <td>Peru</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Moustafa</td>
    <td>Egypt</td>
  </tr>
</table>
<br>


Product DataFrame (`product`):

<table>
  <tr>
    <th>product_id</th>
    <th>description</th>
    <th>price</th>
  </tr>
  <tr>
    <td>10</td>
    <td>LC Phone</td>
    <td>300</td>
  </tr>
  <tr>
    <td>20</td>
    <td>LC T-Shirt</td>
    <td>10</td>
  </tr>
  <tr>
    <td>30</td>
    <td>LC Book</td>
    <td>45</td>
  </tr>
  <tr>
    <td>40</td>
    <td>LC Keychain</td>
    <td>2</td>
  </tr>
</table>
<br>


Orders DataFrame (`orders`):

<table>
  <tr>
    <th>order_id</th>
    <th>customer_id</th>
    <th>product_id</th>
    <th>order_date</th>
    <th>quantity</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>10</td>
    <td>2020-06-10</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1</td>
    <td>20</td>
    <td>2020-07-01</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>30</td>
    <td>2020-07-08</td>
    <td>2</td>
  </tr>
  <tr>
    <td>4</td>
    <td>2</td>
    <td>10</td>
    <td>2020-06-15</td>
    <td>2</td>
  </tr>
  <tr>
    <td>5</td>
    <td>2</td>
    <td>40</td>
    <td>2020-07-01</td>
    <td>10</td>
  </tr>
  <tr>
    <td>6</td>
    <td>3</td>
    <td>20</td>
    <td>2020-06-24</td>
    <td>2</td>
  </tr>
  <tr>
    <td>7</td>
    <td>3</td>
    <td>30</td>
    <td>2020-06-25</td>
    <td>2</td>
  </tr>
  <tr>
    <td>9</td>
    <td>3</td>
    <td>30</td>
    <td>2020-05-08</td>
    <td>3</td>
  </tr>
</table>
<br>



1. **Merging DataFrames**: 
   
   To bring all relevant data (`customers`, `orders`, and `products`) into a single table. This is essential because the information we need (like customer names, order dates, quantities, and prices) is spread across different tables. By merging them, we create a comprehensive dataset that combines all these elements, making it easier to analyze and manipulate the data.

   ```python
   merged_df = pd.merge(
        pd.merge(orders, customers, on="customer_id"), product, on="product_id"
    )
   ```

<table>
  <tr>
    <th>order_id</th>
    <th>customer_id</th>
    <th>product_id</th>
    <th>order_date</th>
    <th>quantity</th>
    <th>name</th>
    <th>country</th>
    <th>description</th>
    <th>price</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>10</td>
    <td>2020-06-10</td>
    <td>1</td>
    <td>Winston</td>
    <td>USA</td>
    <td>LC Phone</td>
    <td>300</td>
  </tr>
  <tr>
    <td>4</td>
    <td>2</td>
    <td>10</td>
    <td>2020-06-15</td>
    <td>2</td>
    <td>Jonathan</td>
    <td>Peru</td>
    <td>LC Phone</td>
    <td>300</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1</td>
    <td>20</td>
    <td>2020-07-01</td>
    <td>1</td>
    <td>Winston</td>
    <td>USA</td>
    <td>LC T-Shirt</td>
    <td>10</td>
  </tr>
  <tr>
    <td>6</td>
    <td>3</td>
    <td>20</td>
    <td>2020-06-24</td>
    <td>2</td>
    <td>Moustafa</td>
    <td>Egypt</td>
    <td>LC T-Shirt</td>
    <td>10</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>30</td>
    <td>2020-07-08</td>
    <td>2</td>
    <td>Winston</td>
    <td>USA</td>
    <td>LC Book</td>
    <td>45</td>
  </tr>
  <tr>
    <td>7</td>
    <td>3</td>
    <td>30</td>
    <td>2020-06-25</td>
    <td>2</td>
    <td>Moustafa</td>
    <td>Egypt</td>
    <td>LC Book</td>
    <td>45</td>
  </tr>
  <tr>
    <td>9</td>
    <td>3</td>
    <td>30</td>
    <td>2020-05-08</td>
    <td>3</td>
    <td>Moustafa</td>
    <td>Egypt</td>
    <td>LC Book</td>
    <td>45</td>
  </tr>
  <tr>
    <td>5</td>
    <td>2</td>
    <td>40</td>
    <td>2020-07-01</td>
    <td>10</td>
    <td>Jonathan</td>
    <td>Peru</td>
    <td>LC Keychain</td>
    <td>2</td>
  </tr>
</table>
<br>

2. **Filtering by Year**: 
   
   The goal is to consider only those orders that occurred in a specific year, 2020 in this case. This step focuses our analysis on a defined time period, allowing us to exclude any data that doesn't pertain to the year of interest. It's a way of narrowing down the dataset to make the analysis more relevant and manageable.

   ```python
   merged_df["order_date"] = pd.to_datetime(merged_df["order_date"])
   merged_df = merged_df[merged_df["order_date"].dt.year == 2020]
   ```

3. **Grouping and Calculating Monthly Sums**: 
   
   Here, the aim is to understand customer behavior on a monthly basis. By grouping the data by customer and month, we can add up the product of `quantity` and `price` for each record to find out how much each customer spends per month. This is crucial for identifying those customers who meet certain spending thresholds in specific months. It's a method of aggregating the data to a level where it can be compared against our criteria (spending a certain amount in June and July).

   ```python
   grouped = merged_df.groupby(["customer_id", merged_df["order_date"].dt.month])
   monthly_sums = grouped.apply(lambda x: (x["quantity"] * x["price"]).sum()).unstack()
   ```

    > Note: The unstack() function is used to reshape the resulting series into a DataFrame where each column represents a month.

4. **Filtering Customers Based on Monthly Spending**:
   
   This step is about applying the specific criteria to identify the target customers. We are interested in customers who spent at least $100 in both June and July, and thus we filter accordingly.

   ```python
   valid_customers = monthly_sums[
        (monthly_sums[6] >= 100) & (monthly_sums[7] >= 100)
    ].index
   ```

5. **Resultant DataFrame**:
   
   Finally, the resultant DataFrame is created to present the information focusing on `customer_id` and `name` as requested in the problem statement.

   ```python
   result = customers[customers["customer_id"].isin(valid_customers)]
   ```

<table>
  <tr>
    <th>customer_id</th>
    <th>name</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Winston</td>
  </tr>
</table>
<br>


#### Implementation

<iframe src="https://leetcode.com/playground/2H9KxDFW/shared" frameBorder="0" width="100%" height="500" name="2H9KxDFW"></iframe>

---

## Database

### Approach: Group by `customer_id` and filter by spending sum

#### Intuition

Here's a breakdown of the logic:

1. **Joining Tables**: 

	The query starts by joining the `Customers` table with the `Orders` table using `customer_id`, and then the `Orders` table with the `Product` table using `product_id`. This joining operation combines the data from these tables into a single dataset. The purpose is to bring together relevant information such as customer details, order details (including the order date and quantity), and product details (including the price).

2. **Filtering by Year**: 

	The `WHERE YEAR(order_date) = 2020` clause filters this combined dataset to only include orders that were made in the year 2020. The goal is to focus the analysis on a specific year, thus narrowing down the data set to a relevant time period.

3. **Conditional Aggregation**: 

	The query then uses a `GROUP BY customer_id` clause to group the data by each customer. For each customer, the query calculates two conditional sums:
	  - The first sum calculates the total money spent by the customer in June 2020 (`MONTH(order_date) = 6`). It does this by multiplying the quantity of each product ordered by its price, but only for orders made in June. Orders from other months contribute 0 to this sum (as per the `IF` statement).
	  - The second sum calculates the total money spent by the customer in July 2020 (`MONTH(order_date) = 7`) in a similar manner.

4. **Applying Criteria with HAVING**: 

	After these sums are calculated for each customer, the `HAVING` clause filters out customers who don't meet the specified criteria. In this case, it retains only those customers who spent at least 100 units of currency in both June and July 2020. 


#### Implementation


```mysql []
SELECT 
  customer_id, 
  name 
FROM 
  Customers 
  JOIN Orders USING(customer_id) 
  JOIN Product USING(product_id) 
WHERE 
  YEAR(order_date)= 2020 
GROUP BY 
  customer_id 
HAVING 
  SUM(
      IF(MONTH(order_date) = 6, quantity, 0) * price
  ) >= 100 AND 
  SUM(
      IF(MONTH(order_date) = 7, quantity, 0) * price
  ) >= 100;
```