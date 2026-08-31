# [MySQL] Step-by-step using GROUP_CONCAT, CONCAT and LIKE

**Author:** OhAanika
**Votes:** 35
**Link:** [https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/1982347/](https://leetcode.com/problems/finding-the-topic-of-each-post/solutions/1982347/)

---

1. We need to gather for each post, its `post_id` and corresponding `topic_id`s. So we start with the `Posts` table and join with the `Keywords` table. We choose `LEFT JOIN` since we do not want to lose any posts that have no corresponding `topic_id`s.

```
SELECT *
FROM Posts AS P
LEFT JOIN Keywords AS K
```

2. We attach a topic to a post if a `K.word` from that topic exists in `P.content`. The match can be case insensitive, so we can check for `LOWER(K.word)` in `LOWER(P.content)`. In MySQL, we do this with `LIKE` and by wrapping the keyword in `%` with `CONCAT`.

```
SELECT *
FROM Posts AS P
LEFT JOIN Keywords AS K
ON LOWER(P.content) LIKE CONCAT('%', LOWER(K.word), '%')
```

3. However, we don't want to match the keyword if it exists in a substring of a word in `P.content` (e.g. 'war' can match with 'i went to war', but should not match with 'there was a warning'). So we need to wrap the keyword in spaces, and in case the keyword exists at the start or end of the content, we need to wrap the content in spaces as well. Again, we use `CONCAT`.

```
SELECT *
FROM Posts AS P
LEFT JOIN Keywords AS K
ON CONCAT(' ', LOWER(P.content), ' ') LIKE CONCAT('% ', LOWER(K.word), ' %')
```

4. Might help run your code with the given test case to see how far you've come! You'll see that for each keyword in the content of a post, we have a separate row for that post. So we need to group by `P.post_id` and concatenate the `K.topic_id`s somehow. We can use `GROUP_CONCAT` around `K.topic_id`, which has a comma as a default separator.

```
SELECT 
    P.post_id, 
    GROUP_CONCAT(K.topic_id)
FROM Posts AS P
LEFT JOIN Keywords AS K
ON CONCAT(' ', LOWER(P.content), ' ') LIKE CONCAT('% ', LOWER(K.word), ' %')
GROUP BY P.post_id
```

5. We need to make some edits to this topic column. 
	* What if we have two keywords from the same topic? Then that `K.topic_id` would repeat itself. So we need to select `DISTINCT K.topic_id`
	* We are also required to order by `K.topic_id` before we concatenate.
	* What if we have no `K.topic_ids`? We should label these as "Ambiguous!". We can do this when the column value is null with `IFNULL`.
	* And don't forget to relabel this column as 'topic'!

```
SELECT 
    P.post_id, 
    IFNULL(GROUP_CONCAT(DISTINCT K.topic_id ORDER BY K.topic_id), 'Ambiguous!') AS topic
FROM Posts AS P
LEFT JOIN Keywords AS K
ON CONCAT(' ', LOWER(P.content), ' ') LIKE CONCAT('% ', LOWER(K.word), ' %')
GROUP BY P.post_id
```