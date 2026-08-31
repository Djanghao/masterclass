# Tedious

**Author:** votrubac
**Votes:** 18
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/2947200/](https://leetcode.com/problems/reward-top-k-students/solutions/2947200/)

---

Just bunch of data manipulation. Looks a bit better in Python.

**Python 3**
```python
class Solution:
    def topStudents(self, pos_feed: List[str], neg_feed: List[str], report: List[str], student_id: List[int], k: int) -> List[int]:
        pos, neg, score_id = set(pos_feed), set(neg_feed), []
        for r, id in zip(report, student_id):
            score = sum(3 if w in pos else -1 if w in neg else 0 for w in r.split(" "))
            score_id.append((-score, id))
        return [id for _, id in sorted(score_id)[0 : k]]
```
**C++**
```cpp
vector<int> topStudents(vector<string>& pos_feed, vector<string>& neg_feed, vector<string>& report, vector<int>& student_id, int k) {
    unordered_set<string> pos(begin(pos_feed), end(pos_feed)), neg(begin(neg_feed), end(neg_feed));
    vector<pair<int, int>> sid;
    vector<int> res;
    for (int i = 0; i < report.size(); ++i) {
        int score = 0;
        for (int j = 0, k = 0; j <= report[i].size(); ++j)
            if (j == report[i].size() || report[i][j] == ' ') {
                score += pos.count(report[i].substr(k, j - k)) ? 3 : 
                    neg.count(report[i].substr(k, j - k)) ? -1 : 0;
                k = j + 1;
            }
        sid.push_back({-score, student_id[i]});
    }
    partial_sort(begin(sid), begin(sid) + k, end(sid));
    transform(begin(sid), begin(sid) + k, back_inserter(res), [](const auto &p){ return p.second; });
    return res;
}
```