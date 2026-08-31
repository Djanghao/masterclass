# C++ Super Simple and Short Solution

**Author:** YehudisK
**Votes:** 9
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/1337514/](https://leetcode.com/problems/rle-iterator/solutions/1337514/)

---

```
class RLEIterator {
public:
    RLEIterator(vector<int>& encoding) {
        rle = encoding;
        size = encoding.size();
    }
    
    int next(int n) {
        while (idx < size) {
            
            if (n <= rle[idx]) {
                rle[idx] -= n;
                return rle[idx+1];
            }
            
            else {
                n -= rle[idx];
                idx += 2;
            }
        }
        
        return -1;
    }
    
private:
    vector<int> rle;
    int idx = 0,size;
};
```
**Like it? please upvote!**