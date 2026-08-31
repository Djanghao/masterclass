# [Python/Java/CPP/C++] Easy Solution with Explanation [ACCEPTED]

**Author:** it_bilim
**Votes:** 42
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/1009791/](https://leetcode.com/problems/decode-xored-array/solutions/1009791/)

---



**Explanation**
**a XOR b = c**, we know the values of **a** and **c**. we use the formula to find **b**  ->  **a XOR c = b**  
**Complexity**

Time ```O(N)```
Space ```O(10)```

**Python:**
```
def decode(self, encoded: List[int], first: int) -> List[int]:
        r = [first]
        for i in encoded:
            r.append(r[-1]^i)
        return r
```


**JAVA** 
```
public int[] decode(int[] encoded, int first) {
        int[] res = new int[encoded.length+1];
        res[0] = first;
        for(int i = 0; i < encoded.length; i++)
            res[i+1] = res[i] ^ encoded[i];
        return res;
    }
```

**C++**

```
vector<int> decode(vector<int>& encoded, int first) {
        vector<int> res;
        res.push_back(first);
        for(int i = 0; i < encoded.size(); i++)
            res.push_back(res[i] ^ encoded[i]);
        return res;
    }

```