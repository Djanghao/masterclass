# EXPLAINED: Clear and Simple Solution (No CASE statement)

**Author:** shreyshrey
**Votes:** 231
**Link:** [https://leetcode.com/problems/create-a-session-bar-chart/solutions/887107/](https://leetcode.com/problems/create-a-session-bar-chart/solutions/887107/)

---

**TL;DR**
Here's the solution:

(Logic explained below)

```
WITH cte AS (
    SELECT '[0-5>' AS bin,  0 AS min_duration, 5*60 AS max_duration
    UNION ALL
    SELECT '[5-10>' AS bin,  5*60 AS min_duration, 10*60 AS max_duration
    UNION ALL
    SELECT '[10-15>' AS bin, 10*60 AS min_duration, 15*60 AS max_duration
    UNION ALL
    SELECT '15 or more' AS bin,  15*60 as min_duration, 2147483647 AS max_duration
    )

SELECT cte.bin, COUNT(s.session_id) AS total
FROM Sessions s
RIGHT JOIN cte 
		ON s.duration >= min_duration 
        AND s.duration < max_duration				 
GROUP BY cte.bin;
```

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

For those of you interested in understanding the logic:

**BASIC IDEA**
First of all, I don't understand why this problem is labelled as 'Easy'. 
This is definitely a 'Medium' to 'Hard' level of difficulty problem. 
 
 Why? Because there are many facets here:

1.  We need to convert seconds to minutes
2.  We need to bin these converted minutes while also making sure of the upper bound
3.  [WORST PART] - there's a missing bin since there is no record with a duration between 10 and 15, so we need to ensure that the missing bin is also counted (as a 0)

For the 3rd point above, note that the missing session is missing from the base table, so we can't use a ```COALESCE``` type of function directly to add as a 0 if there's a ```NULL``` value, since there won't be any NULLs in this case. 

So, we'll first need to create our own "table" that can ensure that missing bins show up as a ```NULL``` at least and we can handle those later. 

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

**STEPS**

**Step 1:** Create a temporary "table" of bins
Note: This is not an actual table, it's a **common table expression**  (CTE) and is traditionally given the alias ```cte```

```
-- WITH cte AS (
    SELECT '[0-5>' AS bin
    UNION ALL
    SELECT '[5-10>' AS bin
    UNION ALL
    SELECT '[10-15>' AS bin
    UNION ALL
    SELECT '15 or more' AS bin
--     )
```

Go ahead, test this query out, it's perfectly legal.
(Note that ```WITH cte AS ( )``` has been commented out for running the query as is).
We don't strictly need tables stored in the database to return a query, a mere ```SELECT``` statement will do. 
For example, ```SELECT getdate() ;```  will return the current date and time

```UNION ALL``` helps us take each separate query output and get one unit. 
Note that for this to work, we must provide the same aliases for each query, or the union won't work. 

***An Aside:*** CTEs are super useful. Try to use them in place of sub-queries to gain practice. 

**Step 2:** Add columns to make a ```JOIN```

Did you notice something above?
How on earth do we **join** this ```cte``` with the ```Sessions``` table?

There are other solutions in the Discuss page which incorporate this info in other ways, but I like to **keep things simple and straightforward**, while also reducing the number of joins. 

So, we will add columns that will help us do a smooth join while preserving the requirements of the problem.  
Think about the columns in the ```Sessions``` table. 
The only column which corresponds to the ```cte``` above is ```duration``` and it is of type ```int```.

It is essential to understand the data type of this ```duration``` column, since that will tell us the _maximum_ possible value (integer) this column can take. 
We will use it to our advantage. 

A column of type ```int``` means that the range of integral values it can take lie between -2^31 (-2,147,483,648) to 2^31-1 (2,147,483,647) (both inclusive). 
So, we know the maximum possible duration (in seconds) in this table. 

Also, since I'm a little lazy, I do not want to do the whole divide the seconds by 60 to get minutes while also converting to float (by multiplying with ```1.0```) shebang. 
As I said before, we'll keep things simple. 

```
WITH cte AS (
    SELECT '[0-5>' AS bin,  0 AS min_duration, 5*60 AS max_duration
    UNION ALL
    SELECT '[5-10>' AS bin,  5*60 AS min_duration, 10*60 AS max_duration
    UNION ALL
    SELECT '[10-15>' AS bin, 10*60 AS min_duration, 15*60 AS max_duration
    UNION ALL
    SELECT '15 or more' AS bin,  15*60 as min_duration, 2147483647 AS max_duration -- # taking max possible value 
    )
```

**Step 3:** Do the join

Now, we don't need to worry about the second to minute conversion or missing out un-recorded bins. 
We can safely join this table based on the binning constraints. 
We'll make a join based on two conditions, the upper and lower bounds - this will also simultaneously handle the inclusivity and exclusivity of duration. 

```
SELECT cte.bin, COUNT(s.session_id) AS total
FROM Sessions s
RIGHT JOIN cte 
		ON s.duration >= min_duration 
        AND s.duration < max_duration
GROUP BY cte.bin;
```

Finally, putting it all together:

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

**SOLUTION**

```
WITH cte AS (
    SELECT '[0-5>' AS bin,  0 AS min_duration, 5*60 AS max_duration
    UNION ALL
    SELECT '[5-10>' AS bin,  5*60 AS min_duration, 10*60 AS max_duration
    UNION ALL
    SELECT '[10-15>' AS bin, 10*60 AS min_duration, 15*60 AS max_duration
    UNION ALL
    SELECT '15 or more' AS bin,  15*60 as min_duration, 2147483647 AS max_duration
    )

SELECT cte.bin, COUNT(s.session_id) AS total
FROM Sessions s
RIGHT JOIN cte 
		ON s.duration >= min_duration 
        AND s.duration < max_duration				 
GROUP BY cte.bin;
```

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------

**A shameless plug:**
I do enjoy writing detailed explanations of solutions, but I too (like you probably are) am looking for a job right now and am a little short on time. 
So, **please give this solution an upvote** if you would like to see more of these for other problems. Thanks! :)