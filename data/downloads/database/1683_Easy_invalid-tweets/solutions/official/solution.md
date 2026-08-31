# Official Solution

**Link:** [https://leetcode.com/problems/invalid-tweets/solution/](https://leetcode.com/problems/invalid-tweets/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Filtering Rows

#### Algorithm

<table>
  <tr>
    <th>tweet_id</th>
    <th>content</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Vote for Biden</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Let us make America great again!</td>
  </tr>
</table>


This question requires determining if the tweet's length is greater than 15, which involves calculating the length of a string.

For a DataFrame, we can calculate the length of a string in a column using the [str.len()](https://pandas.pydata.org/docs/reference/api/pandas.Series.str.len.html) series method. This method is applied to the desired column of the DataFrame to retrieve the length of each string element in that column. 

We apply `str.len()` method on the `content` column. The result `is_valid` is a boolean Series which means each tweet is valid (with length greater than 15) or not.

```python
is_valid = tweets['content'].str.len() > 15
```

We will obtain the following Series:

```
0    False
1     True
Name: content, dtype: bool
```

<br>

Next, we use `tweets[is_valid]` to select rows from `tweets` using `is_valid` as a filter.

```python
df = tweets[is_valid]
```

Hence, we can obtain the following DataFrame `df`:

<table>
  <tr>
    <th>tweet_id</th>
    <th>content</th>
  </tr>
  <tr>
    <td>2</td>
    <td>Let us make America great again!</td>
  </tr>
</table>  

<br>

Note that we need to return the required columns. The complete code is as follows:


#### Implementation

<iframe src="https://leetcode.com/playground/jsdqNkrs/shared" frameBorder="0" width="100%" height="157" name="jsdqNkrs"></iframe>



<br>

## Database

### Approach: Filtering Rows

#### Algorithm

For a SQL table, the best function to use to count the number of characters used in a string is [CHAR_LENGTH(str)](https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_char-length), which returns the length of the string `str`.

The other common function, [LENGTH(str)](https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_length), also works for this question since the column `content` contains only English characters and no special characters. Otherwise, `LENGTH()` might return a different result because this function returns the length of the string `str` **in bytes** and certain characters contain more than 1 byte. 

Using character `'¥'` as an example: `CHAR_LENGTH()` returns 1 as the result, while  `LENGTH()` return 2 because this string contains 2 bytes. 

<table>
  <tr>
    <th>LENGTH('¥')</th>
    <th>CHAR_LENGTH('¥')</th>
  </tr>
  <tr>
    <td>2</td>
    <td>1</td>
  </tr>
</table>

<br>

#### Implementation

```sql
SELECT 
    tweet_id
FROM 
    tweets
WHERE 
    CHAR_LENGTH(content)> 15
```