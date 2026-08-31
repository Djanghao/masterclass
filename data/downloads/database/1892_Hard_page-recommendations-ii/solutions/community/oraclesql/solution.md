# Oracle solution - CTE with all friend likes, then use NOT EXISTS

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/page-recommendations-ii/solutions/3573495/](https://leetcode.com/problems/page-recommendations-ii/solutions/3573495/)

---

# Approach
The title provides a good summary of the solution approach.  The main CTE of user_friend_likes joins the two tables of Friendship and Likes to determine all likes by friends of a given user.  The CTE has 3 columns, the user_id (main user), the friend user_id, and the liked page id.  Due to how the Friendship table works, we need to treat Friendship.user1_id as the main user and joing the likes of Friendship.user2_id to that, and also treat Friendship.user2_id as the main user and joing the likes of Friendship.user1_id.  This is why the CTE is the UNION of two queries.

The main query is a simple aggregation of the CTE, with the removal of the "main user likes."  This removal is done with a NOT EXISTS query, remove likes from the "main user" using the CTE user id and the page id.  With the where clause in place, in the select, aggregate on the main user id and the page, and count the "friend ids."

# Code
```
/* Write your PL/SQL query statement below */
with user_friend_likes as
(select F.user1_id, F.user2_id, L.page_id
from Friendship F, Likes L
where F.user2_id = L.user_id
UNION
select F.user2_id, F.user1_id, L.page_id
from Friendship F, Likes L
where F.user1_id = L.user_id
)
select UFL.user1_id user_id, UFL.page_id, count(UFL.user2_id) as friends_likes
from user_friend_likes UFL
where NOT EXISTS (select * from Likes LX
where LX.page_id = UFL.page_id
and LX.user_id = UFL.user1_id)
group by UFL.user1_id, UFL.page_id
```