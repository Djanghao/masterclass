# Solution for all SQL types - Split string into rows, apply operations, aggregate

**Author:** adamrbeier
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-letter-capitalization/solutions/6079821/](https://leetcode.com/problems/first-letter-capitalization/solutions/6079821/)

---

This was a very challenging and rewarding SQL problem.  Sometimes the different flavors of SQL have minimal differences, here we're encountering some serious discrepancies.  I first learned Oracle SQL, which offers some functionality around recursive and hierarchal queries (CONNECT BY), which to my knowledge is not present in the other SQL types.  I find it a good challenge to solve LeetCode data problems in all of the traditional SQL types, and for the other 3 you'll see a recursive CTE process utilized.

In coding, a key thing is to understand the process and approach, and then syntax can easily be looked up.  It's also very helpful to understand pieces of problems that have been solved before so that those can be leveraged.  Here are some past problems and concepts that I used as reference here in solving this problem:
- [3087. Find Trending Hashtags](https://leetcode.com/problems/find-trending-hashtags/description/) and [my solution](https://leetcode.com/problems/find-trending-hashtags/solutions/4890308/oracle-solution-regexp-substr-connect-by-to-parse-tweets/) - process to split a delimited string in a single field into multiple rows containing the token words
- [3236. CEO Subordinate Hierarchy](https://leetcode.com/problems/ceo-subordinate-hierarchy/description/) and [my solution](https://leetcode.com/problems/ceo-subordinate-hierarchy/) - recursive/hierarchal queries
- [3198. Find Cities in Each State](https://leetcode.com/problems/find-cities-in-each-state/description/) and [my solution](https://leetcode.com/problems/find-cities-in-each-state/solutions/5364270/solutions-for-all-4-sql-variants-listagg-string_agg-group_concat/) - reference for string aggregation and the various syntax for each SQL type

# Approach
At an extremely high level, the process to attack this problem is very straightforward:
\\- Implement a process to separate the space-delimited string `content_text` into a table, with a single row per token word
\\- Once each word is present on a single field, use `upper()`, `lower()` and substring operations to convert each word into the proper formatting, with the first character capitalized and subsequent letters lowercase
\\- Aggregate the formatted words using string aggregation, grouping by the original content (`content_text` and `content_id` as per the requirements)

The code for each SQL type is in this solution, that would be the most helpful (I believe) but I'll add some more color here on how that process is implemented:
\\- The first step is a `connect by` query in Oracle and a recursive CTE in MySQL, MSSQL, and Postgres.  The delimiter is a space, and one can adapt this or boilerplate code online to create the CTE/process that splits a string into token words.  As part of this process, a `level` variable will be created which we'll call `word_seq`, indicating the position of the token word in the overall string.  This will be used to correctly aggregate the tokens into a full string once the words have been formatted.  We'll call this CTE `content_sep_words`.
\\- Once the strings have been split, the next CTE is `content_sep_words_capitalized` and this CTE isn't much more than a select of `content_sep_words`, with string operations applied to the original word, to produce the proper formatting.  This was done here via `substr()` (Oracle) or `substring()` (the others).  Take the first character and apply `upper()`, take the remaining characters and apply `lower()`, then concatenate that first character back to the rest to get `formatted _word`.
\\- The final select is also pretty straightforward, selecting `content_id` and `content_text` (renaming to `original_text`) from the previous CTE `content_sep_words_capitalized`, and using the proper string aggregation function to aggregate the formatted words.  The grouping is by the orignal content, with `content_text` and `content_id` being that grouping, and the ordering within each group is by the `word_seq`, the word sequence in the original content text.  Here's those functions per language:
\\-\\- Oracle: listagg()
\\-\\- MySQL: group_concat()
\\-\\- MSSQL: string_agg()
\\-\\- Postgres: string_agg()
There's syntactical discrepancies for the inputs, grouping and ordering to those functions, but they're minor and can easily be referenced - If you're in a position to aggregate the properly formatted words, then you're in great shape.

# Code
```Oracle []
/* Write your PL/SQL query statement below */

with content_sep_words as (
  select 
    user_content.content_id,
    user_content.content_text,
    lines.column_value as word_seq,
    trim(
      regexp_substr(
        content_text, '[^ ]+', 1, lines.column_value
      )
    ) as word
  from 
    user_content, 
    table(
      cast(
        multiset(
          select 
            level
          from 
            dual connect by (content_id = PRIOR content_id
            AND prior sys_guid() is not null
            and level <= regexp_count(content_text, ' ')+ 1)
        ) as sys.odciNumberList
      )
    ) lines
),
content_sep_words_capitalized as (
    select content_id,
    content_text,
    word_seq,
    word,
    upper(substr(WORD, 1, 1)) || lower(substr(WORD, 2, 1000)) as formatted_word
    from content_sep_words
)
select
content_id,
content_text as original_text,
LISTAGG(formatted_word, ' ') WITHIN GROUP (ORDER BY word_seq) as converted_text
from content_sep_words_capitalized
group by content_id, content_text
order by 1
```
```MySQL []
# Write your MySQL query statement below

WITH RECURSIVE content_sep_words AS (
    SELECT
        content_id,
        content_text,
        SUBSTRING_INDEX(content_text, ' ', 1) AS word,
        SUBSTRING(content_text, INSTR(content_text, ' ') + 1, 1000) AS remaining,
        1 AS level
        from user_content
    UNION ALL
    SELECT 
        content_id,
        content_text,
        SUBSTRING_INDEX(remaining, ' ', 1),
        IF(INSTR(remaining, ' ') = 0, '', SUBSTRING(remaining, INSTR(remaining, ' ') + 1, 1000)),
        level + 1
    FROM content_sep_words
    WHERE remaining != ''
),
content_sep_words_capitalized as (
    select content_id,
    content_text,
    level as word_seq,
    word,
    CONCAT(upper(substring(WORD, 1, 1)), lower(substring(WORD, 2, 1000))) as formatted_word
    from content_sep_words
)
select
content_id,
content_text as original_text,
group_concat(formatted_word order by word_seq separator ' ') as converted_text
from content_sep_words_capitalized
group by 1, 2
order by 1
```
```MSSQL []
/* Write your T-SQL query statement below */

WITH content_sep_words AS (
    SELECT
        content_id,
        content_text,
        --SUBSTRING_INDEX(content_text, ' ', 1) AS word,
        --SUBSTRING(content_text, INSTR(content_text, ' ') + 1, 1000) AS remaining,
        SUBSTRING(content_text, 1, CHARINDEX(' ', content_text)) AS word,
        SUBSTRING(content_text, CHARINDEX(' ', content_text) + 1, 1000) as remaining,
        1 AS level
        from user_content
    UNION ALL
    SELECT 
        content_id,
        content_text,
        --SUBSTRING_INDEX(remaining, ' ', 1),
        --IF(INSTR(remaining, ' ') = 0, '', SUBSTRING(remaining, INSTR(remaining, ' ') + 1, 1000)),
        CASE WHEN CHARINDEX(' ', remaining) = 0 then remaining
        else SUBSTRING(remaining, 1, CHARINDEX(' ', remaining)) end AS word,
        CASE WHEN CHARINDEX(' ', remaining) = 0 then ''
        ELSE SUBSTRING(remaining, CHARINDEX(' ', remaining) + 1, 1000) END as remaining,
        level + 1
    FROM content_sep_words
    WHERE remaining != ''
),
content_sep_words_capitalized as (
    select content_id,
    content_text,
    level as word_seq,
    word,
    CONCAT(upper(substring(WORD, 1, 1)), lower(substring(WORD, 2, 1000))) as formatted_word
    from content_sep_words
)
select
content_id,
content_text as original_text,
STRING_AGG(formatted_word, '') within group (order by word_seq) as converted_text
from content_sep_words_capitalized
group by content_id, content_text
order by 1
```
```Postgres []
-- Write your PostgreSQL query statement below

WITH RECURSIVE content_sep_words AS (
    SELECT
        content_id,
        content_text,
        --SUBSTRING_INDEX(content_text, ' ', 1) AS word,
        --SUBSTRING(content_text, INSTR(content_text, ' ') + 1, 1000) AS remaining,
        SUBSTRING(content_text, 1, POSITION(' ' IN content_text)) AS word,
        SUBSTRING(content_text, POSITION(' ' IN content_text) + 1, 1000) as remaining,
        1 AS level
        from user_content
    UNION ALL
    SELECT 
        content_id,
        content_text,
        --SUBSTRING_INDEX(remaining, ' ', 1),
        --IF(INSTR(remaining, ' ') = 0, '', SUBSTRING(remaining, INSTR(remaining, ' ') + 1, 1000)),
        CASE WHEN POSITION(' ' IN remaining) = 0 then remaining
        else SUBSTRING(remaining, 1, POSITION(' ' IN remaining)) end AS word,
        CASE WHEN POSITION(' ' IN remaining) = 0 then ''
        ELSE SUBSTRING(remaining, POSITION(' ' IN remaining) + 1, 1000) END as remaining,
        level + 1
    FROM content_sep_words
    WHERE remaining != ''
),
content_sep_words_capitalized as (
    select content_id,
    content_text,
    level as word_seq,
    word,
    CONCAT(upper(substring(WORD, 1, 1)), lower(substring(WORD, 2, 1000))) as formatted_word
    from content_sep_words
)
select
content_id,
content_text as original_text,
STRING_AGG(formatted_word, '' order by word_seq) as converted_text
from content_sep_words_capitalized
group by 1, 2
order by 1
```