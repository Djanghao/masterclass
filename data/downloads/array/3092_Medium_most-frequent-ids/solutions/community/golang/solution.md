# [C++ / Go] Priority Queue + Hash Table - O(n log n) time + O(n) space solution

**Author:** mikazuki4712
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-ids/solutions/4921119/](https://leetcode.com/problems/most-frequent-ids/solutions/4921119/)

---

# Priority Queue (Max Heap) + Hash Map
- Use Priority Queue (Max Heap) to easily access the maximum frequency count at any given point.
- Use Hash Table to keep track of frequency count of each value
- Iteration Process:
    - Update the frequency count of the current element.
    - Push the updated frequency count into the Priority Queue.
    - Check if the top element in the Priority Queue has become outdated:
        - Its frequency count do not same as the value stored in hash table. 
        - If so, remove it from the Priority Queue.
    - Update the result list with the top element.

# Code
```C++ []
class Solution {
public:
    vector<long long> mostFrequentIDs(vector<int>& nums, vector<int>& freq) {
        int n = nums.size();

        priority_queue<pair<long long, int>> pq;
        unordered_map<int, long long> cnt;
        vector<long long> res(n, 0);

        for (int i = 0; i < n; i++) {
            int val = nums[i];
            cnt[val] += freq[i];

            pq.push({cnt[val], val});
            while (!pq.empty()) {
                long long d = pq.top().first;
                int num = pq.top().second;

                if (d != cnt[num])
                    pq.pop();
                else
                    break;
            }

            res[i] = (pq.empty()) ? 0 : pq.top().first;
        }

        return res; 
    }
};
```
```Go []
type Pair struct {
	Cnt int64
	Num int
}

type MaxHeap []Pair

// MaxHeap implement at the end

func mostFrequentIDs(nums []int, freq []int) []int64 {
    n := len(nums)

	pq := make(MaxHeap, 0)
	heap.Init(&pq)
	cnt := make(map[int]int64)
	res := make([]int64, n)

    for i := 0; i < n; i++ {
		val := nums[i]
		cnt[val] += int64(freq[i])

		heap.Push(&pq, Pair{cnt[val], val})
		for len(pq) > 0 {
			d := pq[0].Cnt
			num := pq[0].Num

			if d != cnt[num] {
				heap.Pop(&pq)
			} else {
				break
			}
		}

		if len(pq) == 0 {
			res[i] = 0
		} else {
			res[i] = pq[0].Cnt
		}
	}

    return res
}

func (h MaxHeap) Len() int { 
    return len(h) 
}

func (h MaxHeap) Less(i, j int) bool {
    return h[i].Cnt > h[j].Cnt 
}
func (h MaxHeap) Swap(i, j int) { 
    h[i], h[j] = h[j], h[i] 
}

func (h *MaxHeap) Push(x interface{}) {
	*h = append(*h, x.(Pair))
}

func (h *MaxHeap) Pop() interface{} {
	tmp := *h
	n := len(tmp)
	res := tmp[n - 1]
	*h = tmp[0 : n - 1]
	return res
}
```

### Complexity
- Time complexity: $O(n log n)$
- Space complexity: $O(n)$