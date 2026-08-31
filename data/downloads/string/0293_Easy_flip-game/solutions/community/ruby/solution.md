# 1 line Ruby solution

**Author:** Gforce
**Votes:** 1
**Link:** [https://leetcode.com/problems/flip-game/solutions/73947/](https://leetcode.com/problems/flip-game/solutions/73947/)

---

    def generate_possible_next_moves(s)
      return (s.size-1).times.inject([]){|e,i| (s[i]=="+"&&s[i+1]=="+")?e+[s[0...i]+"--"+s[i+2..-1]]:e+[]}
    end