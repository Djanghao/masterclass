# DFS, easy solution

**Author:** drgavrikov
**Votes:** 4
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/5028904/](https://leetcode.com/problems/keys-and-rooms/solutions/5028904/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use DFS and check that all vertices are visited.

# Complexity
- Time complexity: $O(V + E)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(V)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```\u0421++ []
class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        size_t size = rooms.size();
        auto used = std::vector<bool>(size, false);

        std::function<void(int)> dfs = [&](int vertex) {
            used[vertex] = true;
            for (auto next: rooms[vertex]) {
                if (!used[next]) dfs(next); 
            }
        };
        dfs(0);

        return std::all_of(used.begin(), used.end(), [](bool v) { return v; });
    }
};
```
```Kotlin []
class Solution {
    fun canVisitAllRooms(rooms: List<List<Int>>): Boolean {
        val n = rooms.size
        val used = BooleanArray(n) { false }

        fun dfs(room: Int) {
            if (used[room]) return
            used[room] = true
            rooms[room].forEach { next -> dfs(next) }
        }
        dfs(0)
        return used.all { it }
    }
}
```

Most of my solutions are in\xA0[C++](https://github.com/drgavrikov/leetcode-cpp)\xA0and\xA0[Kotlin](https://github.com/drgavrikov/leetcode-jvm)\xA0on my\xA0[Github](https://github.com/drgavrikov).
