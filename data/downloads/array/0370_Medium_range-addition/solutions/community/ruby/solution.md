# C++ using `partial_sum`, Ruby

**Author:** StefanPochmann
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-addition/solutions/84267/](https://leetcode.com/problems/range-addition/solutions/84267/)

---

**C++**

Same old idea as almost everyone, of course, but using `partial_sum` for the second part.

    vector<int> getModifiedArray(int length, vector<vector<int>>& updates) {
        int mods[length + 1] = {};
        for (auto u : updates) {
            mods[u[0]] += u[2];
            mods[u[1] + 1] -= u[2];
        }
        partial_sum(mods, mods + length, mods);
        return vector<int>(mods, mods + length);
    }

A variation without much extra space:

    vector<int> getModifiedArray(int length, vector<vector<int>>& updates) {
        vector<int> mods(length + 1);
        for (auto u : updates) {
            mods[u[0]] += u[2];
            mods[u[1] + 1] -= u[2];
        }
        mods.erase(partial_sum(mods.begin(), mods.end() - 1, mods.begin()));
        return mods;
    }

---

**Ruby**

    def get_modified_array(length, updates)
      mods = [0] * length
      updates.each { |start, end_, inc|
        mods[start] += inc
        mods[end_ + 1] -= inc if end_ + 1 < length
      }
      sum = 0
      mods.map! { |mod| sum += mod }
    end