# JAVA | 3 Approaches | Easy ✅

**Author:** sourin_bruh
**Votes:** 158
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/2628136/](https://leetcode.com/problems/fizz-buzz/solutions/2628136/)

---

---
# Please Upvote \uD83D\uDE07
---
## 1. Simple if-else:
```
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> ans = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (i % 15 == 0) {
                ans.add("FizzBuzz");
            } else if (i % 3 == 0) {
                ans.add("Fizz");
            } else if (i % 5 == 0) {
                ans.add("Buzz");
            } else {
                ans.add(String.valueOf(i));
            }
        }
                         
        return ans;                 
    }
}

// TC: O(n), SC: O(n)
```
---
## 2. No % :
```
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> res = new ArrayList<>();
        int i = 1, fizz = 0, buzz = 0;
        while (i <= n){
            fizz++; buzz++;
            if (fizz == 3 && buzz == 5) {
                res.add("FizzBuzz");
                fizz = buzz = 0;
            } else if (fizz == 3) {
                res.add("Fizz");
                fizz = 0;
            } else if (buzz == 5) {
                res.add("Buzz");
                buzz = 0;
            } else {
                res.add(String.valueOf(i));
            }
            i++;
        }

        return res;
    }
}

// TC: O(n), SC: O(n)
```
---
## 3. Ternery Operator:
``` 
class Solution {
    public List fizzBuzz(int n) {
        List ans = new ArrayList<>();
        for(int i = 1; i <= n; i++){
            ans.add(
                i % 15 == 0 ? "FizzBuzz" :
                i % 5 == 0  ? "Buzz" :
                i % 3 == 0  ? "Fizz" :
                String.valueOf(i)
            );
        }

        return ans;
    }
}

// TC: O(n), SC: O(n)
```