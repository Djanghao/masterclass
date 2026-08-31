# [[ NO LOOPS ]] Ruby, Swift, C++, Haskell & APL Solutions

**Author:** code_report
**Votes:** 2
**Link:** [https://leetcode.com/problems/slowest-key/solutions/909794/](https://leetcode.com/problems/slowest-key/solutions/909794/)

---

https://github.com/codereport/LeetCode

**Ruby:**
```
def slowest_key(t, k)
    return t.unshift(0)
            .each_cons(2)
            .map{|a, b| b - a}
            .zip(k.chars)
            .max[1]
end
```

**Swift:**
```
func slowestKey(_ t: [Int], _ k: String) -> Character {
    let d = zip(t, [0] + t).map(-)
    let e = zip(Array(k), d.map{ $0 == d.max() })
    return e.filter{ $1 }.map { $0.0 }.max()!
}
```

**C++:**
```
char slowestKey(vector<int>& t, string k) {
    auto d = std::vector(t.size(), 0);
    std::adjacent_difference(t.cbegin(), t.cend(), d.begin());
    return std::inner_product(d.cbegin(), d.cend(), k.begin(),
        std::pair{-1, 'a'}, 
        [](auto a, auto b) { return std::max(a, b); },
        [](auto a, auto b) { return std::pair{a, b}; }).second;
}
```

**Haskell:**
```
slowestKey :: String -> [Int] -> Char
slowestKey k = snd 
             . maximum 
             . (flip zip) k 
             . mapAdjacent (flip (-)) 
             . (0:)
```

**APL:**
![image](./images/0.png)
