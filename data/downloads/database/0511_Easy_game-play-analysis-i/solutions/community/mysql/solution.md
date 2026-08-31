# Simple MySQL Solution

**Author:** ProfessionalMonk
**Votes:** 202
**Link:** [https://leetcode.com/problems/game-play-analysis-i/solutions/3857840/](https://leetcode.com/problems/game-play-analysis-i/solutions/3857840/)

---


```
select player_id,min(event_date) as first_login
from Activity
group by player_id
```
![1271c6fe-345b-4f3d-959e-d13e791111d7_1677726484.8832572.jpeg](./images/0.jpeg)
