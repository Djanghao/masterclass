# [2738. Count Occurrences in Text](https://leetcode.com/problems/count-occurrences-in-text/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 27 | 48 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Files`

```

+-------------+---------+
| Column Name | Type    |
+-- ----------+---------+
| file_name   | varchar |
| content     | text    |
+-------------+---------+
file_name is the column with unique values of this table. 
Each row contains file_name and the content of that file.

```

Write a solution to find the number of files that have at least one occurrence of the words **'bull'** and **'bear'** as a **standalone word**, respectively, disregarding any instances where it appears without space on either side (e.g. 'bullet', 'bears', 'bull.', or 'bear' at the beginning or end of a sentence will **not** be considered) 

Return *the word 'bull' and 'bear' along with the corresponding number of occurrences in **any order.***

The result format is in the following example.

 

**Example 1:**

```

Input:&nbsp;
Files table:
+------------+----------------------------------------------------------------------------------+
| file_name  | content                                                                         | 
+------------+----------------------------------------------------------------------------------+
| draft1.txt | The stock exchange predicts a bull market which would make many investors happy. | 
| draft2.txt | The stock exchange predicts a bull market which would make many investors happy, |
|&nbsp;           | but analysts warn of possibility of too much optimism and that in fact we are    |
|&nbsp;           | awaiting a bear market.                                                          | 
| draft3.txt | The stock exchange predicts a bull market which would make many investors happy, |
|&nbsp;           | but analysts warn of possibility of too much optimism and that in fact we are    |
|&nbsp;           | awaiting a bear market. As always predicting the future market is an uncertain   |
|            | game and all investors should follow their instincts and best practices.         | 
+------------+----------------------------------------------------------------------------------+
Output:&nbsp;
+------+-------+
| word | count | &nbsp;
+------+-------+
| bull |&nbsp;3     |&nbsp;
| bear |&nbsp;2     | 
+------+-------+
Explanation:&nbsp;
- The word &quot;bull&quot; appears 1 time in &quot;draft1.txt&quot;, 1 time in &quot;draft2.txt&quot;, and 1 time in &quot;draft3.txt&quot;. Therefore, the total number of occurrences for the word &quot;bull&quot; is 3.
- The word &quot;bear&quot; appears 1 time in &quot;draft2.txt&quot;, and 1 time in &quot;draft3.txt&quot;. Therefore, the total number of occurrences for the word &quot;bear&quot; is 2.


```

---

**Links:** [Submissions](https://leetcode.com/problems/count-occurrences-in-text/) | [Solutions](https://leetcode.com/problems/count-occurrences-in-text/)
