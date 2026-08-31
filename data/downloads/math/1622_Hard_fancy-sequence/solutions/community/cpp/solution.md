# c++(1924ms 6%) simple, easy, small , BUT SLOW (ACCEPTED)

**Author:** ZX007PI
**Votes:** 2
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/1510224/](https://leetcode.com/problems/fancy-sequence/solutions/1510224/)

---

Runtime: 1876 ms, faster than 6.13% of C++ online submissions for Fancy Sequence.
Memory Usage: 189 MB, less than 27.61% of C++ online submissions for Fancy Sequence.
**General idea: we will retain all combinations of operations for our requests and will calculate it ONLY ONE TIME for ONE number in function getIndex (and retain it value : if we will have next request we will continue calculate from this position for this value)**
```
#define MOD 1000000007
class Fancy {
public:
  vector<pair<char,int>> op;        // < 0 = + , 1 = * ; value > 
  vector<pair<int,int>> table;      //id in op, number
    
  void append(int val) {
    table.push_back({op.size(), val});    
  }
    
  void addAll(int inc) {
    op.push_back({0, inc});    
  }
    
  void multAll(int m) {
    op.push_back({1, m});
  }
    
  int getIndex(int idx) {
    if(idx >= table.size()) return -1;
    
    auto &[id , num] = table[idx];
    for(;id != op.size(); id++)
      if(op[id].first) num = (long(num) * op[id].second) % MOD;
      else             num = (long(num) + op[id].second) % MOD;
    
    return num;
  }
};
```