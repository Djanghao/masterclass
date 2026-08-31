# Easy solution using count and ordering

**Author:** elefant1805
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/solutions/5102658/](https://leetcode.com/problems/count-artist-occurrences-on-spotify-ranking-list/solutions/5102658/)

---



# Code
```
-- Write your PostgreSQL query statement below
SELECT artist, COUNT(artist) AS occurrences
FROM Spotify
GROUP BY artist
ORDER BY occurrences DESC, artist
```