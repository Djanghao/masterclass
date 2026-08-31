# Very Easy 0 ms 100%(Fully Explained)(C++, Java, Python, JS, C, Python3)

**Author:** PratikSen07
**Votes:** 105
**Link:** [https://leetcode.com/problems/happy-number/solutions/2383810/](https://leetcode.com/problems/happy-number/solutions/2383810/)

---

# **C++ Solution:**
Runtime: 0 ms, faster than 100.00% of C++ online submissions for Happy Number.
```
class Solution {
public:
    bool isHappy(int n) {
        // Create a set...
        set<int> hset;
        while(hset.count(n) == 0) {
            // If total is equal to 1 return true.
            if(n == 1)
                return true;
            // Insert the current number in hset...
            hset.insert(n);
            // Initialize the total...
            int total=0;
            // Create a while loop...
            while(n) {
                // Process to get happy number...
                // We use division and modulus operators to repeatedly take digits off the number until none remain...
                // Then squaring each removed digit and adding them together.
                total += (n % 10) * (n % 10);
                n /= 10;
                // Each new converted number must not had occurred before...
            }
            // Insert the current number into the set s...
            // Replace the current number with total of the square of its digits.
            n = total;
        }
        // If current number is already in the HashSet, that means we're in a cycle and we should return false..
        return false;
    }
};
```

# **Java Solution (Using Hash):**
Runtime: 0 ms, faster than 100.00% of Java online submissions for Happy Number.
```
class Solution {
    public boolean isHappy(int n) {
        // Create a hash set...
        Set<Integer> hset = new HashSet<Integer>();
        // If the number is not in the HashSet, we should add it...
        while (hset.add(n)) {
            // Initialize the total...
            int total = 0;
            // Create a while loop...
            while (n > 0) {
                // Process to get happy number...
                // We use division and modulus operators to repeatedly take digits off the number until none remain...
                // Then squaring each removed digit and adding them together...
                total += (n % 10) * (n % 10);
                n /= 10;
                // Each new converted number must not had occurred before...
            }
            // If total is equal to 1 return true.
            if (total == 1)
                return true;
            // Insert the current number into the set s...
            // Replace the current number with total of the square of its digits.
            else
                n = total;
        }
        // If current number is already in the HashSet, that means we're in a cycle and we should return false..
        return false;
    }
}
```

# **Python Solution:**
```
class Solution(object):
    def isHappy(self, n):
        hset = set()
        while n != 1:
            if n in hset: return False
            hset.add(n)
            n = sum([int(i) ** 2 for i in str(n)])
        else:
            return True
```
            
# **JavaScript Solution:**
```
var isHappy = function(n) {
    if(n<10){
        if(n === 1 || n === 7){
            return true
        }
        return false
    }
    let total = 0
    while(n>0){
        let sq = n % 10
        total += sq**2
        n -= sq
        n /= 10
    }
    if(total === 1){
        return true
    }
    return isHappy(total)
};
```

# **C Language:**
```
bool isHappy(int n){
    int total = 0;
    while(true){
        while(n > 0){
            total += (n % 10) * (n % 10);
            n /= 10;
        }
        if(total == 1)
            return true;
        else if(total == 4)
            return false;
        n = total;
        total = 0;
    }
}
```

# **Python3 Solution:**
```
class Solution:
    def isHappy(self, n: int) -> bool:
        hset = set()
        while n != 1:
            if n in hset: return False
            hset.add(n)
            n = sum([int(i) ** 2 for i in str(n)])
        else:
            return True
```
**I am working hard for you guys...
Please upvote if you find any help with this code...**