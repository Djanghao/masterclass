# Very Easy MS SQL Server Solution using COUNT()

**Author:** Vaishnav-Dahake
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/solutions/4357402/](https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/solutions/4357402/)

---

# Code
```
select artist , count(artist) as "occurrences"
from Spotify
group by artist
order by 2 desc , 1 asc
```