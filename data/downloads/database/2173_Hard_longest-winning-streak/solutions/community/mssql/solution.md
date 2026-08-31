# step by step

**Author:** newbie919
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-winning-streak/solutions/5287089/](https://leetcode.com/problems/longest-winning-streak/solutions/5287089/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. first we rank by player and then rank by player and result
2. in cte2 we exclude result != win and get the counts for each streak (cnt-wincnt)

| player_id | match_day  | result | cnt | wincnt |
| --------- | ---------- | ------ | --- | ------ |
| 1         | 2022-01-17 | Win    | 1   | 1      |
| 1         | 2022-01-18 | Win    | 2   | 2      |
| 1         | 2022-01-25 | Win    | 3   | 3      |
| 1         | 2022-01-31 | Draw   | 4   | 1      |
| 1         | 2022-02-08 | Win    | 5   | 4      |
| 2         | 2022-02-06 | Lose   | 1   | 1      |
| 2         | 2022-02-08 | Lose   | 2   | 2      |
| 3         | 2022-03-30 | Win    | 1   | 1      |


| player_id | cnt-wincnt |
| --------- | ---------- |
| 1         | 0          |
| 1         | 0          |
| 1         | 0          |
| 1         | 1          |
| 3         | 0          |
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your T-SQL query statement below */
with cte1 as(
    select player_id, match_day, result, 
    row_number() over (partition by player_id order by match_day) as cnt, 
    row_number() over (partition by player_id,result order by match_day) as wincnt 
    from matches
),
cte2 as(
    select player_id, count(*) as streak from cte1
    where result='win'
    group by player_id,cnt-wincnt
)

select distinct m.player_id,isnull(max(c2.streak) over (partition by c2.player_id),0) as longest_streak  from matches m
left join cte2 c2 on m.player_id=c2.player_id
```