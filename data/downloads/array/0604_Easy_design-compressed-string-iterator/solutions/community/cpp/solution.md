# Letter-Counter pair data structure implementation

**Author:** JCodeFun
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solutions/5086867/](https://leetcode.com/problems/design-compressed-string-iterator/solutions/5086867/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n), O(1), O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
using namespace std;

class StringIterator {
private:
    string str;
    vector<int> count;
    int idx;

public:
    // O(n)
    StringIterator(const string &compressedString) : idx(0)
    {
        int i = 0;
        while(i < compressedString.size())
        {
            char letter = compressedString.at(i);
            string numStr;
            i ++;
            char dig = compressedString.at(i);
            while( isdigit(dig) )
            {
                numStr.append(1, dig);
                i ++;
                if(i < compressedString.size())
                    dig = compressedString.at(i);
                else
                    break;
            }
            
            int num = stoi(numStr);

            str.append(1, letter);
            count.push_back(num);
        }
    }
    
    // O(1)
    char next() {
        if(!hasNext())
            return ' ';

        char res = str.at(idx);
        count[idx] --;
        if(count[idx] < 1)
            idx ++;

        return res;
    }
    
    // O(1)
    bool hasNext() {
        return idx < str.size();
    }
};
```