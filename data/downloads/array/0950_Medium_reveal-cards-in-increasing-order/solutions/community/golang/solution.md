# [C++ / Go] Simulate the process for revealing order - O(nlogn) time + O(n) space solution

**Author:** mikazuki4712
**Votes:** 5
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001360/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001360/)

---

# Approach
- Sort the deck initially.
- Simulate the process of revealing using Queue to determine the order in which cards are revealed.
- Assign the cards from the sorted deck according to the revealing order.

# Complexity
- Time complexity: $O(nlogn)$
- Space complexity: $O(n)$

# Code
```C++ []
class Solution {
public:
    vector<int> deckRevealedIncreasing(vector<int>& deck) {
        int n = deck.size();
        sort(deck.begin(), deck.end());
        
        vector<int> res(n, 0);
        queue<int> q;
        for (int i = 0; i < n; i++)
            q.push(i);

        for (int i = 0; i < n; i++) {
            int u = q.front();
            q.pop();

            res[u] = deck[i];

            if (!q.empty()) {
                q.push(q.front());
                q.pop();
            }
        }

        return res;
    }
};
```
```Go []
func deckRevealedIncreasing(deck []int) []int {
	n := len(deck)
	sort.Ints(deck)

	res := make([]int, n)
	queue := make([]int, n)

	for i := range queue {
		queue[i] = i
	}

	for _, card := range deck {
		idx := queue[0]
		queue = queue[1:]
		res[idx] = card

		if len(queue) > 0 {
			queue = append(queue, queue[0])
			queue = queue[1:]
		}
	}

	return res
}
```