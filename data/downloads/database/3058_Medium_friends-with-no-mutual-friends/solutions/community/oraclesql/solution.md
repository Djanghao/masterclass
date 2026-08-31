# Oracle solution - self join to determine mutual friends

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/4782429/](https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/4782429/)

---

# Approach
This solution begins with a CTE `all_friends_comb` which is a union of (user_id1, user_id2) and (user_id2, user_id1) pairs.

The next CTE is `mutual_friends` and it self-joins the previous CTE `all_friends_comb` to determine mutual friends.  With the two instances of `all_friends_comb` aliased as AFC1 and AFC2, join `AFC1.F2 = AFC2.F1` and 
`AFC1.F1 <> AFC2.F2`.  The common values in AFC1.F2 and AFC2.F1 indicate the mutual friend, and the pair (AFC1.F1, AFC2.F2) is a friend pair that needs to be excluded because they share a mutual friend.

Now comes the final select, which is a simple select from the original `Friends` table, using a `where not exists` to filter out records (user_id1 and user_id2 pairs) that share a mutual friend.  As noted above, the `mutual_friends` CTE contains pairs (F1, F2) that share a mutual friend, so if a (user_id1, user_id2) pair exists in `mutual_friends`, then it should be excluded, hence the `where not exists`.  Add in the ordering by user_id1 and user_id2.

# Code
```
/* Write your PL/SQL query statement below */
with all_friends_comb as (
    select user_id1 as F1, user_id2 as F2
    from Friends
    UNION ALL
    select user_id2 as F1, user_id1 as F2
    from Friends
),
mutual_friends as (
    select AFC1.F1, AFC2.F2
    from all_friends_comb AFC1,
    all_friends_comb AFC2
    where AFC1.F2 = AFC2.F1
    and AFC1.F1 <> AFC2.F2
)
select user_id1, user_id2
from Friends F
where not exists (
    select * from mutual_friends
    where F.user_id1 = mutual_friends.F1
    and F.user_id2 = mutual_friends.F2
)
order by 1, 2
```