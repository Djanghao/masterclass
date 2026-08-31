# I know I'm not the first with this one, but why is this legal

**Author:** 3fzyhgq9g20q
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/3531547/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/3531547/)

---

# Assist code
```
def check_ok(num):
    digits = [int(x) for x in str(num)]
    for d in digits:
            count = 0
            for dd in digits:
                    if dd == d:
                            count += 1
            if count != d:
                    return False
    return True

for n in range(2_000_000):
    if check_ok(n):
        print(n, ",", sep='')
```

# Code
```
impl Solution {
    pub fn next_beautiful_number(n: i32) -> i32 {
        let numbers = [
            1,
            22,
            122,
            212,
            221,
            333,
            1333,
            3133,
            3313,
            3331,
            4444,
            14444,
            22333,
            23233,
            23323,
            23332,
            32233,
            32323,
            32332,
            33223,
            33232,
            33322,
            41444,
            44144,
            44414,
            44441,
            55555,
            122333,
            123233,
            123323,
            123332,
            132233,
            132323,
            132332,
            133223,
            133232,
            133322,
            155555,
            212333,
            213233,
            213323,
            213332,
            221333,
            223133,
            223313,
            223331,
            224444,
            231233,
            231323,
            231332,
            232133,
            232313,
            232331,
            233123,
            233132,
            233213,
            233231,
            233312,
            233321,
            242444,
            244244,
            244424,
            244442,
            312233,
            312323,
            312332,
            313223,
            313232,
            313322,
            321233,
            321323,
            321332,
            322133,
            322313,
            322331,
            323123,
            323132,
            323213,
            323231,
            323312,
            323321,
            331223,
            331232,
            331322,
            332123,
            332132,
            332213,
            332231,
            332312,
            332321,
            333122,
            333212,
            333221,
            422444,
            424244,
            424424,
            424442,
            442244,
            442424,
            442442,
            444224,
            444242,
            444422,
            515555,
            551555,
            555155,
            555515,
            555551,
            666666,
        ];
        for num in numbers {
            if num > n {
                return num;
            }
        }
        1224444
    }
}
```