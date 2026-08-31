# Beats 100% || 3 Approaches || Full Explained  || [Java/C++/Python/JavaScript]

**Author:** Shivansu_7
**Votes:** 134
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/4345360/](https://leetcode.com/problems/fizz-buzz/solutions/4345360/)

---

# Approach
1. **List Initialization:** 
The code starts by creating an ArrayList named ans to store the result of FizzBuzz for numbers from 1 to N.

2. **Loop Through Numbers:**
The for loop iterates from 1 to n (inclusive), representing the numbers for which FizzBuzz needs to be computed.

3. **Conditions for Fizz, Buzz, and FizzBuzz:**
- The code checks if the current number is a multiple of both 3 and 5 (i % 3 == 0 && i % 5 == 0). If true, "FizzBuzz" is added to the result list.
- If not, it checks if the current number is a multiple of 3 (i % 3 == 0). If true, "Fizz" is added to the result list.
- Similarly, it checks if the current number is a multiple of 5 (i % 5 == 0). If true, "Buzz" is added to the result list.
- Default Case: If the current number is not a multiple of 3 or 5, it adds the string representation of the number to the result list using Integer.toString(i).

5. **Return Result List:** 
- The final result, which is a list of strings representing the FizzBuzz output for numbers from 1 to N, is returned.

# Code using if else
```Java []
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> ans = new ArrayList<>();

        for(int i=1; i<=n; i++) {
            if(i%3 ==0 && i%5==0) {
                ans.add("FizzBuzz");
            }
            else if(i%3==0) {
                ans.add("Fizz");
            }
            else if(i%5==0) {
                ans.add("Buzz");
            }
            else {
                ans.add(Integer.toString(i));
            }
        }
        return ans;
    }
}
```
```C++ []
class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> ans;

        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                ans.push_back("FizzBuzz");
            } else if (i % 3 == 0) {
                ans.push_back("Fizz");
            } else if (i % 5 == 0) {
                ans.push_back("Buzz");
            } else {
                ans.push_back(to_string(i));
            }
        }

        return ans;
    }
};
```
```Python3 []
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        ans = []

        for i in range(1, n+1):
            if i % 3 == 0 and i % 5 == 0:
                ans.append("FizzBuzz")
            elif i % 3 == 0:
                ans.append("Fizz")
            elif i % 5 == 0:
                ans.append("Buzz")
            else:
                ans.append(str(i))

        return ans
```
```JavaScript []
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var ans = [];

    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            ans.push("FizzBuzz");
        } else if (i % 3 === 0) {
            ans.push("Fizz");
        } else if (i % 5 === 0) {
            ans.push("Buzz");
        } else {
            ans.push(i.toString());
        }
    }

    return ans;
};
```

# No % :
```Java []
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
```
```C++ []
class Solution {
public:
    std::vector<std::string> fizzBuzz(int n) {
        std::vector<std::string> res;
        int i = 1, fizz = 0, buzz = 0;

        while (i <= n) {
            fizz++;
            buzz++;

            if (fizz == 3 && buzz == 5) {
                res.push_back("FizzBuzz");
                fizz = buzz = 0;
            } else if (fizz == 3) {
                res.push_back("Fizz");
                fizz = 0;
            } else if (buzz == 5) {
                res.push_back("Buzz");
                buzz = 0;
            } else {
                res.push_back(std::to_string(i));
            }

            i++;
        }

        return res;
    }
};
```
```Python3 []
class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        res = []
        i, fizz, buzz = 1, 0, 0

        while i <= n:
            fizz += 1
            buzz += 1

            if fizz == 3 and buzz == 5:
                res.append("FizzBuzz")
                fizz = buzz = 0
            elif fizz == 3:
                res.append("Fizz")
                fizz = 0
            elif buzz == 5:
                res.append("Buzz")
                buzz = 0
            else:
                res.append(str(i))

            i += 1

        return res
```
```JavaScript []
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var res = [];
    var i = 1, fizz = 0, buzz = 0;

    while (i <= n) {
        fizz++;
        buzz++;

        if (fizz === 3 && buzz === 5) {
            res.push("FizzBuzz");
            fizz = buzz = 0;
        } else if (fizz === 3) {
            res.push("Fizz");
            fizz = 0;
        } else if (buzz === 5) {
            res.push("Buzz");
            buzz = 0;
        } else {
            res.push(i.toString());
        }

        i++;
    }

    return res;
};
```


# Ternairy operator:
```Java []
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
```
```C++ []
class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> ans;

        for (int i = 1; i <= n; i++) {
            ans.push_back(
                (i % 15 == 0) ? "FizzBuzz" :
                (i % 5 == 0)  ? "Buzz" :
                (i % 3 == 0)  ? "Fizz" :
                to_string(i)
            );
        }

        return ans;
    }
};
```
```Python []
class Solution:
    def fizzBuzz(self, n: int):
        ans = []
        for i in range(1, n + 1):
            ans.append(
                "FizzBuzz" if i % 15 == 0 else
                "Buzz" if i % 5 == 0 else
                "Fizz" if i % 3 == 0 else
                str(i)
            )
        return ans
```
```JavaScript []
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var ans = [];
    for (var i = 1; i <= n; i++) {
        ans.push(
            (i % 15 === 0) ? "FizzBuzz" :
            (i % 5 === 0) ? "Buzz" :
            (i % 3 === 0) ? "Fizz" :
            i.toString()
        );
    }
    return ans;
};
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)

