# FBI OPEN UP BINARY SEARCH ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5934300/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5934300/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
my first thought was to generate the string we need and simpley return the kth index from it but as n increases it becomes larger and larger giving time out error 
so we need to find out the digit without actually building the string 
we can observe that the kth bit never changes no matter which 'n' you are in 
so everytwhere kth bit is the same 
we will use recursion to find out the kth bit given we know that s0= '0'
# Approach
<!-- Describe your approach to solving the problem. -->
we will use binary search approach to divide the index into smaller and smaller lookups divided by 2 each time 
so one observation is no matter which n wee are in 
the middle index is alsways a '1'
next : if the index is less than the mid index 
we can search for it in the lower level string where we will do this recursively unless we hit a mid point or the s0 which is the starting string 
next : if the index is more than mid we will do the same as above step but return the opposite of what we found moving that many steps backwards as many this index has more than the mid 
as that is how it was generated in the forst place 

finally we have a for loop that generates the no of elements in each elevel which help us find out what the mid value is 
thank you 
i wrote the code in js and converted it to other langs 
please understand the concept and fix any minor issues in the conversion thank you 

# Complexity
- Time complexity:O(logN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![upvote.jpeg](./images/0.jpeg)

# Code
```javascript []
var findKthBit = function (n, k) {
    let s='0'
    let noda = [1]
    for(let i=1;i<n;i++){
        noda[i]=2*noda[i-1]+1
    }
    function findDigit(i,n){
        if(n==0)return '0'
        let mid = (noda[n]-1)/2
        if(i==mid)return '1'
        else if (i<mid){
            return findDigit(i,n-1)
        }
        else{
            if(findDigit(mid-(i-mid),n-1)=='0')return '1'
            else return '0'
        }
    }
    return findDigit(k-1,n-1)
};
```
```python []
def findKthBit(n, k):
    noda = [1]
    for i in range(1, n):
        noda.append(2 * noda[i - 1] + 1)

    def findDigit(i, n):
        if n == 0:
            return '0'
        mid = (noda[n] - 1) // 2
        if i == mid:
            return '1'
        elif i < mid:
            return findDigit(i, n - 1)
        else:
            return '1' if findDigit(mid - (i - mid), n - 1) == '0' else '0'

    return findDigit(k - 1, n - 1)

```
```java []
class Solution {
    public char findKthBit(int n, int k) {
        int[] noda = new int[n];
        noda[0] = 1;
        for (int i = 1; i < n; i++) {
            noda[i] = 2 * noda[i - 1] + 1;
        }

        return findDigit(k - 1, n - 1, noda);
    }

    private char findDigit(int i, int n, int[] noda) {
        if (n == 0) {
            return '0';
        }
        int mid = (noda[n] - 1) / 2;
        if (i == mid) {
            return '1';
        } else if (i < mid) {
            return findDigit(i, n - 1, noda);
        } else {
            return findDigit(mid - (i - mid), n - 1, noda) == '0' ? '1' : '0';
        }
    }
}

```
```c []
char findDigit(int i, int n, int* noda) {
    if (n == 0) {
        return '0';
    }
    int mid = (noda[n] - 1) / 2;
    if (i == mid) {
        return '1';
    } else if (i < mid) {
        return findDigit(i, n - 1, noda);
    } else {
        return findDigit(mid - (i - mid), n - 1, noda) == '0' ? '1' : '0';
    }
}

char findKthBit(int n, int k) {
    int noda[n];
    noda[0] = 1;
    for (int i = 1; i < n; i++) {
        noda[i] = 2 * noda[i - 1] + 1;
    }
    return findDigit(k - 1, n - 1, noda);
}
```
```c++ []
class Solution {
public:
    char findKthBit(int n, int k) {
        vector<int> noda(n);
        noda[0] = 1;
        for (int i = 1; i < n; i++) {
            noda[i] = 2 * noda[i - 1] + 1;
        }
        return findDigit(k - 1, n - 1, noda);
    }

private:
    char findDigit(int i, int n, vector<int>& noda) {
        if (n == 0) {
            return '0';
        }
        int mid = (noda[n] - 1) / 2;
        if (i == mid) {
            return '1';
        } else if (i < mid) {
            return findDigit(i, n - 1, noda);
        } else {
            return findDigit(mid - (i - mid), n - 1, noda) == '0' ? '1' : '0';
        }
    }
};
```
