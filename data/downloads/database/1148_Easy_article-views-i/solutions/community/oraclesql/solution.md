# ✅ 100% EASY || FAST 🔥|| CLEAN 4️⃣  SIMPLE SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 14
**Link:** [https://leetcode.com/problems/article-views-i/solutions/3857197/](https://leetcode.com/problems/article-views-i/solutions/3857197/)

---


IF THIS WILL BE HELPFUL TO YOU, PLEASE UPVOTE !
# Code1
```
/* Write your PL/SQL query statement below */
SELECT DISTINCT author_id AS id FROM Views WHERE

author_id = viewer_id ORDER BY author_id

```
# Code2
```
/* Write your PL/SQL query statement below */

SELECT DISTINCT author_id AS id FROM Views WHERE author_id IN 

(viewer_id) ORDER BY author_id

```
# Code3
```
/* Write your PL/SQL query statement below */

SELECT UNIQUE author_id AS id FROM Views WHERE author_id IN 

(viewer_id) ORDER BY author_id

```
# Code4
```
/* Write your PL/SQL query statement below */

 SELECT author_id AS id FROM Views WHERE author_id = viewer_id

 GROUP BY author_id ORDER BY author_id
```
![5kej8w.jpg](./images/0.jpeg)

