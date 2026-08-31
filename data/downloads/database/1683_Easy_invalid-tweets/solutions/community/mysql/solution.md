# Solution With Extended Problem Statement

**Author:** Ahmed_Abdelmoneim
**Votes:** 264
**Link:** [https://leetcode.com/problems/invalid-tweets/solutions/5350728/](https://leetcode.com/problems/invalid-tweets/solutions/5350728/)

---

# Initial Problem Statement:
The task is to find the IDs of invalid tweets where the number of characters in the content exceeds 15.
# Solution
```
SELECT tweet_id FROM Tweets
WHERE LENGTH(content) > 15;
```
# Extended Problem Statement:
If the problem statement is modified such that a tweet is considered invalid if it contains more than 2 words, the following solution can be used:
# Modified Solution:
```
SELECT tweet_id
FROM Tweets
WHERE LENGTH(content) - LENGTH(REPLACE(content, ' ', '')) + 1 > 2;
```
- LENGTH(content): This returns the total length of the content
- REPLACE(content, ' ', ''): This removes all spaces from the content.
- LENGTH(content) - LENGTH(REPLACE(content, ' ', '')): This calculates the number of spaces in the content
- Adding 1 to the number of spaces gives the number of words.
- The condition LENGTH(content) - LENGTH(REPLACE(content, ' ', '')) + 1 > 2 checks if the number of words is greater than 2.

# Don't forget to upvote plz
![up vote catjpg.jpg](./images/0.jpeg)

