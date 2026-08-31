# C++ solution queue + map

**Author:** OleksaM
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/3667158/](https://leetcode.com/problems/first-unique-number/solutions/3667158/)

---

```
class FirstUnique {
public:
    FirstUnique(vector<int>& nums) {
        for (const int& n : nums) {
            mp[n]++;
            q.push(n);
        }
    }
    
    int showFirstUnique() {
        while (!q.empty() && mp[q.front()] > 1)
            q.pop();
        return q.size() ? q.front() : -1;
    }
    
    void add(int value) {
        mp[value]++;
        q.push(value);
    }
private:
    map<int, int> mp;
    queue<int> q;
};
```