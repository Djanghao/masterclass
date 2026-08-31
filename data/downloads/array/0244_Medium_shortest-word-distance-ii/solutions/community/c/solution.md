# Using binary search to find the next occurrence (C++, faster than 100%, 36ms)

**Author:** vreshetnikov
**Votes:** 4
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/261336/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/261336/)

---

To find the leftmost occurrence of the other word to the right of the current position of the current word we can use a binary search (`upper_bound`) instead of a linear search. Here is a C++ implementation that runs in 36ms (faster than 100% of other C++ submissions):

```
class WordDistance final {
    unordered_map<string, vector<int>> positions;

public:
    WordDistance(const vector<string>& words) noexcept {
        for (int i = 0; i < words.size(); ++i) positions[words[i]].push_back(i);
    }

    int shortest(const string& word1, const string& word2) const noexcept {
        auto& vector_1 = positions.find(word1)->second;
        auto& vector_2 = positions.find(word2)->second;

        auto current_1 = vector_1.cbegin();
        auto current_2 = vector_2.cbegin();

        auto end_1 = vector_1.cend();
        auto end_2 = vector_2.cend();

        if (*current_1 > *current_2) swap(current_1, current_2), swap(end_1, end_2);
        int distance = *current_2 - *current_1;

        while (true) {
            current_1 = upper_bound(current_1 + 1, end_1, *current_2);
            distance = min(distance, *current_2 - current_1[-1]);
            if (current_1 == end_1) return distance;
            distance = min(distance, *current_1 - *current_2);
            swap(current_1, current_2), swap(end_1, end_2);
        }
    }
};

#define endl '\
'
static const auto speedup = []() { ios::sync_with_stdio(0); cin.tie(0); cout.tie(0); return 0; }();
```