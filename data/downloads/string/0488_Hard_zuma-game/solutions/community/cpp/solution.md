# 16-line 9ms recursive solution with pre-process, memorization and edge case test, no helper functions (detailed explanation)

**Author:** zzg_zzm
**Votes:** 11
**Link:** [https://leetcode.com/problems/zuma-game/solutions/97033/](https://leetcode.com/problems/zuma-game/solutions/97033/)

---

Many fellow coders have posted similar recursive solutions. This is my version with several key observations for improvement:
1. Letters in `hand` are actually *order insensitive*, i.e., two anagram `hand` strings with a same `board` always give the same answer. So we should sort `hand` to speed up memorization.
2. If a letter `c` of `board` has total count `< 3` in `board + hand` combined, obviously, we cannot empty the board.
3. If a letter `c` in `hand` does not appear in `board`, such letter is useless and should be abandoned.
4. If a letter `c` in `hand` is inserted to position `i` and `j` in `board` which result to a same board, apparently, only need to consider one case.

The usage of hash map memorization speeds total test running time from 35ms to 9ms.
```
    int findMinStep(string b, string h) {
      // pre-process
      string a; int L, r = 0;
      for (char c:b) // shrink b to remove consecutive identical letters
        if (c-r) if ((L=a.size()) < 2 || c-a[L-1] || c-a[L-2]) a += c, r = 0;
                 else r = c, a.pop_back(), a.pop_back();
      sort(h.begin(), h.end()); // sort hand for memorization
      
      // memorization
      if (m.count(b=a) && m[b].count(h)) return m[b][h];
        
      // base cases
      if (b.empty()) return 0; else if (h.empty()) return -1;
    
      // edge cases
      for (char c:b) if (count(a.begin(),(a=b+h).end(),c) < 3) return m[b][h] = -1; 
      
      // recursion
      for (int i = 0, res = INT_MAX; i <= h.size(); ++i) { // each letter in hand
        if (i==h.size()) return m[b][h] = res<INT_MAX? res : -1;
        if (i && h[i]==h[i-1] || b.find(h[i])==string::npos) continue;
        for (int j = 0, step; j < b.size(); ++j) { // each insertion position
          if (b[j]-h[i] || (j && b[j]==b[j-1])) continue;
          string bb(b); bb.insert(bb.begin() + j, h[i]); // insert h[i] to board
          string hh(h); hh.erase(hh.begin() + hh.find(h[i])); // remove h[i] from hand
          if (step = findMinStep(bb, hh)+1) res = min(res, step);
        }
      }
    }
    
    // m[b][h] = min steps for borad=b & hand=h
    unordered_map<string, unordered_map<string, int>> m;
```