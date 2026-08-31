# [ Python ] ✅✅ Simple Python Solution Using HashMap 🥳✌👍

**Author:** ASHOK_KUMAR_MEGHVANSHI
**Votes:** 11
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/2388802/](https://leetcode.com/problems/merge-similar-items/solutions/2388802/)

---

# If You like the Solution, Don't Forget To UpVote Me, Please UpVote! \uD83D\uDD3C\uD83D\uDE4F
# Runtime: 138 ms, faster than 15.38% of Python3 online submissions for Merge Similar Items.
# Memory Usage: 14.8 MB, less than 53.85% of Python3 online submissions for Merge Similar Items.

	class Solution:
		def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:

			merge_item = items1 + items2

			d = defaultdict(int)

			for i in merge_item:
				value,weight = i
				d[value] = d[value] + weight

			result = []

			for j in sorted(d):
				result.append([j,d[j]])

			return result

# Thank You \uD83E\uDD73\u270C\uD83D\uDC4D