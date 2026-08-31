# Ruby/Python Binary search O(N * log(N)) time with some explanation

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/929949/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/929949/)

---

This task is similar to [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/).

This solution is based on [@dietpepsi's solution for it.](https://leetcode.com/problems/longest-increasing-subsequence/discuss/74824/JavaPython-Binary-search-O(nlogn)-time-with-explanation)

### Similarity with task #300

Sort score by ages, and then by score. Get list of scores.
In task 300 need to get longest increaing subsequnce, in this task we need to get non-decreasing subsequnce having max sum.

### Idea

Iterate over scores (that we have sorted), keep track of max prefix sums and its tail score (list of pairs).

### Invariant

At each iteration greater tail score has greater corresponding sum.

### Algorithm

Iterate over scores. For each score find (using binary search) tail that is greater than current score (position `i` in `pref_sums`). Now we can achive sum `prev sum + score`, ending with tail current `score`.
Place this pair at posion `i`.
In addition we should invalidate (remove) all prefix sums ending with greater tail having lesser sum (also using binary search). For example if at the curreent iteration we know that we can obtain sum `310`, ending with score `15` we are not interested with sum `280`, ending with score `20`.

Ruby solution:

```
PREF_SUM = Struct.new(:tail, :sum)

def best_team_score(scores, ages)
  scores = ages.zip(scores).sort!.map(&:last)
  pref_sums = [] # tail score and sum pair
  scores.each do |score|
    if pref_sums.empty? || score > pref_sums.last.tail
      sum = (pref_sums.last&.sum || 0) + score
      pref_sums << PREF_SUM[score, sum]
    else
      # Find first pref_sum having tail >= score
      i = pref_sums.bsearch_index { |s| s.tail >= score }
      if pref_sums[i].tail == score
        pref_sums[i].sum += score
      else
        sum = i > 0 ? (pref_sums[i - 1].sum + score) : score
        pref_sums.insert(i, PREF_SUM[score, sum])
      end
      # invalidate all pref_sums from i+1 till the end having sum <= pref_sums[i].sum
      j = (i + 1...pref_sums.size).bsearch { |m| pref_sums[m].sum > pref_sums[i].sum }
      if j
        pref_sums = pref_sums[0..i] + pref_sums[j..-1] unless j == i + 1
      else
        pref_sums = pref_sums[0..i]
      end
    end
  end

  pref_sums.map(&:sum).max
end

# Runtime: 160 ms
```

TIme complexity: `O(N * log(N))`, space complexity: `O(N)`.

Python version (implemented binary search):

```
from collections import namedtuple

class Solution:
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
        n = len(scores)
        players = [[a, s] for a, s in zip(ages, scores)]
        players.sort()
        scores = [player[1] for player in players]
        pref_sums = [] # tail score and sum pair, sorted by both tail & sum
        PREF_SUM = namedtuple('PREF_SUM', ('tail', 'sum'))
        for i in range(n):
            score = scores[i]
            if not pref_sums or score > pref_sums[-1].tail:
                sum = pref_sums[-1].sum + score if pref_sums else score
                pref_sums.append(PREF_SUM(score, sum))
            else:
                # Find first i having tail >= score
                i, j = 0, len(pref_sums) - 1
                while i != j:
                    m = (i + j) // 2
                    if pref_sums[m].tail < score:
                        i = m + 1
                    else:
                        j = m

                if pref_sums[i].tail == score:
                    pref_sums[i] = PREF_SUM(score, pref_sums[i].sum + score)
                else:
                    sum = (pref_sums[i - 1].sum + score if i > 0 else score)
                    pref_sums.insert(i, PREF_SUM(score, sum))

                # invalidate all pref_sums from i+1 till the end having sum <= pref_sums[i].sum
                l, r, j = i + 1, len(pref_sums), -1
                while l < r:
                    m = (l + r) // 2
                    if pref_sums[m].sum <= pref_sums[i].sum:
                        l = m + 1
                    else:
                        r = m
                        j = m

                if j > -1:
                    if j != i + 1:
                        pref_sums = pref_sums[0:i+1] + pref_sums[j:]
                else:
                    pref_sums = pref_sums[0:i+1]

        return max([pref_sum.sum for pref_sum in pref_sums])
		
# Runtime: 220 ms
```