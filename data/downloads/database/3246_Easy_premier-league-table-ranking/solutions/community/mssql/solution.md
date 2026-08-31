# Very Easy MS SQL Server Solution using RANK()

**Author:** Vaishnav-Dahake
**Votes:** 0
**Link:** [https://leetcode.com/problems/premier-league-table-ranking/solutions/5819793/](https://leetcode.com/problems/premier-league-table-ranking/solutions/5819793/)

---

# Code
```mssql []
SELECT team_id , team_name, (wins * 3 + draws * 1 + losses * 0) as "points",
RANK() OVER (ORDER BY (wins * 3 + draws * 1 + losses * 0) desc) as "position"
FROM TeamStats
ORDER BY points desc , team_name asc
```