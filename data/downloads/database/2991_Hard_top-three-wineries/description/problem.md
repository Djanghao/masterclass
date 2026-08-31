# [2991. Top Three Wineries ](https://leetcode.com/problems/top-three-wineries/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Hard | 14 | 7 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Wineries`

```

+-------------+----------+
| Column Name | Type     |
+-------------+----------+
| id          | int      |
| country     | varchar  |
| points      | int      |
| winery      | varchar  |
+-------------+----------+
id is column of unique values for this table.
This table contains id, country, points, and winery.

```

Write a solution to find the **top three wineries** in **each** **country** based on their **total points**. If **multiple wineries** have the **same** total points, order them by `winery` name in **ascending** order. If there's **no second winery**, output 'No second winery,' and if there's **no third winery**, output 'No third winery.'

Return *the result table ordered by *`country`* in **ascending** order**.*

The result format is in the following example.

 

**Example 1:**

```

Input: 
Wineries table:
+-----+-----------+--------+-----------------+
| id  | country   | points | winery          | 
+-----+-----------+--------+-----------------+
| 103 | Australia | 84     | WhisperingPines | 
| 737 | Australia | 85     | GrapesGalore    |    
| 848 | Australia | 100    | HarmonyHill     | 
| 222 | Hungary   | 60     | MoonlitCellars  | 
| 116 | USA       | 47     | RoyalVines      | 
| 124 | USA       | 45     | Eagle&#39;sNest     | 
| 648 | India     | 69     | SunsetVines     | 
| 894 | USA       | 39     | RoyalVines      |  
| 677 | USA       | 9      | PacificCrest    |  
+-----+-----------+--------+-----------------+
Output: 
+-----------+---------------------+-------------------+----------------------+
| country   | top_winery          | second_winery     | third_winery         |
+-----------+---------------------+-------------------+----------------------+
| Australia | HarmonyHill (100)   | GrapesGalore (85) | WhisperingPines (84) |
| Hungary   | MoonlitCellars (60) | No second winery  | No third winery      | 
| India     | SunsetVines (69)    | No second winery  | No third winery      |  
| USA       | RoyalVines (86)     | Eagle&#39;sNest (45)  | PacificCrest (9)     | 
+-----------+---------------------+-------------------+----------------------+
Explanation
For Australia
 - HarmonyHill Winery accumulates the highest score of 100 points in Australia.
 - GrapesGalore Winery has a total of 85 points, securing the second-highest position in Australia.
 - WhisperingPines Winery has a total of 80 points, ranking as the third-highest.
For Hungary
 - MoonlitCellars is the sole winery, accruing 60 points, automatically making it the highest. There is no second or third winery.
For India
 - SunsetVines is the sole winery, earning 69 points, making it the top winery. There is no second or third winery.
For the USA
 - RoyalVines Wines accumulates a total of 47 + 39 = 86 points, claiming the highest position in the USA.
 - Eagle&#39;sNest has a total of 45 points, securing the second-highest position in the USA.
 - PacificCrest accumulates 9 points, ranking as the third-highest winery in the USA
Output table is ordered by country in ascending order.

```

---

**Links:** [Submissions](https://leetcode.com/problems/top-three-wineries/) | [Solutions](https://leetcode.com/problems/top-three-wineries/)
