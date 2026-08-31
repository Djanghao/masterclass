# [ C / C++ / Python / Java / Go / C# / JS / Ruby / Kotlin / Scala / Rust] Simple One-Liner

**Author:** YehudisK
**Votes:** 15
**Link:** [https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/1428062/](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/1428062/)

---

I was just in the mood of trying out almost every single language on Leetcode 
Almost all of the solutions were 0 ms and faster than 100% !!!
**C++:**
```
class Solution {
public:
    bool checkOnesSegment(string s) {
        return s.find("01") == -1;
    }
};
```
**C:**
```
bool checkOnesSegment(char * s){
    return !strstr(s, "01");
}
```
**Python:**
```
class Solution:
    def checkOnesSegment(self, s: str) -> bool:
        return "01" not in s
```
**Java:**
```
class Solution {
    public boolean checkOnesSegment(String s) {
        return !s.contains("01");
    }
}
```
**Go:**
```
func checkOnesSegment(s string) bool {
    return !strings.Contains(s, "01")
}
```
**C#:**
```
public class Solution {
    public bool CheckOnesSegment(string s) {
        return !s.Contains("01");
    }
}
```
**Javascript:**
```
var checkOnesSegment = function(s) {
   return s.indexOf("01") == -1
};
```
**Ruby:**
```
def check_ones_segment(s)
    !s.include? '01'
end
```
**Kotlin:**
```
class Solution {
    fun checkOnesSegment(s: String): Boolean {
        return !("01" in s)
    }
}
```
**Scala:**
```
object Solution {
    def checkOnesSegment(s: String): Boolean = {
        return !s.contains("01")
    }
}
```
**Rust:**
```
impl Solution {
    pub fn check_ones_segment(s: String) -> bool {
        return !s.contains("01");
    }
}
```
**Like it? please upvote!**