# Replace Question Marks in String to Minimize its Value

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/6128001/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/6128001/)

---

# Intuition
For a character c, the cost of all t[i] = c is only dependent on number of c in the entire string:
This cost is independent of the positions of the characters within the string.
The cost equals cnt * (cnt + 1) / 2, where cnt is number of c => This cost is directly proportional to cnt, also means that lower cnt result in lower cost.
For each ?, the optimal way is using the character that appears the least frequently in the entire string, including characters already replaced for previous ?.
To ensure the lexicographically smallest, instead of replacing ? instantly, we save the character. Then at the end , we sort these replacements and perform the replacements accordingly.
=> Using Priority Queue

# Approach
Count the number of occurrences of each character in the string.
Init a priority queue, including characters that have not appeared yet. The priority queue should prioritize characters based on their frequency.
For each ?:
Pop out the least frequency character.
Increase its frequency, insert it back to the priority queue.
Save the character for later replacement.
Now iterate again and find for ? to replace it.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
type Pair struct {
	Cnt int
	Ch rune
}

type MinHeap []Pair

// MinHeap implement at the end

func minimizeStringValue(s string) string {
	cnt := make(map[rune]int)
	for _, c := range s {
		if c != '?' {
			cnt[c]++
		}
	}

	pq := make(MinHeap, 0)
	heap.Init(&pq)
	for i := 0; i < 26; i++ {
        ch := rune(int('a') + i)
		heap.Push(&pq, Pair{cnt[ch], ch})
	}

	memo := make([]int, 26)
	for _, c := range s {
		if c == '?' {
			it := heap.Pop(&pq).(Pair)
			ch := it.Ch
			cnt[ch]++
			heap.Push(&pq, Pair{cnt[ch], ch})
			memo[int(ch) - int('a')]++
		}
	}

	cur := 0
    res := make([]rune, len(s))
	for i, ch := range s {
        for cur < 26 && memo[cur] == 0 {
            cur++
        }

		if ch == '?' {
            res[i] = rune(int('a') + cur)
            memo[cur]--
		} else {
            res[i] = rune(ch)
        }
	}

	return string(res)
}

func (h MinHeap) Len() int { 
    return len(h) 
}

func (h MinHeap) Less(i, j int) bool { 
    if (h[i].Cnt == h[j].Cnt) {
        return h[i].Ch < h[j].Ch
    }
    return h[i].Cnt < h[j].Cnt 
}
func (h MinHeap) Swap(i, j int) { 
    h[i], h[j] = h[j], h[i] 
}

func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(Pair))
}

func (h *MinHeap) Pop() interface{} {
	tmp := *h
	n := len(tmp)
	res := tmp[n - 1]
	*h = tmp[0 : n - 1]
	return res
}
```