# ✅✅ SIMPLE GOLANG SOLUTION | BFS

**Author:** nguyen081002
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/4962586/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/4962586/)

---


# Code
```
func watchedVideosByFriends(watchedVideos [][]string, friends [][]int, id int, level int) []string {
	visit := make([]bool, len(friends))
	q := []int{id}
	freq := map[string]int{}
	for len(q) > 0 {
		for _, f := range q {
			q = q[1:]
			if visit[f] {
				continue
			}
            visit[f] = true

			if level == 0 {
				for _, v := range watchedVideos[f] {
					freq[v]++
				}
			}

			for _, e := range friends[f] {
				q = append(q, e)
			}
		}
		level--
	}
	res := []string{}
	for k, _ := range freq {
		res = append(res, k)
	}

	slices.SortFunc(res, func(x, y string) int {
		if freq[x] == freq[y] {
			return bytes.Compare([]byte(x), []byte(y))
		}
		return freq[x] - freq[y]
	})
	return res
}
```