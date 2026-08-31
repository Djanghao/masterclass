# Go - Easy to understand

**Author:** sagar10161
**Votes:** 0
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/5186144/](https://leetcode.com/problems/reward-top-k-students/solutions/5186144/)

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
```
type Student struct {
	id    int
	score int
}

func topStudents(positive_feedback []string, negative_feedback []string, report []string, student_id []int, k int) []int {
	postiveFbMap := map[string]bool{}
	negativeFbMap := map[string]bool{}

	ret := []int{}

	for _, v := range positive_feedback {
		postiveFbMap[v] = true
	}
	for _, v := range negative_feedback {
		negativeFbMap[v] = true
	}

	students := []Student{}

	for i, v := range report {
		score := 0

		fbs := strings.Split(v, " ")
		for _, fb := range fbs {
			if postiveFbMap[fb] {
				score += 3
			}
			if negativeFbMap[fb] {
				score -= 1
			}
		}

		students = append(students, Student{
			id:    student_id[i],
			score: score,
		})

	}

	// Sort the student based on score then based on student id
	sort.SliceStable(students, func(i, j int) bool {
		if students[i].score == students[j].score {
			return students[i].id < students[j].id
		}
		return students[i].score > students[j].score
	})


	for _, v := range students {
		if k > 0 {
			ret = append(ret, v.id)
		}
		k--
	}
	return ret

}
```