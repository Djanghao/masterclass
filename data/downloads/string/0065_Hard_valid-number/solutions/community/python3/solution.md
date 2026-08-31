# Python 3 Regex with example

**Author:** JummyEgg
**Votes:** 75
**Link:** [https://leetcode.com/problems/valid-number/solutions/348874/](https://leetcode.com/problems/valid-number/solutions/348874/)

---

If you want to practice regex, regex101.com is a good site
```
class Solution:
    def isNumber(self, s: str) -> bool:
		#Example:               +-     1 or 1. or 1.2 or .2   e or E +- 1     
        engine = re.compile(r"^[+-]?((\\d+\\.?\\d*)|(\\d*\\.?\\d+))([eE][+-]?\\d+)?$")
        return engine.match(s.strip(" ")) # i prefer this over putting more things (\\S*) in regex
```
Please leave a like if you find this helpful.

As @nwiger pointed out, the new testcase consists of "E" as well, so it should be `"^[+-]?((\\d+\\.?\\d*)|(\\d*\\.?\\d+))([eE][+-]?\\d+)?$"` (extra `E`)

Thanks,
JummyEgg