# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 199
**Link:** [https://leetcode.com/problems/sequential-digits/solutions/4662886/](https://leetcode.com/problems/sequential-digits/solutions/4662886/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-02-02 060407.png](./images/0.png)


---

# Approaches
(Also explained in the code)


#### ***Approach 1***

1. Iterate through starting digits from 1 to 9.
1. For each starting digit, build a sequential number by adding consecutive digits until reaching 9 or exceeding the `high` value.
1. Add valid sequential numbers to a vector (`a`).
1. Sort the vector.


# Complexity
- Time complexity:
   $$O(1)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    vector<int> sequentialDigits(int low, int high) {
        vector<int> a;

        for (int i = 1; i <= 9; ++i) {
            int num = i;
            int nextDigit = i + 1;

            while (num <= high && nextDigit <= 9) {
                num = num * 10 + nextDigit;
                if (low <= num && num <= high) a.push_back(num);
                ++nextDigit;
            }
        }

        sort(a.begin(), a.end());
        return a;
    }
};




```
```Java []
class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        List<Integer> a = new ArrayList<>();

        for (int i = 1; i <= 9; ++i) {
            int num = i;
            int nextDigit = i + 1;

            while (num <= high && nextDigit <= 9) {
                num = num * 10 + nextDigit;
                if (low <= num && num <= high) {
                    a.add(num);
                }
                ++nextDigit;
            }
        }

        a.sort(null);
        return a;
    }
}


```
```python3 []
class Solution:
    def sequentialDigits(self, low, high):
        a = []

        for i in range(1, 10):
            num = i
            next_digit = i + 1

            while num <= high and next_digit <= 9:
                num = num * 10 + next_digit
                if low <= num <= high:
                    a.append(num)
                next_digit += 1

        a.sort()
        return a



```
```javascript []
class Solution {
    sequentialDigits(low, high) {
        const a = [];

        for (let i = 1; i <= 9; ++i) {
            let num = i;
            let nextDigit = i + 1;

            while (num <= high && nextDigit <= 9) {
                num = num * 10 + nextDigit;
                if (low <= num && num <= high) {
                    a.push(num);
                }
                ++nextDigit;
            }
        }

        a.sort((a, b) => a - b);
        return a;
    }
}


```

---


#### ***Approach 2***

1. digits from 1 to 9 are stored as characters in the `string c = "123456789"`.
2. Two nested loops iterate over all possible substrings of `c`.
3. For each substring, convert it to an integer.
4. If the converted integer is within the given range, add it to the vector `a`.
5. Sort the vector.



# Complexity
- Time complexity:
   $$O(1)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    vector<int> sequentialDigits(int low, int high) {
        string c = "123456789";
        vector<int>a;

        for(int i =0;i<c.size();i++){
            for(int j =i+1;j<=c.size();j++){
                int curr = stoi(c.substr(i,j-i));
                if(curr<=high && curr>=low)a.push_back(curr);
            }
        }
        sort(a.begin(),a.end());
        return a;
    }
};



```
```Java []
class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        String c = "123456789";
        List<Integer> a = new ArrayList<>();

        for (int i = 0; i < c.length(); i++) {
            for (int j = i + 1; j <= c.length(); j++) {
                int curr = Integer.parseInt(c.substring(i, j));
                if (curr <= high && curr >= low) {
                    a.add(curr);
                }
            }
        }

        a.sort(null);
        return a;
    }
}


```
```python3 []
class Solution:
    def sequentialDigits(self, low, high):
        c = "123456789"
        a = []

        for i in range(len(c)):
            for j in range(i + 1, len(c) + 1):
                curr = int(c[i:j])
                if low <= curr <= high:
                    a.append(curr)

        a.sort()
        return a



```
```javascript []
class Solution {
    sequentialDigits(low, high) {
        const c = "123456789";
        const a = [];

        for (let i = 0; i < c.length; i++) {
            for (let j = i + 1; j <= c.length; j++) {
                const curr = parseInt(c.substring(i, j));
                if (curr <= high && curr >= low) {
                    a.push(curr);
                }
            }
        }

        a.sort((a, b) => a - b);
        return a;
    }
}



```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---