# Medium 2747

**Author:** Farruhbek
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-zero-request-servers/solutions/5748285/](https://leetcode.com/problems/count-zero-request-servers/solutions/5748285/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func countServers(n int, logs [][]int, x int, queries []int) []int {
	// Natijalarni tayyorlash
	result := make([]int, len(queries))

	// Loglarni vaqt bo'yicha tartiblash
	sort.Slice(logs, func(i, j int) bool {
		return logs[i][1] < logs[j][1]
	})

	// So'rovlar uchun asl tartibni saqlash uchun indekslash
	queryWithIndex := make([][2]int, len(queries))
	for i, query := range queries {
		queryWithIndex[i] = [2]int{query, i}
	}

	// So'rovlarni tartiblash
	sort.Slice(queryWithIndex, func(i, j int) bool {
		return queryWithIndex[i][0] < queryWithIndex[j][0]
	})

	// Faol serverlarni sanash uchun qo'shimcha ko'rsatkichlar
	activeServers := make(map[int]int) // server_id -> so'nggi faollik vaqti
	start, end := 0, 0

	// Har bir so'rov uchun ishlash
	for _, query := range queryWithIndex {
		q := query[0]
		idx := query[1]
		startTime := q - x

		// End ko'rsatkichini faqat kerakli joygacha olib boramiz
		for end < len(logs) && logs[end][1] <= q {
			serverID := logs[end][0]
			activeServers[serverID] = logs[end][1]
			end++
		}

		// Start ko'rsatkichini faqat kerakli joygacha olib kelamiz
		for start < len(logs) && logs[start][1] < startTime {
			serverID := logs[start][0]
			if activeServers[serverID] == logs[start][1] {
				delete(activeServers, serverID)
			}
			start++
		}

		// Faollashmagan serverlar sonini hisoblash
		result[idx] = n - len(activeServers)
	}

	return result
}
```