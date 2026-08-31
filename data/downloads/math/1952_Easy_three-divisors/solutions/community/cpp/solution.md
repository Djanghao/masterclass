# C++|O(1)|O(n^1/4) |O(sqrt(n))|O(N) | Very Simple

**Author:** Xahoor72
**Votes:** 11
**Link:** [https://leetcode.com/problems/three-divisors/solutions/3126280/](https://leetcode.com/problems/three-divisors/solutions/3126280/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For O(n)  or sqrt(n)  solution justtravers and check if cout of divisors ==3  then return true;
 But idea behind O(1) or O(n^1/4) is that 3 factors are for those numbers which are suqre of prime like 3*3 =9 it can have 1,3,9 also we check for more... So use this observation 
For O(1) instead of looping upto sqrt(n) u can just store the elemnts in map then give answer in O(1) but will not be feasible for bigger values ...
# Approach
<!-- Describe your approach to solving the problem. -->
For O(n^1/4 ) we have done sqrt two times so it becomes n^(1/2*1/2) = n^1/4 so that is why this complexity.
I think most effiecient and feasible is O(n^1/4) .
**Idea** : Actually in this we check first if n is perfect square then if sqrt(n) is prime that means it will be having 3 factors beacuse square of prime has 3 factors only that is due to prime has only 1 & itself now prime square wil have **1 , its sqrt() and itself** so 3 factors.
# Complexity
- Time complexity:O(n^1/4)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
**Beats 100% TC=n^1/4**
```
class Solution {
public:
  bool isPrime(int n){
      for(int i=2;i<=sqrt(n);i++)if(n%i==0)return false;
      return true;
  }
    bool isThree(int n) {
        return n!=1 and n!=2 and (int)sqrt(n)*sqrt(n)==n and isPrime(sqrt(n));
    }

};
```
**O(N) Simle traverse**
```
 bool isThree(int n) {
        int i=1,c=0;
        while(i<=n){
            if(n%i==0)c++;
            i++;
        }
        cout<<c;
        return c==3;
    }

```
**O(sqrt(n))**
```
 bool isThree(int n) {
        int i=1,c=0;
        while(i<=sqrt(n)){
            if( n%i==0){
                if(n/i!=i)c+=2;
                else c++;
            }
            i++;
        }
        cout<<c;
        return c==3;
    }
```
**O(1) but using space**
```
unordered_set<int> p2 = { 4, 9, 25, 49, 121, 169, 289, 361, 529, 841, 961, 1369, 1681, 
	1849, 2209, 2809, 3481, 3721, 4489, 5041, 5329, 6241, 6889, 7921, 9409, 10201 };
class Solution {
public:
    bool isThree(int n) { return p2.count(n); }
};
```