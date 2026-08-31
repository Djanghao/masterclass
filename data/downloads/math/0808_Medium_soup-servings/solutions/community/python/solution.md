# ✅ [C++ , Java , Python] Easy solution with explanation (Recursive and Memoized Code)✅

**Author:** upadhyayabhi0107
**Votes:** 17
**Link:** [https://leetcode.com/problems/soup-servings/solutions/3831789/](https://leetcode.com/problems/soup-servings/solutions/3831789/)

---

# Intuition
The problem's intuition for using dynamic programming comes from the given information about the states of soup A and soup B and the multiple possible combinations that can occur during the serving process. The existence of various states and the transitions between them naturally lead to a recursive approach. By representing the states using a 2D map and calculating the probabilities for each state while considering all possible operations, we can efficiently track the probabilities of reaching different states. This approach optimizes the computation by avoiding redundant calculations through memoization, ultimately providing the desired probabilities for soup A emptying first and both A and B becoming empty simultaneously. The recursive nature of DP makes it well-suited for handling the complexity of this problem and arriving at the required probabilities.

# Approach
- Main Case Of 4800 and above.
    - This case is due to the fact that as the ml of our soups increases there are lesser and lesser possibility of A to not get finished as there is no case where we don't use A at all and hence quoted in the question *"Note that we do not have an operation where all 100 ml's of soup B are used first"*. Hence the possibility of A keeps on increasing and increasing as our soup ml increases and tends towards 1.
- Recursive Base Cases
    - They are pretty simple as you might have thought of them by yourselves :
        - If a and b become empty together
        - If a becomes empty and b is still remaining
        - IF a is remaining and b is empty

# Complexity
- Time complexity: O(N * N) since N would be max equal to 4799

- Space complexity: O(N * N)

# C++ Recursive Code
```
class Solution {
public:
    double recur(int a , int b){
        if(a <= 0 && b <= 0) return 0.5;
        if(a <= 0 && b > 0) return 1;
        if(a > 0 && b <= 0) return 0;
        double op1 = recur(a - 100 , b);
        double op2 = recur(a - 75 , b - 25);
        double op3 = recur(a - 50 , b - 50);
        double op4 = recur(a - 25 , b - 75);
        
        return 0.25 * (op1 + op2 + op3 + op4);
    }
    double soupServings(int n) {
        if(n >= 4800) return 1;
        double ans = recur(n , n);
        return ans;
    }
};
```
# C++ Memoized Code
```
class Solution {
public:
    map<pair<double , double> , double> mp;
    double recur(int a , int b){
        if(a <= 0 && b <= 0) return 0.5;
        if(a <= 0 && b > 0) return 1;
        if(a > 0 && b <= 0) return 0;
        if(mp.find({a , b}) != mp.end()) return mp[{a , b}];
        double op1 = recur(a - 100 , b);
        double op2 = recur(a - 75 , b - 25);
        double op3 = recur(a - 50 , b - 50);
        double op4 = recur(a - 25 , b - 75);
        
        return mp[{a , b}] = 0.25 * (op1 + op2 + op3 + op4);
    }
    double soupServings(int n) {
        if(n >= 4800) return 1;
        double ans = recur(n , n);
        return ans;
    }
};
```
# Java Code
```
class Solution {
    private Map<Pair, Double> mp = new HashMap<>();

    private double recur(int a, int b) {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0 && b > 0) return 1;
        if (a > 0 && b <= 0) return 0;
        if (mp.containsKey(new Pair(a, b))) return mp.get(new Pair(a, b));

        double op1 = recur(a - 100, b);
        double op2 = recur(a - 75, b - 25);
        double op3 = recur(a - 50, b - 50);
        double op4 = recur(a - 25, b - 75);

        double result = 0.25 * (op1 + op2 + op3 + op4);
        mp.put(new Pair(a, b), result);
        return result;
    }

    public double soupServings(int n) {
        if (n >= 4800) return 1;
        double ans = recur(n, n);
        return ans;
    }
}
```
# Python Code
```
class Solution(object):
    def __init__(self):
        self.mp = {}

    def recur(self, a, b):
        if a <= 0 and b <= 0:
            return 0.5
        if a <= 0 and b > 0:
            return 1
        if a > 0 and b <= 0:
            return 0
        if (a, b) in self.mp:
            return self.mp[(a, b)]

        op1 = self.recur(a - 100, b)
        op2 = self.recur(a - 75, b - 25)
        op3 = self.recur(a - 50, b - 50)
        op4 = self.recur(a - 25, b - 75)

        self.mp[(a, b)] = 0.25 * (op1 + op2 + op3 + op4)
        return self.mp[(a, b)]

    def soupServings(self, n):
        if n >= 4800:
            return 1
        ans = self.recur(n, n)
        return ans
```