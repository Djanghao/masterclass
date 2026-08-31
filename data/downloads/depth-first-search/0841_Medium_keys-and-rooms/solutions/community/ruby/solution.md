# [Ruby] DFS

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/1117393/](https://leetcode.com/problems/keys-and-rooms/solutions/1117393/)

---

```
# @param {Integer[][]} rooms
# @return {Boolean}
def can_visit_all_rooms(rooms)
	seen = [0]*rooms.count
	seen[0] = 1
	stack = rooms[0]

  until stack.empty?
		r = stack.pop
		seen[r] = 1
		rooms[r].each do |k|
			stack << k if seen[k] == 0
    end
  end

	seen.find{|r| r == 0}.nil?
end
```