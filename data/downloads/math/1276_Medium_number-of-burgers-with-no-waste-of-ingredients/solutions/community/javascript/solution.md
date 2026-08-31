# Elegant C++, Java, Go, Python, JavaScript: 2 lines, O(1) time&space

**Author:** Prezes
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/441779/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/441779/)

---

This clearly should be "Easy" not "Medium".
Check viability conditions first, then allocate greedily: jumbo = tomato/2 - cheese, small = cheese - jumbo.

Java
``` 
class Solution {
    public List<Integer> numOfBurgers(int ts, int cs) {
        if (ts%2==1 || ts/2<cs || ts/4>cs) return Collections.emptyList();
        return Arrays.asList(ts/2-cs, 2*cs-ts/2);
    }
}
```
C++
```
class Solution {
public:
    vector<int> numOfBurgers(int ts, int cs) {
        if (ts%2==1 || ts/2<cs || ts/4>cs) return {};
        return {ts/2-cs, 2*cs-ts/2};
    }
};
```
Go
```
func numOfBurgers(ts int, cs int) []int {
    if ts%2==1 || ts/2<cs || ts/4>cs {
        return []int{}
    } 
    return []int{ts/2-cs, 2*cs-ts/2}
}
```
Python
```
class Solution(object):
    def numOfBurgers(self, ts, cs):
        return [] if ts%2==1 or ts/2<cs or ts/4>cs else [ts/2-cs, 2*cs-ts/2]
```
JavaScript
```
function numOfBurgers(ts, cs) {
    return ts%2==1 || ts/2<cs || ts/4>cs ? [] : [ts/2-cs, 2*cs-ts/2];
}
```