# 1 Line Python & C++20 Ranges Solution

**Author:** code_report
**Votes:** 7
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/308195/](https://leetcode.com/problems/occurrences-after-bigram/solutions/308195/)

---

I solved it in 2 lines:
```
def findOcurrences(self, t: str, f: str, s: str) -> List[str]:
	l = t.split()
	return [c for a, b, c in zip(l, l[1:], l[2:]) if a == f and b == s]
```
but it can be done in 1:
```
def findOcurrences(self, t: str, f: str, s: str) -> List[str]:
	return [c for a, b, c in zip(t.split(), t.split()[1:], t.split()[2:]) if a == f and b == s]
```
And the C++20 Ranges solution:
```
namespace rv = ranges::view;
namespace ra = ranges::action;

auto findOcurrences(string s, string a, string b) -> vector<string> {
    auto t = s | rv::split(' ') 
               | ranges::to<vector<string>>;
    return t | rv::sliding(3)
             | rv::filter([a, b] (auto rng) {
                  return a == *ranges::cbegin(rng) && 
                         b == *next(ranges::cbegin(rng)); })
             | rv::transform([](auto rng) {
                  return *ranges::crbegin(rng); })
             | ranges::to<vector<string>>;
}
```
Video Explanation / Solution in Python, Haskell and C++20: [Click Here](https://www.youtube.com/watch?v=cClOEG-_dns)