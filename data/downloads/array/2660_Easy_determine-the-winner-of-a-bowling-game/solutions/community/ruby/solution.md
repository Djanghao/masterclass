# Simple Solution, one loop

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5202082/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5202082/)

---


# Code
```
# @param {Integer[]} player1
# @param {Integer[]} player2
# @return {Integer}
def is_winner(player1, player2)
    
    p1_pts = 0
    p2_pts = 0

    i = 0
    while i < player1.size
        if (i > 0 and player1[i-1] and player1[i-1] == 10) || (i > 1 and player1[i-2] and player1[i-2] == 10)
            p1_pts += (player1[i] * 2)
        else
            p1_pts += player1[i]
        end

        if (i > 0 and player2[i-1] and player2[i-1] == 10) || (i > 1 and player2[i-2] and player2[i-2] == 10)
            p2_pts += (player2[i] * 2)
        else
            p2_pts += player2[i]
        end

        i += 1
    end

    if p1_pts > p2_pts
        1
    elsif p2_pts > p1_pts
        2
    else
        0
    end
end
```