# 6 lines Python, 8 lines Ruby

**Author:** StefanPochmann
**Votes:** 22
**Link:** [https://leetcode.com/problems/dungeon-game/solutions/52792/](https://leetcode.com/problems/dungeon-game/solutions/52792/)

---

Just some DP.

---

**Python**

    def calculateMinimumHP(self, dungeon):
        n = len(dungeon[0])
        need = [2**31] * (n-1) + [1]
        for row in dungeon[::-1]:
            for j in range(n)[::-1]:
                need[j] = max(min(need[j:j+2]) - row[j], 1)
        return need[0]

Got accepted in 52 ms, faster than all other recent Python submissions (best was 56 ms, achieved by 5.7692%).

---

**Ruby**

    def calculate_minimum_hp(dungeon)
        n = dungeon[0].size - 1
        need = [1/0.0] * n + [1]
        dungeon.reverse_each do |row|
            n.downto(0) do |j|
                need[j] = [need[j..j+1].min - row[j], 1].max
            end
        end
        need[0]
    end