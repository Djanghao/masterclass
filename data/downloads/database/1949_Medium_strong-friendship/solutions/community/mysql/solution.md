# MySQL: Bad test case? Bad description? [Rebutted -> must be pair of friends]

**Author:** farlowdw
**Votes:** 24
**Link:** [https://leetcode.com/problems/strong-friendship/solutions/1364955/](https://leetcode.com/problems/strong-friendship/solutions/1364955/)

---

**Update:** Special thanks to @jianianjin for clearing up my misunderstanding (keeping this post up in case anyone else can learn from my mistakes):

> "A friendship between a **pair of friends** `x` and `y` is strong if `x` and `y` have at least three common friends." The problem specifies that a strong friendship only exists between `a` and `b` only if `a` and `b` are friends by themselves. In this case `1` and `12` are not friends thus should not be included.

The following patch (maybe not the most performant one!) with `WHERE EXISTS` fixes my solution, and it is now marked as accepted:

```
WITH all_friendships AS (
  SELECT F1.user1_id AS friend, F1.user2_id AS friend_with FROM Friendship F1
  UNION ALL
  SELECT F2.user2_id AS friend, F2.user1_id AS friend_with FROM Friendship F2
)
SELECT
  AF1.friend AS user1_id,
  AF2.friend AS user2_id,
  COUNT(*) AS common_friend
FROM
  all_friendships AF1
  INNER JOIN all_friendships AF2
    ON AF1.friend_with = AF2.friend_with
      AND AF1.friend < AF2.friend
WHERE
  EXISTS (SELECT 1 FROM Friendship F WHERE F.user1_id = AF1.friend AND F.user2_id = AF2.friend)
GROUP BY
  AF1.friend, AF2.friend
HAVING
  common_friend >= 3;

```

**Attempted solution:**

```
WITH all_friendships AS (
  SELECT F1.user1_id AS friend, F1.user2_id AS friend_with FROM Friendship F1
  UNION ALL
  SELECT F2.user2_id AS friend, F2.user1_id AS friend_with FROM Friendship F2
)
SELECT
  AF1.friend AS user1_id,
  AF2.friend AS user2_id,
  COUNT(*) AS common_friend
FROM
  all_friendships AF1
  INNER JOIN all_friendships AF2
    ON AF1.friend_with = AF2.friend_with
      AND AF1.friend < AF2.friend
GROUP BY
  AF1.friend, AF2.friend
HAVING
  common_friend >= 3;
```

---

**Failed test case:**

This passes the first two test cases but fails on the following test case:

Input: `{"headers":{"Friendship":["user1_id","user2_id"]},"rows":{"Friendship":[[4,12],[4,13],[1,4],[4,18],[4,6],[12,13],[2,12],[3,12],[7,12],[13,18],[1,2],[1,7],[2,7],[3,6],[6,18]]}}`

My output: `{"headers": ["user1_id", "user2_id", "common_friend"], "values": [[1, 12, 3]]}`

Expected output: `{"headers":["user1_id","user2_id","common_friend"],"values":[]}`

---

**Attempted understanding:** I really don't understand this problem. Perhaps I am completely misreading it. Friendship should be *bidirectional*. If you look at the input for the test case above, then we end up with the following unidirectional breakdown in terms of friends:

- **`4`**: `12`, `13`, `18`, `6`
- **`1`**: `4`, `2`, `7`
- **`12`**: `13`,
- **`2`**: `12`, `7`
- **`3`**: `12`, `6`
- **`7`**: `12`
- **`13`**: `18`
- **`6`**: `18`

*Bidirectionally*, if we organize the friendships above, then we have the following:

- **`1`**: `2`, `4`, `7`
- **`2`**: `1`, `7`, `12`
- **`3`**: `6`, `12`
- **`4`**: `1`, `6`, `12`, `13`, `18`
- **`6`**: `3`, `4`, `18`
- **`7`**: `1`, `2`, `12`
- **`12`**: `2`, `3`, `4`, `7`
- **`13`**: `4`, `12`
- **`18`**: `4`, `6`, `13`

Simple manual inspection shows that users `1` and `12` have friends `2`, `4`, and `7` in common.