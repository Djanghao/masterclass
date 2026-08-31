# simple ^^

**Author:** andrii_khlevniuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/2038313/](https://leetcode.com/problems/zigzag-iterator/solutions/2038313/)

---

```
class ZigzagIterator 
{
    const vector<int> & v1, v2;
    int i{}, j{};
	
    public:
    ZigzagIterator(vector<int> & v1, vector<int> & v2) : v1(v1), v2(v2)
    {    
    }

    int next() 
    {
        return i==size(v1) or j<size(v2) and i+j&1 ? v2[j++] : v1[i++];
    }

    bool hasNext() 
    {
        return i+j<size(v1)+size(v2);        
    }
};
```